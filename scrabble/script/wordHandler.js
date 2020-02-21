let alph = "AZERTYUIOPMLKJHGFDSQWXCVBN".split("");
//let alph = {
//    zero : ["_"]
//};

function getRandomLetter(){
    return alph[Math.floor(((Math.random() * 1000) % 26))];
}
