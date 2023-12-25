---
slug: 1945/von-neumann-architecture
title: 'John von Neumann descrie un computer cu program memorat'
authors: [gserban, ilg-ul]
tags: [international, autor:gheorghe.serban]
date: 2023-12-24T17:10:38

eventDate: '1945-06-30'

---

În 30 iunie 1945, John von Neumann scrie „First Draft of a Report
on the EDVAC” care conține prima descriere publicată a designului logic
al unui calculator folosind conceptul de program memorat, ulterior
cunoscut sub numele de **arhitectura von Neumann**.

<!-- truncate -->

Von Neumann descrie un design detaliat al unui „sistem de calcul
digital automat de foarte mare viteză”. El o împarte în șase
subdiviziuni majore:

- o parte centrală aritmetică, CA;
- o parte centrală de control, CC;
- memorie, M;
- intrare, eu;
- ieșire, O; și
- memorie externă (lentă), R, cum ar fi carduri perforate, bandă Teletype etc

Numerele erau reprezentate în notație binară. El estima că 27 de cifre
binare (nu a folosit termenul „bit”, care a fost inventat de Claude
Shannon în 1948) ar fi suficiente (având o precizie de 8 zecimale),
dar rotunjește până la numere de 30 de biți cu un bit semn și un bit
special, pentru a distinge datele de instrucțiuni,
rezultând un cuvânt de 32 de biți.

Calculele folosesc aritmetica complementului față de doi, simplificând scăderea.
Pentru înmulțire și împărțire, el propune plasarea punctului binar după
bitul de semn, ceea ce înseamnă că toate numerele sunt tratate ca fiind
între -1 și +1 și, prin urmare, problemele de calcul trebuie scalate în
consecință.

Un concept cheie de design enunțat și numit mai târziu „arhitectura
Von Neumann” este o memorie uniformă care conține atât numere (date)
cât și ordine (instrucțiuni).

## Referințe

- [rite.org.ro - Istoria Internetului](https://rite.org.ro/istoria-internetului/)
- [en.wikipedia.org - Von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture)
