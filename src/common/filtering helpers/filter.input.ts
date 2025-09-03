import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class BooleanFilter {
  @Field(() => Boolean, { nullable: true })
  eq?: boolean;
}

@InputType()
export class IntFilter {
  @Field(() => Int, { nullable: true })
  eq?: number;

  @Field(() => Int, { nullable: true })
  gt?: number;

  @Field(() => Int, { nullable: true })
  gte?: number;

  @Field(() => Int, { nullable: true })
  lt?: number;

  @Field(() => Int, { nullable: true })
  lte?: number;

  @Field(() => [Int], { nullable: true })
  in?: number[];

  @Field({ nullable: true })
  isNull?: boolean;
}



export function applyIntFilter(
  queryBuilder: any,
  fieldPath: string,      // e.g. "prodOrdersView.count"
  filterValue: any,       // The IntFilter object
  alias?: string,         // Optional: base for parameter names
) {
  if (!filterValue) return;

  const prefix = alias || fieldPath.replace('.', '');

  if (filterValue.eq !== undefined) {
    queryBuilder.andWhere(`${fieldPath} = :${prefix}Eq`, { [`${prefix}Eq`]: filterValue.eq });
  }
  if (filterValue.gt !== undefined) {
    queryBuilder.andWhere(`${fieldPath} > :${prefix}Gt`, { [`${prefix}Gt`]: filterValue.gt });
  }
  if (filterValue.gte !== undefined) {
    queryBuilder.andWhere(`${fieldPath} >= :${prefix}Gte`, { [`${prefix}Gte`]: filterValue.gte });
  }
  if (filterValue.lt !== undefined) {
    queryBuilder.andWhere(`${fieldPath} < :${prefix}Lt`, { [`${prefix}Lt`]: filterValue.lt });
  }
  if (filterValue.lte !== undefined) {
    queryBuilder.andWhere(`${fieldPath} <= :${prefix}Lte`, { [`${prefix}Lte`]: filterValue.lte });
  }
  if (Array.isArray(filterValue.in) && filterValue.in.length > 0) {
    queryBuilder.andWhere(`${fieldPath} IN (:...${prefix}In)`, { [`${prefix}In`]: filterValue.in });
  }
  if (filterValue.isNull !== undefined) {
    queryBuilder.andWhere(
      filterValue.isNull ? `${fieldPath} IS NULL` : `${fieldPath} IS NOT NULL`
    );
  }
   if (filterValue.iLike !== undefined) {
    // iLike is case-insensitive LIKE for Postgres, but in MSSQL you can use COLLATE or LOWER
    // For general SQL (including MSSQL), you can simulate iLike with LOWER
    queryBuilder.andWhere(`LOWER(${fieldPath}) LIKE LOWER(:${prefix}ILike)`, { [`${prefix}ILike`]: `%${filterValue.iLike}%` });
    // If you're on Postgres you can just use: qb.andWhere(`${fieldPath} ILIKE :${prefix}ILike`, { ... })
  }
}

@InputType()
export class DateFilter {
  @Field(() => Date, { nullable: true })
  eq?: Date;

  @Field(() => Date, { nullable: true })
  gte?: Date;

  @Field(() => Date, { nullable: true })
  lte?: Date;

  @Field(() => Date, { nullable: true })
  gt?: Date;

  @Field(() => Date, { nullable: true })
  lt?: Date;

  @Field(() => [Date], { nullable: true })
  in?: Date[];
}
export function applyDateFilter(
  queryBuilder: any,
  fieldPath: string,
  filterValue: DateFilter,
  alias?: string,
) {
  if (!filterValue) return;

  const prefix = alias || fieldPath.replace('.', '');

   // Handle Refine "between" -> { in: [start, end] }
  if (Array.isArray(filterValue.in) && filterValue.in.length > 0) {
    const arr = filterValue.in
      .filter(Boolean)
      .map((d) => (d instanceof Date ? d : new Date(d)));

    if (arr.length === 2) {
      const [a, b] = arr;
      const start = a <= b ? a : b;
      const end   = a <= b ? b : a;

      queryBuilder.andWhere(`${fieldPath} >= :${prefix}BetweenStart`, {
        [`${prefix}BetweenStart`]: start,
      });
      queryBuilder.andWhere(`${fieldPath} <= :${prefix}BetweenEnd`, {
        [`${prefix}BetweenEnd`]: end,
      });
    } else if (arr.length > 2) {
      // Exact timestamp matches for multiple values
      queryBuilder.andWhere(`${fieldPath} IN (:...${prefix}In)`, {
        [`${prefix}In`]: arr,
      });
    }
  }

  if (filterValue.eq !== undefined) {
    queryBuilder.andWhere(`${fieldPath} = :${prefix}Eq`, { [`${prefix}Eq`]: filterValue.eq });
  }
  if (filterValue.gte !== undefined) {
    queryBuilder.andWhere(`${fieldPath} >= :${prefix}Gte`, { [`${prefix}Gte`]: filterValue.gte });
  }
  if (filterValue.lte !== undefined) {
    queryBuilder.andWhere(`${fieldPath} <= :${prefix}Lte`, { [`${prefix}Lte`]: filterValue.lte });
  }
  if (filterValue.gt !== undefined) {
    queryBuilder.andWhere(`${fieldPath} > :${prefix}Gt`, { [`${prefix}Gt`]: filterValue.gt });
  }
  if (filterValue.lt !== undefined) {
    queryBuilder.andWhere(`${fieldPath} < :${prefix}Lt`, { [`${prefix}Lt`]: filterValue.lt });
  }
}




@InputType()
export class StringFilter {
  @Field({ nullable: true })
  eq?: string;

  @Field({ nullable: true })
  contains?: string;

  @Field({ nullable: true })
  iLike?: string; // Case-insensitive like

  @Field({ nullable: true })
  startsWith?: string;

  @Field({ nullable: true })
  endsWith?: string;

  @Field(() => [String], { nullable: true })
  in?: string[];

  @Field({ nullable: true })
  isNull?: boolean;
}

export function applyStringFilter(
  qb: any,
  fieldPath: string,
  filter?: StringFilter,
  alias?: string,
) {
  if (!filter) return;
  const prefix = alias || fieldPath.replace('.', '');

  // Handle eq as array or single value
  if (filter.eq !== undefined) {
    if (Array.isArray(filter.eq)) {
      qb.andWhere(`${fieldPath} IN (:...${prefix}Eq)`, { [`${prefix}Eq`]: filter.eq });
    } else {
      qb.andWhere(`${fieldPath} = :${prefix}Eq`, { [`${prefix}Eq`]: filter.eq });
    }
  }

  if (filter.contains !== undefined) {
    qb.andWhere(`${fieldPath} LIKE :${prefix}Contains`, { [`${prefix}Contains`]: `%${filter.contains}%` });
  }

  if (filter.iLike !== undefined) {
    qb.andWhere(`LOWER(${fieldPath}) LIKE LOWER(:${prefix}ILike)`, {
      [`${prefix}ILike`]: `%${filter.iLike}%`,
    });
  }

  if (filter.startsWith !== undefined) {
    qb.andWhere(`${fieldPath} LIKE :${prefix}StartsWith`, { [`${prefix}StartsWith`]: `${filter.startsWith}%` });
  }

  if (filter.endsWith !== undefined) {
    qb.andWhere(`${fieldPath} LIKE :${prefix}EndsWith`, { [`${prefix}EndsWith`]: `%${filter.endsWith}` });
  }

  // This remains, and still handles explicit filter.in as before
  if (filter.in && filter.in.length > 0) {
    qb.andWhere(`${fieldPath} IN (:...${prefix}In)`, { [`${prefix}In`]: filter.in });
  }

  if (filter.isNull !== undefined) {
    qb.andWhere(filter.isNull ? `${fieldPath} IS NULL` : `${fieldPath} IS NOT NULL`);
  }
}

// Boolean helpers -----------------------------------------------------------
export function applyBooleanFilter(
  qb: any,
  fieldPath: string,
  filter?: BooleanFilter,
  alias?: string,
) {
  if (!filter || filter.eq === undefined) return;
  const prefix = alias || fieldPath.replace('.', '');
  qb.andWhere(`${fieldPath} = :${prefix}BoolEq`, { [`${prefix}BoolEq`]: !!filter.eq });
}

