import { CoursesContextProvider } from "./CoursesContext";
import { createLocalStorageCourseRepository } from "./modules/infrastructure/LocalStorageCourseRepository";
import { CoursesList } from "./components/courses-list";
import { CreateCourseForm } from "./components/create-curse-form";

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
