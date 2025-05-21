
var vorlage = " <div>" +
                    "<button class=\"zurueck\" id=\"zurueck\" onclick=\"zeige_uebersicht()\">ABC</button>" +
                "</div>" +
                "<div class=\"anzeige-buchstabe center\">###BUCHSTABE_G### ###BUCHSTABE_K### <image src=\"../assets/images/ton.png\" class=\"ton\" onclick=\"abspielen('###BUCHSTABE_K###')\"></image>" +
                "</div>" + 
                "<div class=\"malen-buchstabe center\">###BUCHSTABE_G### malen</div>" + 
                "<div class=\"worte-buchstabe center\">###BUCHSTABE_G### ###BUCHSTABE_G### ###BUCHSTABE_G###</div>";

$(function(){

 
});

function zeige_buchstabe(buchstabe){
    $(".uebersicht").hide();
    $(".buchstabe").show();

    // Seite in DIV Laden
    //$(".buchstabe").load("./buchstaben/" + buchstabe + ".html");
    
    var neue_vorlage = vorlage;
    neue_vorlage = neue_vorlage.replaceAll('###BUCHSTABE_G###', buchstabe.toUpperCase());
    neue_vorlage = neue_vorlage.replaceAll('###BUCHSTABE_K###', buchstabe);

    $(".buchstabe").html(neue_vorlage)    
}

function zeige_uebersicht(){
    $(".uebersicht").show();
    $(".buchstabe").hide();
}