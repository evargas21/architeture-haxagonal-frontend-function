// @scripts
import { CoursesContextProvider } from "./CoursesContext";
import { CoursesList } from "./components/courses-list";
import { CreateCourseForm } from "./components/create-curse-form";
import { createLocalStorageCourseRepository } from "./modules/infrastructure/LocalStorageCourseRepository";

function App() {
  const repository = createLocalStorageCourseRepository();

  return (
    <CoursesContextProvider repository={repository}>
      <div className="pl-20 pr-20">
        <CoursesList />
        <CreateCourseForm />
      </div>
    </CoursesContextProvider>
  );
}

export default App;
