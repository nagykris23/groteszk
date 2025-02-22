/**
 * form generálás
 */
function creatform() {
    // form letrehozasa
    const form = document.createElement('form'); // form elem letrehozasa
    form.id = 'form'; // form id beallitasa
    form.action = '#'; // form action beallitasa
    // mezo letrehozasa

    // a form elemeinek letrehozasa
    const fields = [
        { label: 'Származás:', id: 'szarmazas', name: 'szarmazas' },//származás mezó    
        { label: '1. szerző:', id: 'szerzo1', name: 'szerzo1' },//1 szerző mező
        { label: '1. szerző műve:', id: 'szerzo1mu', name: 'szerzo1mu' }, // 1 szerzú müve
        { label: '2. szerző:', id: 'szerzo2', name: 'szerzo2' },//2 szerzo müve
        { label: '2. szerző műve:', id: 'szerzo2mu', name: 'szerzo2mu' }//2 szerző müve
    ];
    //Végigmegyünk a mezők listáján, és létrehozzuk az űrlapelemeket
    for (const adat of fields) {
        //Létrehozunk egy új űrlapmezőt a megfelelő címkével, azonosítóval és névvel
        const fieldelement = createFormField(adat.label, adat.id, adat.name);
        form.appendChild(fieldelement);//appendeéljuk a formhoz
    }
    // gomb letrehozasa
    const button = document.createElement('button'); // gomb letrehozasa
    button.innerHTML = 'Hozzáadás'; // gomb szoveg beallitasa
    form.appendChild(button); // gomb hozzaadasa a formhoz
    // form hozzaadasa a bodyhoz
    document.body.appendChild(form);
}
/**
 * 
 * @param {string} labelText mezo cimkéje
 * @param {string} inputId mező idja
 * @param {string} inputName mező neve
 * @returns {HTMLElement} a létrehoztott mező konkrét eleme
 */
function createFormField(labelText, inputId, inputName) {
    const container = document.createElement('div')
    const label = document.createElement('label'); // label letrehozasa
    label.htmlFor = inputId; // label for attribútum beallitasa
    label.innerHTML = labelText; // label szoveg beallitasa

    const input = document.createElement('input'); // input mezo letrehozasa
    input.type = 'text'; // input tipus beallitasa
    input.id = inputId; // input id beallitasa
    input.name = inputName; // input name beallitasa

    const errorSpan = document.createElement('span'); // hibauzenet hely letrehozasa
    errorSpan.id = `${inputId}_error`; // hibauzenet id beallitasa
    errorSpan.className = 'error'; // hibauzenet osztaly beallitasa
    // elem hozzaadasa a formhoz
    container.appendChild(label); // label hozzaadasa
    container.appendChild(document.createElement('br')); // uj sor hozzaadasa
    container.appendChild(input); // input mezo hozzaadasa
    container.appendChild(document.createElement('br')); // uj sor hozzaadasa
    container.appendChild(errorSpan); // hibauzenet hely hozzaadasa
    container.appendChild(document.createElement('br')); // uj sor hozzaadasa
    return container
}
/**
 * menu generálása
 */
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
/**
 * 
 * @param {Object} data a sor adatai
 * @param {HTMLElement} tbody táblázat törzs eleme
 */
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
/**
 * 
 * @param {string} szarmazas szarmazás
 * @param {string} szerzo1 1 szerző
 * @param {string} szerzo1mu 1 szerző mu értéke
 * @param {string} szerzo2 2 szerző 
 * @param {string} szerzo2mu 2 szerzo mu értéke
 * @returns {boolean} igaz  vagy hamis lehet a vissza térése 
 */
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