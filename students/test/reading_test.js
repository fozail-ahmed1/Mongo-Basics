const assert = require("assert");
const Student = require("../src/student");

describe("read the data", (done) => {
    let jason, jason2;

    beforeEach(() => {
            jason = new Student({ name: "Jason" })
            jason2 = new Student({ name: "Jason" })
            jason.save()
            jason2.save()
                .then(() => done())

            console.log(jason);
            console.log(jason2);
        })
        // it("Find all jasons", async() => {
        //     const students = await Student.find({ name: "Jason" })
        //     console.log(students)
        // })

    it('find one of the jasons', async() => {
        const students = await Student.find({ _id: jason._id })
        console.log(jason)
    })
})