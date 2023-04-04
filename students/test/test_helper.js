const mongoose = require("mongoose");

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://127.0.0.1/students_test");

mongoose.connection
    .once("open", () => console.log("We are connected"))
    .on("error", (error) => {
        console.warn("An error has occured", error)
    })

beforeEach(function(done) {
    mongoose.connection.collections.students.drop(function() {
        done();
    });

    // const { students, comments, articleblogs } = mongoose.connection.collections;

    // students.drop(() => {
    //     comments.drop(() => {
    //         articleblogs.drop(() => {
    //             done()
    //         })
    //     })
    // })
})