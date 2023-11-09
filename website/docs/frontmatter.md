---
sidebar_position: 3
---

# Front matter

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
slug: 2023/de-ce-cronica-it
```

## `title`

Proprietatea `title` este un string care definește titlul articolului;
se va afișa cu un font mare deasupra articolului.

## `authors`

Proprietatea `authors` defineste autorul sau autorii articolului.

Pentru un sigur autor, formatul este:

```yml
authors:
  name: Joel Marcey
  title: Co-creator of Docusaurus 1
  url: https://github.com/JoelMarcey
  image_url: https://github.com/JoelMarcey.png
  email: jimarcey@gmail.com
```

Pentru mai mulți autori, formatul este de array:

```yml
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
```

Este posibilă memorarea globală a datelor despre autori
(în fișierul `blog/authors.yml`), și menționarea numai unui ID.

Exemple:

```yml
authors: jmarcey
authors: [jmarcey, slorber]
```

## `tags`

Proprietatea `tags` definește un array de cuvinte cheie asociate articolului,
folosite pentru grupare. Sunt cuvinte fără diacritice.

Exemplu:

```yml
tags: [asociatii]
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

Lista actuala se poate obține direct din site, intrarea **Tags**.

## `date`

Proprietatea `date` definește data si ora (raportată la UTC) când a fost
publicat articolul pe blog.

Exemplu:

```yml
date: 2021-09-13T10:00
```
