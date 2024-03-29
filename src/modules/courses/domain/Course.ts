import {
  CourseIdNotValidError,
  isCourseIdValid,
  CourseTitleNotValidError,
  isCourseTitleValid,
  CourseImageUrlNotValidError,
  isCourseImageUrlValid,
} from "./CourseValidations.ts";

export interface ICourse {
  id: string;
  title: string;
  imageUrl: string;
}

export function ensureCourseIsValid({ id, title, imageUrl }: ICourse): void {
  if (!isCourseIdValid(id)) {
    throw CourseIdNotValidError(id);
  }
  if (!isCourseTitleValid(title)) {
    throw CourseTitleNotValidError(title);
  }
  if (!isCourseImageUrlValid(imageUrl)) {
    throw CourseImageUrlNotValidError(imageUrl);
  }
}
