import { ApiService } from "./services/api.service";

export class Controller {
  private apiService: ApiService;

  constructor(private app: any) {
    this.apiService = new ApiService();
    this.routes();
  }

  public routes() {
    this.app.route("/").get(this.apiService.welcomeMessage);

    this.app.route("/students").get(this.apiService.getAllStudents);

    this.app.route("/student").put(this.apiService.addNewStudent);

    this.app.route("/student/:id").delete(this.apiService.deleteStudent);

    this.app.route("/student/:id").get(this.apiService.getStudent);

    this.app.route("/courses").get(this.apiService.getAllCourses);

    this.app.route("/course").put(this.apiService.addNewCourse);

    this.app.route("/course/:id").post(this.apiService.updateCourse)
      .delete(this.apiService.deleteCourse);
  }
}
