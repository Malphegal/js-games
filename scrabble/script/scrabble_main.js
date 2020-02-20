$("document").ready(() => {
	createEmptyBoard();
	$("#hand-content .boardCell").each(function() {
		$(this).html(getLetterDiv("L"));
		$(this).addClass("hoverable-letter");
		$(this).attr("onmousedown", "omd(event)")
	});
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
}