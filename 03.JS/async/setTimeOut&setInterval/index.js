const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const showWord = () => {
    rl.question("enter your word: ", printWordParCaract)

} 

function printWordParCaract(word) {
    let index = 0;
    
    function afficherCaractere() {
        if(index === word.length){
            rl.close()
        }else{
            console.log(word[index]);
            index++;
            setTimeout(afficherCaractere, 1000);
        }
    }

    afficherCaractere();
}

// Exemple d'utilisatio

//showWord()