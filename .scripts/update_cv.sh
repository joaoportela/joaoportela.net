#! /bin/bash

set -eu

FILE_TO_UPDATE="public/cv_joao_portela.pdf"
GDRIVE_OUT_FILE="gdrive_cv_joao_portela.pdf"

# wget ${CV_DROPBOX_DOWNLOAD_URL} -O "dropbox_cv_joao_portela.pdf"

wget ${CV_GDRIVE_DOWNLOAD_URL} -O "${GDRIVE_OUT_FILE}"

# check if file is valid
file "${GDRIVE_OUT_FILE}" | grep PDF || (echo "Invalid file type: '$(file "${GDRIVE_OUT_FILE}")'" && exit 1)

mv "${GDRIVE_OUT_FILE}" "${FILE_TO_UPDATE}"

set -x
git status
