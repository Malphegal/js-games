// ---- FIELDS ----

let alph = "abcdefghijklmnopqrstuvwxyz_".split("");
let letterPool = [];
let letterValues = [];
let allWords;
let wordsOnBoard;

let currentWord = "";

// ---- METHODS ----

/*
 * Initialise le pool de lettres, avec la valeur des lettres
 */
function initWords(){
	loadWords();
	
	// Init la fréquence des lettres
	let frequency = {a: 9, b: 2, c: 2, d: 3, e: 15, f: 2, g: 2, h: 2, i: 8, j: 1, k: 1, l: 5, m: 3, n: 6, o: 6, p: 2, q: 1, r: 6, s: 6, t: 6, u: 6, v: 2, w: 1, x: 1, y: 1, z: 1, _: 2};
	for (let i = 0; i < 27; i++){
		let tempArray = new Array(frequency[alph[i]]);
		tempArray.fill(alph[i]);
		Array.prototype.push.apply(letterPool, tempArray);
	}
	
	// Init la valeur des lettres
	letterValues = {a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 10, l: 1, m: 2, n: 1, o: 1, p: 3, q: 8, r: 1, s: 1, t: 1, u: 1, v: 4, w: 10, x: 10, y: 10, z: 10, _: 0};
	
	// Init le board des lettres (vide par défaut)
	wordsOnBoard = new Array(15);
	for (let i = 0; i < 15; i++){
		wordsOnBoard[i] = new Array(15);
		for (let j = 0; j < 15; j++)
			wordsOnBoard[i][j] = " ";
	}
}

/**
 * Permet d'avoir une lettre aléatoire
 * @return {string} Une lettre aléatoire
 */
function getRandomLetter(){
    return letterPool[Math.floor(((Math.random() * 1000) % letterPool.length))];
}

async function loadWords(){
	var file = "txt/liste_mots_francais.txt";
	let response = await fetch(file).then(response => aaa = response.text())
	allWords = removeAccents(response);
	allWords = allWords.split("\r\n");
}

function addLetter(letter, cell){
	let idSplit = cell.id.split("-");
	wordsOnBoard[idSplit[1]][idSplit[2]] = letter;
	currentWord += letter;
}

/*
 * Vérifie si les lettres posées par le joueur courant forment un mot
 * @return {boolean} Renvoie 'true' si les lettres forment un mot, sinon 'false'
 */
function checkCurrentWord(){
	for (let i = 0; i < allWords.length; i++)
		if (allWords[i] == currentWord)
			return true;
	return false;
}

function getWordPoints(word){
	let res = 0;
	for (let i = 0; i < word.length; i++)
		res += letterValues[word[i]];
	return res;
}