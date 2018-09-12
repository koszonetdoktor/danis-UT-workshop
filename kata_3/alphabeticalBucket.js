class AlphabeticalBucket {
	constructor(letter, aggregables) {
		this.initial = letter
		this.aggregables = aggregables
	}

	get isEmpty() {
		return !this.aggregables || this.aggregables.length == 0
	}

	static overflow(aggregables){
		return new AlphabeticalBucket(null, aggregables)
	}
}

exports.AlphabeticalBucket = AlphabeticalBucket
