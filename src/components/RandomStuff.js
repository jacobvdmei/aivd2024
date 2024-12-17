function RandomStuff() {
	// const words = require('an-array-of-english-words');
	const vowels = ['A', 'E', 'I', 'O', 'U'];
	const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];


	// console.log(words);
	function removeConsonants(str) {
		return str.replace(/[^ aeiouAEIOU]/g, '');
	}

	console.log(removeConsonants('GALILEO GALILEO GALILEO FIGARO'));


}

export default RandomStuff;