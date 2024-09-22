import db from "./drizzle";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import path from "path";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: path.join(process.cwd(), "db/migrations"),
    });
    console.log("🎉 Database migration completed!");
  } catch (error) {
    console.error("❌ Database migration failed:\n", error);
  }
};

main();
