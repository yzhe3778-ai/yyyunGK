import { db } from "@earthworm/db";
import { coursePack } from "@earthworm/schema";

(async function () {
  const packs = await db.select().from(coursePack);
  console.log("现有课程包：");
  console.log(JSON.stringify(packs, null, 2));
  process.exit(0);
})();
