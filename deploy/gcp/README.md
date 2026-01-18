# GCP deploy (Cloud Build + Cloud Run)

This repo is set up to deploy a containerized Next.js app to Cloud Run using Cloud Build.

## Prereqs

- `gcloud` installed and authenticated (`gcloud auth login`)
- A GCP project with billing enabled

## 1) One-time setup (APIs, Artifact Registry, IAM)

```bash
export PROJECT_ID="YOUR_GCP_PROJECT_ID"
export REGION="us-central1"
export AR_REPO="navivision"

bash deploy/gcp/setup.sh
```

## 2) Create 2nd gen repo connection + trigger (GitHub)

This uses Cloud Build "2nd gen" connections (Cloud Build v2). The `gcloud` command will prompt you to authorize/install the GitHub app.

```bash
export PROJECT_ID="YOUR_GCP_PROJECT_ID"
export REGION="us-central1"
export AR_REPO="navivision"
export SERVICE_NAME="navivision-website"

export CONNECTION_NAME="navivision-website-conn"
export REPO_OWNER="YOUR_GITHUB_ORG_OR_USER"
export REPO_NAME="navivision-website"
export TRIGGER_NAME="navivision-website-main"

bash deploy/gcp/create-connection-and-trigger.sh
```

## 3) Deploy

- Once the trigger exists: push to `main` to trigger a build + deploy, or run the trigger manually in Cloud Build.
- One-off deploy (no trigger needed):

```bash
gcloud builds submit --config cloudbuild.yaml \
  --substitutions=_REGION="${REGION}",_AR_REPO="${AR_REPO}",_SERVICE="${SERVICE_NAME}" .

gcloud run services describe "${SERVICE_NAME}" --region "${REGION}" --format="value(status.url)"
```

- The build uses `cloudbuild.yaml` at the repo root.
