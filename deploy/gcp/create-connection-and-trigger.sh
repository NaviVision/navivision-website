#!/usr/bin/env bash
set -euo pipefail

required_vars=(PROJECT_ID REGION CONNECTION_NAME REPO_OWNER REPO_NAME TRIGGER_NAME SERVICE_NAME AR_REPO)
for v in "${required_vars[@]}"; do
  if [[ -z "${!v:-}" ]]; then
    echo "Missing env var: ${v}" >&2
    exit 1
  fi
done

gcloud config set project "${PROJECT_ID}" >/dev/null

echo "Creating (or reusing) 2nd gen GitHub connection: ${CONNECTION_NAME}"
if ! gcloud builds connections describe "${CONNECTION_NAME}" --region="${REGION}" >/dev/null 2>&1; then
  gcloud builds connections create github "${CONNECTION_NAME}" --region="${REGION}"
fi

STAGE="$(gcloud builds connections describe "${CONNECTION_NAME}" --region="${REGION}" --format="value(installationState.stage)" 2>/dev/null || true)"
if [[ "${STAGE}" != "COMPLETE" ]]; then
  ACTION_URI="$(gcloud builds connections describe "${CONNECTION_NAME}" --region="${REGION}" --format="value(installationState.actionUri)" 2>/dev/null || true)"
  echo "Connection installation state is ${STAGE}."
  if [[ -n "${ACTION_URI}" ]]; then
    echo "Complete GitHub authorization / app installation here, then re-run this script:"
    echo "${ACTION_URI}"
  fi
  exit 2
fi

REMOTE_URI="https://github.com/${REPO_OWNER}/${REPO_NAME}.git"
echo "Creating (or reusing) repository mapping for: ${REMOTE_URI}"
if ! gcloud builds repositories describe "${REPO_NAME}" --connection="${CONNECTION_NAME}" --region="${REGION}" >/dev/null 2>&1; then
  gcloud builds repositories create "${REPO_NAME}" \
    --remote-uri="${REMOTE_URI}" \
    --connection="${CONNECTION_NAME}" \
    --region="${REGION}"
fi

echo "Creating build trigger: ${TRIGGER_NAME}"
if ! gcloud builds triggers describe "${TRIGGER_NAME}" --region="${REGION}" >/dev/null 2>&1; then
  gcloud alpha builds triggers create github \
    --name="${TRIGGER_NAME}" \
    --region="${REGION}" \
    --description="Deploy ${SERVICE_NAME} to Cloud Run on main" \
    --repository="projects/${PROJECT_ID}/locations/${REGION}/connections/${CONNECTION_NAME}/repositories/${REPO_NAME}" \
    --branch-pattern="^main$" \
    --build-config="cloudbuild.yaml" \
    --substitutions="_REGION=${REGION},_AR_REPO=${AR_REPO},_SERVICE=${SERVICE_NAME}"
fi

echo "Done. Push to main to deploy, or run the trigger manually in Cloud Build."
