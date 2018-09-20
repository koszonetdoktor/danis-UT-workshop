const { expect } = require("chai")
const subject = require("../kata_2/stringExtensions")

describe("Kata 2 Test left()", () => {
    const specs = [
        { args: ["", 0], result: "", desc: "empty string with 0 result to empty string" },
        { args: ["word", 4], result: "word", desc: "string with equal length result in same sting" },
        { args: ["word", 3], result: "wor", desc: "string with less length return the number of characters from the left" },
        { args: ["word", 5], result: "word", desc: "string is shorter than length, it results in the string" },
        { args: [null, 5], result: null, desc: "string is null, results in null" },
        { args: [52, 1], result: null, desc: "string is null, results in null" },

    ]

    specs.forEach(spec => {
        it(`${spec.desc}`, () => {
            expect(subject.left(...spec.args)).to.equal(spec.result)
        })
    })
})