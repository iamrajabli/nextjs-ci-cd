"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTransition } from "react";
import { createCourseAction } from "../actions";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils";

type CreateCourseFormProps = {
  className?: string;
} & RevalidatePagePath;

const createCouseFormSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export function CreateCourseForm({
  revalidatePagePath,
  className,
}: CreateCourseFormProps) {
  const [isCreateTransition, startCreateTransition] = useTransition();

  const form = useForm<z.infer<typeof createCouseFormSchema>>({
    resolver: zodResolver(createCouseFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  return (
    <Form {...form}>
      <form
        className={cn("space-y-3", className)}
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            await createCourseAction(data, revalidatePagePath);
          });
        })}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Course name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Course description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-8" disabled={isCreateTransition}>
          Create
        </Button>
      </form>
    </Form>
  );
}
