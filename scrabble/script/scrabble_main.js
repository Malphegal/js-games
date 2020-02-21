let allWords;

$("document").ready(() => {
	createEmptyBoard();
	loadWords();
});

function createEmptyBoard(){
	let board = $("#board");
	board.html("");
	for (let i = 0; i < 15; i++)
	{
		let newRow = "<div>";
		for (let j = 0; j < 15; j++)
		{
			let colorClass = computeCellColorClass(i, j);
			newRow += "<div class=\"boardCell " + colorClass + "\"></div>";
		}
		board.append(newRow + "</div>");
	}
	$("#board .boardCell").mouseenter(function(){
		hoveredCell = $(this);
	})
};

async function loadWords(){
	var file = "txt/liste_mots_francais.txt";
	let response = await fetch(file).then(response => aaa = response.text())
	allWords = removeAccents(response);
	allWords = allWords.split("\n");
}