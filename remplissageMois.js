
// Partie enrichissement du tableau central


// CREATION DE LA PARTIE GRILLE
grille = document.querySelector("div."+libMois+libAn);
// console.log(grille);

debFin = `  <div class="item-day"><p class="libday">LUNDI</p></div>
            <div class="item-day"><p class="libday">MARDI</p></div>
            <div class="item-day"><p class="libday">MERCREDI</p></div>
            <div class="item-day"><p class="libday">JEUDI</p></div>
            <div class="item-day"><p class="libday">VENDREDI</p></div>
            <div class="item-day we-day"><p class="libday">SAMEDI</p></div>
            <div class="item-day we-day"><p class="libday">DIMANCHE</p></div>`;
sem = ` <div class="item-cell">
            <p class="day"><span class="jlv"></span></p>
            <p class="score"></p>
        </div>
        <div class="item-cell">
            <p class="day"><span class="jlv"></span></p>
            <p class="score"></p>
        </div>
        <div class="item-cell">
            <p class="day"><span class="jlv"></span></p>
            <p class="score"></p>
        </div>
        <div class="item-cell">
            <p class="day"><span class="jlv"></span></p>
            <p class="score"></p>
        </div>
        <div class="item-cell">
            <p class="day"><span class="jlv"></span></p>
            <p class="score"></p></div>
        <div class="item-cell">
            <p class="day"><span class="jlv jwe"></span></p>
            <p class="score"></p>
        </div>
        <div class="item-cell">
            <p class="day"><span class="jlv jwe"></span></p>
            <p class="score"></p>
        </div>`;

// insertion des differentes lignes...
grille.insertAdjacentHTML("beforeend", debFin);
for (let line=0; line<6; line++){
    grille.insertAdjacentHTML("beforeend", sem);
}
grille.insertAdjacentHTML("beforeend", debFin);


// MISE A JOUR DE LA PARTIE JOUR
jour = document.querySelectorAll("div."+libMois+libAn+" span.jlv");
// console.log(jour);

for (let i=0; i<42; i++){
    // Ajout de la classe j_ en fonction du jour 
    if (listeJour_Mois[i] == null) {
        jour[i].classList.add("j_");
    } else {
        jour[i].innerText = listeJour_Mois[i]+" "+libMois.substring(0,3)+".";
    }
}


// MISE A JOUR DE LA PARTIE SCORE
function ajoutClass(element, libclass, scoreJour){
    scNum = Number(scoreJour);
    if (scoreJour != null) {
        if (scNum>=0 && scNum<=9) { element.classList.add(libclass+"0"); }
        else if (scNum<=19) { element.classList.add(libclass+"1"); }
        else if (scNum<=29) { element.classList.add(libclass+"2"); }
        else if (scNum<=39) { element.classList.add(libclass+"3"); }
        else if (scNum<=49) { element.classList.add(libclass+"4"); }
        else if (scNum<=59) { element.classList.add(libclass+"5"); }
        else if (scNum<=69) { element.classList.add(libclass+"6"); }
        else if (scNum<=79) { element.classList.add(libclass+"7"); }
        else if (scNum<=89) { element.classList.add(libclass+"8"); }
        else if (scNum<=100) { element.classList.add(libclass+"9"); }
    }
}

// déclaration variables globales de la fonction
chemImgGauge = "";
chemImgEmoti = "";
function chemImg(elt,scoreJour) {
    scNum = Number(scoreJour);
    if (scoreJour != null) {
        if (scNum>=0 && scNum<=9) { chemImgGauge = "img/gauge0.png"; chemImgEmoti = "img/emoti0_bg.png"; }
        else if (scNum<=19) { chemImgGauge = "img/gauge1.png"; chemImgEmoti = "img/emoti1_bg.png"; }
        else if (scNum<=29) { chemImgGauge = "img/gauge2.png"; chemImgEmoti = "img/emoti2_bg.png"; }
        else if (scNum<=39) { chemImgGauge = "img/gauge3.png"; chemImgEmoti = "img/emoti3_bg.png"; }
        else if (scNum<=49) { chemImgGauge = "img/gauge4.png"; chemImgEmoti = "img/emoti4_bg.png"; }
        else if (scNum<=59) { chemImgGauge = "img/gauge5.png"; chemImgEmoti = "img/emoti5_bg.png"; }
        else if (scNum<=69) { chemImgGauge = "img/gauge6.png"; chemImgEmoti = "img/emoti6_bg.png"; }
        else if (scNum<=79) { chemImgGauge = "img/gauge7.png"; chemImgEmoti = "img/emoti7_bg.png"; }
        else if (scNum<=89) { chemImgGauge = "img/gauge8.png"; chemImgEmoti = "img/emoti8_bg.png"; }
        else if (scNum<=100) { chemImgGauge = "img/gauge9.png"; chemImgEmoti = "img/emoti9_bg.png"; }
    }
    if (elt=="Gauge"){ return chemImgGauge; }
    if (elt=="Emoti"){ return chemImgEmoti; }
}

score = document.querySelectorAll("div."+libMois+libAn+" .score");
// console.log(score);

for (let i=0; i<42; i++){

    score[i].innerText = scoreJour_Mois[i];

    // Ajout de la classe scoreX en fonction du score 
    ajoutClass(score[i], "score", scoreJour_Mois[i]);

    // Ajout de la classe cellX en fonction du score 
    const divJour = score[i].parentNode;
    //console.log(divJour);
    ajoutClass(divJour, "cell", scoreJour_Mois[i]);

    // Ajout des images : gauge avant le score et emoticone après le score, si ce dernier est renseigné
    let imgGauge = document.createElement('img');
    let imgEmoti = document.createElement('img');
    if (scoreJour_Mois[i] != null){

        // Ajout de la gauge
        imgGauge.setAttribute("src",chemImg("Gauge",scoreJour_Mois[i]));
        imgGauge.setAttribute("alt","gauge");
        score[i].parentNode.insertBefore(imgGauge,score[i].previousSibling);
        
        // Ajout de l'emoticone
        imgEmoti.setAttribute("src",chemImg("Emoti",scoreJour_Mois[i]));
        imgEmoti.setAttribute("alt","emoti");
        score[i].parentNode.insertBefore(imgEmoti,score[i].nextSibling);
    }
}

