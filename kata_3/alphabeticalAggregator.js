var Bucket = require("./alphabeticalBucket").AlphabeticalBucket
var Aggregable = require("./aggregable").Aggregable

class AlphabeticalAggregator {
	constructor(locale, alphabetProvider) {
		this._locale = locale
		this._provider = alphabetProvider
	}

	aggregate(unOrderedAggregables) {
		const links = this._provider()
			.map(letter => new AlphabeticLink(letter, this._locale))
		links.push(new OverflowLink())

		let orderedAggregables = unOrderedAggregables ?
			unOrderedAggregables :
			[]

		// sort aggregables alphabetically before aggregate them
		orderedAggregables.sort((a, b) => {
			let result = 0
			if (a && a.displayName) {
				if (b && b.displayName) {
					result = a.displayName.localeCompare(b.displayName, this._locale)
				}
			}
			return result
		})

		// aggreagte them by links
		orderedAggregables.forEach(aggregable => {
			//let i
			for (let i = 0; i < links.length; i++) {
				if (links[i].canHandle(aggregable)){
					links[i].handle(aggregable)
					break
				}
			}
		})

		const buckets = links.map(link => link.asBucket())
		return buckets
	}
}

class AlphabeticLink {
	constructor(initial, locale) {
		this._initial = initial
		this._locale = locale
		this._aggregables = []
	}

	canHandle(aggregable) {
		let can = false
		if (aggregable && aggregable instanceof Aggregable) {
			const aggregableInitial = aggregable.getInitial(this._locale)
			can = aggregableInitial.localeCompare(this._initial, this._locale, {sensitivity : 'accent'}) == 0
		}
		return can
	}

	handle(aggregable) {
		this._aggregables.push(aggregable)
	}

	asBucket() {
		const bucket = new Bucket(this._initial, this._aggregables)
		return bucket
	}
}

class OverflowLink {
	constructor() {
		this._aggregables = []
	}

	// everything could go into the overflow
	canHandle(aggregable) {
		return true
	}

	handle(aggregable) {
		this._aggregables.push(aggregable)
	}

	asBucket() {
		const bucket = Bucket.overflow(this._aggregables)
		return bucket
	}
}

exports.AlphabeticalAggregator = AlphabeticalAggregator
