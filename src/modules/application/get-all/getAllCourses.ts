import { ICourse } from "../../domain/Course";
import { ICourseRepository } from "../../domain/ICourseRepository";

export async function getAllCourses(courseRepository: ICourseRepository): Promise<ICourse[]> {
	return courseRepository.getAll();
}
