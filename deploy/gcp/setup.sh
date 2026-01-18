#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${PROJECT_ID:-}" ]]; then
  echo "Missing env var: PROJECT_ID" >&2
  exit 1
fi

REGION="${REGION:-us-central1}"
AR_REPO="${AR_REPO:-navivision}"

gcloud config set project "${PROJECT_ID}" >/dev/null

echo "Enabling required APIs..."
gcloud services enable \
  cloudbuild.googleapis.com \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  iam.googleapis.com \
  cloudresourcemanager.googleapis.com

PROJECT_NUMBER="$(gcloud projects describe "${PROJECT_ID}" --format="value(projectNumber)")"
CLOUDBUILD_SA="${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com"
RUNTIME_SA="${PROJECT_NUMBER}-compute@developer.gserviceaccount.com"
SOURCE_BUCKET="gs://${PROJECT_ID}_cloudbuild"

echo "Ensuring Artifact Registry repo exists: ${AR_REPO} (${REGION})"
if ! gcloud artifacts repositories describe "${AR_REPO}" --location="${REGION}" >/dev/null 2>&1; then
  gcloud artifacts repositories create "${AR_REPO}" \
    --repository-format=docker \
    --location="${REGION}" \
    --description="Docker images for NaviVision"
fi

echo "Granting permissions to Cloud Build SA: ${CLOUDBUILD_SA}"
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${CLOUDBUILD_SA}" \
  --role="roles/artifactregistry.writer" >/dev/null
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${CLOUDBUILD_SA}" \
  --role="roles/run.admin" >/dev/null
gcloud iam service-accounts add-iam-policy-binding "${RUNTIME_SA}" \
  --member="serviceAccount:${CLOUDBUILD_SA}" \
  --role="roles/iam.serviceAccountUser" >/dev/null

echo "Granting permissions to default Compute SA (often used by builds): ${RUNTIME_SA}"
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${RUNTIME_SA}" \
  --role="roles/artifactregistry.writer" >/dev/null
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${RUNTIME_SA}" \
  --role="roles/run.admin" >/dev/null
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${RUNTIME_SA}" \
  --role="roles/logging.logWriter" >/dev/null
gcloud iam service-accounts add-iam-policy-binding "${RUNTIME_SA}" \
  --member="serviceAccount:${RUNTIME_SA}" \
  --role="roles/iam.serviceAccountUser" >/dev/null

echo "Ensuring build source bucket access for ${RUNTIME_SA}: ${SOURCE_BUCKET}"
if gsutil ls "${SOURCE_BUCKET}" >/dev/null 2>&1; then
  gsutil iam ch "serviceAccount:${RUNTIME_SA}:roles/storage.objectViewer" "${SOURCE_BUCKET}" >/dev/null || true
else
  echo "Warning: build source bucket not found (${SOURCE_BUCKET}); skipping bucket IAM." >&2
fi

echo "Done."
