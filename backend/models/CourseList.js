const mongoose = require('mongoose')

const courseListSchema = mongoose.Schema({
    courseCode : String,
    courseName : String,
    description: String
})



var CourseLists = mongoose.model('CourseLists', courseListSchema);

module.exports = CourseLists