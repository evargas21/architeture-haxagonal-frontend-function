import clsx from "clsx";
import { ICourse } from "../../modules/domain/Course";

export function CourseCard({ course }: { course: ICourse }) {
  return (
    <div
      className={clsx("flex flex-row items-center justify-between py-4")}
    >
      <div className="flex items-center">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="mr-4 rounded-full"
          width={32}
          height={32}
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold md:text-base">
            {course.title}
          </p>
        </div>
      </div>
    </div>
  );
}
