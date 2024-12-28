import { integer, pgTable, text, uuid, timestamp, boolean } from "drizzle-orm/pg-core";

import { sets } from "./set";

export const cards = pgTable("card", {
  id: uuid("id").primaryKey().defaultRandom(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  tags: text("tags").array(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  userId: text("userId").notNull(),
  setId: uuid("setId").references(() => sets.id),
  order: integer("order").notNull(),
  is_visited: boolean("is_visited"),
});
