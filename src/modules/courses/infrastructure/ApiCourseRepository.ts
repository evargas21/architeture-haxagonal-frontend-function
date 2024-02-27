import { ICourse } from "../domain/Course.ts";
import { ICourseRepository } from "../domain/ICourseRepository.ts";

export function createLocalStorageCourseRepository(): ICourseRepository {
	return {
		save,
		get,
		getAll,
	};
}

async function save(course: ICourse) {
	await fetch("/api/courses/create", {
		method: "POST",
		body: JSON.stringify({
			id: course.id,
			name: course.title,
			imageUrl: course.imageUrl,
		}),
	});
}

async function get(id: string) {
	const course = await fetch(`/api/courses/${id}`).then(
		(response) => response.json() as Promise<ICourse>
	);

	return course;
}

async function getAll() {
	const courses = await fetch("/api/courses").then(
		(response) => response.json() as Promise<ICourse[]>
	);

	return courses;
}
