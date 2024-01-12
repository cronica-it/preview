---
slug: 1960/maccarthy-limbajul-lisp
title: 'John McCarty publică un articol cu bazele teoretice ale limbajului de programare „Lisp”'
authors: [gserban, ilg-ul]
tags: [international, autor:gheorghe.serban]

date: 2023-12-26T16:27:32

event_date: '1960'

---

Continuând un proiect început în 1958, în aprilie 1960,
John McCarty publică în Communications of the ACM
articolul „Recursive Functions of Symbolic Expressions and Their
Computation by Machine, Part I”, pe baza căruia se va dezvolta
familia de limbaje de programare **Lisp**.

<!-- truncate -->

Numele Lisp derivă din „List Processor”. Listele sunt structurile majore
de date ale limbajului Lisp, iar codul sursă Lisp este format din liste.
Astfel, programele Lisp pot manipula codul sursă ca structură de date,
dând naștere sistemelor macro care permit programatorilor să creeze
noi sintaxă sau noi limbaje specifice domeniului încorporate în Lisp.

Primul interpretor Lisp a fost implementat de Steve Russell pe un
calculator IBM 704 folosind cartele perforate. Russell citise
lucrarea lui McCarthy și și-a dat seama (spre surprinderea lui McCarthy)
că funcția `eval` poate fi implementată în codul mașinii.

Primul compilator Lisp complet, scris în Lisp, a fost implementat
în 1962 de către Tim Hart și Mike Levin la MIT și putea fi executat
direct de un interpretor Lisp existent, care interpreta
codul compilatorului, producând la ieșire codului mașină care
putea fi apoi executat.

În anii 1980 și 1990 s-a depus un mare efort pentru unificarea
diferitelor dialecte Lisp.

În 1994, ANSI a publicat standardul **Common Lisp**,
„ANSI X3.226-1994 Information Technology Programming Language Common Lisp”

## Referințe

- [rite.org.ro - Istoria Internetului](https://rite.org.ro/istoria-internetului/)
- [en.wikipedia.org - Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language))
