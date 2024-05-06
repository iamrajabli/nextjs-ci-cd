type CourseListElement = {
  id: string;
  name: string;
  description: string;
};

type CreateCourseListElementCommand = {
  name: string;
  description: string;
};

type DeleteCourseListElementCommand = {
  id: string;
};

type RevalidatePagePath = {
  revalidatePagePath: string;
};
