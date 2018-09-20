const { expect } = require("chai")
const subject = require("../kata_1/majorMinorComparer").compareMajorMinor
const Version = require("../kata_1/version").Version

// x not version -> throw
// y is not version -> throw
// both of version, equal -> true
// both of version, not equal, major equal, minor not -> false
// both of version, not equal, minor equal, major not -> false
// both of version, not equal, major equal, minor equal -> true

describe("Test Kata1", () => {
    it("x is not  Version", () => {
        const x = {}
        const y = new Version()

        expect(() => subject(x, y)).to.throw()
    })
    it("y is not version", () => {
        const x = new Version()
        const y = {}

        expect(() => subject(x, y)).to.throw()
    })
    it("y and x are version", () => {
        const x = new Version()
        const y = new Version()

        expect(subject(x, y)).to.be.true
    })
    it("both same version, major equal and minor not", () => {
        const x = new Version(1, 2)
        const y = new Version(1, 3)

        expect(subject(x, y)).to.be.false
    })
    it("both same version, minor equal and major not", () => {
        const x = new Version(2, 1)
        const y = new Version(3, 1)

        expect(subject(x, y)).to.be.false
    })
    it("both same version, minor equal and major equal", () => {
        const x = new Version(1, 1)
        const y = new Version(1, 1)

        expect(subject(x, y)).to.be.true
    })
})