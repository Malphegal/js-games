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

function getLetterDiv(letter){
	return "<div class=\"letter\">" + letter + "</div>";
}