import { Course } from "./Course";

export interface ICourseRepository {
	save: (course: Course) => Promise<void>;
	get: (id: string) => Promise<Course | null>;
	getAll: () => Promise<Course[]>;
}
