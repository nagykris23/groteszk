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

creatform()//meghivjuk a függvényt
renderMenu()//meghívjuk a renderMenu függvényt
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

