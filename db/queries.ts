"server-only";

import { InsertSubmission, contactSubmissionsTable } from "./schema";

import db from "./drizzle";
import { eq } from "drizzle-orm";

export async function fetchUnreadSubmissions() {
  const unreadSubmissions = db
    .select()
    .from(contactSubmissionsTable)
    .where(eq(contactSubmissionsTable.isRead, false));

  return unreadSubmissions;
}

export async function finishUnreadSubmissions() {
  return db.update(contactSubmissionsTable).set({ isRead: true });
}

export async function insertSubmission(data: InsertSubmission) {
  return db.insert(contactSubmissionsTable).values(data);
}
