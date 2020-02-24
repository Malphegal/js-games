$("document").ready(() => {
	initBoard();
	initWords();
	initHand();
	
	startGame();
});

const c_maxPlayer = 2;
let currentPlayingPlayer = 1;
function startGame(){
	$("#hand-content2").parent().hide();
}

function nextPlayer(skipped){
	// Augmenter les points du joueur courant
	if (!skipped)
		updateScore(currentPlayingPlayer);
	
	// Changer de joueur, et afficher la main du nouveau joueur
	currentPlayingPlayer = currentPlayingPlayer == 1 ? 2 : 1;
	$("#hand-content" + currentPlayingPlayer).parent().show();
	$("#hand-content" + (currentPlayingPlayer == 1 ? 2 : 1)).parent().hide();
	
	// Réinitialiser le mot courant
	lettersInOrder = "";
}

function updateScore(id){
	let currentPlayer = $("#player" + currentPlayingPlayer + "score");
	currentPlayer.html(parseInt(currentPlayer.html()) + getWordPoints(currentWord));
}