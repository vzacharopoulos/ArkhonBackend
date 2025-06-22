import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date', type => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = 'Date custom scalar type';

  parseValue(value: number | string | Date): Date {
    // Accept numeric timestamps, date strings, or Date instances
    return value instanceof Date ? value : new Date(value);
  }

  serialize(value: Date | string | number): number {
    const date = value instanceof Date ? value : new Date(value);
    return date.getTime(); // value sent to the client
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}
