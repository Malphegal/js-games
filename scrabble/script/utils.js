/**
 * Permet de retirer les accents d'un string, et de les remplacer par l'équivalent sans accent
 * @param	{strAccents} Le string dont on veut retirer les accents
 */
function removeAccents(strAccents) {
	strAccents = strAccents.split('');
	let strAccentsOut = new Array();
	let strAccentsLen = strAccents.length;
	let accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
	let accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
	for (let y = 0; y < strAccentsLen; y++) {
	    if (accents.indexOf(strAccents[y]) != -1) {
		    strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
	    } else {
	        strAccentsOut[y] = strAccents[y];
	    }
	}
	strAccentsOut = strAccentsOut.join('');
    return strAccentsOut;
}

/**
 * UTILS : Permet d'avoir toutes les méthodes d'un objet
 * @param	{obj} L'objet sur lequel avec les methodes
 */
const getMethods = (obj) => {
	let properties = new Set();
	let currentObj = obj;
	do {
	    Object.getOwnPropertyNames(currentObj).map(item => properties.add(item));
	} while ((currentObj = Object.getPrototypeOf(currentObj)))
	return [...properties.keys()].filter(item => typeof obj[item] === 'function');
}