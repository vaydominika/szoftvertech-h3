import useCase from "../../public/usecase.png"
import Image from "next/image"

export default function Home() {

  const groupMembers = [
    { name: "TÓTH MÁTYÁS", code: "OQH5NH", email: "matyastoth.mail@gmail.com" },
    { name: "VAY DOMINIKA", code: "VM3DIR", email: "vaydominika@gmail.com" },
    { name: "ARDON MILÁN", code: "E00XC3", email: "ardon.milan1@gmail.com" },
    { name: "KOVÁCS ATTILA MARCELL", code: "SEGUV3", email: "kovacsmarci03@gmail.com" },
    { name: "GOMBKÖTŐ ÁBEL MARCELL", code: "C67VWA", email: "gmbkt09@gmail.com" },
  ];

  const history = [
    { date: "2024. 10. 20.", version: "1.0", description: "Kezdeti verzió, 7. - 9. pontok, 12. - 13. pontok összeállítása", author: "Ardon Milán, Kovács Attila Marcell" },
    { date: "2024. 10. 22.", version: "1.1", description: "A bevezetés és áttekintés megírása", author: "Vay Dominika" },
    { date: "2024. 10. 23.", version: "1.2", description: "4. - 6. pontok összeállítása", author: "Tóth Mátyás" },
    { date: "2024. 10. 26.", version: "1.3", description: "A felhasznált kész komponensek megadása", author: "Gomkötő Ábel Marcell" },
    { date: "2024. 10. 27.", version: "1.4", description: "Interfészek fejezet összeállítása", author: "Vay Dominika" },
    { date: "2024. 10. 27.", version: "1.5", description: "Angol megfelelők kigyűjtése, hozzáadása", author: "Vay Dominika" },
    { date: "2024. 10. 28.", version: "2.0", description: "A dokumentum integrálása NextJS környezetbe, végső verzió áttekintése", author: "Tóth Mátyás" },
  ];

  const tableOfContents = [
    { number: "1.", title: "Bevezetés", id: "bevezetes" },
    { number: "2.", title: "Áttekintés", id: "attekintes" },
    { number: "3.", title: "A rendszer funkciói", id: "rendszerfunkcioi" },

    { number: "3.1.", title: "Első követelmény: Autentikáció", id: "elsokovetelmeny" },
    { number: "3.2.", title: "Második követelmény: Kurzusok böngészése", id: "masodikkovetelmeny" },
    { number: "3.3.", title: "Harmadik követelmény: Kurzusok elvégzése", id: "harmadikkovetelmeny" },
    { number: "3.4.", title: "Negyedik követelmény: Kurzusok mentése", id: "negyedikkovetelmeny" },
    { number: "3.5.", title: "Ötödik követelmény: Kurzusok értékelése", id: "otodikkovetelmeny" },
    { number: "3.6.", title: "Hatodik követelmény: Kurzusok létrehozása", id: "hatodikkovetelmeny" },
    { number: "3.7.", title: "Hetedik követelmény: Kurzusok kezelése", id: "hetedikkovetelmeny" },
    { number: "3.8.", title: "Nyolcadik követelmény: Profil kezelése", id: "nyolcadikkovetelmeny" },
    { number: "3.9.", title: "Kilencedik követelmény: Gamifikációs funkciók", id: "kilencedikkovetelmeny" },

    { number: "4.", title: "Használhatóság", id: "hasznalhatosag" },
    { number: "5.", title: "Megbízhatóság", id: "megbizhatosag" },
    { number: "6.", title: "Teljesítmény", id: "teljesitmeny" },
    { number: "7.", title: "Támogatottság", id: "tamogatottsag" },
    { number: "8.", title: "Tervezési korlátozások", id: "tervezesikorlatozasok" },
    { number: "9.", title: "On-line dokumentáció és Help rendszer", id: "dokumentacio" },
    { number: "10.", title: "Felhasznált kész komponensek", id: "komponensek" },
    { number: "11.", title: "Interfészek", id: "interfeszek" },
    { number: "11.1.", title: "Felhasználói interfészek", id: "felhasznaloiinterfeszek" },
    { number: "11.2.", title: "Hardware interfészek", id: "hardwareinterfeszek" },
    { number: "11.3.", title: "Software interfészek", id: "softwareinterfeszek" },
    { number: "11.4.", title: "Kommunikációs interfészek", id: "kommunikaciosinterfeszek" },
    { number: "12.", title: "Alkalmazott szabványok", id: "alkalmazottszabvanyok" },
    { number: "12.1.", title: "Kötelezően alkamazandó szabványok", id: "kotelezoszabvanyok" },
    { number: "12.2.", title: "Választás alapján alkalmazott szabványok", id: "valasztottszabvanyok" },
    { number: "13.", title: "Mellékletek", id: "mellekletek" },
  ];

  return (
    <>
    <div className="flex flex-col h-screen">
        <div className="p-4">
          <h1 className="text-xl">Csoport neve: Alt+F4 Alakulat - Az Azonnali Kilépők</h1>
          <h1 className="text-xl">Feladat sorszáma: 3</h1>
          <h1 className="text-xl">Feladat címe: H3</h1>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-5xl mb-8 py-8">Software követelmény analízis</h1>
          <h4 className="text-l">Gyakorlatvezető</h4>
          <h3 className="text-3xl mb-8">DR. ÁRVAI LÁSZLÓ LAJOS</h3>
          <h3 className="text-2xl mb-8">Csoporttagok:</h3>
          <table className="mb-16 border-collapse">
            <tbody>
              {groupMembers.map((member, index) => (
                <tr key={index}>
                  <td className="border border-black p-4 text-lg">{member.name}</td>
                  <td className="border border-black p-4 text-lg">{member.code}</td>
                  <td className="border border-black p-4 text-lg">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 text-right mb-8">
          <h2>BEADÁS DÁTUMA</h2>
          <h2>2024. október 28.</h2>
        </div>

        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-4xl mb-8">Történet - History</h1>
          <table className="mb-16 border-collapse">
            <tbody>
               <tr>
                  <th className="border border-black p-4 text-lg">Dátum</th>
                  <th className="border border-black p-4 text-lg">Verzió</th>
                  <th className="border border-black p-4 text-lg">Leírás</th>
                  <th className="border border-black p-4 text-lg">Szerző</th>
               </tr>
              {history.map((entry, index) => (
                <tr key={index}>
                  <td className="border border-black p-4 text-lg">{entry.date}</td>
                  <td className="border border-black p-4 text-lg">{entry.version}</td>
                  <td className="border border-black p-4 text-lg">{entry.description}</td>
                  <td className="border border-black p-4 text-lg">{entry.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-4xl mb-8">Tartalomjegyzék</h1>
          <table className="mb-16 border-collapse underline text-blue-600 hover:text-blue-900 transition-colors duration-200 border-black">
            <tbody>
              {tableOfContents.map((item, index) => (
                <tr key={index}>
                  <td className="px-52 border-black">
                    <a href={`#${item.id}`} className="text-blue-600 hover:text-blue-900 transition-colors duration-200">
                      {item.number} {item.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="bevezetes" className="ml-8 text-xl font-bold text-sky-600 pt-6">1. Bevezetés - Introduction</h2>

        <p className="pl-[5.3rem] pt-6">
        Az oktatás és tanulás folyamatosan változó és fejlődő terület, ahol a digitális platformok egyre nagyobb szerepet játszanak. Az e-learning megoldások a korábbi években jelentős fejlődésen mentek keresztül, és mára kulcsfontosságú eszközzé váltak a diákok számára. Ezen változó igények kielégítésére született meg a Learnify e-learning platform ötlete, amely nem csak hagyományos tanulási eszközöket kínál, hanem modern, gamifikációs elemekkel is kibővíti a tanulási élményt, ezzel ösztönözve és motiválva a felhasználókat a hatékonyabb tanulásra.
        </p>

        <p className="pl-[5.3rem] pt-6">
        A Learnify célja, hogy minden korosztály számára elérhető, élvezetes és eredményes oktatási élményt nyújtson, tekitve hogy a tananyagokat is felhasználók írják és értékelik. A platform alkalmazkodó felépítése révén különböző tanulási stílusokat és szinteket támogat, személyre szabott tanulási útvonalakat kínálva. A gamifikációs elemek beépítése pedig lehetőséget biztosít a felhasználóknak, hogy jutalmazásokkal, szintlépésekkel és egyéb motivációs elemekkel érjék el céljaikat. Az ilyen játékos megközelítés jelentősen növeli a felhasználók elkötelezettségét és érdeklődését, így hatékonyabb tanulási folyamatot eredményez.
        </p>

        <p className="pl-[5.3rem] pt-6">
        A dokumentum bemutatja a Learnify platform részletes szoftverkövetelmény specifikációját, beleértve a rendszer működésének leírását, az üzleti és technikai követelményeket, valamint az interfészekkel kapcsolatos elvárásokat. Az alábbi specifikáció magában foglalja a platform kulcsfontosságú funkcióit, például a tanfolyamok kezelési lehetőségeit, a felhasználói profilok testreszabását, valamint az interaktív, játékos elemek kialakítását.
        </p>

        <p className="pl-[5.3rem] pt-6">
        Továbbá, a platform kialakítása során elsődleges szempont, hogy a felhasználói élményt, a hozzáférhetőséget és a skálázhatóságot szem előtt tartsuk. A felhasználói élmény javítása érdekében a Learnify különböző közösségi funkciókat, például fórumokat, csoportos projekteket és tanulói versenyeket is integrál, ahol a résztvevők egymással megoszthatják tudásukat és tapasztalataikat. Ezek a funkciók nem csak a tanulási élményt gazdagítják, hanem a közösségi tanulás előnyeit is kiaknázzák.
        </p>

        <p className="pl-[5.3rem] pt-6">
        Az adatvédelem és az adatbiztonság szintén kiemelt fontosságú a Learnify tervezésében, hiszen a tanulók személyes adatainak és tanulmányi előmenetelének biztonsága kulcsfontosságú tényező. A platform megfelel a legújabb adatvédelmi szabályoknak, és a felhasználói adatok védelmét biztosító biztonsági protokollokat épít be.
        </p>

        <p className="pl-[5.3rem] pt-6">
        Végső soron a Learnify azzal a céllal jött létre, hogy ne csak a tanulás hatékonyságát növelje, hanem egy élvezetes és inspiráló platformot biztosítson a felhasználóknak. A platform dinamikus jellege lehetővé teszi az új technológiák és oktatási trendek integrálását, így a Learnify folyamatosan megújuló, korszerű oktatási élményt kínál. A platform hosszú távú fejlesztése során fontos célkitűzés, hogy folyamatosan visszajelzéseket gyűjtsön a felhasználóktól és ez alapján javítsa az élményt és a funkciókat. A Learnify nem csupán egy tanulási eszköz kíván lenni, hanem egy közösségi tér is, ahol a felhasználók ösztönözve érzik magukat a tudás megszerzésére és megosztására.
        </p>

        <h2 id="attekintes" className="ml-8 text-xl font-bold text-sky-600 pt-6">2. Áttekintés - Overview</h2>

        <p className="pl-[5.3rem] pt-6">
        Ez a fejezet áttekintést nyújt a Learnify platform általános jellemzőiről, valamint a tervezési és működési környezetről, amelyben az alkalmazás működni fog. Célja a fejlesztés során felmerülő követelmények alapvető hátterének ismertetése és az alkalmazás szempontjából fontos körülmények leírása, hogy megkönnyítse a következő szakaszok részletes információinak megértését.
        </p>

        <p className="pl-[5.3rem] pt-6">
        A Learnify elsősorban egy modern, felhasználóbarát e-learning platform lesz, amely lehetővé teszi az oktatási tartalmak digitális elérését és elsajátítását különféle eszközökön keresztül. A platform környezete rugalmas és többféle tanulási módszer támogatását célozza meg: az egyéni tanulás, a tanfolyam-alapú képzés, valamint a valós idejű interaktív oktatás mind részét képezi a felhasználóknak kínált lehetőségeknek. Az e-learning ipar versenyképessége és a felhasználók növekvő igényei miatt a Learnify tervezésének alapelvei közé tartozik a skálázhatóság, a reszponzív dizájn, a biztonság és a hozzáférhetőség.
        </p>

        <p className="pl-[5.3rem] pt-6">
        A platform legfontosabb funkciói között szerepel a tananyagok interaktív módon való elérése, a feladatok és tesztek megoldása, a tanulási előrehaladás nyomon követése, a statisztikai elemzések biztosítása, valamint az eredmények alapján történő személyre szabott visszajelzések adása. A gamifikációs elemek, mint például jelvények, ranglisták, szintlépések és virtuális jutalmak ösztönzik a felhasználókat a tanulási folyamat során. Ezek az elemek nem csupán a motivációt növelik, hanem a hosszú távú elkötelezettséget is fokozzák, hiszen a tanulók látványosan követhetik fejlődésüket.
        </p>

        <p className="pl-[5.3rem] pt-6">
        A felhasználók jellemzői is változatosak, mivel a Learnify mind oktatási intézmények, mind vállalatok, valamint magánszemélyek számára elérhető lesz. A felhasználók között megtalálhatók lesznek tanárok, diákok, vállalati dolgozók, szabadúszók és különféle szakterületek szakemberei. Ebből adódóan az alkalmazásnak olyan rugalmas funkcionalitással kell rendelkeznie, amely megfelel különböző felhasználói csoportok igényeinek és technikai képességeinek.
        </p>

        <p className="pl-[5.3rem] pt-6">
        Az alkalmazás fejlesztése során néhány fontos korlátozást is figyelembe kell venni, ideértve az adatvédelmi szabályoknak való megfelelést, a felhasználók digitális kompetenciáját, valamint az internetkapcsolat és eszközök különböző szintjeit. A rendszernek képesnek kell lennie az adatvédelmi szabályok, például a GDPR szigorú betartására, hiszen a felhasználók személyes adatai és tanulmányi előmenetele kiemelt figyelmet igényelnek. Emellett a platformnak figyelembe kell vennie, hogy egyes felhasználók alacsony sávszélességgel vagy régebbi eszközökkel rendelkezhetnek.
        </p>

        <p className="pl-[5.3rem] pt-6">
        A fejlesztés során tett feltételezések között szerepel, hogy a platformot legalább közepes szintű digitális készségekkel rendelkező felhasználók fogják használni, és hogy a tanulási környezet változatos lehet, az egyéni tanulástól kezdve az osztálytermi használatig. Függőség szempontjából fontos kiemelni, hogy a Learnify külső adatbázisokkal, felhőalapú tárolási rendszerekkel és analitikai eszközökkel is összekapcsolódik, amelyek befolyásolhatják a működést és a teljesítményt.
        </p>

        <p className="pl-[5.3rem] pt-6">
        A követelmények csoportosítása céljából a következő kategóriák kerültek kijelölésre: felhasználói követelmények (pl. különböző szerepkörök kezelése, felhasználói felület), funkcionális követelmények (pl. tananyag hozzáférés, visszajelzések), teljesítménykövetelmények (pl. válaszidők, skálázhatóság), valamint biztonsági követelmények (pl. adatvédelem, felhasználói jogosultságok). A követelmények csoportosítása biztosítja, hogy minden aspektus külön-külön figyelembevételre kerüljön a fejlesztés során, ugyanakkor lehetővé teszi, hogy a különböző fejlesztési csapatok célzottan tudjanak dolgozni az egyes részeken.
        </p>


        <h2 id="rendszerfunkcioi" className="ml-8 text-xl font-bold text-sky-600 pt-6">3. A rendszer funkciói - Specific Requirements</h2>

        <p className="pl-[5.3rem] pt-6">
        A következő szakasz részletezi a Learnify e-learning platform alapvető funkcionális követelményeit, amelyek biztosítják a platform hatékony és felhasználóbarát működését. A funkciókat természetes nyelven fogalmazzuk meg, és szükség esetén use case diagramokkal illusztráljuk. Az egyes funkciókat a rendszer fő szolgáltatásai és moduljai mentén csoportosítjuk, hogy a követelmények átlátható módon jelenjenek meg.
        </p>

        <Image unoptimized={true} className="pl-[5.3rem]" src={useCase} alt="Use Case Diagram" width={900} height={900} />

        <h2 id="elsokovetelmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.1. Első követelmény: Autentikáció</h2>

        <p className="pl-[5.3rem] pt-6">A felhasználó kizárólag egy aktív session-el érheti el az oldal funkcióit, "vendégként" nincs lehetőség bármilyen funkciót kipróbálni biztonsági okokból. Egy felhasználó létrehozhat magának egy profilt, vagy bejelentkezhet egy meglévőbe, így létrehozva egy aktív session magának.</p>

        <ol className="pl-[5.3rem] list-disc list-inside pt-6">

        <li><span className="font-bold">Regisztráció:</span> Ideálisan a felhasználó első alkalommal regisztrál egy fiókot magának. Ezt a folyamatot a regisztrációs űrlapon teheti meg, ahol meg kell adnia a teljes nevét, az egyedi e-mail címét, egy egyedi felhasználónevet és egy legalább 8 karakterből álló jelszót, amelynek tartalmaznia kell: kisbetűt, nagybetűt, számot és legalább 1 speciális karaktert.

Legelőször a frontend végez ellenőrzéseket, muszáj az összes mezőt kitölteni és formailag meg kell egyeznie az összes mezőnek a megadott követelményeknek.

Amennyiben a frontend ellenőrzésein átment a felhasználó, a weboldal kérést küld a MySQL adatbázis felé, melyhez a backenden levő DAO objektumokon keresztül egy POST request segítségével (amely a request bodyban JSON-ban tartalmazza a felhasználó által megadott adatokat) fér hozzá. Ott különböző szűréseken mennek át az adatok például az SQL injection elkerülése végett, illetve ismételten egy ellenőrzést végez rajtuk a backend. Ha az ellenőrzéseken nem mentek át az adatok, abban az esetben rögtön visszatér a request egy hibával, amelyet visszajelez a frontend is.

Ha az ellenőrzések sikeresek voltak, a jelszót elhasheli a backend SHA-256 segítségével, majd beszúrja az adatbázisba a megadott adatokat és a jelszó helyett csak a hash-ét. A sikeres regisztráció után létrejön egy session, amit egy cookieban tárol el a frontend egy sessionID azonosító segítségével és ez az adatbázisban is megjelenik, hogy egy sessionID melyik felhasználóhoz tartozik.

Innentől kezdve a felhasználó hozzáfér a weboldal funkcióihoz.</li>
        <li className="pt-6"><span className="font-bold">Bejelentkezés:</span> Ha a felhasználónak már van egy létező fiókja, abban az esetben elnavigálhat a bejelentkezési űrlapra és ott az e-mail címét vagy akár a felhasználónevét megadva és összepárosítva a jelszavával beléphet a weboldalra.

Itt is hasonlóan, az adatok a frontenden és a backenden is átmennek ellenőrzéseken és amennyiben ezek sikeresek, létrejön egy session. Itt is először elhasheli a backend a jelszót és magát a hash-t hasonlítja össze az adatbázisban levő hash-el és csak akkor engedi tovább a rendszer a felhasználót, ha egyezik a 2 hash.</li>

        </ol>

        <h2 id="masodikkovetelmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.2. Második követelmény: Kurzusok böngészése</h2>

        <p className="pl-[5.3rem] pt-6">Az e-learning platform egyik alapvető funkciója a kurzusok böngészése, amely lehetővé teszi a felhasználók számára, hogy könnyedén megtalálják az őket érdeklő tananyagokat. A böngészési élmény optimalizálása érdekében a rendszer különféle keresési és szűrési lehetőségeket biztosít. A felhasználók kulcsszavak beírásával kereshetnek a kurzusok között, amelyre a rendszer az adatbázisban szereplő találatok közül a legmegfelelőbbeket adja vissza. Ezen kívül különféle szűrőket alkalmazhatnak a keresés pontosítására, például kategóriák, nehézségi szintek, nyelvek, árak vagy a kurzus értékelése alapján. A platform továbbá lehetőséget nyújt arra is, hogy a kurzusok listáját rendezni lehessen népszerűség, legjobb értékelés, ár vagy a legutóbbi frissítés dátuma szerint. Amikor egy felhasználó a keresőmezőbe kattint, a rendszer automatikusan megjeleníti a leggyakrabban keresett kulcsszavakat, ezzel is gyorsítva és könnyítve a keresési folyamatot.</p>

        <h2 id="harmadikkovetelmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.3. Harmadik követelmény: Kurzusok elvégzése</h2>

        <p className="pl-[5.3rem] pt-6">Az oldal használói bármilyen kurzust elvégezhetnek, feltéve, hogy bejelentkeztek a rendszerbe. A fizetős kurzusok elérhetősége azonban a díjak kifizetéséhez kötött, amelyeket az adott kurzus létrehozója határoz meg. A kurzusok elvégzése során a felhasználóknak teljesíteniük kell azokat a kritériumokat, amelyeket a kurzus készítője előzetesen meghatározott. Ezek a kritériumok sokféle formában megjelenhetnek, például különböző hosszúságú és nehézségű tesztek formájában, amelyek alapját a kurzushoz feltöltött tananyag képezi. A tananyag különböző formátumokat tartalmazhat, úgymint hanganyagokat, videókat, képeket és szöveges dokumentumokat. A felhasználóknak a kritériumokat a kurzus befejezéséhez megadott szint felett kell teljesíteniük, így biztosítva a tanulási folyamat eredményességét.</p>

        <p className="pl-[5.3rem] pt-6">Sikeres elvégzést követően az elért százalékos eredmény alapján fogja kapni a felhasználó az XP-t automatikusan. A 100%-os teljesítésért fog járni 1000 XP, minél kevesebb százalékot ér el, annál kevesebbet fog kapni. Ezt a következő képlettel lehetséges kiszámolni: 1000*(elértszázalék/100). Ez egy alap, normáls nehézségű kurzushoz tartozik. Amennyiben a kurzus nehézsége nagyobb, vagy kevesebb, úgy fog kapni egy szorzót, hogy a ponteloszlás igazságos legyen.</p>

        <h2 id="negyedikkovetelmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.4. Negyedik követelmény: Kurzusok mentése, kedvencekbe helyezése</h2>

        <p className="pl-[5.3rem] pt-6">A rendszer lehetővé teszi a felhasználók számára, hogy az őket érdeklő kurzusokat elmentsék vagy kedvencek közé helyezzék. Ez a funkció különösen hasznos lehet azok számára, akik a jövőben szeretnének egy adott kurzusra visszatérni, vagy egyszerűen hasznosnak találják azt. A kurzusok böngészése közben a felhasználók egy csillag ikont találnak a kurzus borítóképének jobb felső sarkában, amelyre kattintva a kurzus automatikusan bekerül a kedvencek közé. Ezek a mentett kurzusok később a profil oldalon tekinthetők meg, és a felhasználók dönthetnek arról, hogy nyilvánossá teszik-e őket, vagy privátként kezelik ezeket az adatokat. Ezzel a funkcióval lehetőség nyílik arra, hogy a felhasználók saját tanulási preferenciáikhoz igazítsák a platform használatát.</p>

        <h2 id="otodikkovetelmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.5. Ötödik követelmény: Kurzusok értékelése</h2>

        <p className="pl-[5.3rem] pt-6">Azon felhasználók, akik sikeresen elvégeztek egy kurzust, lehetőséget kapnak arra, hogy értékeljék azt, amely segíti a platformon található kurzusok minőségének folyamatos fejlesztését. Az értékelés egy ötfokozatú skálán történik, amelyben akár fél pontokat is meg lehet adni a részletesebb visszajelzés érdekében. Emellett opcionálisan szöveges kommentár is hozzáadható az értékelés mellé, amelyben a felhasználó részletesen kifejtheti véleményét a kurzusról. Amint egy kurzus elvégzése befejeződik, a rendszer egy felugró ablakban ösztönzi a felhasználót az értékelésre, ezzel is erősítve az azonnali visszacsatolás lehetőségét. Az értékelési folyamatot tovább motiválja, hogy minden értékelés után a felhasználó 100 XP pontot kap, amely a platform gamifikációs elemei között fontos szerepet tölt be.</p>

        <h2 id="hatodikkovetelmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.6. Hatodik követelmény: Kurzusok létrehozása</h2>

        <p className="pl-[5.3rem] pt-6">A platform biztosítja, hogy a felhasználók saját kurzusokat hozhassanak létre, de ezt megelőzően kötelezően el kell végezniük egy ún. kurzuslétrehozó kurzust. Ez a kezdeti lépés azért szükséges, hogy a létrehozott tananyagok minden esetben megfeleljenek a rendszer által támasztott minőségi követelményeknek, és a tanulók számára érthető, jól strukturált tanulási élményt biztosítsanak. Miután a felhasználó sikeresen teljesítette ezt az előzetes lépést, lehetősége nyílik tananyagai feltöltésére és publikálására.</p>
        <p className="pl-[5.3rem] pt-6">A kurzus létrehozása során a felhasználónak több lényeges adatot kell megadnia. Az első lépésben meg kell adni a kurzus címét, amely röviden és tömören összefoglalja annak tartalmát. Ezt követően egy leírást kell készíteni, amely a kurzus célját, felépítését és az elérhető tanulási eredményeket mutatja be. Vizualitás szempontjából elengedhetetlen egy borítókép kiválasztása, amely vonzóvá és figyelemfelkeltővé teszi a kurzust a böngésző felhasználók számára.</p>
        <p className="pl-[5.3rem] pt-6">A keresési élmény javítása érdekében a kurzus létrehozója megadhat címkéket is, amelyek kulcsszóként szolgálnak a tananyag könnyebb megtalálása érdekében. Emellett kötelező a kurzus típusának meghatározása is, amely jelezheti például, hogy az tanulmányi célú, hobbihoz kötődő vagy szakmai fejlődést elősegítő tananyag. Ezek a címkék és kategóriák elősegítik, hogy a felhasználók célzottan találják meg a számukra releváns tananyagokat.</p>
        <p className="pl-[5.3rem] pt-6">A tananyag feltöltése során a rendszer támogatja a különböző formátumokat, így a kurzus tartalmazhat hanganyagokat (.mp3), videókat (.mp4), képeket (.png, .jpg) és szöveges dokumentumokat (.pdf). A kurzus készítője opcionálisan létrehozhat egy tesztet is, amely a kurzushoz kapcsolódó tananyag elsajátítását méri. A teszt lehetőséget nyújt az ismeretek ellenőrzésére és mélyítésére. A kurzus beállítható fizetősre vagy ingyenesre, megadható a nehézségi szintje, a rendelkezésre álló nyelvek, valamint a hozzá tartozó értékelési szempontok.</p>

        <h2 id="hetedikkovetelmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.7. Hetedik követelmény: Kurzusok kezelése</h2>

        <p className="pl-[5.3rem] pt-6">Azok a felhasználók, akik saját kurzusokat hoztak létre, lehetőséget kapnak arra, hogy kezeljék azokat. A kezelés magában foglalja a kurzus adatainak módosítását, valamint szükség esetén a törlését. Ezek a funkciók a felhasználók profiloldalán, a „kurzusaim” menüpont alatt érhetők el. Az adatok módosítását egy ceruza ikon jelzi, míg a törléshez egy szemeteskuka ikon áll rendelkezésre. Ezen funkciók célja, hogy a felhasználók egyszerűen és hatékonyan tudják karbantartani tananyagaikat.</p>

        <h2 id="nyolcadikkovetelmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.8. Nyolcadik követelmény: Profil kezelése</h2>

        <p className="pl-[5.3rem] pt-6">A platform felhasználói testreszabhatják profiljukat annak érdekében, hogy személyre szabottabb élményt nyújtsanak. Lehetőség van például profilkép (avatar) feltöltésére, továbbá megtekinthetők a felhasználó által elért jelvények és mérföldkövek. A profil tartalmazza a heti teljesítményeket is, ahol az XP szerzés mértékét lehet nyomon követni. A felhasználók dönthetnek arról is, hogy nyilvánossá teszik-e kedvelt vagy elmentett kurzusaikat, így mások is megismerhetik tanulási preferenciáikat.</p>

        <h2 id="kilencedikkovetelmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.9. Kilencedik követelmény: Gamifikációs funkciók</h2>

        <p className="pl-[5.3rem] pt-6">A platform egyik kiemelkedő funkciója a gamifikáció, amely célja, hogy növelje a tanulás iránti elkötelezettséget és motivációt azáltal, hogy játékelemeket integrál a tanulási folyamatba. Az e-learning rendszerben minden elvégzett tevékenység – például egy kurzus befejezése, egy új mérföldkő elérése vagy egy kihívás teljesítése – különböző mennyiségű XP (experience point, azaz tapasztalati pont) megszerzését eredményezi. Az XP gyűjtésével a felhasználók szintet léphetnek, ami vizuálisan is megjelenik a profiljukon, ezzel ösztönözve őket arra, hogy folytassák a tanulást.</p>
        <p className="pl-[5.3rem] pt-6">A rendszer achievementeket (eredményeket) és badge-eket (kitűzőket) is kínál, amelyek a különféle tanulási mérföldkövek elérését ismerik el. Például a felhasználó kitűzőt kap, ha tíz egymást követő napon aktívan tanul, vagy ha egy adott témában tíz kurzust sikeresen befejez. Ezek az eredmények nemcsak vizuális elismerést nyújtanak, hanem motivációs eszközként is szolgálnak, hiszen a felhasználók versenyezhetnek egymással az elért kitűzők számát tekintve.</p>
        <p className="pl-[5.3rem] pt-6">A gamifikációs rendszer egy progressz bár segítségével is mutatja a felhasználók előrehaladását, amely különösen a heti teljesítmények követésére szolgál. Ez a funkció lehetőséget ad arra, hogy a felhasználók folyamatosan nyomon kövessék, mennyi XP-t szereztek egy adott időszak alatt, és hogyan teljesítettek a korábbi hetekhez képest.</p>
        <p className="pl-[5.3rem] pt-6">A rendszerben további ösztönzőként jelennek meg az adminisztrátorok által létrehozott kihívások és versenyek. Ezek az események időszakos jelleggel érhetők el, és a résztvevők számára exkluzív badge-eket és nagyobb mennyiségű XP-t kínálnak, ha sikeresen teljesítik őket. Például egy kihívás lehet az, hogy a felhasználó egy hét alatt végezzen el három különböző kurzust, vagy vegyen részt egy közösségi tanulási eseményen.</p>
        <p className="pl-[5.3rem] pt-6">A felhasználók a profiloldalukon tekinthetik meg az összes megszerzett badge-et és achievementet, amely nemcsak személyes motivációként szolgál, hanem egy közösségi elemként is működik. Mivel ezek az eredmények nyilvánosan megoszthatók, a felhasználók megmutathatják ismerőseiknek, mennyit értek el, ami további inspirációt nyújthat számukra. A gamifikációs rendszer tehát nemcsak a tanulási folyamat hatékonyságát növeli, hanem a közösségépítést is támogatja.</p>
        <p className="pl-[5.3rem] pt-6">A heti XP alapján lesz létrehozva továbbá egy ranglista, ami minden héten nullázódik, így bárkinek lehet esélye felkerülni rá. A ranglistának lesz dedikálva külön egy oldal, mivel több típusú ranglistát is szeretnénk létrehozni (legtöbb XP, legtöbb jó százalékkal végzett kurzus, stb.), amit majd a felhasználók a főoldalon lévő kupa ikonra kattintva érhetnek majd el.</p>

        <h2 id="hasznalhatosag" className="ml-8 text-xl font-bold text-sky-600 pt-6">4. Használhatóság - Usability</h2>

        <p className="pl-[5.3rem] pt-6">Ebben a fejezetben összefoglaljuk a Learnify e-learning platform nem funkcionális követelményeit, amelyek a rendszer használhatóságát befolyásolják. Ezek a követelmények különböző aspektusait célozzák meg, mint például a betanulási időt, a felhasználói élményt és a rendszerek közötti összehangoltságot.</p>

        <h2 id="hasznalhatosag" className="ml-8 text-xl font-bold text-sky-600 pt-6">4.1. Betanulási idő</h2>

        <p className="pl-[5.3rem] pt-6">A kezdő felhasználók számára a Learnify hatékony használatához körülbelül 5-7 órás betanulási idő szükséges. Ez az idő elegendő ahhoz, hogy a felhasználók megismerkedjenek a platform fő funkcióival, mint a tanfolyamokhoz való csatlakozás, a feladatok megoldása és a gamifikációs elemek használata. A gyakorlott felhasználók, akik már rendelkeznek digitális tanulási tapasztalattal, várhatóan 2-3 órán belül képesek lesznek az új rendszer hatékony használatára. A betanulási idő csökkentésének érdekében a rendszer intuitív felhasználói felülettel és navigációval rendelkezik, amely megkönnyíti a kezdők számára a tanulási folyamatot.</p>

        <h2 id="hasznalhatosag" className="ml-8 text-xl font-bold text-sky-600 pt-6">4.2. Tevékenységek végrehajtási ideje</h2>

        <p className="pl-[5.3rem] pt-6">Az átlagos felhasználó a meglévő hagyományos tanulási módszerekkel (pl. könyvek, offline tanfolyamok) körülbelül 30-45 percet tölt egy adott tananyag megértésével és feldolgozásával. A Learnify segítségével ez az idő várhatóan 15-20 percre csökken, mivel az interaktív elemek, a gamifikáció és a közvetlen visszajelzések segítik a felhasználókat a tanulás során. A rendszer automatikus nyomon követése és a tanulási statisztikák is hozzájárulnak a hatékonyság növeléséhez, lehetővé téve a felhasználók számára, hogy a saját tempójukban haladjanak.</p>

        <h2 id="hasznalhatosag" className="ml-8 text-xl font-bold text-sky-600 pt-6">4.3. Támogató tulajdonságok a kezdő felhasználók számára</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify platform számos funkcióval rendelkezik, amelyek segítik a kezdő felhasználók gyors betanulását. Ezek közé tartozik a felhasználóbarát kezelőfelület, amely egyszerű és logikus navigációt biztosít, valamint a beépített útmutatók és tippek, amelyek lépésről lépésre vezetik a felhasználókat a funkciók használatában. Továbbá, a platform lehetőséget biztosít a demó verzió kipróbálására, amelyen keresztül a felhasználók gyakorolhatják a különböző funkciók használatát a tényleges tanfolyamok előtt.</p>

        <h2 id="hasznalhatosag" className="ml-8 text-xl font-bold text-sky-600 pt-6">4.4. Betanulási lehetőségek</h2>

        <p className="pl-[5.3rem] pt-6">A betanulás elősegítésére a Learnify különböző támogatási lehetőségeket kínál, beleértve online tréningeket, részletes dokumentációkat, valamint videós útmutatókat, amelyek bemutatják a rendszer használatát. Ezek az anyagok ingyenesen elérhetők, és a felhasználók bármikor hozzáférhetnek hozzájuk. Továbbá, lehetőség van egyéni konzultációk kérésére is, amelyek során a felhasználók személyre szabott segítséget kaphatnak. A tréningek és a dokumentációk folyamatosan frissülnek az új funkciók bevezetésekor, hogy mindig naprakész információkkal szolgáljanak.</p>

        <h2 id="hasznalhatosag" className="ml-8 text-xl font-bold text-sky-600 pt-6">4.5. Felhasználói felület összehasonlítása</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify felhasználói felülete intuitív és modern dizájnnal rendelkezik, amely hasonlít a felhasználók által már korábban használt népszerű e-learning alkalmazásokra. A navigációs sáv, a főmenü és a funkciók elrendezése ismerős lehet a felhasználók számára, ami elősegíti a gyors alkalmazkodást. A vizuális elemek és a színek harmóniája, valamint a tipográfia választása szintén a használhatóságot célozza, így a felhasználók könnyen eligibilizálják magukat a rendszer különböző részein.</p>

        <h2 id="hasznalhatosag" className="ml-8 text-xl font-bold text-sky-600 pt-6">4.6. Összhang más alkalmazásokkal</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify felhasználói felülete és használati módja összhangban van a felhasználók által párhuzamosan használt egyéb alkalmazásokkal, mint például a videokonferencia-eszközök és az online együttműködési platformok. Az integrációs lehetőségek, mint például a Google Drive és a Microsoft Office, lehetővé teszik a zökkenőmentes munkafolyamatokat, mivel a felhasználók könnyedén átjárhatnak a különböző rendszerek között. A felhasználói élmény fokozása érdekében a Learnify figyelembe veszi a más alkalmazások által használt interfészeket és elvárásokat, így biztosítva a felhasználók számára a zökkenőmentes használatot.</p>

        <h2 id="megbizhatosag" className="ml-8 text-xl font-bold text-sky-600 pt-6">5. Megbízhatóság - Reliability</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify e-learning platform megbízhatósági követelményei kiemelten fontosak, hiszen a felhasználók számára elengedhetetlen, hogy a rendszer folyamatosan elérhető és stabil működésű legyen. A következő alpontok részletezik a rendszerrel szemben támasztott megbízhatósági követelményeket.</p>

        <h2 id="megbizhatosag" className="ml-8 text-xl font-bold text-sky-600 pt-6">5.1. Rendelkezésre állás</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify platformnak a tervezett üzemeltetési idő 99,9%-os rendelkezésre állást kell biztosítania. Ez magában foglalja a teljes használhatóságot a felhasználók számára, lehetővé téve számukra, hogy bármikor hozzáférjenek a tananyagokhoz és a funkciókhoz. A karbantartási időt minimálisra kell csökkenteni, és előre be kell ütemezni, hogy a felhasználók értesüljenek az esetleges kiesésekről. Ezen kívül, ha a rendszer korlátozott használhatósággal bír (például karbantartás vagy frissítések során), a felhasználók számára alternatív hozzáférést kell biztosítani, hogy folytathassák a tanulást, amennyire csak lehetséges.</p>

        <h2 id="megbizhatosag" className="ml-8 text-xl font-bold text-sky-600 pt-6">5.2. MTBF (Mean Time Between Failures)</h2>

        <p className="pl-[5.3rem] pt-6">A rendszer hibák közötti átlagos időtartamának (MTBF) legalább 1000 üzemórának kell lennie. Ez a mérőszám tükrözi a rendszer megbízhatóságát, és azt jelzi, hogy a felhasználók milyen hosszú ideig használhatják a platformot hiba nélkül. A cél egy stabil és megbízható környezet biztosítása a tanuláshoz, amely segít a felhasználói élmény fokozásában. A folyamatos monitoring és a hibák azonnali kezelése szükséges ahhoz, hogy a rendszer működése zökkenőmentes maradjon.</p>

        <h2 id="megbizhatosag" className="ml-8 text-xl font-bold text-sky-600 pt-6">5.3. MTTR (Mean Time To Repair)</h2>

        <p className="pl-[5.3rem] pt-6">A rendszer hibaelhárítási idejének (MTTR) átlagosnak 30 percnek kell lennie. Ez az időtartam magában foglalja a hiba azonosítását, a javítást és a rendszer újraindítását, hogy a felhasználók minél hamarabb visszatérhessenek a tanuláshoz. A hibaelhárítási folyamat során a technikai csapatnak hatékonyan és gyorsan kell reagálnia a problémákra, hogy minimalizálja a leállás időtartamát és a felhasználók élményét.</p>

        <h2 id="megbizhatosag" className="ml-8 text-xl font-bold text-sky-600 pt-6">5.4. A rendszer eredményeinek pontossága</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify rendszerének eredményeinek pontossága kulcsfontosságú a felhasználók számára nyújtott visszajelzés és értékelés szempontjából. A platformnak legalább 95%-os pontosságot kell biztosítania a vizsgák, tesztek és értékelések eredményeinek megállapításában. Ez azt jelenti, hogy a felhasználóknak megbízható és pontos visszajelzést kell kapniuk a teljesítményükről, ami segíti őket a fejlődésben és a tanulási folyamat során. Az adatgyűjtés és -feldolgozás során figyelmet kell fordítani a pontosságra és a hiba lehetőségeinek minimalizálására.</p>

        <h2 id="teljesitmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">6. Teljesítmény - Performance</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify e-learning platform teljesítményével kapcsolatos követelmények kiemelten fontosak a felhasználói élmény és a rendszer hatékonysága szempontjából. A következő alpontok részletezik az elvárt teljesítmény mutatókat.</p>

        <h2 id="teljesitmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">6.1. Válaszidők</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify platform válaszidejének optimálisnak kell lennie a leggyakrabban használt funkciók esetében. A felhasználói felület betöltési ideje nem haladhatja meg a 2 másodpercet, míg a tananyagokhoz való hozzáférés esetén a válaszidő nem lehet hosszabb 3 másodpercnél. Különös figyelmet kell fordítani a tesztek és vizsgák során, ahol a válaszidő 1 másodpercen belül kell, hogy legyen. Ezen válaszidők biztosítása érdekében a rendszernek optimalizált kódot és hatékony adatbázis-lekérdezéseket kell alkalmaznia.</p>

        <h2 id="teljesitmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">6.2. Áteresztőképesség</h2>

        <p className="pl-[5.3rem] pt-6">A rendszer áteresztőképességének minimum 500 tranzakció/percnek kell lennie, ami lehetővé teszi a folyamatos működést még nagy terhelés esetén is. Ez azt jelenti, hogy a rendszer képes egyszerre kezelni a felhasználói interakciókat, mint például a tananyagok megnyitását, a tesztek leadását és a visszajelzések feldolgozását. Az áteresztőképesség figyelembevételével a rendszer architektúráját úgy kell kialakítani, hogy a terheléselosztás és a skálázhatóság optimális legyen.</p>

        <h2 id="teljesitmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">6.3. Kapacitás</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify rendszer adatbázisának maximális mérete legalább 1 TB kell, hogy legyen, ami lehetővé teszi a felhasználói tartalmak, tananyagok és vizsgák tárolását. A rendszernek képesnek kell lennie legalább 10,000 egyidejű felhasználó kiszolgálására, hogy támogassa a különböző tanulási aktivitásokat és interakciókat. Ezen kívül a rendszernek legalább 2000 feldolgozandó tranzakciót kell tudnia kezelni másodpercenként, hogy a felhasználói élmény zavartalan legyen.</p>

        <h2 id="teljesitmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">6.4. Korlátozott használhatóság idején elvárható mutatók</h2>

        <p className="pl-[5.3rem] pt-6">Korlátozott használhatóság esetén, például karbantartás vagy rendszerfrissítés során, a rendszernek legalább 80%-os válaszidőt kell fenntartania. Ez azt jelenti, hogy a felhasználók továbbra is hozzáférhetnek a tananyagokhoz, bár esetleg korlátozott funkcionalitás mellett. Az ilyen időszakokban a rendszer teljesítményét folyamatosan monitorozni kell, és a felhasználókat tájékoztatni kell az elérhetőségről és a lehetséges korlátozásokról.</p>

        <h2 id="teljesitmeny" className="ml-8 text-xl font-bold text-sky-600 pt-6">6.5. Erőforrás igények</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify platformnak optimális erőforrás-igényekkel kell rendelkeznie, hogy biztosítsa a gördülékeny működést. A rendszernek legalább 4 CPU magra és 16 GB RAM-ra lesz szüksége a zökkenőmentes működéshez, különösen csúcsidőszakokban. A tárolókapacitásnak legalább 500 GB-nak kell lennie, hogy elegendő helyet biztosítson az adatok számára. A rendszer sávszélessége minimum 100 Mbps kell, hogy legyen, hogy támogassa a videós tananyagok és interaktív elemek folyamatos betöltését és a felhasználói élmény zökkenőmentességét.</p>

        <h2 id="tamogatottsag" className="ml-8 text-xl font-bold text-sky-600 pt-6">7. Támogatottság - Supportability</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify e-learning platform üzembe helyezése után a karbantartási feladatok zökkenőmentes végrehajtásához szükséges követelmények részletezése kiemelten fontos. Az alábbi alpontok bemutatják a szükséges követelményeket, amelyek segítik a karbantartást és a rendszer üzemeltetését.</p>

        <h2 id="tamogatottsag" className="ml-8 text-xl font-bold text-sky-600 pt-6">7.1. Kódolási szabványok és elnevezési konvenciók</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify rendszer fejlesztése során alkalmazott kódolási szabványok és elnevezési konvenciók megkönnyítik a kód karbantartását és a csapaton belüli együttműködést. A kódnak követnie kell a legjobb gyakorlatokat, például a DRY (Don’t Repeat Yourself) és KISS (Keep It Simple, Stupid) elveket. A változók és funkciók nevei legyenek beszédesek, hogy azonnal érthető legyen a céljuk. Az elnevezésekben alkalmazni kell az egységes írásmódot (pl. camelCase vagy snake_case), és az osztályok, valamint a funkciók elnevezésekor kerülni kell a rövidítéseket.</p>

        <h2 id="tamogatottsag" className="ml-8 text-xl font-bold text-sky-600 pt-6">7.2. Karbantartóknak és üzemeltetőknek szükséges funkciók</h2>

        <p className="pl-[5.3rem] pt-6">A rendszer üzemeltetése során a karbantartóknak és üzemeltetőknek biztosítani kell a hozzáférést a következő funkciókhoz: hibakódok diagnosztizálása, rendszerállapot figyelése, és az adatbázis karbantartása. Ezen kívül a karbantartóknak lehetőséget kell biztosítani az adatok biztonsági mentésére és visszaállítására, valamint a rendszerfrissítések telepítésére. A funkcióknak intuitív felhasználói felületen kell rendelkezésre állniuk, hogy a karbantartás során a felhasználók gyorsan és hatékonyan tudjanak dolgozni.</p>

        <h2 id="tamogatottsag" className="ml-8 text-xl font-bold text-sky-600 pt-6">7.3. Működés során keletkező naplók</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify rendszer működése során keletkező naplók (logok) kulcsszerepet játszanak a hibakeresés és a finomhangolás folyamatában. A naplóknak részletes információkat kell tartalmazniuk a rendszer eseményeiről, beleértve a felhasználói interakciókat, a rendszerhibákat és a teljesítményadatokat. A naplókat rendszeresen archiválni kell, és a hibák diagnosztizálásához szükséges információk könnyen hozzáférhető formátumban kell, hogy álljanak rendelkezésre.</p>

        <h2 id="tamogatottsag" className="ml-8 text-xl font-bold text-sky-600 pt-6">7.4. Karbantartók munkáját segítő segédalkalmazások</h2>

        <p className="pl-[5.3rem] pt-6">A karbantartók munkájának megkönnyítése érdekében olyan segédalkalmazásokat kell kifejleszteni, amelyek lehetővé teszik a naplók kiértékelését, a rendszer teljesítményének figyelését, és a hibák diagnosztizálását. Ezek az alkalmazások tartalmazhatnak grafikus felhasználói felületeket, amelyek segítik a naplók vizualizálását és az adatok elemzését. A segédalkalmazásoknak támogatniuk kell a különböző formátumú naplók importálását és exportálását is, hogy a karbantartók könnyen tudják kezelni az információkat.</p>

        <h2 id="tervezesikorlatozasok" className="ml-8 text-xl font-bold text-sky-600 pt-6">8. Tervezési korlátozások - Design Constraints</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify e-learning platform tervezési és implementációs munkálatait számos korlátozás befolyásolja. Az alábbi alpontok részletezik ezeket a korlátozásokat, amelyek figyelembevételével kell megvalósítani a rendszert.</p>

        <h2 id="tervezesikorlatozasok" className="ml-8 text-xl font-bold text-sky-600 pt-6">8.1. Kívánatos architektúrára vonatkozó előírások</h2>

        <p className="pl-[5.3rem] pt-6">A rendszernek háromrétegű architektúrára (three-tier architecture) kell épülnie, amely magában foglalja a prezentációs réteget, az üzleti logikát és az adatkezelési réteget. A prezentációs réteg felelős a felhasználói felület megjelenítéséért és a felhasználói interakciók kezeléséért, míg az üzleti logika réteg tartalmazza az alkalmazás fő funkcióit és a felhasználói igények kiszolgálását. Az adatkezelési réteg biztosítja az adatok tárolását és lekérdezését, így a rendszer modularitása és karbantarthatósága magas szintű lesz.</p>

        <h2 id="tervezesikorlatozasok" className="ml-8 text-xl font-bold text-sky-600 pt-6">8.2. Programozási nyelvek</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify rendszer fejlesztéséhez a Java programozási nyelvet kell használni a backend fejlesztéshez, mivel ez biztosítja a skálázhatóságot és a megbízhatóságot. A frontend fejlesztéshez a React.js keretrendszert kell alkalmazni, amely lehetővé teszi a dinamikus felhasználói felületek kialakítását és a felhasználói élmény javítását. A két nyelv közötti kommunikáció RESTful API-k segítségével fog történni.</p>

        <h2 id="tervezesikorlatozasok" className="ml-8 text-xl font-bold text-sky-600 pt-6">8.3. Fejlesztőeszközök</h2>

        <p className="pl-[5.3rem] pt-6">A fejlesztés során a következő eszközöket kell használni: IntelliJ IDEA a backend fejlesztéshez, Visual Studio Code a frontend munkákhoz, valamint Git a verziókezeléshez. Az IntelliJ IDEA környezet támogatja a Java nyelvet és számos beépített eszközt kínál a hibakereséshez, míg a Visual Studio Code könnyen testre szabható, így ideális a frontend fejlesztéshez. A Git lehetővé teszi a csapatmunkát és a kódváltoztatások nyomon követését.</p>

        <h2 id="tervezesikorlatozasok" className="ml-8 text-xl font-bold text-sky-600 pt-6">8.4. Újrahasználható elemek</h2>

        <p className="pl-[5.3rem] pt-6">A rendszerbe beépítendő újrahasználható elemek közé tartozik a NextJS, amely megkönnyíti a fejlesztést és csökkentik a kód redundanciáját. A NextJS biztosítja az alkalmazás modularitását és a konfiguráció egyszerűségét, segíti az adatbázis-kezelést és a lekérdezések optimalizálását. Ezek az elemek javítják a fejlesztési folyamat hatékonyságát és gyorsítják az implementációt.</p>

        <h2 id="tervezesikorlatozasok" className="ml-8 text-xl font-bold text-sky-600 pt-6">8.5. Fejlesztési módszertan</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify rendszer fejlesztéséhez az Agile módszertan alkalmazása javasolt. Ez lehetővé teszi a rugalmas tervezést és a gyors alkalmazkodást a változó követelményekhez. A rendszer fejlesztését iterációkban végezzük, amelyek során folyamatosan teszteljük a készülő alkalmazást, és a felhasználói visszajelzéseket is figyelembe vesszük. Ezzel biztosítható, hogy a végtermék megfeleljen a felhasználói igényeknek és a piaci elvárásoknak.</p>

        <h2 id="dokumentacio" className="ml-8 text-xl font-bold text-sky-600 pt-6">9. On-line dokumentáció és Help rendszer</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify e-learning platform esetében elengedhetetlen az online dokumentáció és a Help rendszer megvalósítása. Ezek a rendszerek nemcsak a felhasználói élmény javítását szolgálják, hanem támogatják a felhasználók gyors betanulását és az esetleges problémák megoldását is. Az alábbiakban részletezzük az ezzel kapcsolatos követelményeket.</p>

        <h2 id="dokumentacio" className="ml-8 text-xl font-bold text-sky-600 pt-6">9.1. Online dokumentáció szükségessége</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify platformhoz szükséges egy átfogó online dokumentáció, amely részletesen bemutatja a rendszer használatát. Ez magában foglalja a rendszer funkcióinak leírását, a felhasználói felület elemeinek magyarázatát, valamint a gyakran ismételt kérdéseket (FAQ). Az online dokumentációnak könnyen navigálható és kereshető formátumban kell elérhetőnek lennie, hogy a felhasználók gyorsan rátaláljanak a szükséges információkra.</p>

        <h2 id="dokumentacio" className="ml-8 text-xl font-bold text-sky-600 pt-6">9.2. Help rendszer funkciói</h2>

        <p className="pl-[5.3rem] pt-6">A Help rendszer célja, hogy azonnali segítséget nyújtson a felhasználóknak a rendszer használata során felmerülő kérdésekre és problémákra. Ez magában foglalja a kontextuális segítséget, amely a felhasználói felületen elérhető, és lehetővé teszi a felhasználók számára, hogy az aktuális nézetből vagy funkcióból közvetlenül elérjék a releváns információkat. A Help rendszer tartalmazhat tippeket, útmutatókat és videókat is, amelyek segítik a felhasználókat a különböző funkciók megértésében.</p>

        <h2 id="dokumentacio" className="ml-8 text-xl font-bold text-sky-600 pt-6">9.3. Képzési anyagok elérhetősége</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify rendszerhez tartozó online dokumentációnak magában kell foglalnia a képzési anyagokat is, amelyek segítik a felhasználók betanulását. Ezek lehetnek útmutatók, e-könyvek, oktatóvideók és webináriumok, amelyek lépésről lépésre bemutatják a rendszer funkcióit és használatát. A képzési anyagokat könnyen hozzáférhetővé kell tenni, és lehetőséget kell biztosítani a felhasználók számára, hogy saját tempójukban tanuljanak.</p>

        <h2 id="dokumentacio" className="ml-8 text-xl font-bold text-sky-600 pt-6">9.4. Felhasználói visszajelzés gyűjtése</h2>

        <p className="pl-[5.3rem] pt-6">A Help rendszer keretében fontos, hogy a felhasználók számára lehetőséget biztosítsunk visszajelzésük megosztására a dokumentációval és a Help funkcióval kapcsolatban. Ez segít az online dokumentáció folyamatos fejlesztésében, és biztosítja, hogy a felhasználók igényei figyelembe legyenek véve. A visszajelzéseket rendszeresen elemezni kell, és a dokumentációban szükséges módosításokat el kell végezni a felhasználói élmény javítása érdekében.</p>

        <h2 id="komponensek" className="ml-8 text-xl font-bold text-sky-600 pt-6">10. Felhasznált kész komponensek - Third-party Components</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify e-learning platform fejlesztése során számos harmadik féltől származó komponenst tervezünk integrálni a rendszerbe. Ezek a komponensek segítenek a fejlesztési folyamat felgyorsításában, a költségek csökkentésében és a felhasználói élmény fokozásában. Az alábbiakban részletezzük a felhasználni kívánt komponenseket, azok beszerzési körülményeit, költségeit és a vonatkozó licenszelési szabályokat.</p>




        <h2 id="komponensek" className="ml-8 text-xl font-bold text-sky-600 pt-6">10.1. Statisztikai és analitikai eszköz</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <li><span className="font-bold">Komponens neve:</span> Google Analytics</li>
          <li><span className="font-bold">Típus:</span> Ingyenes analitikai eszköz</li>
          <li><span className="font-bold">Forrás:</span> Google Analytics</li>
          <li><span className="font-bold">Licensz:</span> Ingyenes</li>
          <li><span className="font-bold">Költségek:</span> Ingyenes a legtöbb alapfunkcióhoz, a prémium szolgáltatások költségei változóak.</li>
          <li><span className="font-bold">Használati feltételek:</span> Az adatvédelmi irányelveknek megfelelően kell használni, és tájékoztatni kell a felhasználókat az adatgyűjtésről.</li>
          <li><span className="font-bold">Következmények:</span> AA Google Analytics használata során ügyelni kell a GDPR betartására, és biztosítani kell a felhasználói adatok védelmét.</li>
        </ul>


        <h2 id="komponensek" className="ml-8 text-xl font-bold text-sky-600 pt-6">10.2. Kép- és videószerkesztő eszköz</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <li><span className="font-bold">Komponens neve:</span> Adobe Photoshop</li>
          <li><span className="font-bold">Típus:</span> Professzionális videó- és képszerkesztő szoftver</li>
          <li><span className="font-bold">Forrás:</span> adobe.com</li>
          <li><span className="font-bold">Licensz:</span> Előfizetéses licenc, Creative Cloud előfizetéssel</li>
          <li><span className="font-bold">Költségek:</span> Havonta vagy évente fizetendő előfizetési díj, különböző csomagokban érhető el, kb. 55-60 USD / hó.</li>
          <li><span className="font-bold">Használati feltételek:</span> A szoftver használatához érvényes Adobe Creative Cloud előfizetés szükséges. Az előfizetés az Adobe felhasználási feltételeinek elfogadásával jár.</li>
          <li><span className="font-bold">Következmények:</span> A Photoshop széleskörű szerkesztési lehetőségeket biztosít, azonban a folyamatos frissítések és előfizetési költségek figyelemmel kísérése szükséges a stabil és legújabb funkciók eléréséhez.</li>
        </ul>


        <h2 id="komponensek" className="ml-8 text-xl font-bold text-sky-600 pt-6">10.3. Webes analitikai keretrendszer</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <li><span className="font-bold">Komponens neve:</span> Hotjar</li>
          <li><span className="font-bold">Típus:</span> Webes analitikai eszköz</li>
          <li><span className="font-bold">Forrás:</span> Hotjar.com</li>
          <li><span className="font-bold">Licensz:</span> Ingyenes és prémium verzió</li>
          <li><span className="font-bold">Költségek:</span> Az ingyenes verzió korlátozott funkciókkal rendelkezik; a prémium verzió havi 39 USD-tól kezdődően érhető el.</li>
          <li><span className="font-bold">Használati feltételek:</span> A felhasználói adatok védelmét biztosítani kell a GDPR előírásai szerint.</li>
          <li><span className="font-bold">Következmények:</span> A Hotjar használatakor figyelemmel kell kísérni a felhasználói visszajelzéseket, hogy javítsuk a platform teljesítményét és a felhasználói élményt.</li>
        </ul>

        <h2 id="komponensek" className="ml-8 text-xl font-bold text-sky-600 pt-6">10.4. E-learning sablonok</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <li><span className="font-bold">Komponens neve:</span> Articulate Storyline</li>
          <li><span className="font-bold">Típus:</span> E-learning fejlesztő eszköz</li>
          <li><span className="font-bold">Forrás:</span> Articulate.com</li>
          <li><span className="font-bold">Licensz:</span> Fizetős licensz</li>
          <li><span className="font-bold">Költségek:</span> Éves előfizetés, körülbelül 999 USD.</li>
          <li><span className="font-bold">Használati feltételek:</span> Az Articulate Storyline felhasználási feltételei szerint a szoftver használatához megfelelő licensz szükséges, és a projektjeinket nem oszthatjuk meg nyilvánosan a szükséges engedélyek nélkül.</li>
          <li><span className="font-bold">Következmények:</span> A Storyline használata során biztosítani kell a minőségi tananyagok készítését, és figyelemmel kell lenni a felhasználói élményre.</li>
        </ul>

        <h2 id="komponensek" className="ml-8 text-xl font-bold text-sky-600 pt-6">10.5. Adatbázis-kezelő rendszer</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <li><span className="font-bold">Komponens neve:</span> MySQL</li>
          <li><span className="font-bold">Típus:</span> Nyílt forráskódú adatbázis-kezelő rendszer</li>
          <li><span className="font-bold">Forrás:</span> MySQL.com</li>
          <li><span className="font-bold">Licensz:</span> GPL, MySQL Commercial License</li>
          <li><span className="font-bold">Költségek:</span> Az alap MySQL ingyenes, de a vállalati verzió költségei eltérőek.</li>
          <li><span className="font-bold">Használati feltételek:</span> A GPL licensz szerint a MySQL ingyenesen használható, de a kereskedelmi célú felhasználás esetén a megfelelő licensz megvásárlása szükséges.</li>
          <li><span className="font-bold">Következmények:</span> Az adatbázis-kezelés során figyelni kell a biztonságra és az adatok védelmére.</li>
        </ul>

        <h2 id="komponensek" className="ml-8 text-xl font-bold text-sky-600 pt-6">10.6. Felhasználói autentikációs rendszer</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <li><span className="font-bold">Komponens neve:</span> Clerk</li>
          <li><span className="font-bold">Típus:</span> Felhasználói azonosítási szolgáltatás</li>
          <li><span className="font-bold">Forrás:</span> clerk.com</li>
          <li><span className="font-bold">Licensz:</span> Freemium modell</li>
          <li><span className="font-bold">Költségek:</span> Az ingyenes verzió 10000 havi aktív felhasználót támogat, a prémium funkciók körülbelül 25 USD-tól kezdődnek.</li>
          <li><span className="font-bold">Használati feltételek:</span> Az Clerk használata során be kell tartani a szolgáltatás által meghatározott adatkezelési irányelveket.</li>
          <li><span className="font-bold">Következmények:</span> A felhasználói adatokat a legszigorúbb adatvédelmi előírásoknak megfelelően kell kezelni.</li>
        </ul>



        <h2 id="intefeszek" className="ml-8 text-xl font-bold text-sky-600 pt-6">11. Interfészek - Interfaces</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify e-learning platform különféle interfészeket tartalmaz, amelyek lehetővé teszik a felhasználók számára a rendszer használatát, valamint a rendszer integrálását más alkalmazásokkal és hardverelemekkel. Az alábbiakban részletezzük a különböző interfészeket, beleértve a felhasználói interfészeket, hardver interfészeket, szoftver interfészeket és kommunikációs interfészeket.</p>

        <h2 id="felhasznaloiinterfeszek" className="ml-8 text-xl font-bold text-sky-600 pt-6">11.1. Felhasználói interfészek - User Interfaces</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <p className="pb-6">A Learnify felhasználói interfészeinek megtervezésekor figyelembe kell venni a következő szempontokat:</p>

          <li><span className="font-bold">Szabványok:</span> A felhasználói interfésznek meg kell felelnie a W3C webes szabványainak, beleértve az akadálymentességet, a HTML5 és CSS3 legjobb gyakorlatainak alkalmazását, valamint a Responsive Web Design (RWD) elveit.</li>
          <li><span className="font-bold">Stílus:</span> A felhasználói felület kialakításakor figyelembe kell venni a modern design trendeket, mint például a minimalista stílust, amely a felhasználói élményt fokozza, és megkönnyíti a navigációt.</li>
          <li><span className="font-bold">Felhasználói csoportok:</span> A felhasználói interfész testreszabásakor külön figyelmet kell fordítani a felhasználók. A kurzuskitöltők számára intuitív, könnyen navigálható felületet kell kialakítani, míg az kurzuslétrehozók számára bonyolultabb funkciók és eszközök biztosítása szükséges.</li>
          <li><span className="font-bold">Leglényegesebb elemek:</span> A felhasználói felület főbb elemei közé tartozik a navigációs sáv, a keresőmező, a profil beállítások, a tananyagok listája, valamint a visszajelzési és értékelési lehetőségek. Az elemek elrendezése során ügyelni kell a vizuális hierarchiára és a felhasználói élményre.</li>
          <li><span className="font-bold">Akadálymentesség:</span> A felhasználói interfésznek minden felhasználó számára hozzáférhetőnek kell lennie, beleértve a látás-, hallás- vagy mozgáskorlátozott felhasználókat. Az akadálymentesítés érdekében a rendszernek támogatnia kell a képernyőolvasókat és az alternatív navigációs eszközöket.</li>

        </ul>

        <h2 id="hardwareinterfeszek" className="ml-8 text-xl font-bold text-sky-600 pt-6">11.2. Hardware interfészek - Hardware Interfaces</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <p className="pb-6">A Learnify platformnak nem állnak rendelkezésére speciális hardver interfészek, de figyelembe kell venni a következőket:</p>

          <li><span className="font-bold">Eszközkompatibilitás:</span> A platformnak kompatibilisnek kell lennie a leggyakoribb hardvereszközökkel, például asztali számítógépekkel, laptopokkal, táblagépekkel és okostelefonokkal.</li>
          <li><span className="font-bold">Különleges hardverigények:</span> Ha a platform bármilyen speciális hardvert igényel, például VR headsetek, akkor ezeket a követelményeket a specifikációban egyértelműen meg kell határozni.</li>
        </ul>

        <h2 id="sotfwareinterfeszek" className="ml-8 text-xl font-bold text-sky-600 pt-6">11.3. Software interfészek - Software Interfaces</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <p className="pb-6">A Learnify platform szoftver interfészei a következőket foglalják magukban:</p>

          <li><span className="font-bold">API Integráció:</span> A rendszernek képesnek kell lennie más alkalmazásokkal való integrációra, például LMS rendszerekkel, harmadik féltől származó analitikai eszközökkel és gamifikációs keretrendszerekkel. Az API-k dokumentációjának részletezése elengedhetetlen a zökkenőmentes integráció érdekében.</li>
          <li><span className="font-bold">Adatbázis Kapcsolat:</span> A platformnak hatékonyan kell kapcsolódnia a választott adatbázis-kezelő rendszerhez (például MySQL), amely lehetővé teszi a tananyagok és felhasználói adatok tárolását és kezelését.</li>
          <li><span className="font-bold">Harmadik fél szoftverek:</span> Ha a rendszer használ harmadik féltől származó szoftvereket, például analitikai vagy e-learning fejlesztő eszközöket, akkor ezek integrálásának részletes követelményeit is meg kell határozni.</li>
        </ul>

        <h2 id="kommunikaciosinterfeszek" className="ml-8 text-xl font-bold text-sky-600 pt-6">11.4. Kommunikációs interfészek - Communications Interfaces</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <p className="pb-6">A Learnify platform kommunikációs interfészeinek megvalósítása során az alábbiakat kell figyelembe venni:</p>

          <li><span className="font-bold">Internetkapcsolat:</span> A rendszernek stabil internetkapcsolatra van szüksége a felhasználók számára a tananyagok eléréséhez és a platform funkcionalitásának kihasználásához.</li>
          <li><span className="font-bold">Mobilalkalmazás:</span> A rendszernek támogatnia kell a mobiltelefonos kliens alkalmazásokat, amelyek lehetővé teszik a felhasználók számára, hogy bárhol és bármikor hozzáférjenek a tananyagokhoz.</li>
          <li><span className="font-bold">Push értesítések:</span> A platformnak képesnek kell lennie push értesítések küldésére a felhasználók számára, hogy tájékoztassák őket új tartalmakról, közelgő határidőkről vagy más fontos eseményekről.</li>
          <li><span className="font-bold">Email integráció:</span> A rendszernek lehetőséget kell biztosítania az e-mail alapú kommunikációra, beleértve a regisztrációs, értesítési és visszajelzési folyamatokat.</li>
        </ul>

        <h2 id="alkalmazottszabvanyok" className="ml-8 text-xl font-bold text-sky-600 pt-6">12. Alkalmazott szabványok - Applicable Standards</h2>

        <p className="pl-[5.3rem] pt-6">A "Learnify" e-learning platform fejlesztése során fontos, hogy a rendszer megfeleljen a különböző technikai és szakterületi szabványoknak, valamint a törvényi előírásoknak. Ezek a szabványok biztosítják a platform minőségét, biztonságát, és megfelelőségét, valamint hozzájárulnak a felhasználói élmény javításához. Az alábbiakban a kötelezően és a választás alapján alkalmazandó szabványokat részletezzük.</p>

        <h2 id="kotelezoszabvanyok" className="ml-8 text-xl font-bold text-sky-600 pt-6">12.1. Kötelezően alkalmazandó szabványok - Mandatory Standards</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <li><span className="font-bold">GDPR (General Data Protection Regulation): </span> A platformnak meg kell felelnie az EU által bevezetett általános adatvédelmi rendeletnek, amely előírja a felhasználói adatok védelmét és azok kezelésének átláthatóságát. A személyes adatok gyűjtése, tárolása és feldolgozása során a felhasználóknak tájékoztatást kell kapniuk jogaikról.</li>
          <li><span className="font-bold">Accessibility Standards (WCAG 2.1):</span> A webes akadálymentesség irányelvek (Web Content Accessibility Guidelines) 2.1 verziójának való megfelelés szükséges a platform számára, amely biztosítja, hogy a rendszer minden felhasználó, beleértve a fogyatékkal élőket is, számára hozzáférhető legyen.</li>
          <li><span className="font-bold">Copyright Law:</span> A platformnak figyelembe kell vennie a szerzői jogi törvényeket, hogy megakadályozza a szellemi tulajdon jogsértését a tananyagok és a felhasználói tartalmak esetén.</li>
          <li><span className="font-bold">E-learning Standards (SCORM, xAPI):</span> A tananyagok fejlesztése során a platformnak meg kell felelnie a Sharable Content Object Reference Model (SCORM) és a Experience API (xAPI) szabványoknak, amelyek lehetővé teszik a tanulási tartalmak interoperabilitását és nyomon követését.</li>
          <li><span className="font-bold">Data Security Standards (ISO/IEC 27001):</span> A platformnak biztosítania kell a felhasználói adatok védelmét a legmagasabb szintű biztonsági intézkedések alkalmazásával, beleértve az ISO/IEC 27001 szabványoknak való megfelelést, amely az információbiztonság irányítási rendszerének követelményeit határozza meg.</li>
        </ul>

        <h2 id="valasztottszabvanyok" className="ml-8 text-xl font-bold text-sky-600 pt-6">12.2. Választás alapján alkalmazott szabványok - Optional Standards</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <li><span className="font-bold">Responsive Web Design (RWD):</span> A platform fejlesztése során a választás alapján alkalmazott szabvány a reszponzív webdesign, amely lehetővé teszi a felhasználói felület automatikus alkalmazkodását különböző képernyőméretekhez és eszközökhöz, javítva ezzel a felhasználói élményt.</li>
          <li><span className="font-bold">Agile Development Practices:</span> A fejlesztők választhatják az agilis módszertanokat a fejlesztési folyamat során, amely lehetővé teszi a rugalmasságot és a gyors alkalmazkodást a változó követelményekhez.</li>
          <li><span className="font-bold">Color Accessibility Guidelines:</span> A platform fejlesztése során a színek használatának akadálymentességi irányelvei is figyelembe vehetők, amelyek segítenek biztosítani, hogy a színek ne jelentsenek akadályt a látássérült felhasználók számára.</li>
          <li><span className="font-bold">User-Centered Design (UCD):</span> Az alkalmazott felhasználó-központú tervezési irányelvek alkalmazása segít abban, hogy a platform a felhasználók igényeit és preferenciáit figyelembe véve legyen kialakítva.
          </li>
          <li><span className="font-bold">HTML5 and CSS3 Best Practices:</span> A HTML5 és CSS3 legjobb gyakorlatait a fejlesztési folyamat során figyelembe kell venni, hogy a platform korszerű és jól optimalizált legyen.</li>
        </ul>

        <h2 id="mellekletek" className="ml-8 text-xl font-bold text-sky-600 pt-6">13. Mellékletek - Appendix</h2>

        <p className="pl-[5.3rem] pt-6">A Learnify e-learning platform szoftver követelmény specifikációjának mellékletei tartalmazzák a dokumentum áttekinthetőségét és hasznos információkat, amelyek segítik a fejlesztési folyamat megértését. Az alábbiakban különböző típusú mellékleteket és hivatkozásokat ismertetünk, amelyek a dokumentációban szereplő információkhoz való könnyebb hozzáférést biztosítanak.</p>

        <h2 id="mellekletek" className="ml-8 text-xl font-bold text-sky-600 pt-6">13.1. Irodalomjegyzék</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <li><span className="font-bold">Hírek és trendek az e-learningben:</span> Számos forrás áll rendelkezésre, amelyek a legújabb e-learning trendekről és a gamifikációról szólnak. Ilyenek például a "Educational Technology Journal" és a "Journal of Online Learning Research".</li>
          <li><span className="font-bold">Gamifikáció elméletek:</span> A gamifikációs elméletek széleskörű kutatások alapján alakultak ki, amelyek részletesen tárgyalják a motivációs mechanizmusokat, mint például a "Game Design Workshop" és "The Gamification of Learning and Instruction".</li>
          <li><span className="font-bold">Adatvédelmi és biztonsági irányelvek:</span> Az EU GDPR irányelvei és más vonatkozó adatvédelmi szabályozások, mint például a "Data Protection Act" és a "California Consumer Privacy Act", amelyeket figyelembe kell venni a felhasználói adatok védelme érdekében.</li>
        </ul>

        <h2 id="mellekletek" className="ml-8 text-xl font-bold text-sky-600 pt-6">13.2. Kapcsolódó dokumentumok</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <li><span className="font-bold">Projektterv:</span> A Learnify e-learning platform projektterve, amely részletesen bemutatja a fejlesztési fázisokat, a költségvetést és az ütemtervet.</li>
          <li><span className="font-bold">Követelménygyűjtési dokumentáció:</span> A rendszerrel kapcsolatos követelmények összegyűjtésének eredménye, amely tartalmazza a felhasználói visszajelzéseket és a piaci igények elemzését.</li>
          <li><span className="font-bold">Tesztelési terv:</span> A Learnify platform tesztelési tervét, amely részletezi a különböző tesztelési fázisokat, a használt tesztelési eszközöket és a várt eredményeket.</li>
          <li><span className="font-bold">Karbantartási útmutató:</span> A karbantartási és üzemeltetési útmutató, amely tartalmazza a szükséges eljárásokat és ajánlásokat a rendszer hatékony működtetéséhez.</li>
        </ul>

        <h2 id="mellekletek" className="ml-8 text-xl font-bold text-sky-600 pt-6">13.3. Egyéb források</h2>

        <ul className="pl-[5.3rem] pt-6 list-disc list-inside">
          <li><span className="font-bold">Online fórumok:</span> A platform felhasználói számára elérhető online fórumok, ahol megoszthatják tapasztalataikat és kérdéseiket a "Learnify" platform használatával kapcsolatban.</li>
          <li><span className="font-bold">Webináriumok és workshopok:</span> A felhasználók számára szervezett webináriumok és workshopok, amelyek a platform funkcióinak mélyebb megismerését és a gamifikációs elemek kihasználását célozzák.</li>
          <li><span className="font-bold">Képzési anyagok:</span> Különböző képzési anyagok, mint például videók, interaktív modulok és útmutatók, amelyek segítik a felhasználókat a platform hatékonyabb használatában.</li>
        </ul>
        </div>

    </>
  );
}
