---
sidebar_position: 4
---

# Cum contribui noi articole?

Cei care cunosc evenimente din istoria industriei de IT&C și doresc
să la împărtășeacă cu alții, o pot face relativ ușor, publicând
articole pe acest site.

## Articole vs. amintiri personale

Pentru articolele care urmeaza să facă parte din cronologia oficială,
este recomandat un **limbaj profesional**, clar și concis, cu repere în timp,
nume de persoane, referințe, și în general informații cu valoare științifică.

Pe lângă acestea, amintirile personale sunt de asemenea apreciate, ca
articole separate, care nu vor face parte directă din cronologie, dar vor
fi menționate ca referințe în cronologie.

Limbajul articolelor de amintiri este personal, la persoana întâia
sau în orice format dorește autorul.

## Articole simple vs. articole cu poze și alte documente atașate

Articolele obișnuite, ce conțin un text simplu,
se pot memora direct în fișiere, fiecare articol într-un fișier cu
extensia `.md` (markdown).

Dacă articolul este însoțit de
poze și/sau alte documente atașate, articolele vor fi memorate
în foldere separate, cu textul în fișierul `index.md` si pozele
într-un subfolder `img`.

## Convenția de nume pentru fișiere/foldere

Convenția de nume pentru articolele de blog este în general
un string care începe cu data cand articolul a fost scris si
este urmat de un nume scurt, posibil mai multe cuvinte separate de
linițe, de exemplu:

```
2023-11-02-cniv-2023 <-- folder
2023-11-01-free-unix-for-romania.md <-- fișier
```

## Preambului articolului

Deși nu există un standard foarte strict, majoritatea blog-urilor
folosesc un preambul ([frontmatter](frontmatter)) cu diverse
[metadate](metadate), reprezentate ca proprietăți în YML.

## Sumarul articolului

Din motive de comoditate în navigarea prin paginile cu liste de articole,
fiecare articol trebuie sa înceapă cu o frază care descrie pe scurt
despre ce este vorba in articol, similar cu secțiunea _Abstract_ din
articolele științifice.

Această secțiune este separată de corpul principal al articolului
printr-o linie cu un conținut specific:

```
<!-- truncate -->
```

## Referințe

Este recomandat ca fiecare articol să conțină referințe la alte pagini de web,
lucrări publicate, articole de legislație, și orice alte documente
externe acestui site.

## Exemplu

Un exemplu de articol scurt poate fi:

```md title="2023-11-01-free-unix-for-romania.md"
---
slug: free-unix-for-romania
title: 'Free Unix for Romania'
authors: ilg-ul
tags: [organizatii]
date: 2023-11-01T09:21

eventDate: '1992'
eventSummary: 'Marius Hâncu fondează Free Unix for Romania'

---

În 1992, Marius Hâncu fondează organizația internațională non-profit
**Free Unix for Romania**.

<!-- truncate -->

## Referințe

- [Prezentare Marius Hâncu](http://linux.punct.info/freeunix.html)
```

## Diacritice

Articolele trebuie scrise în limba română, cu diacritice.

## Transmiterea articolelor

Pentru cei obișnuiți cu GitHub, cea mai simpla soluție de
a contribui articole sau actualizări este cu un Pull Request.

Pentru cei care nu au experiență cu GitHub, metodele tradiționale de
transmiterea a fișierelor prin eMail se pot de asemenea folosi.

## GDPR

Suplimentar, cine dorește să publice articole, trebuie să furnizeze
și cateva informații de identificare, cum ar fi numele complet și,
opțional, adresa de email, adresă de web, fotografie, și să își asume răspunderea
pentru informațiile publicate.

In conformitate cu GDPR, este nevoie și de o declarație că este de
acord ca aceste date să fie utilizate pe site, în condițiile
în care Cronica IT&C se angajează să nu le folosească în alte scopuri;
în plus, acest acord poate fi retras ulterior.
