
var vorlage = " <div>" +
                    "<button class=\"zurueck\" id=\"zurueck\" onclick=\"zeige_uebersicht()\"> ◀ ABC</button>" +
                "</div>" +
                "<div class=\"anzeige-buchstabe center\">" +
                    "###BUCHSTABE_G### ###BUCHSTABE_K### " +
                    "<image src=\"./assets/images/ton.png\" class=\"ton\" onclick=\"sprich('###BUCHSTABE_K###')\"></image>" +
                "</div>" + 
                "<div class=\"malen-buchstabe center\">" +
                    "<!-- ###BUCHSTABE_G### malen -->" +
                "</div>" + 
                "<div class=\"worte-buchstabe center\">" +
                    "###BILDER###" +
                "</div>";

const worte = {     
    "a": {
        "Wort1":        "affe.JPG",
        "Aussprache1":  "Affe",
        "Wort2":        "apfel.JPG",
        "Aussprache2":  "Apfel",
        "Wort3":        "auto.JPG",
        "Aussprache3":  "Auto"
    },
    "b": {
        "Wort1":        "baer.JPG",
        "Aussprache1":  "Bär",
        "Wort2":        "ball.JPG",
        "Aussprache2":  "Ball",
        "Wort3":        "birne.JPG",
        "Aussprache3":  "Birne"
    },
    "c": {
        "Wort1":        "chamaeleon.JPG",
        "Aussprache1":  "Chamäleon",
        "Wort2":        "clown.JPG",
        "Aussprache2":  "Clown",
        "Wort3":        "computer.JPG",
        "Aussprache3":  "Computer"
    },
    "d": {
        "Wort1":        "delfin.JPG",
        "Aussprache1":  "Delfin",
        "Wort2":        "dinosaurier.JPG",
        "Aussprache2":  "Dinosaurier",
        "Wort3":        "dose.JPG",
        "Aussprache3":  "Dose"
    },
    "e": {
        "Wort1":        "eis.JPG",
        "Aussprache1":  "Eis",
        "Wort2":        "elefant.JPG",
        "Aussprache2":  "Elefant",
        "Wort3":        "erdbeere.JPG",
        "Aussprache3":  "Erdbeere"
    },
    "f": {
        "Wort1":        "feuer.JPG",
        "Aussprache1":  "Feuer",
        "Wort2":        "feuerwehr.JPG",
        "Aussprache2":  "Feuerwehr",
        "Wort3":        "fisch.JPG",
        "Aussprache3":  "Fisch"
    },
    "g": {
        "Wort1":        "gabel.JPG",
        "Aussprache1":  "Gabel",
        "Wort2":        "glocke.JPG",
        "Aussprache2":  "Glocke",
        "Wort3":        "gras.JPG",
        "Aussprache3":  "Gras"
    },
    "h": {
        "Wort1":        "hammer.JPG",
        "Aussprache1":  "Hammer",
        "Wort2":        "hamster.JPG",
        "Aussprache2":  "Hamster",
        "Wort3":        "haus.JPG",
        "Aussprache3":  "Haus"
    },
    "i": {
        "Wort1":        "igel.JPG",
        "Aussprache1":  "Igel",
        "Wort2":        "indianer.JPG",
        "Aussprache2":  "Indianer",
        "Wort3":        "insel.JPG",
        "Aussprache3":  "Insel"
    },
    "j": {
        "Wort1":        "jacke.JPG",
        "Aussprache1":  "Jacke",
        "Wort2":        "jaguar.JPG",
        "Aussprache2":  "Jaguar",
        "Wort3":        "joghurt.JPG",
        "Aussprache3":  "Joghurt"
    },
    "k": {
        "Wort1":        "kartoffel.JPG",
        "Aussprache1":  "Kartoffel",
        "Wort2":        "katze.JPG",
        "Aussprache2":  "Katze",
        "Wort3":        "kirche.JPG",
        "Aussprache3":  "Kirche"
    },
    "l": {
        "Wort1":        "lasso.JPG",
        "Aussprache1":  "Lasso",
        "Wort2":        "limonade.JPG",
        "Aussprache2":  "Limonade",
        "Wort3":        "loewe.JPG",
        "Aussprache3":  "Löwe"
    },
    "m": {
        "Wort1":        "marmelade.JPG",
        "Aussprache1":  "Marmelade",
        "Wort2":        "maus.JPG",
        "Aussprache2":  "Maus",
        "Wort3":        "meer.JPG",
        "Aussprache3":  "Meer"
    },
    "n": {
        "Wort1":        "nacht.JPG",
        "Aussprache1":  "Nacht",
        "Wort2":        "nashorn.JPG",
        "Aussprache2":  "Nashorn",
        "Wort3":        "nest.JPG",
        "Aussprache3":  "Nest"
    },
    "o": {
        "Wort1":        "ochse.JPG",
        "Aussprache1":  "Ochse",
        "Wort2":        "ohr.JPG",
        "Aussprache2":  "Ohr",
        "Wort3":        "orgel.JPG",
        "Aussprache3":  "Orgel"
    },
    "p": {
        "Wort1":        "paprika.JPG",
        "Aussprache1":  "Paprika",
        "Wort2":        "pinguin.JPG",
        "Aussprache2":  "Pinguin",
        "Wort3":        "pizza.JPG",
        "Aussprache3":  "Pizza"
    },
    "q": {
        "Wort1":        "quadrat.png",
        "Aussprache1":  "Quadrat",
        "Wort2":        "qualle.JPG",
        "Aussprache2":  "Qualle",
        "Wort3":        "quelle.JPG",
        "Aussprache3":  "Quelle"
    },
    "r": {
        "Wort1":        "rabe.JPG",
        "Aussprache1":  "Rabe",
        "Wort2":        "raupe.JPG",
        "Aussprache2":  "Raupe",
        "Wort3":        "regenbogen.JPG",
        "Aussprache3":  "Regenbogen"
    },
    "s": {
        "Wort1":        "salz.JPG",
        "Aussprache1":  "Salz",
        "Wort2":        "see.JPEG",
        "Aussprache2":  "See",
        "Wort3":        "sonne.JPEG",
        "Aussprache3":  "Sonne"
    },
    "t": {
        "Wort1":        "taube.JPG",
        "Aussprache1":  "Taube",
        "Wort2":        "tee.JPG",
        "Aussprache2":  "Tee",
        "Wort3":        "tisch.JPG",
        "Aussprache3":  "Tisch"
    },
    "u": {
        "Wort1":        "u-bahn.JPG",
        "Aussprache1":  "U-Bahn",
        "Wort2":        "u-boot.JPG",
        "Aussprache2":  "U-Boot",
        "Wort3":        "uhr.JPG",
        "Aussprache3":  "Uhr"
    },
    "v": {
        "Wort1":        "ventilator.JPG",
        "Aussprache1":  "Ventilator",
        "Wort2":        "vogel.JPG",
        "Aussprache2":  "Vogel",
        "Wort3":        "vulkan.JPG",
        "Aussprache3":  "Vulkan"
    },     
    "w": {
        "Wort1":        "wal.JPEG",
        "Aussprache1":  "Wal",
        "Wort2":        "wald.JPG",
        "Aussprache2":  "Wald",
        "Wort3":        "wasser.JPG",
        "Aussprache3":  "Wasser"
    },
    "x": {
        "Wort1":        "xanten.JPG",
        "Aussprache1":  "Xanten, eine deutsche Stadt",
        "Wort2":        "xylophon.JPG",
        "Aussprache2":  "Xylophon",
        "Wort3":        "xbox.png",
        "Aussprache3":  "XBox"
    },
    "y": {
        "Wort1":        "yacht.JPG",
        "Aussprache1":  "Yacht",
        "Wort2":        "yak.JPG",
        "Aussprache2":  "Yak",
        "Wort3":        "youtube.png",
        "Aussprache3":  "YouTube"
    },
    "z": {
        "Wort1":        "zebra.JPG",
        "Aussprache1":  "Zebra",
        "Wort2":        "ziege.JPG",
        "Aussprache2":  "Ziege",
        "Wort3":        "zug.JPG",
        "Aussprache3":  "Zug"
    }
};

const farben = [
    "rgb(255, 0, 0)",
    "rgb(255, 60, 0)",
    "rgb(255, 120, 0)",
    "rgb(255, 180, 0)",
    "rgb(255, 240, 0)",
    "rgb(255, 255, 15)",
    "rgb(255, 255, 75)",
    "rgb(255, 255, 135)",
    "rgb(255, 255, 195)",
    "rgb(255, 255, 255)",
    "rgb(255, 190, 255)",
    "rgb(255, 130, 255)",
    "rgb(255, 70, 255)",
    "rgb(255, 0, 255)",
    "rgb(190, 0, 255)",
    "rgb(130, 0, 255)",
    "rgb(70, 0, 255)",
    "rgb(0, 0, 255)",
    "rgb(0, 60, 255)",
    "rgb(0, 120, 255)",
    "rgb(0, 180, 255)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 190)",
    "rgb(0, 255, 130)",
    "rgb(0, 255, 70)",
    "rgb(0, 255, 0)"
]

buchstaben_einfaerben();
//$("#test").text(worte["a"]["Aussprache1"])

$(function(){      

    $(document).keypress(function(e){

        if(e.key.match(/[a-z]/i)){
            zeige_buchstabe(e.key.toLowerCase());
        }
        
        if(e.key === "Escape") {
            zeige_uebersicht();
        }
        
        if(e.key.match(/[ ]/i)) {
            zeige_uebersicht();
        }

        $("#fragezeichen").on("click", function(){
            alert("Fragezeichen");
        });

        $("#ausrufezeichen").on("click", function(){
            alert("Ausrufezeichen");
        });

    });    
 
});

function zeige_buchstabe(buchstabe){
    $(".uebersicht").hide();
    $(".buchstabe").show();

    // Seite in DIV Laden
    //$(".buchstabe").load("./buchstaben/" + buchstabe + ".html");
    
    var neue_vorlage = vorlage;

    // Buchstaben eintragen    
    neue_vorlage = neue_vorlage.replaceAll('###BUCHSTABE_G###', buchstabe.toUpperCase());
    neue_vorlage = neue_vorlage.replaceAll('###BUCHSTABE_K###', buchstabe);

    // Videos Buchstaben zeichnen

    // Worte der Buchstaben
    //###BILDER###
    //$("#test").text(worte["a"]["Aussprache1"])
    /*
    neue_vorlage = neue_vorlage.replaceAll('###BILDER###',  
        "<div class=\"worte-ausgabe\" onclick=\"sprich('" + worte[buchstabe]['Aussprache1'].trim() + "')\"><img src=\"/assets/images/worte-bilder/" + worte[buchstabe]['Wort1'] + "\" class=\"worte-bilder\"> " + worte[buchstabe]['Aussprache1'].trim() + "</div> " + 
        "<div class=\"worte-ausgabe\" onclick=\"sprich('" + worte[buchstabe]['Aussprache2'].trim() + "')\"><img src=\"/assets/images/worte-bilder/" + worte[buchstabe]['Wort2'] + "\" class=\"worte-bilder\"> " + worte[buchstabe]['Aussprache2'].trim() + "</div> " + 
        "<div class=\"worte-ausgabe\" onclick=\"sprich('" + worte[buchstabe]['Aussprache3'].trim() + "')\"><img src=\"/assets/images/worte-bilder/" + worte[buchstabe]['Wort3'] + "\" class=\"worte-bilder\"> " + worte[buchstabe]['Aussprache3'].trim() + "</div>"
    );
    */

    neue_vorlage = neue_vorlage.replaceAll('###BILDER###',  
        "<table>" +
            "<tr onclick=\"sprich('" + worte[buchstabe]['Aussprache1'].trim() + "')\">" +
                //"<td class='worte-tabelle-td'><img src=\"/assets/images/worte-bilder/" + worte[buchstabe]['Wort1'] + "\" class=\"worte-bilder\"></td>" +
                "<td class='worte-tabelle-td'><img src=\"./assets/images/worte-bilder/" + worte[buchstabe]['Wort1'] + "\" class=\"worte-bilder\"></td>" +
                "<td class='worte-tabelle-td'>" + worte[buchstabe]['Aussprache1'].trim() + "</td>" +
            "</tr>" +
            "<tr onclick=\"sprich('" + worte[buchstabe]['Aussprache2'].trim() + "')\">" +
                //"<td class='worte-tabelle-td'> <img src=\"/assets/images/worte-bilder/" + worte[buchstabe]['Wort2'] + "\" class=\"worte-bilder\"> </td>" +
                "<td class='worte-tabelle-td'> <img src=\"./assets/images/worte-bilder/" + worte[buchstabe]['Wort2'] + "\" class=\"worte-bilder\"> </td>" +
                "<td class='worte-tabelle-td'>" + worte[buchstabe]['Aussprache2'].trim() + "</td>" +
            "</tr>" +
            "<tr onclick=\"sprich('" + worte[buchstabe]['Aussprache3'].trim() + "')\">" +
                //"<td class='worte-tabelle-td'> <img src=\"/assets/images/worte-bilder/" + worte[buchstabe]['Wort3'] + "\" class=\"worte-bilder\"> </td>" +
                "<td class='worte-tabelle-td'> <img src=\"./assets/images/worte-bilder/" + worte[buchstabe]['Wort3'] + "\" class=\"worte-bilder\"> </td>" +
                "<td class='worte-tabelle-td'>" + worte[buchstabe]['Aussprache3'].trim() + "</td>" +
            "</tr>" +
        "</table>"
    );

    $(".buchstabe").html(neue_vorlage)    
}

function zeige_uebersicht(){
    $(".uebersicht").show();
    $(".buchstabe").hide();
}

function buchstaben_einfaerben(){    
    // A = 65 // Z = 90
    // a = 97 // z = 122
    let f = 0;
    for(var i = 97; i < 123; i++){
        $("#" + String.fromCharCode(i)).css("color", farben[f])
        $("#" + String.fromCharCode(i)).css("text-shadow", "3px 3px grey")
        f++;
    }

}

function sprich(text){
    const sprachausgabe = new SpeechSynthesisUtterance(text);
    sprachausgabe.lang = "de-DE";
    speechSynthesis.speak(sprachausgabe);

    //var sound = new Audio("/assets/images/worte-sounds" + op + ".mp3");
    //sound.play();
}