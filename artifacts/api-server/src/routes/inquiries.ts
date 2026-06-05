import { Router } from "express";
import { db, inquiriesTable, insertInquirySchema } from "@workspace/db";
import { desc } from "drizzle-orm";

const router = Router();

router.get("/inquiries", async (req, res) => {
  try {
    const inquiries = await db
      .select()
      .from(inquiriesTable)
      .orderBy(desc(inquiriesTable.createdAt));
    res.json(
      inquiries.map((i) => ({
        ...i,
        createdAt: i.createdAt.toISOString(),
      }))
    );
  } catch (err) {
    req.log.error({ err }, "Failed to list inquiries");
    res.status(500).json({ error: "Failed to fetch inquiries" });
  }
});

router.post("/inquiries", async (req, res) => {
  const parsed = insertInquirySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation failed", details: parsed.error.issues });
    return;
  }

  try {
    const [inquiry] = await db.insert(inquiriesTable).values(parsed.data).returning();
    res.status(201).json({
      ...inquiry,
      createdAt: inquiry.createdAt.toISOString(),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to submit inquiry");
    res.status(500).json({ error: "Failed to submit inquiry" });
  }
});

export default router;
