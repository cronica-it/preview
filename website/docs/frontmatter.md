---
sidebar_position: 3
---

# Front matter

Prin **front matter** se înțelege o listă de proprietăți asociate cu
un articol. Formatul este YML și secțiunea front matter este delimitată
de linii compuse dintr-un bloc de trei liniuțe (`---`).

Lista completă a proprietăților din front matter este in secțiunea
[Markdown front matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter).

Proprietățile utilizate în mod curent sunt listate mai jos.

## `slug`

Proprietatea `slug` definește în mod explicit un string unic ce va fi folosit
in URL-ul articolului.

De regula este anul urmat de o succesiune de cuvinte, fără diacritice,
separate prin liniuțe și/sau slash-uri.

Exemplu:

```yml
---
slug: 2023/de-ce-cronica-it
---
```

## `title`

Proprietatea `title` este un string cu o descriere sumară
(câteva zeci de caractere)
a evenimentului. Aceast string se va afișa cu un font mare deasupra articolului
și in tabela cu evenimente.

Se recomandă a fi o propoziție scurtă, cu subiect și predicat,
formulată impersonal,
sau personal dacă autorul este cunoscut.

Diferă de câmpul `title`, care este numele scurt al evenimentului.

Exemple:

```yaml
title: 'Are loc programul „Computere pentru licee"'
title: 'Alexandru Rotaru înființează „Grupul Utilizatorilor Români de Unix” (GURU)'
```

## `authors`

Proprietatea `authors` defineste autorul sau autorii articolului.

Pentru un sigur autor, formatul este:

```yml
---
authors:
  name: Joel Marcey
  title: Co-creator of Docusaurus 1
  url: https://github.com/JoelMarcey
  image_url: https://github.com/JoelMarcey.png
  email: jimarcey@gmail.com
---
```

Pentru mai mulți autori, formatul este de array:

```yml
---
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
    email: jimarcey@gmail.com
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
---
```

Este posibilă memorarea globală a datelor despre autori
(în fișierul `blog/authors.yml`), și menționarea numai unui ID.

Exemple:

```yml
---
authors: jmarcey
---

sau, pentru autori multipli:

```yml
authors: [jmarcey, slorber]
```

## `tags`

Proprietatea `tags` definește un array de cuvinte cheie asociate articolului,
folosite pentru grupare. Sunt cuvinte fără diacritice.

Exemplu:

```yml
---
tags: [asociatii]
---
```

Cuvintele folosite pentru grupare sunt:

- asociatii
- calculatoare
- comunicatii
- conferinte
- international
- internet
- organizatii
- website

Lista actuala se poate obține direct din site, intrarea **Categorii**.

## `date`

Proprietatea `date` definește data si ora (raportată la UTC) când a fost
publicat articolul pe blog.

Suffixul `Z` pentru UTC este adăugat automat de Docusaurus și nu trebuie
folosit.

Exemplu:

```yml
---
date: 2021-09-13T10:00
---
```
