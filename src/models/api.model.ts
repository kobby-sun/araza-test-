import mongoose, { Schema } from 'mongoose';

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

export const Student = mongoose.model('Student', StudentSchema);

export const Course = mongoose.model('Course', CourseSchema);