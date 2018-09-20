const { expect } = require("chai")
const subject = require("../console.js")
// we have the right args
// if we switch
// if it right switch
// msut have filename
// filename with right extension
// it must have extension
// if error was written to the erro output
// ALL file lines must have address value
// result is written to standerd output
// result is not on error output
// if the file was not found send different error
// "file not found error" is not called in case of general error
// result must be true/false in csase of valid address

describe("TestFirst", () => {
    it("we have the right args", () => {
        const args = ["node", "cource", "-f", "file.add"]
        expect(subject.parserArgs(args)).to.equal("file.add")
    })
    it("we dont have enough args", () => {
        const args = ["node", "cource", "-f"]
        expect(() => subject.parserArgs(args)).to.throw()
    })
    it("we have too many args", () => {
        const args = ["node", "cource", "-f", "file.add", "extra"]
        expect(() => subject.parserArgs(args)).to.throw()
    })
    it("we have bad file extension", () => {
        const args = ["node", "cource", "-f", "file.csv"]
        expect(() => subject.parserArgs(args)).to.throw()
    })
    it("we dont have file extension", () => {
        const args = ["node", "cource", "-f", "file"]
        expect(() => subject.parserArgs(args)).to.throw()
    })
    it("we have bad switch", () => {
        const args = ["node", "cource", "-g", "file.add"]
        expect(() => subject.parserArgs(args)).to.throw("You passed a wrong switch")
    })

})