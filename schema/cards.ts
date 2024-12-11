import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

import { users } from "./user";

export const cards = pgTable("cards", {
  id: uuid("id").primaryKey().defaultRandom(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  tags: text("tags").array(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  userId: uuid("user_id").references(() => users.id),
});
