// http://bost.ocks.org/mike/shuffle/
export default function shuffle(array: any[]) {
	let m = array.length;

	// While there remain elements to shuffle…
	while (m > 0) {
		// Pick a remaining element…
		const i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		const t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}