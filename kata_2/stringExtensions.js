exports.emptyIfNull = (str) => {
	return str ? str : ''
}

exports.isEmpty = (str) => {
	const empty = str === undefined || str === null || str === ''
	return empty
}

let nullOrAction = (str, func) => {
	let result = null
	if (str != null) {
		result = func(result)
	}
	return result
}

exports.left = (str, length = 0) => {
	length = Math.max(length, 0)
	if (isNaN(length)) {
		length = 0
	}
	const result = nullOrAction(str, () => {
		return str.length > length ? str.substring(0, length) : str
	})
	return result
}

exports.leftFromFirst = (str, substring) => {
	const result = nullOrAction(str, ()=>{
		substring = exports.emptyIfNull(str)
		indexOfSubstringStart = str.indexOf(substring)
		indexOfSubstringStart = indexOfSubstringStart >= 0 ? indexOfSubstringStart : -1

		return indexOfSubstringStart < 0 ? null : exports.left(string, indexOfSubstringStart)
	})
	return result
}
