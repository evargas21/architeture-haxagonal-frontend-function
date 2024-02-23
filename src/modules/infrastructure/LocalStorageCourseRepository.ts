import { ICourse } from "../domain/Course";
import { ICourseRepository } from "../domain/ICourseRepository";

export function createLocalStorageCourseRepository(): ICourseRepository {
	return {
		save,
		get,
		getAll,
	};
}

async function save(course: ICourse) {
	const courses = getAllFromLocalStorage();

	courses.set(course.id, course);
	localStorage.setItem("courses", JSON.stringify(Array.from(courses.entries())));

	await Promise.resolve();
}

async function get(id: string) {
	const courses = getAllFromLocalStorage();
	const course = courses.get(id);

	if (!course) {
		return Promise.resolve(null);
	}

	return Promise.resolve(course);
}

async function getAll() {
	const courses = getAllFromLocalStorage();

	return Promise.resolve(Array.from(courses.values()));
}

function getAllFromLocalStorage(): Map<string, ICourse> {
	const courses = localStorage.getItem("courses");

	if (courses === null) {
		return new Map();
	}

	const map = new Map(JSON.parse(courses) as Iterable<[string, ICourse]>);

	return map;
}
