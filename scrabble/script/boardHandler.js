function initBoard(){
	let board = $("#board");
	board.html("");
	for (let i = 0; i < 15; i++)
	{
		for (let j = 0; j < 15; j++)
		{
			let colorClass = computeCellColorClass(i, j);
			board.append("<div id=\"cell-" + i + "-" + j + "\" class=\"boardCell " + colorClass + "\"></div>");
		}
		/*
		let newRow = "<div>";
		for (let j = 0; j < 15; j++)
		{
			let colorClass = computeCellColorClass(i, j);
			newRow += "<div id=\"cell-" + i + "-" + j + "\" class=\"boardCell " + colorClass + "\"></div>";
		}
		board.append(newRow + "</div>");
		*/
	}
	$("#board .boardCell").mouseenter(function(){
		hoveredCell = $(this);
	})
}