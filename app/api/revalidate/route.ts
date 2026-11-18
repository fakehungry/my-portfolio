import { PORTFOLIO_TAG } from "@/lib/sanity";
import { revalidateTag } from "next/cache";

// Called by a Sanity webhook on publish so content updates without waiting for the hourly revalidate.
export async function POST(req: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || req.headers.get("x-revalidate-secret") !== secret) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  // expire: 0 so the next visitor gets fresh content instead of one stale render.
  revalidateTag(PORTFOLIO_TAG, { expire: 0 });
  return Response.json({ revalidated: true, now: Date.now() });
}
