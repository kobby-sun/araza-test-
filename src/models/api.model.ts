import mongoose, { Schema, Document } from 'mongoose';

export interface ICourse extends Document {
  id: string; //Ids can be the mongo generated ones. 
  name: string;
  type: "chemistry" | "math" | "english";
}

export interface IStudent extends Document {
  id: string;
  name: string;
  courses: [ICourse['_id']];
}

export const StudentSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  },
  { versionKey: false }
);

export const CourseSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    type: {
      type: String,
      enum: ['chemistry', 'math', 'english']
    }
  },
  { versionKey: false }
);

StudentSchema.set('toJSON', {
  transform: function (doc: any, ret: any, options: any) {
    ret.id = ret._id;
    delete ret._id;
  }
});

CourseSchema.set('toJSON', {
  transform: function (doc: any, ret: any, options: any) {
    ret.id = ret._id;
    delete ret._id;
  }
});

export const Student = mongoose.model<IStudent>('Student', StudentSchema);

export const Course = mongoose.model<ICourse>('Course', CourseSchema);