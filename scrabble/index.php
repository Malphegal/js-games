<!doctype html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title>Le super jeu du scrabble !</title>
		<link rel="stylesheet" href="css/style.css">
		<script src="script/jquery_3.4.1.js"></script>
	</head>
	<body>
		<header>
			<label>Le jeu du scrabble</label>
		</header>
		<main>
			<section id="board">
			</section>
			<section id="hand">
				<div id="hand-content">
					<div class="boardCell">
					</div>
					<div class="boardCell">
					</div>
					<div class="boardCell">
					</div>
					<div class="boardCell">
					</div>
					<div class="boardCell">
					</div>
					<div class="boardCell">
					</div>
					<div class="boardCell">
					</div>
					<div class="boardCell">
					</div>
					<div class="boardCell">
					</div>
					<div class="boardCell">
					</div>
					<div class="boardCell">
					</div>
				</div>
				<input type="button" value="Valider" id="endturnbtn">
			</section>
		</main>
		<script src="script/utils.js"></script>
		<script src="script/wordHandler.js"></script>
		<script src="script/handHandler.js"></script>
		<script src="script/cellHandler.js"></script>
		<script src="script/scrabble_main.js"></script>
	</body>
</html>