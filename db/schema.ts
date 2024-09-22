import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";

import { sql } from "drizzle-orm";

export const contactSubmissionsTable = pgTable("Contact Form Submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at")
    .default(sql`(current_timestamp)`)
    .notNull(),
  isRead: boolean("is_read").default(false),
  ipAddress: text("ip_address").notNull(),
  country: text("country_code").notNull(),
  topic: text("topic").notNull().default("unknown"),
});

export type InsertSubmission = typeof contactSubmissionsTable.$inferInsert;
export type selectSubmission = typeof contactSubmissionsTable.$inferSelect;
