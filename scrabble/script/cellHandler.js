let boardColors = ["R", "G", "G", "L", "G", "G", "G", "R", "G", "G", "G", "L", "G", "G", "R",
	"G", "P", "G", "G", "G", "B", "G", "G", "G", "B", "G", "G", "G", "P", "G",
	"G", "G", "P", "G", "G", "G", "L", "G", "L", "G", "G", "G", "P", "G", "G",
	"L", "G", "G", "P", "G", "G", "G", "L", "G", "G", "G", "P", "G", "G", "L",
	"G", "G", "G", "G", "P", "G", "G", "G", "G", "G", "P", "G", "G", "G", "G",
	"G", "B", "G", "G", "G", "B", "G", "G", "G", "B", "G", "G", "G", "B", "G",
	"G", "G", "L", "G", "G", "G", "L", "G", "L", "G", "G", "G", "L", "G", "G",
	"R", "G", "G", "L", "G", "G", "G", "C", "G", "G", "G", "L", "G", "G", "R",
	"G", "G", "L", "G", "G", "G", "L", "G", "L", "G", "G", "G", "L", "G", "G",
	"G", "B", "G", "G", "G", "B", "G", "G", "G", "B", "G", "G", "G", "B", "G",
	"G", "G", "G", "G", "P", "G", "G", "G", "G", "G", "P", "G", "G", "G", "G",
	"L", "G", "G", "P", "G", "G", "G", "L", "G", "G", "G", "P", "G", "G", "L",
	"G", "G", "P", "G", "G", "G", "L", "G", "L", "G", "G", "G", "P", "G", "G",
	"G", "P", "G", "G", "G", "B", "G", "G", "G", "B", "G", "G", "G", "P", "G",
	"R", "G", "G", "L", "G", "G", "G", "R", "G", "G", "G", "L", "G", "G", "R"];

let hoveredCell = undefined;

/**
 * Permet d'obtenir la class à ajouter à une div, pour en modifier sa couleur
 * @return {string} Le nom de la class
 */
function computeCellColorClass(i, j){
	switch (boardColors[i * 15 + j])
	{
		case "G":
			return "greenCellColor";
		case "R":
			return "redCellColor";
		case "L":
			return "lightBlueCellColor";
		case "B":
			return "blueCellColor";
		case "P":
			return "pinkCellColor";
		case "C":
			return "centerCellColor";
	}
}

/**
 * Permet d'avoir une div d'une lettre aléatoire
 * @return {string} Un string représentant une nouvelle div, ayant une lettre affiché à l'interieur
 */
function getLetterDiv(){
	let newLetter = getRandomLetter();
	return "<div class=\"letter\" draggable=\"true\">" + newLetter + "<span>" + letterValues[newLetter] + "</span></div>";
}