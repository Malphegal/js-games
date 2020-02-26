// ---- FIELDS ----

const c_maxPlayer = 2;
let currentPlayingPlayer = 1;

// ---- METHODS ----

$("document").ready(() => {
	initBoard();
	initWords();
	initHand();
	
	startGame();

	/*
	$("#board > div").each(function(){
		$(this).sortable();
	});
	*/
	$("#hand-content1, #board > div").sortable({
		revert: true,
		sort: function(e){
			console.log("b");
		},
		connectWith: ".boardCell"
	}).disableSelection();
	/*
	$("#hand-content1 .letter").draggable({
		connectToSortable: "#hand-content1",
		helper: "clone",
		revert: "invalid",
		revertDuration: 0,
		stop: (event, ui) => {
			console.log('afterDrop')
		}
	});
	*/
	//$("#hand-content1").disableSelection();
});

/**
 * Commence la partie avec le joueur 1
 */
function startGame(){
	$("#hand-content2").parent().hide();
}

/**
 * Permet de passer au joueur suivant
 * @param	{skipped} Indique si le joueur courant a passé son tour
 */
function nextPlayer(skipped){
	// Augmenter les points du joueur courant
	if (!skipped)
		updateScore(currentPlayingPlayer);
	
	// Changer de joueur, et afficher la main du nouveau joueur
	currentPlayingPlayer = currentPlayingPlayer == 1 ? 2 : 1;
	$("#hand-content" + currentPlayingPlayer).parent().show();
	$("#hand-content" + (currentPlayingPlayer == 1 ? 2 : 1)).parent().hide();
	
	// Réinitialiser le mot courant
	currentWord = "";
}

/**
 * Permet de mettre à jour le score du joueur courant
 * @param	{id} Id du joueur qui joue
 */
function updateScore(id){
	let currentPlayer = $("#player" + currentPlayingPlayer + "score");
	currentPlayer.html(parseInt(currentPlayer.html()) + getWordPoints(currentWord));
}

// ---- CLASSES ----

