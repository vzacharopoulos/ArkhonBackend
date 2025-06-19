// src/common/enums/status.enum.ts (or coils-status.enum.ts for more specific naming)

import { registerEnumType } from '@nestjs/graphql';

export enum openstatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  // Add other statuses if they exist in your DB column
}

// Register the enum with GraphQL
// This makes it available in your GraphQL schema.
registerEnumType(openstatus, {
  name: 'openstatus', // This is the name that will appear in your GraphQL schema
  description: 'The status of a coil (Open or Closed).',
});