const assert = require("assert");
const Student = require("../src/student");

describe('subdoucement', () => {
    // it('Creating a subdoucment', done => {
    //     const jason = new Student({
    //         name: 'Jason',
    //         articles: [{ title: 'abcd' }]
    //     })
    //     jason.save()
    //         .then(() => {
    //             Student.findOne({ name: 'Jason' })
    //                 .then(student => {
    //                     assert(student.articles[0].title == 'abcd')
    //                 })
    //         })
    //     console.log(jason);
    //     done();
    // })

    // it('Adding new record', done => {
    //     const jason = new Student({ name: 'Jason', articles: [] })
    //     jason.save()
    //         .then(() => Student.findOne({ name: 'Jason' }))
    //         .then(student => {
    //             student.articles.push({ title: 'MongoDB' })
    //             return student.save()
    //         })
    //         .then(() => Student.findOne({ name: 'Jason' }))
    //         .then(student => {
    //             assert(student.articles[0].title === 'MongoDB')
    //             done()
    //         })
    // })

    // it('Deleting a record', (done) => {
    //     const jason = new Student({ name: 'Jason', articles: [{ title: 'ReactJS' }] })
    //     jason.save()
    //         .then(() => Student.findOne({ name: 'Jason' }))
    //         .then(student => {
    //             student.articles[0].remove()
    //             return student.save()
    //         })
    //         .then(() => Student.findOne({ name: 'Jason' }))
    //         .then(student => {
    //             assert(student.articles.length === 0)
    //             done()
    //         })
    // })
})