---
slug: 2023/eunet-un-an
title: 'EUnet Romania – un an de activitate'
authors: [ilg-ul]
tags: [internet, firme]
date: 2023-12-14T07:13:29

---

În numărul din 24 Noiembrie 1994 al revistei Comunicații PC a fost publicat
un interviu cu ocazia aniversării unui an de activitate a firmei EUnet Romania.

<!-- truncate -->

[rep] Deci, ca să fim riguroși, cine este EUnet Romania?

[ilg] EUnet Romania este primul Internet sevice provider comercial de la noi din țară. Are ca principal obiect de activitate să ofere conectivitate Internet pentru întreaga paletă de servicii TCP/IP și UUCP.

[rep] Pentru că de curînd ați împlinit un an de existență, poate că ar fi util dacă ne-ați spune cum a început totul?

[ilg] Povestea este destul de lungă, și, fără a pretinde că EUnet-ul a introdus E-mail-ul în România încă de pe vremea lui Burebista (!), putem încerca să parcurgem în cîteva cuvinte etapele mai semnificative ale interesantei experiențe care a fost încă de la început EUnet Romania. Deci: Sîntem în 1992, ne numim Adcon Telemetry, avem o rețea de sisteme UNIX (NeXTStep), un modem și o linie telefonică nici-măcar-internațională, și o mare nevoie de comunicații cu firma mamă din Viena, atît la nivel de mesaje cît mai ales pentru schimb de fișiere. Administrînd totul din București, reușim în scurt timp să punem la punct o legătură UUCP. Computerul din Viena sună în fiecare noapte la București (invers încă nu se putea decît prin operatoare!) pentru a face schimbul de fișiere. Firma din Viena se abonează la EUnet Austria, primind adresa adcon.co.at, pe care noi rapid o extindem cu subdomeniul buc și astfel obținem prima legătură Internet stabilă pe adresa buc.adcon.co.at (cam în același timp la Politehnica din București au început, în condiții cel puțin la fel de „eroice”, primele legături de E-mail cu Universitatea din Darmstadt).

La începutul lui '93, după mutarea în sediul din Bd. Unirii, se înregistrează prima „victorie” în meciul cu RomTelecom-ul, care ne instalează trei linii telefonice internaționale. Două dintre ele vor fi folosite pentru modemuri și devine astfel posibilă inițierea comunicației cu Viena din ambele sensuri. În martie '93, după instalarea (întîi la Viena) a Domain Name Server-ului pentru domeniul .ro ne este înregistrată adresa eunet.ro și se trece la comunicația directă cu EUnet Viena. În urma participării la un EUnet Technical Meeting, la Bratislava, sîntem recunoscuți ca „EUnet cooperative site”. Legătura devine stabilă, comunicația se inițiază periodic și automat la cîteva ore. Căutînd de mult timp o soluție pentru E-mail (și neacceptînd să dea cîteva zeci de mii de dolari pe un sistem Digital cu care să se conecteze la ICI!), Fundația Soros se conectează la noi, primind adresa buc.soros.ro. Urmează apoi și alte conexiuni (guru.ro, iiruc.ro, etc) și în general un interes deosebit pentru serviciile de E-mail și Intenet. În vara lui '93 se ia decizia înființării unei firme noi, care se va numi chiar EUnet Romania. După citeva săptămîni, în baza autorizației obținută de la Ministerului Comunicațiilor, firma EUnet devine operator de comunicații pentru servicii de E-mail oficial recunoscut. Spre sfîrșitul lui '93, după numeroase tergiversări, RomTelecom-ul finalizeză instalarea a 8 noi linii telefonice. Se instalează un nou server UNIX, dedicat serviciilor de E-mail și asigurat cu un UPS de capacitate mare. În perioada următoare, după completarea a numeroase formulare de angajament că nu va fi folosit în scopuri militare (!) se obține licența pentru importarea primului router CISCO în România. Odată cu instalarea sa și conectarea noilor linii telefonice, calitatea și disponibilitatea serviciilor EUnet a crescut semnificativ. Practic nu există momente în care toate modem-urile să fie ocupate. Apelurile către Viena au devenit tot mai dese, un mesaj primit de la clienti fiind transmis în Internet în medie în 30 de minute. Datorită numărului mare de linii telefonice, practic nu s-au în-registrat întreruperi ale serviciului, EUnet Mail fiind considerat de mulți ca „cel mai fiabil serviciu de E-mail din România”.

[rep] Asta în ceea ce privește serviciile de UUCP. Ce ne puteți spune despre legătura de TCP/IP?

[ilg] După obținerea unei configurații stabile pentru servicii de E-mail s-a trecut la extinderea dotării pentru a putea crește calitatea serviciilor și a putea oferi și access direct în Internet. Soluția adoptată, fundamentată economic, a fost instalarea unei legături pe X.25 cu EUnet France. Operațională din iulie '94, această legătură a permis trecerea de la serviciile de UUCP la cervicii complete de TCP/IP. Înregistrate în bazele de date de la RIPE și apoi în routerele din întreaga lume, adresele din rețeaua EUnet Romania au devenit vizibile pentru trafic de TCP/IP în orice punct din lume. Au fost instalate tabele speciale în Domain Name Server (DNS) pentru domeniile eunet.ro și Romania.EU.net, și pentru toate domeniile clienților EUnet, permițînd astfel un control foarte exact al adreselor de E-mail recunoscute internațional și respingerea chiar de la sender a mesajelor cu adrese incorecte.

[rep] Deci să înțeleg că deja computerele de la EUnet fac parte din marea familie de cîteva milioane de host-uri Internet?

[ilg] Evident! Ne putem conecta la orice resursa din Internet, pentru orice serviciu, de la E-mail pina la sincronizarea ceasului după ceasuri atomice. In legatura cu traficul de E-mail, trecîndu-l de pe UUCP pe SMTP (TCP/IP), timpul mediu necesar transmiterii unui mesaj în Internet s-a redus de la 30 minute la cîteva secunde. Practic, un mesaj odată sosit la EUnet este imediat transmis prin SMTP direct calculatorului destinație. Asemănător, o adresă eronată este detectată imediat, ca urmare a răspunsului negativ obținut de la DNS. Un proces asemănător se întîmplă și la recepționarea mesajelor. Cînd cineva din Internet trimite un mesaj unui client EUnet, calculatorul său ia legătura pe SMTP cu serverul de aici, mesajul fiind gata de a fi preluat de către client în cîteva secunde. De reținut că programele de comunicație au fost configurate astfel încît să facă automat back-up prin UUCP în cazul în care legătura de TCP/IP este temporar întreruptă. Astfel, dacă un mesaj primit nu poate fi imediat transmis și cauza este locală, atunci, după cîteva minute în care se așteaptă restabilirea legăturii, mesajul este pus într-o coadă de UUCP și transmis către Viena. Asemănător și la recepție, cînd cineva dorește să trimită un mesaj unui abonat EUnet, calculatorul său va încerca pentru o vreme o legătură directă. Dacă aceasta nu este posibilă, mesajul va fi trimis la Viena, urmînd a fi preluat de acolo pe UUCP. Mecanismul acesta de server local și access pe TCP/IP dublat cu UUCP face ca fiabilitatea generală a serviciului de E-mail să fie maximă. De notat că nici un alt nod de E-mail din țară nu mai folosește un asemenea mecanism (nici cele academice, ca PUB, ICI, nici comerciale, ca Sprint, unde server-ul de E-mail este în Virginia, întreruperea legăturii externe însemnînd practic întreruperea accesului la serviciile de E-mail).

[rep] Intr-adevăr, revista noastră, avînd conturi pe mai toate rețelele din țară și putînd să compare calitatea serviciilor, s-a oprit tot la EUnet… Cum reușiți asta? Ce dotare aveți?

[ilg] Nu e numai problemă de dotare, ci și de organizare și de tehnologie. Ca dotare ne-am orientat numai la echipamente și software de „top”. Fără a intra în prea multe detalii, putem enumera echipamentele folosite în prezent:

- 3 sisteme UNIX, model NeXTStation, rulînd sistemul de operare NeXTStep v3.2, cel mai avansat UNIX existent (Main Server cu 1GB HDD, File Server cu 1GB HDD și un Back-up Server);CD player, streamer, UPS, imprimantă NeXT
- 1 router CISCO 516-CS cu 16 linii seriale + 1 Ethernet;
- 2 modem-uri Telebit WorldBlazer (pentru legătura externă);
- 6 modem-uri Hayes Smartmodem Optima 14.400;
- 1 router soft pentru X.25 (un sistem UNIX dedicat cu o placă sincronă Eicon ce rulează programele netX.25 și netGW);
- 1 router soft pentru Ethernet (ka9q) ce realizează legătura cu rețeaua internă;
- 1 server Microsoft Mail (postoffice și SMTP gateway);
- 1 server Windows NT (File Server, 1GB HDD); CD player NEC 3x, steamer, imprimanta HP PostScript, UPS – numeroase PC-uri pe post de client la serverele Microsoft și UNIX;
- o bibliotecă întreagă de manuale Microsoft, CD-uri cu ultimele versiuni ale programelor, evident toate cu licentă;
- nici un server Novell (!).

[rep] Să înțeleg de aici că sînteți fani Microsoft?

[ilg] Este exagerat spus fani, pentru ca back-bone-ul rulează UNIX, și nu cred să schimbăm ceva foarte curînd, dar asta nu înseamnă că nu ne preocupă ce soluții putem oferi utilizatorilor obișnuiți, care nu au decît PC-uri la dispoziție. În acest sens putem să vă informăm că sîntem beta-testeri de Microsoft MAPI (Messaging API), o tehnologie uimitoare ce va schimba puternic modul în care computerele noastre comunică (sper că spunîndu- vă aceasta nu am încălcat non-disclosure agreementul pe care îl avem cu Microsoft ;-)

[rep] În legătură cu serviciile noi, de TCP/IP, ne puteți da cîteva detalii?

[ilg] Așa cum am mai amintit, noua legătură a deschis drumul către toate serviciile de TCP/IP, nu numai de E-mail. Folosind posibilitățile router-ului CISCO, este posibil a realiza legături SLIP pe linii telefonice comutate (serviciul se numește „InterEUnet Dial-up IP”). Astfel, cu ajutorul unui simplu PC și a unor programe de comunicații (unele dintre ele public domain) se poate intra în Internet „cu drepturi depline”, deci cu adresă proprie de IP și nume înregistrat în DNS. Odată stabilită legătura se pot folosi toate serviciile Internet, cum ar fi telnet (pentru remote login), ftp (pentru file tranfer), gopher și nu în ultimul rînd WWW (World Wide Web, un remarcabil sistem hypertext distribuit, cu arhitectură client-server). În legătură cu acest remarcabil și absolut revoluționar World Wide Web, tot ca o premieră, la EUnet Romania a fost instalat primul server WWW din țară, care, pentru început, prezintă informații legate de EUnet Romania. În curs de instalare mai sînt un BBS, care va permite schimbul de mesaje și fisiere între abonații din țară, și un listserv pentru gestionarea automată a listelor de redistribuție a mesajelor.

[rep] Planuri de viitor? Concluzii?

[ilg] Păstrînd linia generală de evoluție a celorlalte EUnet-uri, vom extinde din mers, pe măsura creșterii traficului, capacitatea liniilor, numărul de porturi de intrare, puterea echipamentelor, totul în paralel cu actualizarea continua a programelor de comunicații folosite. Etapa imediat următoare este deschiderea de Points Of Presence (POPs) în cîteva puncte din țară, pentru concentrarea traficului local și sporirea calității serviciilor. Dar despre toate acestea veți putea afla consultînd on-line serverul nostru la numarul 312.2576 (8N1), User-name: info, login: info.
După premiera înregistrată în 1993 cînd a fost prima firmă comercială autorizată să ofere conectivitate Internet prin servicii de E-mail, iată că, acum, firma EUnet înregistrează o nouă premieră națională: este prima firmă care oferă pe baze comerciale conectivitate „full Internet”, pentru toate serviciile de TCP/IP existente (telnet, ftp, gopher, www, wais, archie, etc).
TCP/IP, SLIP, PPP, SMTP, SNMP, UUCP… telnet, ftp, gopher, www, wais, archie…
… acestea, și multe altele, sau într-un cuvînt Internet, cu majusculă, fac deja parte și din viața noastră. Depinde numai de noi dacă vom ști sau nu să le folosim.

## Referințe

- [ilgthegeek.wordpress.com - EUnet Romania – un an de activitate](https://ilgthegeek.wordpress.com/2011/08/09/internet-history-eunet-romania-un-an-de-activitate/)
