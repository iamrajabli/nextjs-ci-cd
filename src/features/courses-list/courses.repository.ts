import { dbClient } from "@/shared/lib/db";
import { cache } from "react";

export class CoursesRepository {
  getCoursesList = cache(
    (): Promise<CourseListElement[]> => dbClient.course.findMany(),
  );

  createCourseElement = (
    command: CreateCourseListElementCommand,
  ): Promise<CourseListElement> => {
    return dbClient.course.create({ data: command });
  };
  deleteCourseElement = (command: DeleteCourseListElementCommand) => {
    return dbClient.course.delete({ where: command });
  };
}

export const coursesRepository = new CoursesRepository();
