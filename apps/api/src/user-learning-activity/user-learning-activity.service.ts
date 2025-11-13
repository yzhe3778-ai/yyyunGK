import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { and, eq, gte, lte, SQL, sql, sum } from "drizzle-orm";

import { userLearningActivities as userLearningActivitiesSchema } from "@earthworm/schema";
import { DB, DbType } from "../global/providers/db.provider";

@Injectable()
export class UserLearningActivityService {
  constructor(@Inject(DB) private db: DbType) {}

  async upsertActivity(
    userId: string,
    date: Date,
    activityType: string,
    duration: number,
    courseId?: string,
    metadata?: any,
  ) {
    if (duration < 0) {
      throw new BadRequestException("Duration cannot be negative");
    }

    const dateStr = date.toISOString().split("T")[0];
    await this.db
      .insert(userLearningActivitiesSchema)
      .values({
        userId,
        date: dateStr,
        activityType,
        duration,
        courseId,
        metadata,
      } as typeof userLearningActivitiesSchema.$inferInsert)
      .onConflictDoUpdate({
        target: [
          userLearningActivitiesSchema.userId,
          userLearningActivitiesSchema.date,
          userLearningActivitiesSchema.activityType,
        ],
        set: {
          duration: sql`${userLearningActivitiesSchema.duration} + ${duration}`,
          metadata: metadata
            ? sql`${userLearningActivitiesSchema.metadata} || ${JSON.stringify(metadata)}::jsonb`
            : undefined,
          updatedAt: new Date(),
        } as unknown as Partial<typeof userLearningActivitiesSchema.$inferInsert> & {
          duration: SQL<number>;
          metadata?: SQL<unknown>;
          updatedAt: Date;
        },
      });

    return true;
  }

  async getDailyTotalTime(userId: string, activityType: string, startDate?: Date, endDate?: Date) {
    const conditions = [
      eq(userLearningActivitiesSchema.userId, userId),
      eq(userLearningActivitiesSchema.activityType, activityType),
    ];

    if (startDate) {
      conditions.push(
        gte(userLearningActivitiesSchema.date, startDate.toISOString().split("T")[0]),
      );
    }
    if (endDate) {
      conditions.push(lte(userLearningActivitiesSchema.date, endDate.toISOString().split("T")[0]));
    }

    const result = await this.db
      .select({
        date: userLearningActivitiesSchema.date,
        totalDuration: sum(userLearningActivitiesSchema.duration),
      })
      .from(userLearningActivitiesSchema)
      .where(and(...conditions))
      .groupBy(userLearningActivitiesSchema.date);

    return result.map((item) => ({
      date: item.date,
      duration: Number(item.totalDuration) || 0,
    }));
  }

  async getTotalLearningTime(
    userId: string,
    activityType: string,
    startDate?: Date,
    endDate?: Date,
  ) {
    const conditions = [
      eq(userLearningActivitiesSchema.userId, userId),
      eq(userLearningActivitiesSchema.activityType, activityType),
    ];

    if (startDate) {
      conditions.push(
        gte(userLearningActivitiesSchema.date, startDate.toISOString().split("T")[0]),
      );
    }
    if (endDate) {
      conditions.push(lte(userLearningActivitiesSchema.date, endDate.toISOString().split("T")[0]));
    }

    const result = await this.db
      .select({ totalDuration: sum(userLearningActivitiesSchema.duration) })
      .from(userLearningActivitiesSchema)
      .where(and(...conditions));

    return Number(result[0]?.totalDuration || 0);
  }
}
