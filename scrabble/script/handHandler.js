/**
 * Indique l'object qui contient la lettre que le joueur veut déplacer
 */
let clickedLetter = undefined;
/**
 * Indique la case qui se trouve sous la letter que le joueur veut déplacer
 */
let elemBelow;

function initHand(){
    // Ajouter les events 'Drag' au lettre de la main
    $(".hand-content .boardCell").each(function() {
        $(this).html(getLetterDiv());
        $(this).addClass("hoverable-letter");
        //$(this).attr("ondragstart", "onDragStart(event)");
        //$(this).attr("ondragend", "onDragEnd(event)");
        //$(this).attr("ondrag", "onDrag(event)");
    });
    // Ajouter l'event click sur les boutons valider
    $("#endturnbtn1").bind('click', {id: 1}, onClickValider);
	$("#endturnbtn2").bind('click', {id: 2}, onClickValider);
	$("#skipturnbtn1").bind('click', {id: 1}, onClickSkipped);
	$("#skipturnbtn2").bind('click', {id: 2}, onClickSkipped);
}

/**
 * Indique la lettre que le joueur veut déplacer
 * @param  {Event} ev L'event lié au onDrag
 */
function onDragStart(ev){
    clickedLetter = $(ev.target);
}

/**
 * Vérifie si, sous la position de la lettre que le joueur veut déplacer, se trouve une case valide
 * @param  {Event} ev L'event lié au onDrag
 */
function onDrag(ev){
    $(this).hide();
    let currentBelow = document.elementFromPoint(ev.clientX, ev.clientY);
    if (currentBelow != $("html").get(0)) // On moment où on 'drop', le currentBelow devient l'élément HTML
        elemBelow = currentBelow;
    $(this).show();
    console.log("ondragstart");
}

/**
 * Effectue le déplacement de la lettre que le joueur veut déplacer, si on se trouve au dessus d'une case valide
 * @param  {Event} ev L'event lié au onDrag
 */
function onDragEnd(ev){
    if ($(elemBelow).hasClass('boardCell')) // Si l'élément a la class 'boardCell'
        if ($(elemBelow).children().length == 0) // S'il n'y a pas déjà une lettre dans la case
            if ($(elemBelow).parents("#board").length){ // Si c'est une case du plateau, et non de la main
                $(elemBelow).html(clickedLetter);
				addLetter(clickedLetter.html().substring(0, 1), elemBelow);
				console.log(currentWord);
            }
    console.log("ondragend");
}

/**
 * Vérifie si le joueur peut terminer son tour ou non en ayant poser des lettres
 * @param	{id} id L'id du joueur qui joue
 */
function onClickValider(id){
	if (!checkCurrentWord())
		return;
    $("#hand-content" + id.data.id + " .boardCell").each(function(){
        if ((this).children.length > 0)
            return;
        $(this).html(getLetterDiv());
        $(this).addClass("hoverable-letter");
        $(this).attr("ondragstart", "ods(event)");
        $(this).attr("ondragend", "ode(event)");
        $(this).attr("ondrag", "od(event)");
    });
	nextPlayer(false);
}

/**
 * Permet de passer son tour, sans avoir de points.
 * @param	{id} id L'id du joueur qui joue
 */
function onClickSkipped(id){
	nextPlayer(true);
}