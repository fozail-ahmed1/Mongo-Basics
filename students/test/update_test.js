const assert = require("assert");
const Student = require("../src/student");

describe('Updating records', () => {
    let jason;
    let jason2;

    beforeEach((done) => {
            jason = new Student({ name: "Jason", studentNumber: 2000, articleCount: 2, grade: 10 })
            jason.save()
                .then(() => done())
        })
        // it('set and save', done => {
        //     console.log(jason)
        //     jason.set('name', 'Alex')
        //     console.log(jason)
        //     jason.save()
        //     done()
        // })

    // it('Update one ', async() => {
    //         const student = await Student.updateOne({ name: 'Jason' }, { studentNumber: 3000 })
    //         const res = await Student.find({})
    //         assert(res[0].studentNumber === 3000)
    //         console.log(res)
    //     })
    // it('Update many ', async() => {
    //     const student = await Student.updateMany({ name: 'Jason' }, { studentNumber: 3000 })
    //     const res = await Student.find({})
    //     assert(res[0].studentNumber === 3000 && res[1].studentNumber === 3000)
    //     console.log(res)
    // })

    xit('Update grades', async() => {
        const artCount = await Student.findOne({ name: 'Jason' });
        const student = await Student.updateOne({ name: 'Jason' }, { $mul: { grade: artCount.articles } });
        const res = await Student.find({ name: 'Jason' })
            // assert(res.grade === 20)
        console.log(res)
    })
})