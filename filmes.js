
let filmes =["star wars", "clube da luta", "o poderoso chefao", "top gun", "interestelar"]

let filmesCaixaAlta = ["star wars", "clube da luta", "o poderoso chefao", "top gun", "interestelar"].map(filme => filme.toUpperCase());

let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"];

function AdicionaCartoons(){
    for (i=0; i<5; i++){
    filmesCaixaAlta = filmesCaixaAlta.concat(cartoons[i]);
    }
    return filmesCaixaAlta;
}

AdicionaCartoons();

console.log(filmesCaixaAlta);

filmesCaixaAlta.pop();

console.log(filmesCaixaAlta);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];

function ComparaScores(){
   for (i=0;i<asiaScores.length;i++){
        if (asiaScores[i]== euroScores[i]){
            console.log("Os Scores são os mesmos para o índice " + i)
        }
        else{
            console.log("Os Scores são diferentes para o índice " +i);
        }
   } 
return;
}

ComparaScores()