import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

config({ path: [".env.local", ".env"] });

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client);

export default db;
