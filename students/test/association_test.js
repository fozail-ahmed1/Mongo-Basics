const assert = require("assert");
const Student = require("../src/student");
const Comment = require("../src/comment");
const ArticleBlog = require("../src/articleBlog");

describe('Association Test', () => {
    let jason, articleBlog, comment;
    beforeEach(done => {
        jason = new Student({ name: 'Jason' });
        articleBlog = new ArticleBlog({ title: 'mongoDB', content: 'Mongoose and Mocha ' })
        comment = new Comment({ content: 'Well done!' })

        jason.articleBlog.push(articleBlog);
        articleBlog.comments.push(comment);
        comment.students = jason;

        Promise.all([jason.save(), articleBlog.save(), comment.save()])
            .then(() => done())
    })

    it('Associate student with articleBlog', done => {
        Student.findOne({ name: 'Jason' })
            .populate('articleBlog')
            .then(student => {
                assert(Student.articleBlog[0].title === 'MongoDB')
            })
        done()
    })

    it('Nest populate', done => {
        Student.findOne({ name: 'Jason' })
            .populate({
                path: 'articleBlog',
                populate: {
                    path: 'comments',
                    model: 'comment',
                    populate: {
                        path: 'students',
                        model: 'student',
                    }
                }
            })
            .then(student => {
                assert(student.name === 'Jason')
                done()
            })
    })

})