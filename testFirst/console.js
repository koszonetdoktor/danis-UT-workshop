// console.log(process.argv)
// console.log("ERROR> hello")



const parserArgs = (args) => {

    if (args.length == 4) {
        if (args.find(arg => arg === "-f")) {
            let file = args.find(file => file.endsWith(".add"))
            if (file) {
                return file
            }
        }
    }
    throw "error"
}

error() {
    console.error(e)
}

// parserArgs(process.argv)

exports.parserArgs = parserArgs