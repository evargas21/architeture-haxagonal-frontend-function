import { ICourse } from "../../domain/Course";
import { ICourseRepository } from "../../domain/ICourseRepository";

export async function getCourse(
	courseRepository: ICourseRepository,
	courseId: string
): Promise<ICourse | null> {
	return courseRepository.get(courseId);
}
