const array = [ //táblázat adatainak létrehozása tömb formájában
    {
        szarmazas: "Orosz", //értékadás az array első elemen belül a szarmazas tulajdonságnak
        szerzo1: "Gogol", //értékadás az array első elemen belül a szerzo1 tulajdonságnak
        mu1: "A köpönyeg", //értékadás az array első elemen belül a mu1 tulajdonságnak
        szerzo2: "Csehov", //értékadás az array első elemen belül a szerzo2 tulajdonságnak
        mu2: "A csinovnyik halála" //értékadás az array első elemen belül a mu2 tulajdonságnak
    },
    {
        szarmazas: "Cseh", //értékadás az array második elemen belül a szarmazas tulajdonságnak
        szerzo1: "Franz Kafka", //értékadás az array második elemen belül a szerzo1 tulajdonságnak
        mu1: "Az átváltozás", //értékadás az array második elemen belül a mu1 tulajdonságnak
    },
    {
        szarmazas: "Magyar", //értékadás az array harmadik elemen belül a szarmazas tulajdonságnak
        szerzo1: "Örkény István", //értékadás az array harmadik elemen belül a szerzo1 tulajdonságnak
        mu1: "Egyperces Novellák", //értékadás az array harmadik elemen belül a mu1 tulajdonságnak
        szerzo2: "József Attila", //értékadás az array harmadik elemen belül a szerzo2 tulajdonságnak
        mu2: "Klárisok" //értékadás az array harmadik elemen belül a mu2 tulajdonságnak
    },
    {
        szarmazas: "Svájc", //értékadás az array negyedik elemen belül a szarmazas tulajdonságnak
        szerzo1: "Friedrich Dürrenmatt", //értékadás az array negyedik elemen belül a szerzo1 tulajdonságnak
        mu1: "A fizikusok", //értékadás az array negyedik elemen belül a mu1 tulajdonságnak
    }
];

function renderMenu() {
    const headers = [
        { text: "Nemzetiség" },
        { text: "Szerző" },
        { text: "Mű" }
    ]; //fejléc adatainak tárolása

    const table = document.createElement('table'); //táblázat létrehozása
    table.id = "table"; //id hozzáadása a táblázathoz a könnyebb manipuláció érdekében
    document.body.appendChild(table); //táblázat hozzáadása a dokumentum törzséhez

    const thead = document.createElement('thead'); //fejléc rész létrehozása
    table.appendChild(thead); //fejléc hozzáadása a táblázathoz

    const headerRow = document.createElement('tr'); //fejléc sor létrehozása
    thead.appendChild(headerRow); //fejléc sor hozzáadása a fejléc részhez

    for (let i = 0; i < headers.length; i++) { //fejléc cellák dinamikus létrehozása
        const headerCell = document.createElement('th'); //új cella létrehozása
        headerCell.innerHTML = headers[i].text; //cellába írjuk a fejléc szöveget
        headerRow.appendChild(headerCell); //cella hozzáadása a fejléc sorhoz
    }

    const tbody = document.createElement('tbody'); //táblázat törzs részének létrehozása
    table.appendChild(tbody); //törzs hozzáadása a táblázathoz

    for (const currentElement of array) { //végigiterálunk az adatok tömbjén
        addRowToTable(currentElement, tbody); //új sor hozzáadása a táblázathoz
    }
}

function addRowToTable(data, tbody) {
    const row1 = document.createElement('tr'); //új sor létrehozása
    tbody.appendChild(row1); //sor hozzáadása a törzshöz

    const row1Cell1 = document.createElement('td'); //első cella létrehozása
    row1Cell1.innerHTML = data.szarmazas; //szarmazas adat beírása
    row1Cell1.classList.add('column'); //column osztály hozzáadása
    row1Cell1.rowSpan = data.szerzo2 ? '2' : '1'; //rowspan beállítása
    row1.appendChild(row1Cell1); //cella hozzáadása a sorhoz

    const row1Cell2 = document.createElement('td'); //második cella létrehozása
    row1Cell2.innerHTML = data.szerzo1; //szerzo1 adat beírása
    row1.appendChild(row1Cell2); //cella hozzáadása a sorhoz

    const row1Cell3 = document.createElement('td'); //harmadik cella létrehozása
    row1Cell3.innerHTML = data.mu1; //mu1 adat beírása
    row1Cell3.classList.add('column'); //column osztály hozzáadása
    row1.appendChild(row1Cell3); //cella hozzáadása a sorhoz

    if (data.szerzo2) { //ha van második szerző, új sort adunk hozzá
        const row2 = document.createElement('tr'); //második sor létrehozása
        tbody.appendChild(row2); //sor hozzáadása a törzshöz

        const row2Cell2 = document.createElement('td'); //második cella a második sorhoz
        row2Cell2.innerHTML = data.szerzo2; //szerzo2 adat beírása
        row2.appendChild(row2Cell2); //cella hozzáadása a sorhoz

        const row2Cell3 = document.createElement('td'); //harmadik cella a második sorhoz
        row2Cell3.innerHTML = data.mu2; //mu2 adat beírása
        row2Cell3.classList.add('column'); //column osztály hozzáadása
        row2.appendChild(row2Cell3); //cella hozzáadása a sorhoz
    }
}

function validateForm(szarmazas, szerzo1, szerzo1mu, szerzo2, szerzo2mu) { //validacios fuggveny letrehozasa
    //ellenorizzuk, hogy a kotelezo mezok ki vannak-e toltve
    if (szarmazas.trim() === '' || szerzo1.trim() === '' || szerzo1mu.trim() === '') {
        return false; //ha valamelyik kotelezo mezo ures, nem ervenyes
    }
    //ellenorizzuk, hogy ha van masodik szerzo/mu, akkor mindketto ki van-e toltve
    if ((szerzo2.trim() !== '' && szerzo2mu.trim() === '') || (szerzo2.trim() === '' && szerzo2mu.trim() !== '')) {
        return false; //ha csak az egyik masodik mezo van kitoltve, nem ervenyes
    }
    return true; //ha minden ervenyes
}
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); //megakadályozza az alapértelmezett viselkedést

    const szarmazasElement = document.getElementById('szarmazas'); //elkérjük a szarmazas mezőt
    const szerzo1Element = document.getElementById('szerzo1'); //elkérjük az első szerző mezőt
    const szerzo1muElement = document.getElementById('szerzo1mu'); //elkérjük az első mű mezőt
    const szerzo2Element = document.getElementById('szerzo2'); //elkérjük a második szerző mezőt
    const szerzo2muElement = document.getElementById('szerzo2mu'); //elkérjük a második mű mezőt

    const szarmazasValue = szarmazasElement.value; //szarmazas neve érték
    const szerzo1Value = szerzo1Element.value; //első szerző érték
    const szerzo1muValue = szerzo1muElement.value; //első szerzőmű érték
    const szerzo2Value = szerzo2Element.value; //második szerző érték
    const szerzo2muValue = szerzo2muElement.value; //második mű érték

    if (!validateForm(szarmazasValue, szerzo1Value, szerzo1muValue, szerzo2Value, szerzo2muValue)) { //form validacio
        //ha nem ervenyes, hibauzeneteket jelenitunk meg
        if (szarmazasValue === '') { //szarmazas ellenorzes
            document.getElementById('szarmazas_error').textContent = 'A származás kitöltése kötelező!'; //hibauzenet
        } else {
            document.getElementById('szarmazas_error').textContent = ''; //hibauzenet torlese
        }

        if (szerzo1Value === '') { //elso szerzo ellenorzes
            document.getElementById('szerzo1_error').textContent = 'Az első szerő kitöltése kötelező!'; //hibauzenet
        } else {
            document.getElementById('szerzo1_error').textContent = ''; //hibauzenet torlese
        }

        if (szerzo1muValue === '') { //elso szerzo muvének ellenorzes
            document.getElementById('szerzo1mu_error').textContent = 'Az első mű kitöltése kötelező!'; //hibauzenet
        } else {
            document.getElementById('szerzo1mu_error').textContent = ''; //hibauzenet torlese
        }

        if ((szerzo2Value === '' && szerzo2muValue !== '') || (szerzo2Value !== '' && szerzo2muValue === '')) { //masodik szerzo es mu ellenorzes
            document.getElementById('szerzo2_error').textContent = 'Ha van második szerző vagy mű, mindkettő kitöltése kötelező!'; //hibauzenet
            document.getElementById('szerzo2mu_error').textContent = 'Ha van második szerző vagy mű, mindkettő kitöltése kötelező!'; //hibauzenet
        } else {
            document.getElementById('szerzo2_error').textContent = ''; //hibauzenet torlese
            document.getElementById('szerzo2mu_error').textContent = ''; //hibauzenet torlese
        }

        return; //kilep a fuggvenybol, ha a validacio nem sikeres
    }

    // Ha a validacio sikeres, toroljuk a hibauzeneteket
    document.getElementById('szarmazas_error').textContent = '';
    document.getElementById('szerzo1_error').textContent = '';
    document.getElementById('szerzo1mu_error').textContent = '';
    document.getElementById('szerzo2_error').textContent = '';
    document.getElementById('szerzo2mu_error').textContent = '';
    const newElement = { //új objektum
        szarmazas: szarmazasValue, //szarmazas neve
        szerzo1: szerzo1Value, //első szerző
        mu1: szerzo1muValue, //első mű
        szerzo2: szerzo2Value, //második szerző
        mu2: szerzo2muValue, //második mű
    };

    array.push(newElement); //hozzáadjuk az objektumot az arrayhez

    const table = document.getElementById('table'); //megkeressük a táblázatot
    const tbody = table.querySelector('tbody'); //megkeressük a táblázat törzsét
    addRowToTable(newElement, tbody); //új sor hozzáadása a táblázathoz

    //űrlapmezőket ürítjük
    szarmazasElement.value = '';
    szerzo1Element.value = '';
    szerzo1muElement.value = '';
    szerzo2Element.value = '';
    szerzo2muElement.value = '';
});





renderMenu(); //meghívjuk a renderMenu függvényt