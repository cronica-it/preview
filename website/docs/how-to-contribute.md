---
sidebar_position: 4
---

# Cum contribui noi articole?

Cei care cunosc evenimente din istoria industriei de IT&C și doresc
să la împărtășeacă cu alții, o pot face relativ ușor, publicând
articole pe acest site.

## Evenimente vs. articole de blog

Sursa datelor listate în cronologie este în secțiunea **Evenimente**.

Pentru articolele de tip eveniment
este recomandat un **limbaj profesional**, clar și concis, cu repere în timp,
nume de persoane, referințe, și în general informații cu valoare științifică.
Ca un punct de reper, aceste articole trebuie să îndeplinească și
condițiile de publicare pe Wikipedia.

Pe lângă acestea, amintirile personale sunt de asemenea apreciate, ca
articole de blog, care nu vor face parte directă din cronologie, dar vor
fi menționate ca referințe în cronologie.

Limbajul articolelor de blog este personal, la persoana întâia
sau în orice format dorește autorul.

## Articole cu poze și alte documente atașate

Articolele sunt memorate ca sub-foldere, în care conținutul
este într-un fișier cu nume fix, `index.md`.

Dacă articolul este însoțit de
poze și/sau alte documente atașate, acestea vor fi memorate
în foldere separate, de exemplu pozele pot sta
într-un sub-folder `img`.

Deși Docusaurus permite și memorarea articolelor simple în direct
în fișiere cu terminația `.md`, din motive de consistență, toate
articolele vor fi memorate în sub-foldere.

## Convenția de nume pentru foldere

Convenția de nume pentru evenimente și articolele de blog este în general
un string care începe cu anul si
este urmat de un nume scurt, posibil mai multe cuvinte separate de
linițe, de exemplu:

```
2023-cniv
2023-free-unix-for-romania
```

## Preambului articolului

Deși nu există un standard foarte strict, majoritatea blog-urilor
folosesc un preambul ([frontmatter](/docs/frontmatter)) cu diverse
[metadate](/docs/metadate), reprezentate ca proprietăți în YML.

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

În cazul URL-urilor, textul este bine să conțină numele site-ului și
numele articolului, de exmplu:

```
## Referințe

- [retroit.ro - Microcalculatorul L/B 881](https://retroit.ro/l-b-881/)
- [ilgthegeek.wordpress.com - History: Lixco L/B881, the first Romanian commercial microcomputer](https://ilgthegeek.wordpress.com/2010/11/14/history-lixco-lb881/)
- [tehnium-azi.ro - Computer LB881 - publicat in Tehnium](https://www.tehnium-azi.ro/forums/topic/7187-computer-lb881-publicat-in-tehnium/)
```

## Exemplu

Un exemplu de articol scurt, dar cu multe referințe, poate fi:

```md title="1992-free-unix-for-romania/index.md"
---
slug: 1992/free-unix-for-romania
title: 'Free Unix for Romania'
authors: ilg-ul
tags: [organizatii]
date: 2023-11-01T09:21

eventDate: '1992'
eventEndDate: '1995'
eventSummary: 'Marius Hâncu coordonează programul "Free Unix for Romania"'

---

În toamna lui 1992, Marius Hâncu fondează organizația internațională non-profit
**Free Unix for Romania**.

<!-- truncate -->

In septembrie 1994, conducerea organizației este preluată de Ted Lungu.

Ultimul raport cunoscut este din 1995.

## Referințe

- [Prezentare lui Marius Hâncu la ROSE'93](/blog/2023/hancu-mesaj-free-unix-rose93/)
- [Raportul lui Marius Hâncu din 1993 despre punctele de distribuție](/blog/2023/hancu-distribution-centers/)
- [Raportul lui Marius Hâncu din 1993 despre grantul Soros](/blog/2023/hancu-soros-grant/)
- [Mesajul lui Marius Hâncu despre Free Unix for Romania la ROSE'94](/blog/2023/hancu-mesaj-free-unix-rose94/)
- [Mesajul lui Marius Hâncu despre ROSE'95](/blog/2023/hancu-mesaj-jsq-rose95/)
- [Interviul acordat de Marius Hâncu revistei OPEN în 1994](/blog/2023/hancu-interviu-revista-open/)
- [Raportul lui Marius Hâncu din 1994 despre cărțile trimise în România și Moldova](/blog/2023/hancu-soros-books/)
- [Mesajul din 1994 în care Marius Hâncu îl introduce pe Ted Lungu](/blog/2023/hancu-mesaj-ted-lungu/)
- [Raportul lui Marius Hâncu din 1995 despre donațiile pentru Free Unix for Romania](/blog/2023/hancu-donation-drive)
- [comunic.ro - Marius Hâncu @ GALA 30 de ani de Internet](https://comunic.ro/marius-hancu-gala-30-de-ani-de-internet-ro-free-unix-for-romania-movement-managed-to-associate-people-of-great-talents-who-forgot-their-personal-interest-in-the-interest-of-a-modern-romania-i/)
```

## Diacritice

De preferință, articolele trebuie scrise în limba română, cu diacritice.

În cazul în care textul primit nu are diacritice, și autorul nu îl poate
corecta, articolul va fi editat înainte de publicare și
cel puțin titlurile și prima frază vor conține diacriticele corecte.

## Transmiterea articolelor

Pentru cei obișnuiți cu GitHub, cea mai simpla soluție de
a contribui articole sau actualizări este cu un **Pull Request**.

Pentru cei care nu au experiență cu GitHub, metodele tradiționale de
transmiterea a fișierelor prin eMail pot fi de asemenea folosite.

## GDPR

Suplimentar, cine dorește să publice articole, trebuie să furnizeze
și cateva informații de identificare, cum ar fi numele complet și,
opțional, adresa de email, adresă de web, fotografie, și să își asume răspunderea
pentru informațiile publicate.

In conformitate cu GDPR, este nevoie și de o declarație că este de
acord ca aceste date să fie utilizate pe site, în condițiile
în care Cronica IT&C se angajează să nu le folosească în alte scopuri;
în plus, acest acord poate fi retras ulterior.
