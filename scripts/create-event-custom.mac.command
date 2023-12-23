#!/usr/bin/env bash

# -----------------------------------------------------------------------------
# Safety settings (see https://gist.github.com/ilg-ul/383869cbb01f61a51c4d).

if [[ ! -z ${DEBUG} ]]
then
  set -x # Activate the expand mode if DEBUG is anything but empty.
fi

set -o errexit # Exit if command failed.
set -o pipefail # Exit if pipe failed.
set -o nounset # Exit if variable not set.

# Remove the initial space and instead use '\n'.
IFS=$'\n\t'

# -----------------------------------------------------------------------------

# This macOS Finder command calls the peer name.sh script from the same folder.

script_path="$0"
if [[ "${script_path}" != /* ]]
then
  # Make relative path absolute.
  script_path="$(pwd)/$0"
fi

script_folder="$(dirname ${script_path})"
# echo $script_folder

script_name="$(basename $0)"
# echo "${script_name}"

script_base="create-event" # $(echo "${script_name}" | sed -e 's/\(.*\)[.]mac[.]command/\1/')
# echo "${script_base}"

# export CRONICA_IT_AUTHORS="arot"
# export CRONICA_IT_AUTHORS="radujugu"
# export CRONICA_IT_AUTHORS="ntapus, ilg-ul"
export CRONICA_IT_AUTHORS="gserban, ilg-ul"

# export CRONICA_IT_TAGS="autor:alexandru.rotaru"
# export CRONICA_IT_TAGS="autor:radu.jugureanu"
# export CRONICA_IT_TAGS="internet, educatie, autor:nicolae.tapus"
export CRONICA_IT_TAGS="international, autor:gheorghe.serban"
# export CRONICA_IT_TAGS="autor:gheorghe.serban"

# export CRONICA_IT_LINKS="- [hotnews.ro - Istoria internet-ului in Romania](https://economie.hotnews.ro/stiri-20_ani_internet-15969144-istoria-internetului-romania-alexandru-rotaru-nu-pot-spun-inventat-noi-ceva-plus-aici-romania-doar-majoritatea-noutatilor-adoptat-printre-primii.htm)"
# export CRONICA_IT_LINKS="- [academia.edu - Istoria informatizării în mediul preuniversitar românesc 1985-2018](https://www.academia.edu/43375781/Istoria_informatizării_în_mediul_preuniversitar_românesc_1985_2018)"
# export CRONICA_IT_LINKS="- [cniv.ro - Nicolae Tăpuș - Rolul Universității Politehnica din București la Dezvoltarea Internet-ului în România](https://cniv.ro/documents/26/CNIV_Volum_Aniversar_2023_-_Versiune_Online_DPxioQg.pdf)"
# export CRONICA_IT_LINKS="- [internetsociety.org - A Brief History of the Internet](https://www.internetsociety.org/internet/history-internet/brief-history-internet/)"
export CRONICA_IT_LINKS="- [rite.org.ro - Istoria Internet-ului](https://rite.org.ro/istoria-internetului/)"

bash "${script_folder}/${script_base}.sh"
