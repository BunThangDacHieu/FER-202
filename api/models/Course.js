import mongoose, { Mongoose } from 'mongoose'

const courseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        require: [true, 'Course ID is required']
    },
    name: {
        type: String,
        require: [true, 'Course name is required']
    },
    semeter: {
        type: String,
        require: [true, 'Semeter is required']
    },
})

export const Course = mongoose.model('Course', courseSchema)