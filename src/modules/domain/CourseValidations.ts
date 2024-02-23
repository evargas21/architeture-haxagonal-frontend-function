export function isCourseIdValid(id: string): boolean {
	const regexExp =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

	return regexExp.test(id);
}

export function CourseIdNotValidError(id: string): Error {
	return new Error(`Id ${id} is not valid`);
}

export function isCourseImageUrlValid(imageUrl: string): boolean {
	const regexExp = /^(?:https?:\/\/)?(?:[\w]+\.)(?:\.?[\w]{2,})(\/[\w]*)*(\.[\w]+)*/;

	return regexExp.test(imageUrl);
}

export function CourseImageUrlNotValidError(imageUrl: string): Error {
	return new Error(`Image url ${imageUrl} is not valid`);
}

export const TITLE_MIN_LENGTH = 5;
export const TITLE_MAX_LENGTH = 100;

export function isCourseTitleValid(title: string): boolean {
	return title.length >= TITLE_MIN_LENGTH && title.length <= TITLE_MAX_LENGTH;
}

export function CourseTitleNotValidError(title: string): Error {
	return new Error(`Title ${title} is not valid`);
}


