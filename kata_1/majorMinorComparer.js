var Version = require("./version").Version

let arg = false

const compareMajorMinor = (x, y) => {
	arg = x instanceof Version
	if (!arg) {
		throw new TypeError(`'x' should be an instance of Version, but was "${typeof x}"`)
	}
	arg = y instanceof Version
	if (!arg) {
		throw new TypeError(`'y' should be an instance of Version, but was "${typeof y}"`)
	}

	if (x === y) return true

	return x.major == y.major && x.minor == y.minor
}

exports.compareMajorMinor = compareMajorMinor
