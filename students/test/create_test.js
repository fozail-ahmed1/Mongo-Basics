const assert = require("assert");
const Student = require("../src/student");

describe("Create the first data", () => {
    it("save the student", (done) => {
        const jason = new Student({ name: "jason" });
        jason.save()
            .then(() => {
                assert(!jason.isNew)
                done()
            })
    })
});