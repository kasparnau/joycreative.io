import { z } from "zod";

const formSchema = z.object({
  message: z
    .string({
      message: "Please enter a message.",
    })
    .min(20, {
      message: "Message must be at least 20 characters.",
    })
    .max(500, {
      message: "Message must be at most 500 characters.",
    }),
  email: z
    .string({ message: "Please enter an email." })
    .email({
      message: "Please enter a valid email.",
    })
    .min(5, {
      message: "Please enter a valid email.",
    })
    .max(100, {
      message: "Email must be at most 100 characters.",
    }),
  name: z
    .string({ message: "Please enter a name." })
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(50, {
      message: "Name must be at most 50 characters.",
    }),
  topic: z.enum(["development", "support"], {
    message: "Please select a topic.",
  }),
});

export { formSchema };
