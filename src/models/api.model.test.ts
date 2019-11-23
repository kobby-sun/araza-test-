import mongoose, { Schema } from 'mongoose';
import { Student, Course } from './api.model';
const courseData = { name: 'Computer Programming', type: 'math' };
const studentData = { name: 'James', courses: [] };
import globalConfig from '../../globalConfig.json';

describe('Model Test', () => {

    it('create & save Course successfully', async () => {
        const validCourse = new Course(courseData);
        const saveCourse = await validCourse.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(saveCourse._id).toBeDefined();
        expect(saveCourse.name).toBe(validCourse.name);
        expect(saveCourse.type).toBe(validCourse.type);
    });

    it('create & save Student successfully', async () => {
        const validCourse = new Course(courseData);
        const saveCourse = await validCourse.save();
        const validStudent = new Student(studentData);
        validStudent.courses = [saveCourse._id];
        const saveStudent = await validStudent.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(saveStudent._id).toBeDefined();
        expect(saveStudent.name).toBe(validStudent.name);
        expect(saveStudent.courses).toBe(validStudent.courses);
    });

})