export default function UserGuidebook() {
    const tableOfContents = [
        { number: "1.", title: "Bevezetés", id: "bevezetes" },
        { number: "2.", title: "Platform Áttekintés", id: "platform-attekintes" },
        { number: "3.", title: "Kurzus Létrehozása", id: "kurzus-letrehozasa" },
        { number: "4.", title: "Kurzus Keresés és Értékelés", id: "kereses-ertekeles" },
        { number: "5.", title: "Kurzus Felvétele", id: "kurzus-felvetele" },
        { number: "6.", title: "Bevételkezelés", id: "bevetelkezeles" },
        { number: "7.", title: "Felhasználói Profil", id: "felhasznaloi-profil" },
    ];

    return (
        <div className="font-sans text-gray-800 p-6">
          <h1 className="text-3xl text-center text-blue-600 mt-8 mb-4">
            Felhasználói Kézikönyv - Learnify Platform
          </h1>
    
          <nav>
            <ul>
              {tableOfContents.map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.number} {item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
    
          <section>
            <h2 id="bevezetes" className="text-xl font-bold text-sky-600 pt-6">1. Bevezetés</h2>
            <p className="mb-4">
              Üdvözöljük a <strong>Learnify</strong> platformon! A Learnify célja, hogy egy mindenki számára elérhető
              e-learning térként szolgáljon, ahol a felhasználók saját tananyagaikat hozhatják létre és oszthatják meg,
              másokét pedig értékelhetik.
            </p>
          </section>
    
          <section>
            <h2 id="platfrom-attekintes"  className="text-xl font-bold text-sky-600 pt-6">2. Platform Áttekintés</h2>
            <p className="mb-4">
              A Learnify lehetőséget biztosít mindenkinek, hogy kurzusokat készítsen és osszon meg, valamint hogy
              különböző témájú tananyagokat fedezzen fel és tanuljon új dolgokat.
            </p>
          </section>
    
          <section>
            <h2 id="kurzus-letrehozasa" className="text-xl font-bold text-sky-600 pt-6">3. Kurzusok Keresése és Böngészése</h2>
            <p className="mb-4">
              A keresési funkció segítségével a felhasználók gyorsan megtalálhatják a számukra megfelelő kurzusokat.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Keresési sáv</strong>: A főoldalon található keresősávban írja be a kívánt témát, majd nyomja meg az Enter gombot.
              </li>
              <li>
                <strong>Szűrés és Rendezés</strong>: Szűrje az eredményeket népszerűség, értékelések, ár és nehézségi szint alapján.
              </li>
              <li>
                <strong>Kategóriák</strong>: Böngésszen a különféle kategóriák között, mint például „Programozás” vagy „Üzlet”.
              </li>
            </ul>
          </section>
    
          <section>
            <h2 id="kereses-ertekeles" className="text-xl font-bold text-sky-600 pt-6">4. Kurzus Létrehozása és Beállítása</h2>
            <p className="mb-4">
              A kurzus létrehozásához kövesse az alábbi lépéseket:
            </p>
            <ol className="list-decimal list-inside mb-4">
              <li className="mb-2">
                <strong>Bejelentkezés a fiókba</strong>: Lépjen be, vagy regisztráljon új fiókot a platformon.
              </li>
              <li className="mb-2">
                <strong>Kurzus létrehozása gomb</strong>: A főoldalon kattintson a „Kurzus létrehozása” lehetőségre.
              </li>
              <li className="mb-2">
                <strong>Tartalom hozzáadása</strong>: Írjon egy rövid leírást, és adjon hozzá leckéket, amelyek lehetnek videók, szövegek, vagy akár interaktív tesztek is.
              </li>
            </ol>
          </section>
    
          <section>
            <h2 id="kurzus-felvetele" className="text-xl font-bold text-sky-600 pt-6">5. Kurzusok Értékelése és Véleményezése</h2>
            <p className="mb-4">
              A tanulók értékelhetik a kurzusokat, hogy visszajelzést adjanak a készítőknek és segíthessenek más
              felhasználóknak a választásban.
            </p>
          </section>
    
          <section>
            <h2 id="bevetelkezeles" className="text-xl font-bold text-sky-600 pt-6">6. Bevételkezelés</h2>
            <p className="mb-4">
              A kurzuskészítők bevételeket szerezhetnek, ha fizetős tananyagokat hoznak létre. A bevételek kezelése
              egyszerű és átlátható a platform pénzügyi oldalán.
            </p>
          </section>
    
          <section>
            <h2 id="felhasznaloi-profil" className="text-xl font-bold text-sky-600 pt-6">7. Felhasználói Profil és Előrehaladás</h2>
            <p className="mb-4">
              A felhasználói profil alatt nyomon követheti tanulási előrehaladását, elvégzett kurzusait és értékeléseit.
            </p>
          </section>
        </div>
      );

}
