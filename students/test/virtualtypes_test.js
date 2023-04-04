const assert = require("assert");
const Student = require("../src/student");

describe('Virtual types', () => {
    it('article counts', done => {
        const jason = new Student({ name: 'jason', articles: [{ title: 'first title' }] })
        jason.save()
            .then(() => Student.findOne({ name: 'jason' }))
            .then(student => {
                assert(student.articleCount === 1)
                done()
            })
    })
})