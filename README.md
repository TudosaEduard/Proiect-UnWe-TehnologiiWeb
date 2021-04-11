#Proiect: UnWe
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
                        <meta property = "schema:givenName" content = "Alexandru">
                        <meta property = "schema:familyName" content = "Coțofan">
                        <span property = "schema:name">Rotariu Vlad-Anton</span>
                    </span>
                </li>
                <li typeof = "sa:ContributorRole" property = "schema:author">
                    <span typeof = "schema:Person" property = "schema:author">
                        <meta property = "schema:givenName" content = "Eusebiu">
                        <meta property = "schema:familyName" content = "Popescu">
                        <span property = "schema:name">Tudosa Eduard</span>
                    </span>
                </li>
                <li typeof = "sa:ContributorRole" property = "schema:author">
                    <span typeof = "schema:Person" property = "schema:author">
                        <meta property = "schema:givenName" content = "Eusebiu">
                        <meta property = "schema:familyName" content = "Popescu">
                        <span property = "schema:name">Onofrei Albert-Andrei</span>
                    </span>
                </li>
            </ul>
        </div>
        
        <section role = "doc-abstract">
            <h2>1. Abstract:</h2>
            <p>Recurgând la un API REST/GraphQL propriu, să se realizeze un instrument Web de vizualizare și de comparare multi-criteriala <br>
                (pe județe, nivel de educație, grupe de vârstă, mediu, perioadă de timp etc.) a datelor publice referitoare la șomajul din România<br> pe ultimele N luni (minim 12).
                Statisticile, plus vizualizările generate – minim 3 maniere, plus cele cartografice pe baza<br> unor servicii Web de profil – vor putea fi exportate in formatele CSV, SVG si PDF.
                </p>
        </section>
        <section role = "doc-introduction">
            <h2>2. Introducere:</h2>
            <p>Pentru a descrie in mare, intr-un mod simplu si concret creeatia noastra, am putea spune ca am incercat sa respectam cerinta<br>
                in acelasi timp in care particularizam site-ul printr-un design cat se poate de reprezentativ pentru noi. Acest design a fost <br>
                conceput pentru o practicabilitate ridicata si o parcurgere facila prin continutul sau. 
                </p>
        </section>
        <section role = "doc-structure">
            <h2>3. Structura:</h2>
            <p> Site-ul proiectat de noi consta in 4 pagini diferite, independente ca scop, dar rolul fiecaruia duce la indeplinirea<br>
                sau satisfactia fiecarui user. <br><br>
                Prima pagina apare cu o animatie la accesare pentru un welcome vizual. In partea de sus apare o bara de navigatie<br>
                construita pentru accesarea facila a altor sectiuni din site prin butoanele alaturate logo-ului site-ului. De asemenea,<br>
                pagina cuprinde o poza sugestiva in stare de plutire, un text explicativ al rolului site-ului si un buton de "start",<br>
                de unde poate incepe parcurgerea celorlalte sectiuni.<br>
                <br>
                A doua pagina este in fapt o harta delimitata pe judete a Romaniei, pentru a oferi utilizatorului posibilitatea de<br>
                a alege teritoriul pentru are doreste sa observe o anumita statistica. Nu este obligatoriu ca user-ul sa aibe un pachet<br>
                mare de cunostinte geografice pentru ca in momentul in care cursorul este asezat peste raza unui anumit judet, in dreptul<br>
                cursorului va aparea numele judetului in consecinta.<br>
                <br>
                A treia pagina este o pagina din site care joaca rolul unui selector de judete, realizand ulterior operatii cu <br>
                mai multe statistici din mai multe judete. Acest selector consta de fapt intr-un search-bar friendly, care poate <br>
                oferi sau nu rezultate in functie de caz.<br>
                <br>
                A patra pagina este constituie din modul de afisare al statisticilor, in diferite forme de grafic, si selectarea anumitor<br>
                conditii de evaluare a acestor statistici precum intervalul de timp, tipul de grafic ales, ce categorii de persoane aflate<br>
                in somaj sa fie luate in calcul etc. Pentru rezultatele obtinute sunt valabile butoanele de descarcare a graficelor sau datelor, <br>
                situate sub o plansa peste care vor fi expuse acestea.<br><br>
                </p>
        </section>
        <section role = "doc-interface">
            <h2>4. Interactiunea cu User-ul:</h2>
            <p> Site-ul este conceput intr-o maniera cat se poate de friendly, pentru a fi utilizat atatd de useri experimentati.<br>
                cat si de altii mai putin experimentati sau chiar noi pe acest site. Fiecare functionalitate este explicata prin text<br>
                sugerata prin animatii/colorare la hover/imagini. Pentru un user experimentat s-ar remarca functionalitati precum selectarea<br>
                mai multor judete pentru statistica, sugestia unor judete facute de catre site in search-bar, si mai ales optiunea de descarcare.<br>
                Pentru un user novice ar fi indicata parcurgerea site-ului in ordinea paginilor, incepand cu prima si butonul de "start", pentru<br>
                a cunoaste si celelalte optiuni puse la dispozitia sa.
                </p>
        </section>
        <section role = "doc-objectives">
            <h2>5. Obiective</h2>
            <p> Din punct de vedere al obiectivelor ramase, putem spune ca sunte in cautare de noi moduri de usura modul de accesare al<br>
                site-ului de catre un user nou si de a mentine in acelasi timp un standard ridicat al expunerii informatiilor in fata userilor<br>
                experimentati. Printre acestea s-ar putea remarca: un tutorial de folosinta, sectiune de istoric al autarilor precedente cu <br>
                rezultate obtinute, compararea pe baza a mai multe categorii de somaj, si in mod evident extinderea ariei de obtinere a informatiilor.<br> 
            </p>
        <section role = "doc-conclusion">
                <h2>6. Concluzie</h2>
                <p> Asadar, site-ul ofera un design fresh, neobositor si animat, folosind o gama de imagini si culori ce inspira curiozitate<br>
                    catre user. Aevm speranta, ca autori a acestui site, ca proiectul isi va atinge scopul si va ajuta vizitatorii sa dobandeasca<br>
                    informatiile pe care le cauta, si chiar mai mult de atat. 
                    <br>
                    <br>
                    <br>
                </p>    
        </section>
    </article>
</body>
</html>
