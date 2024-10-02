"use client";

import { Dispatch, SetStateAction, useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/textarea";
import { formSchema } from "../data/schema";
import { submitForm } from "../actions";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const defaultValues: z.infer<typeof formSchema> = {
  name: "",
  email: "",
  message: "",
  topic: "development",
};

interface ContactFormProps {
  setSubmitted: Dispatch<SetStateAction<boolean>>;
}

export default function ContactForm({ setSubmitted }: ContactFormProps) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      const result = await submitForm({ ...values });

      if (result.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        console.log(result);
      }
    });
  };

  const inputStyle = `px-4 py-6 rounded-lg border-0 border border-white/20 bg-muted `;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 space-y-8 col-span-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  className={`${inputStyle}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  className={`${inputStyle}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={`${inputStyle}`}>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="development">
                    I need development services
                  </SelectItem>
                  <SelectItem value="support">
                    I need support in a game
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How can we help</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Let us know how we can help you"
                  className={`${inputStyle}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormDescription>
          By submitting this form, you agree that we will contact you in
          relation to our services, in accordance with our{" "}
          <Link
            href="/privacy"
            className="hover:underline underline-offset-4 inline text-foreground"
          >
            Privacy Policy
          </Link>
          .
        </FormDescription>
        <Button type="submit" disabled={isPending}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Send Message
        </Button>
      </form>
    </Form>
  );
}
