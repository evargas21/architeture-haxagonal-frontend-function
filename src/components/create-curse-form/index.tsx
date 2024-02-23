import React, { useEffect, useState } from "react";

import { useCourseFormData } from "../../hooks/useCourseFormData";
import { FormStatus, useCourseForm } from "../../hooks/useCourseForm";
import {
  TITLE_MAX_LENGTH,
  TITLE_MIN_LENGTH,
  isCourseImageUrlValid,
  isCourseTitleValid,
} from "../../modules/domain/CourseValidations";
import Spinner from "../spinner";
import InputField from "../inputfield";
import { PaperClipIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";
import AlertSuccess from "../success-notification";
import AlertError from "../error-notification";

const initialState = {
  title: "",
  imageUrl: "",
};

export function CreateCourseForm() {
  const { formData, updateForm, resetForm } = useCourseFormData(initialState);
  const { formStatus, submitForm, resetFormStatus } = useCourseForm();
  const [errors, setErrors] = useState(initialState);

  useEffect(() => {
    const isTitleValid = isCourseTitleValid(formData.title);
    const isImageUrlValid = isCourseImageUrlValid(formData.imageUrl);

    setErrors({
      title: isTitleValid
        ? ""
        : `Title must be between ${TITLE_MIN_LENGTH} and ${TITLE_MAX_LENGTH} characters`,
      imageUrl: isImageUrlValid ? "" : "Image url is not valid",
    });
  }, [formData]);

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    submitForm(formData);
  };

  switch (formStatus) {
    case FormStatus.Loading:
      return <Spinner />;
    case FormStatus.Success:
      return (
        <SuccessNotification
          resetForm={() => {
            resetForm();
            resetFormStatus();
          }}
        />
      );
    case FormStatus.Error:
      return <ErrorNotification resetForm={resetFormStatus} />;
    case FormStatus.Initial:
      return (
        <section id="order">
          <h2 className="text-gray-800 font-semibold dark:text-white mt-4">🧑‍🏫 Create new course</h2>

          <form
            onSubmit={(ev) => {
              handleSubmit(ev);
            }}
          >
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
              <InputField
                id="title"
                name="title"
                type="text"
                Icon={() => (
                  <BookOpenIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                )}
                error={formData.title && errors.title && errors.title}
                title="Course title"
                placeholder="Course title"
                className="mb-4"
                onChange={(ev) => {
                  updateForm({ title: ev.target.value });
                }}
              />
              <InputField
                id="imageUrl"
                name="imageUrl"
                type="text"
                Icon={() => (
                  <PaperClipIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                )}
                error={formData.imageUrl && errors.imageUrl && errors.imageUrl}
                title="Image URL"
                placeholder="Image URL"
                className="mb-4"
                onChange={(ev) => {
                  updateForm({ imageUrl: ev.target.value });
                }}
              />

              <div className="mt-6 flex justify-end gap-4">
                <Button type="submit">Create course</Button>
              </div>
            </div>
          </form>
        </section>
      );
    default:
      assertUnreachable(formStatus);
  }
}

function SuccessNotification({ resetForm }: { resetForm: () => void }) {
  return (
    <section className="mt-4">
      <AlertSuccess title="🚀 Course created" />
      <Button className="mt-4" onClick={resetForm}>Create a new course</Button>
    </section>
  );
}

function ErrorNotification({ resetForm }: { resetForm: () => void }) {
  return (
    <section role="alert" className="mt-4">
      <AlertError title="🌋 You have an error in your form" />
      <button onClick={resetForm}>Ok, let me try again</button>
    </section>
  );
}

function assertUnreachable(_x: never): never {
  throw new Error("Didn't expect to get here");
}
