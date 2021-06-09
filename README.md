#Proiect-UnWe-Tehnologii Web
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <article>
    <header>
        <h1>Unemployment WEB Visualiser</h1>
    </header>
    <div typeof = "sa:AuthorsList">
        <h2>Autori:</h2>
        <ul>
            <li typeof = "sa:ContributorRole" property = "schema:author">
                <span typeof = "schema:Person" property = "schema:author">
                    <meta property = "schema:givenName" content = "Vlad">
                    <meta property = "schema:familyName" content = "Rotariu">
                    <span property = "schema:name">Rotariu Vlad-Anton</span>
                </span>
            </li>
            <li typeof = "sa:ContributorRole" property = "schema:author">
                <span typeof = "schema:Person" property = "schema:author">
                    <meta property = "schema:givenName" content = "Eduard">
                    <meta property = "schema:familyName" content = "Tudosa">
                    <span property = "schema:name">Tudosa Eduard</span>
                </span>
            </li>
            <li typeof = "sa:ContributorRole" property = "schema:author">
                <span typeof = "schema:Person" property = "schema:author">
                    <meta property = "schema:givenName" content = "Albert">
                    <meta property = "schema:familyName" content = "Onofrei">
                    <span property = "schema:name">Onofrei Albert-Andrei</span>
                </span>
            </li>
        </ul>
    </div>
    <section id="abstract" role="doc-abstract">
        <h2>
            <span>1.</span> Abstract
        </h2>
        <p>
            Recurgând la un API REST/GraphQL propriu, să se realizeze un instrument Web de vizualizare și de comparare multi-criteriala <br>
            (pe județe, nivel de educație, grupe de vârstă, mediu, perioadă de timp etc.) a datelor publice referitoare la șomajul din România<br> pe ultimele N luni (minim 12).
            Statisticile, plus vizualizările generate – minim 3 maniere, plus cele cartografice pe baza<br> unor servicii Web de profil – vor putea fi exportate in formatele CSV, SVG si PDF.
        </p>
    </section>
    <section id="introducere" role="doc-introduction">
        <h2>
            <span>2.</span> Introducere
        </h2>
        <p>
            Pentru a descrie in mare, intr-un mod simplu si concret creeatia noastra, am putea spune ca am incercat sa respectam cerinta
            in acelasi timp in care particularizam site-ul printr-un design cat se poate de reprezentativ pentru noi. Acest design a fost
            conceput pentru o practicabilitate ridicata si o parcurgere facila prin continutul sau. 
        </p>
    </section>
    <section id="structura" role="doc-structure">
        <h2>
            <span>3.</span> Structura
        </h2>
        <p>
            <span>3.1.</span><br><br>
            Site-ul proiectat de noi consta in 4 pagini diferite, independente ca scop, dar rolul fiecaruia duce la indeplinirea
            sau satisfactia fiecarui user. <br><br>
            Prima pagina apare cu o animatie la accesare pentru un welcome vizual. In partea de sus apare o bara de navigatie
            construita pentru accesarea facila a altor sectiuni din site prin butoanele alaturate logo-ului site-ului. De asemenea,
            pagina cuprinde o poza sugestiva in stare de plutire, un text explicativ al rolului site-ului si un buton de "start",
            de unde poate incepe parcurgerea celorlalte sectiuni.
            <br>
            A doua pagina este in fapt o harta delimitata pe judete a Romaniei, pentru a oferi utilizatorului posibilitatea de
            a alege teritoriul pentru are doreste sa observe o anumita statistica. Nu este obligatoriu ca user-ul sa aibe un pachet
            mare de cunostinte geografice pentru ca in momentul in care cursorul este asezat peste raza unui anumit judet, in dreptul
            cursorului va aparea numele judetului in consecinta.<br>
            <br>
            A treia pagina este o pagina din site care joaca rolul unui selector de judete, realizand ulterior operatii cu
            mai multe statistici din mai multe judete. Acest selector consta de fapt intr-un search-bar friendly, care poate
            oferi sau nu rezultate in functie de caz.<br>
            <br>
            A patra pagina este constituie din modul de afisare al statisticilor, in diferite forme de grafic, si selectarea anumitor
            conditii de evaluare a acestor statistici precum intervalul de timp, tipul de grafic ales, ce categorii de persoane aflate
            in somaj sa fie luate in calcul etc. Pentru rezultatele obtinute sunt valabile butoanele de descarcare a graficelor sau datelor,
            situate sub o plansa peste care vor fi expuse acestea.<br><br>
            <span>3.2.</span> 
            <br>
            <p> 
            MVC este modelul arhitectural dupa care ne-am ghidat pentru a structura functionalitatile pe care am vrut sa le implementam in
            proiectul nostru. In principal, arhitectura functioneaza astfel: browser-ul trimite un request la controller, care interactioneaza
            cu modelul pentru a primi si trimite date. Evident, acel request provine de la utilizator. Dupa ce se efectueaza manipularea de date,
            este adaptat noul view, raspunzand la request-ul userului. In folderele core este implementata interactiunea dintre model si controller.
            <br><br>Mapa interactiva este prima imagine in care pot fi preluate requesturi din partea userului, astfel ca la selectia unui judet, se va creea 
            cu totul o noua pagina, "county-statistics". Request-ul catre adresa URL este format printr-o concatenare de string-uri, pentru a obtine o adresa valida.
            Se verifica daca string-ul este gol pentru a fi siguri ca stim unde trebuie livrate datele.
            Routing-ul facut in PHP garanteaza preluarea obiectelor astfel incat sa nu se suprapuna informatiile sau ca la selectia altui judet sa apara date gresite.
            <br><br>La initierea unui request se comite o promisiune ca anumite informatii vor fi livrate, moment in care se impune o asteptare fortata "await", pentru a se astepta 
            aceasta preluare a obiectelor vizate. 
            Pe acea pagina, in speta "county-statistics", vor fi afisate chart-uri care vor modela datele preluate din baza noastra de date. Acolo vor aparea toate datele
            referitoare la judetul pe a carui spatiu s-a efectuat click-ul. 
            Al doilea feature in ordinea scroll-ului este comparison-ul facut pe baza datelor din mai multe judete. Bazat pe un principiu similar al MVC, se realizeaza
            intai selectia judetelor a caror date sunt aduse, pentru a se realiza un chart ales tot dupa preferinta user-ului. Un posibil issue ar fi faptul ca 
            se imbina datele a mai multe judete intr-un singur view.
            <br><br>Exemplu de obtinere a unui chart(ex. bar): se distruge chart-ul vechi(in cazul in care exista un previous) pentru a pune pe canvas cel nou. Intr-un tablou de valori
            se structureaza toate valorile de care am avea nevoie, de la toate judetele. In chart-ul respectiv, se pun ca label valorile x, care se refera in exemplu la varste,
            iar in label va aparea si lista judetelor intre care s-ar executa comparatia. In options apar precizate detalii precum tipul de dispunere al legendei si
            datelor de pe coordonatele x si y.<br><br>
            </p>
            <p>
            Despre API:</p> <a href="url">https://github.com/vladrotariu1/unemployment-rate-web-api</a><br> 
            <p>
            API-ul are rolul de a accesa baza de date si de a intoarce datele conform request-ului facut(functie subminata partii de model din MVC), pentru a putea fi 
            manipulate pentru display.<br><br>
            </p>
            <p>
            Despre Webscrapper: <br>Webscrapperul implementat in python aduce datele din fisierele CSV de pe site-ul guvernului in baza de date pe care urmeaza sa o folosim. </p><a href="url">https://data.gov.ro/dataset?q=somaj&sort=metadata_modified+desc&res_format=.csv&page=2</a> 
        </p>
    </section>
    <section id="interactiune" role="doc-interface">
        <h2>
            <span>4.</span> Interactiunea cu User-ul
        </h2>
        <p>
            Site-ul este conceput intr-o maniera cat se poate de friendly, pentru a fi utilizat atatd de useri experimentati.
            cat si de altii mai putin experimentati sau chiar noi pe acest site. Fiecare functionalitate este explicata prin text
            sugerata prin animatii/colorare la hover/imagini. Pentru un user experimentat s-ar remarca functionalitati precum selectarea
            mai multor judete pentru statistica, sugestia unor judete facute de catre site in search-bar, si mai ales optiunea de descarcare.
            Pentru un user novice ar fi indicata parcurgerea site-ului in ordinea paginilor, incepand cu prima si butonul de "start", pentru
            a cunoaste si celelalte optiuni puse la dispozitia sa.  
        </p>
    </section>
    <section id="obiective" role="doc-objectives">
        <h2>
            <span>5.</span> Obiective
        </h2>
        <p>
            Din punct de vedere al obiectivelor ramase, putem spune ca sunte in cautare de noi moduri de usura modul de accesare al
            site-ului de catre un user nou si de a mentine in acelasi timp un standard ridicat al expunerii informatiilor in fata userilor
            experimentati. Printre acestea s-ar putea remarca: un tutorial de folosinta in-app, sectiune de istoric al autarilor precedente cu 
            rezultate obtinute, compararea pe baza a mai multe categorii de somaj, si in mod evident extinderea ariei de obtinere a informatiilor.<br> 
        </p>
    </section>
    <section id="concluzie" role="doc-conclusion">
        <h2>
            <span>6.</span> Concluzie
        </h2>
        <p>
            Asadar, site-ul ofera un design fresh, neobositor si animat, folosind o gama de imagini si culori ce inspira curiozitate
            catre user. Aevm speranta, ca autori a acestui site, ca proiectul isi va atinge scopul si va ajuta vizitatorii sa dobandeasca
            informatiile pe care le cauta, si chiar mai mult de atat. 
            <br>
            <br>
            <br>
        </p>
    </section>
    </article>
</body>
</html>
