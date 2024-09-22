CREATE TABLE IF NOT EXISTS "Contact Form Submissions" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	"created_at" text DEFAULT (current_timestamp) NOT NULL,
	"is_read" boolean DEFAULT false,
	"ip_address" text NOT NULL,
	"country_code" text NOT NULL,
	"topic" text DEFAULT 'unknown' NOT NULL
);
