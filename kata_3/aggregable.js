class Aggregable {
	constructor(id, displayName) {
		this.id = id
		if (typeof displayName != 'string') {
			throw new TypeError("displayName has to be a string")
		}
		this.displayName = displayName
	}
	getInitial(locale) {
		let initial = ''
		if (this.displayName && this.displayName.length > 0) {
			initial = this.displayName[0].toLocaleUpperCase(locale)
		}
		return initial
	}
}

exports.Aggregable = Aggregable
