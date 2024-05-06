'use client';

import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/shared/ui/card";
import { useTransition } from "react";

type CourseItemProps = {
  course: CourseListElement;
  onDelete: () => Promise<void>;
};

export function CourseItem({ course, onDelete }: CourseItemProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      await onDelete();
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button onClick={handleDelete} disabled={isPending}>Delete</Button>
      </CardFooter>
    </Card>
  );
}
