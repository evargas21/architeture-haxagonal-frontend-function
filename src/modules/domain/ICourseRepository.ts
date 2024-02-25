import { ICourse } from "./Course";

export interface ICourseRepository {
	save: (course: ICourse) => Promise<void>;
	get: (id: string) => Promise<ICourse | null>;
	getAll: () => Promise<ICourse[]>;
}
