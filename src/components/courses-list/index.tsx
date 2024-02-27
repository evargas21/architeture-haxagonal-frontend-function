// @scripts
import { useCoursesContext } from "../../CoursesContext";
import { CourseCard } from "../course-card";

export function CoursesList() {
  const { courses } = useCoursesContext();

  return (
    <section>
      <h2 className="text-gray-800 font-semibold dark:text-white mt-4">Current courses</h2>
      <div className="flex grow flex-col gap-2 rounded-xl bg-gray-50 p-4 overflow-y-auto h-64">
        {courses.map((course) => (
          <div className="bg-white px-6">
            <CourseCard key={course.id} course={course} />
          </div>
        ))}
      </div>
    </section>
  );
}
