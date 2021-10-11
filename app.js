//.......... element du DOM qui veut dire reagir avec le html....document object model.......

const divVies = document.querySelector('.vies');
const message= document.getElementById('message');
const formulaire = document.getElementById('inputBox');
const input = document.getElementById('number');
const essayerBtn = document.getElementById('essayerBtn');
const rejouerBtn = document.getElementById('rejouer');
const facileBtn = document.getElementById('facile');
const moyenBtn = document.getElementById('moyen');
const dificileBtn = document.getElementById('dificile');
const body = document.getElementsByTagName('body')[0];
const divChoisir = document.querySelector('.choisir')


// .................Audio...............................
// const divAudioPlayer=document.querySelector('.audioPlayer');

// ...........js sur element coeur ..........

const coeurVide = '<ion-icon name="heart-outline"></ion-icon>';
const coeurPlein = '<ion-icon name="heart"></ion-icon>';

//........... js backround...................

const bgFroid ='linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)';
const bgTiede ='linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)';
const bgChaud ='linear-gradient(to right, #f83600 0%, #f9d423 100%)';
const bgBrulant ='linear-gradient(to top, #ff0844 0%, #ffb199 100%)';

const bgWin ='linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)';
const bgLoose ='linear-gradient(to right, #434343 0%, black 100%)';


const choisir = () =>{
    let facile= facileBtn;
    let moyen= moyenBtn;
    let difiile= dificileBtn;   
}
choisir();


// ...........play..... pour charger l apage des ke on play .........



const play = () => {
    // SI ON VEUX DES NOMBRES ALEATOIRE on et randdomNumber

    const randomNumber = Math.floor(Math.random() *101);
    // math floor arrondie a lentier inferieur 
    let totalVies = totalVies;
    let vies = totalVies;
    
    console.log(randomNumber);
    // actualiser apres chaque essai
     
    // NOTE: ...addEventListener= se declenche a une certaine action qui est SUBMIT (l'evenement ki se declenche ) 
    // Submit ....est l'action .......
    // preventDefault:.......ne pas laisser(interdir)le navigateur recharger la page si non ca prend du temps et on perd le jeux 
    formulaire.addEventListener('submit',(e) => {
        e.preventDefault();
        const valeurInput = parseInt(input.value);

        if(valeurInput < 0 || valeurInput > 100) return;
        
        if(valeurInput === randomNumber){
            body.style.backgroundImage = bgWin;
            message.textContent = `BRAVO !!! le nombre etait bien ${randomNumber}`;
            // bactixe alt gr 7 pour ecrire le message bravo..............
            rejouerBtn.style.display = "block";
        }

        if(valeurInput !== randomNumber) {
            if(randomNumber < valeurInput + 3 && randomNumber > valeurInput -3){
                body.style.backgroundImage = bgBrulant;
                message.textContent = "🔥🔥🔥 c'est Brulant !!! 🔥🔥🔥 ";
            }
            else if(randomNumber < valeurInput + 6 && randomNumber > valeurInput -6){
                body.style.backgroundImage = bgChaud;
                message.textContent = "🔥🔥c'est Chaud !! 🔥🔥 ";
            }
            else if(randomNumber < valeurInput + 11 && randomNumber > valeurInput -11){
                body.style.backgroundImage = bgTiede;
                message.textContent = "🧡c'est Tiede 🧡";
            }
            else{
                body.style.backgroundImage = bgFroid;
                message.textContent = "❄️❄️❄️c'est Froid ❄️❄️❄️ ";
            }
            vies--;
            verifyLoose();
        }
        actualiseCoeurs(vies);
    })
    const verifyLoose= () =>{
        if(vies===0){
            body.style.backgroundImage = bgLoose;
            body.style.color = '#990000';
            essayerBtn.setAttribute("disabled" , "");
            message.textContent = `vous avez perdu. La reponse etait ${randomNumber}`;
            rejouerBtn.style.display = "block";
        }
     
    }
    const actualiseCoeurs = (vies) => { 
        divVies.innerHTML = "";
        let tableauDeVies = [];
        for (let i = 0; i < vies; i++){
            tableauDeVies.push(coeurPlein);
        }
        for(let i = 0; i < totalVies - vies; i++){
            tableauDeVies.push(coeurVide);
        }
        tableauDeVies.forEach(coeur => {
            divVies.innerHTML += coeur;
        })
    }
    actualiseCoeurs(vies);
    rejouerBtn.addEventListener('click', ()=> {
        message.style.display = 'none';
        document.location.reload(true);
    })
    
}
// play();




// const level1 = () => {
//     const randomNumber = Math.floor(Math.random() *101);
//     const totalVies = 3;
//     let vies = totalVies;
//     console.log(randomNumber);
// }
// if(valeurInput === randomNumber){
//     body.style.backgroundImage = bgWin;
//     message.textContent = `BRAVO !!! le nombre etait bien ${randomNumber}`;
// }
