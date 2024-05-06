import { revalidatePath } from "next/cache";
import { coursesRepository } from "../courses.repository";
import { CourseItem } from "../ui/course-item";

export async function CoursesList({ revalidatePagePath }: RevalidatePagePath) {
  const coursesList = await coursesRepository.getCoursesList();

  const handleDeleteAction = async (courseId: string) => {
    "use server";

    await coursesRepository.deleteCourseElement({ id: courseId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {coursesList.length > 0 && (
        <h1 className="underline border border-black rounded-lg p-2 mt-2">
          Courses v3
        </h1>
      )}
      {coursesList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
}
