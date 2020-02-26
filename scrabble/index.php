<!doctype html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title>Le super jeu du scrabble !</title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/jquery-ui.css">
		<script src="script/jquery.js"></script>
		<script src="script/jquery-ui.min.js"></script>
		<script src="script/jquery-ui.js"></script>
	</head>
	<body>
		<header>
			<div id="scoreboard">
				<div class="playerscore">
					<label>Joueur 1</label>
					<p id="player1score">0</p>
				</div>
				<div class="playerscore">
					<label>Joueur 2</label>
					<p id="player2score">0</p>
				</div>
			</div>
		</header>
		<main>
			<section id="board">
			</section>
			<section class="hand-container">
				<div class="playername">Joueur 1</div>
				<div class="hand-content" id="hand-content1">
					<div class="boardCell"></div>
					<div class="boardCell"></div>
					<div class="boardCell"></div>
					<div class="boardCell"></div>
					<div class="boardCell"></div>
					<div class="boardCell"></div>
					<div class="boardCell"></div>
				</div>
				<button id="endturnbtn1">Valider</button>
				<button id="skipturnbtn1">Passer</button>
			</section>
			<section class="hand-container">
				<div class="playername">Joueur 2</div>
				<div class="hand-content" id="hand-content2">
					<div class="boardCell"></div>
					<div class="boardCell"></div>
					<div class="boardCell"></div>
					<div class="boardCell"></div>
					<div class="boardCell"></div>
					<div class="boardCell"></div>
					<div class="boardCell"></div>
				</div>
				<button id="endturnbtn2">Valider</button>
				<button id="skipturnbtn2">Passer</button>
			</section>
		</main>
		<script src="script/utils.js"></script>
		<script src="script/boardHandler.js"></script>
		<script src="script/wordHandler.js"></script>
		<script src="script/handHandler.js"></script>
		<script src="script/cellHandler.js"></script>
		<script src="script/scrabble_main.js"></script>
	</body>
</html>