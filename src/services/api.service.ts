import { Request, Response } from 'express';

import { Student, Course } from '../models/api.model';
import { WELCOME_MESSAGE } from '../constants/api.constants';

export class ApiService {
  public welcomeMessage(req: Request, res: Response) {
    res.status(200).send(WELCOME_MESSAGE);
  }

  public getAllStudents(req: Request, res: Response) {
    Student.find({})
      .populate({
        path: 'courses',
        model: 'Course',
      }).exec((error: Error, students: any) => {
        if (error) {
          res.send(error);
        }
        res.json(students);
      });
  }

  public getStudent(req: Request, res: Response) {
    Student.findOne({ id: req.params.id }, (error: Error, pokemon: any) => {
      if (error) {
        res.send(error);
      }
      res.json(pokemon);
    });
  }

  public addNewStudent(req: Request, res: Response) {
    const newStudent = new Student(req.body);
    newStudent.save((error: Error, student: any) => {
      if (error) {
        res.send(error);
      }
      res.json(student);
    });
  }

  public addNewCourse(req: Request, res: Response) {
    const newCourse = new Course(req.body);
    newCourse.save((error: Error, course: any) => {
      if (error) {
        res.send(error);
      }
      res.json(course);
    });
  }

  public updateCourse(req: Request, res: Response) {
    const courseId = req.params.id;
    Course.findByIdAndUpdate(
      courseId,
      { name: req.body.name },
      (error: Error, pokemon: any) => {
        if (error) {
          res.send(error);
        }
        const message = pokemon
          ? 'Updated successfully'
          : 'Course not found :(';
        res.send(message);
      }
    );
  }

  public getAllCourses(req: Request, res: Response) {
    Course.find({}, (error: Error, courses: any) => {
      if (error) {
        res.send(error);
      }
      res.json(courses);
    });
  }

  public deleteCourse(req: Request, res: Response) {
    const courseID = req.params.id;
    Course.findByIdAndDelete(courseID, (error: Error, deleted: any) => {
      if (error) {
        res.send(error);
      }
      const message = deleted ? 'Deleted successfully' : 'Course not found :(';
      res.status(200).send(message);
    });
  }

  public deleteStudent(req: Request, res: Response) {
    const studentID = req.params.id;
    Student.findByIdAndDelete(studentID, (error: Error, deleted: any) => {
      if (error) {
        res.send(error);
      }
      const message = deleted ? 'Deleted successfully' : 'Student not found :(';
      res.status(200).send(message);
    });
  }
}
