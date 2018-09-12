const provideAlphabet = ()=>{
	const firstCode = 'A'.charCodeAt(0)
	const lastCode = 'Z'.charCodeAt(0)

	const length = lastCode - firstCode + 1
	const alphabet = [...Array(length).keys()]
		.map((_, index) => String.fromCharCode(index + firstCode))
	return alphabet
}

exports.provideAlphabet = provideAlphabet
