import { ICourse, ensureCourseIsValid } from "../../domain/Course";
import { ICourseRepository } from "../../domain/ICourseRepository";


export async function createCourse(
	courseRepository: ICourseRepository,
	course: ICourse
): Promise<void> {
	ensureCourseIsValid(course);

	await courseRepository.save(course);
}
