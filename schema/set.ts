import {  pgTable, text, uuid, timestamp, boolean } from "drizzle-orm/pg-core";

export const sets = pgTable("set", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  is_public: boolean("is_public"),
  is_draft: boolean("is_draft"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  userId: text("userId").notNull(),
  tags: text("tags").array(),
  // progress: integer("progress"),
  is_bookmarked: boolean("is_bookmarked"),
  users_enrolled: text("users_enrolled")
  .array()
  .notNull()
  .$type<Array<{ id: string; profile_picture: string }>>()
  .default([])
});
