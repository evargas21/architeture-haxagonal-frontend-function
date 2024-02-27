// @packages
import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// @scripts
import { ICourse } from "./modules/courses/domain/Course";
import { ICourseRepository } from "./modules/courses/domain/ICourseRepository";
import { createCourse } from "./modules/courses/application/create/createCourse";
import { getAllCourses } from "./modules/courses/application/get-all/getAllCourses";

export interface ContextState {
	courses: ICourse[];
	createCourse: (course: { title: string; imageUrl: string }) => void;
}

export const CoursesContext = React.createContext({} as ContextState);

export const CoursesContextProvider = ({
	children,
	repository,
}: React.PropsWithChildren<{ repository: ICourseRepository }>) => {
	const [courses, setCourses] = useState<ICourse[]>([]);

	function create({ title, imageUrl }: { title: string; imageUrl: string }) {
		const id = (uuidv4 as () => string)(); // TODO: check uuid types

		createCourse(repository, { id, title, imageUrl })
			.then(() => getCourses())
			.catch(() => {
				throw new Error("Unable to get courses");
			});
	}

	async function getCourses() {
		const courses = await getAllCourses(repository);
		setCourses(courses);
	}

	useEffect(() => {
		getCourses().catch(() => {
			throw new Error("Unable to get courses");
		});
	}, []);

	return (
		<CoursesContext.Provider value={{ courses, createCourse: create }}>
			{children}
		</CoursesContext.Provider>
	);
};

export const useCoursesContext = () => useContext(CoursesContext);
