const mongoose = require('mongoose')
const questionsSchema = require('./Questions.js')

const examsSchema = mongoose.Schema({
    examName : String,
    examMarks : Number,
    examWeightage : Number,
    instructions: String,
    startTiming : Date,
    endTiming : Date,
    Questions : [questionsSchema],
    Submissions : [{
        studentEmail : String,
        responses :[{
            questionNumber : Number,
            status : String, //Answered, Viewed, Not_Seen
            questionGivenAnswer : String,
            questionSelectedOptions : [Number],
            marksObtained : Number
        }],
        marksObtained : Number
    }]
})

module.exports = examsSchema