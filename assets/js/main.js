// Les variables utiles
let formulaire = document.champs;
let saisie = document.getElementById(`saisie`);

// Les variables du calcul
let premierNombre = Math.random()*100;
premierNombre = Math.ceil(premierNombre);

let deuxiemeNombre = Math.random()*100;
deuxiemeNombre = Math.ceil(deuxiemeNombre);

let divCalcul = document.getElementById(`calcul`);

// Les variables de résultat
let resultatMulti = premierNombre * deuxiemeNombre;
let divReponse = document.getElementById(`reponse`);
console.log(resultatMulti);

// Les variables de le tableau de saisie
let divTableau = document.getElementById(`divTableau`);
let numeroId = 0;

/******* Générer un calcul *******/

if(premierNombre > 0 && deuxiemeNombre > 0){

    divCalcul.innerText = `${premierNombre} X ${deuxiemeNombre}`;
    console.log(numeroId);
}

/*************************************************************************
************************** EVENT principal = SUBMIT **********************
**************************************************************************/

formulaire.addEventListener(`submit`, function (e) {

    e.preventDefault();
    let correct = ``;
    numeroId ++;

    // VERIFIER LA SAISIE UTILISATEUR

    //On enlève les espaces
    let saisieUser = saisie.value.trim();

    // Saisie empty, saisie autre qu'un nombre, saisie convertie en number, saisie différent de entier
    if(saisieUser === ` ` || isNaN(saisieUser) || parseInt(saisieUser) <= 0){

        // Variable pour la div erreur
        let afficherErreur = document.getElementById(`erreur`);
        
         // La div erreur apparait
         afficherErreur.removeAttribute(`hidden`);
         this.style.borderColor = 'red';
         this.style.borderStyle = `solid double`;

    } else {
            //POUR VERIFIER LE RESULTAT && AFFICHER LA DIVREPONSE

            //Bonne saisie
            if(saisie.value == resultatMulti){
            
            divReponse.className = `bravo`;
            divReponse.innerText = `Le résultat est correct : FELICITATIONS ! Vous pouvez poser votre calculatrice maintenant...`;
            correct = `OUI`;

            // Mauvaise saisie
            } else {

                divReponse.className = `essaye-encore`;
                divReponse.innerText = `Oups le résultat est incorrect : REESSAYER si vous osez`;
                correct = `NON`;

            };
            // Dans les deux cas 

            //POUR CREER LE TABLEAU
            let toPush = [];

            //Pusher les saisies dans tableau
            const table = toPush.push(`${numeroId}`, `${premierNombre} X ${deuxiemeNombre}`, `${saisie.value}`, `${correct}`);
            console.log(toPush);

             // Créer l'élément tr enfant de tr.divTableau
             let tr = document.createElement(`tr`);
             tr.setAttribute(`class`, `tr`);
             
             //Placer 
              divTableau.appendChild(tr);


            //Afficher les saisies dans tableau
            for(i = 0; i < toPush.length; i++){

                 // Créer les élement td (enfant de tr)
                let td = document.createElement(`td`);
                td.setAttribute(`class`, `td`);
                tr.appendChild(td);
            
                td.innerText = toPush[i];
                
            }
            
    };

    // Réinitialiser le champs formulaire
    saisie.value = ``;
});


