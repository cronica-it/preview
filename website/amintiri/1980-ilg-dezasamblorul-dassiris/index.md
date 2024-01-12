---
slug: 1980/ilg-dezasamblorul-dassiris
title: 'Programul „DASSIRIS”'
authors: [ilg-ul]
tags: []

date: 2024-01-09T18:30:30

event_date: '1980-03'

---

În luna martie 1980 este funcțional programul **DASSIRIS**, un dezasamblor
pentru sistemul de operare SIRIS 3, realizat ca
proiect de diplomă la liceul de informatică din București.

<!-- truncate -->

---

În anii '76-'80, elev fiind la Liceul de Matematică - Fizică nr. 1
cu profil de informatică, am avut ocazia să studiez destul de aprofundat
sistemul de operare SIRIS, care rula pe calculatoarele Felix C-256,
acele mașinării care impresionau prin complexitatea și dimensiunile lor,
și la care puțini aveau acces.

Și cum pe vremea aceea accesul la documentație era o mare provocare,
ca să nu mai vorbim de imposibilitatea de a obține accesul la sursele
programelor de sistem, care erau un
secret bine păstrat, ultima soluție pentru cineva care chiar
dorea să înțeleagă cum merg lucrurile, era dezasamblarea programelor
existente.

Probabil că dezasambloare au existat mai multe la vremea aceea, dar ce îl face
pe DASSIRIS special este faptul ca prelucra atât executabile cât și
biblioteci, și producea fișiere sursă care compilate
direct, fără nicio modificare, conduceau la executabile sau module
de bibliotecă identice cu cele inițiale,
ceea ce permitea modificarea relativ comodă a unor componente de sistem.

Din punct de vedere tehnic, programul era scris în ASSIRIS, ocupa
mai mult de 8.000 de cartele și era structurat în 21 de segmente
reacoperibile, încât memoria ocupată era de numai 36 KB.

Dezvoltarea a necesitat 80 de rulări (cca 30 de ore de rulare) și a
avut loc în intervalul ianuarie 1979 - martie 1980 (15 luni), adica
în clasa a XI-a și a XII-a, inițial la Centrul de Calcul ICECHIM, iar
clasa a XII-a la ICI.

Sursele erau memorate pe benzi magnetice, și fiecare rulare
folosea 2 benzi, una sursă și una destinație, și un teanc mic de
cu modificările.

După ce programul a fost funcțional, a fost folosit pentru
dezasamblarea celor mai multe dintre componentele sistemului
de operare SIRIS, rezultând un teanc de listinguri care ajungea
până la tavan (cca 2.5m).

Din păcate sursele programului nu s-au păstrat, nici listingurile
cu programele dezasamblate.

Singurul document păstrat este
un draft al lucrării de diplomă care descrie programul,
disponibil în arhivă.

## Referințe

- [DASSIRIS - Program dezasamblor pentru sistemul de operare Siris 3 (scan)](https://cronica-it.github.io/arhiva/#1980)
