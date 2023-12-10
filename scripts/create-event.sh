#!/usr/bin/env bash

# -----------------------------------------------------------------------------
# Safety settings (see https://gist.github.com/ilg-ul/383869cbb01f61a51c4d).

if [[ ! -z ${DEBUG} ]]
then
  set ${DEBUG} # Activate the expand mode if DEBUG is anything but empty.
else
  DEBUG=""
fi

set -o errexit # Exit if command failed.
set -o pipefail # Exit if pipe failed.
set -o nounset # Exit if variable not set.

# Remove the initial space and instead use '\n'.
IFS=$'\n\t'

# -----------------------------------------------------------------------------
# Identify the script location, to reach, for example, the helper scripts.

script_path="$0"
if [[ "${script_path}" != /* ]]
then
  # Make relative path absolute.
  script_path="$(pwd)/$0"
fi

script_name="$(basename "${script_path}")"

script_folder_path="$(dirname "${script_path}")"
script_folder_name="$(basename "${script_folder_path}")"

# =============================================================================

authors="${CRONICA_IT_AUTHORS:-"ilg-ul"}"
tags="${CRONICA_IT_TAGS:-""}"
links="${CRONICA_IT_LINKS:-"- TODO"}"

events_folder_path="$(dirname "${script_folder_path}")/website/events"

# -----------------------------------------------------------------------------

echo -n "Event date (YYYY[-MM[-DD]]): "
read event_date

echo -n "Event end date (YYYY[-MM[-DD]]): "
read event_end_date

# echo ${event_date}
# echo ${event_end_date}

event_year=$(echo ${event_date} | sed -e 's|[^:[:digit:]].*||')
# echo $event_year

echo -n "slug: "
read slug

event_folder_name="${event_year}-${slug}"

if [ -d "${events_folder_path}/${event_folder_name}" ]
then
  echo "folder ${events_folder_path}/${event_folder_name} already in use"
  exit 1
fi

if [ -f "${events_folder_path}/${event_folder_name}.md" ]
then
  echo "file ${events_folder_path}/${event_folder_name}.md already in use"
  exit 1
fi

date="$(date -u '+%Y-%m-%dT%H:%M:%S')"

tmp_file_path="$(dirname "${script_folder_path}")/${event_folder_name}.md.tmp"

touch "${tmp_file_path}"

echo "---" >>"${tmp_file_path}"
echo "slug: ${event_year}/${slug}" >>"${tmp_file_path}"
echo "title: 'TODO'" >>"${tmp_file_path}"
echo "authors: [${authors}]" >>"${tmp_file_path}"
echo "tags: [${tags}]" >>"${tmp_file_path}"
echo >>"${tmp_file_path}"
echo "eventDate: '${event_date}'" >>"${tmp_file_path}"
if [ -n "${event_end_date}" ]
then
  echo "eventEndDate: '${event_end_date}'" >>"${tmp_file_path}"
fi
echo "eventSummary: 'TODO'" >>"${tmp_file_path}"
echo >>"${tmp_file_path}"
echo "---" >>"${tmp_file_path}"
echo >>"${tmp_file_path}"
echo "TODO" >>"${tmp_file_path}"
echo >>"${tmp_file_path}"
echo "<!-- truncate -->" >>"${tmp_file_path}"
echo >>"${tmp_file_path}"
echo "TODO" >>"${tmp_file_path}"
echo >>"${tmp_file_path}"
echo "## Referințe" >>"${tmp_file_path}"
echo >>"${tmp_file_path}"

echo "${links}" >>"${tmp_file_path}"

index_file_path="${events_folder_path}/${event_folder_name}/index.md"

mkdir -p "${events_folder_path}/${event_folder_name}"
mv "${tmp_file_path}" "${index_file_path}"

echo "Event ${event_year}-${slug} created"

# -----------------------------------------------------------------------------

