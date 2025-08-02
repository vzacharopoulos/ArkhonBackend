import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { RecipesModule } from './recipes/recipes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CoilsModule } from './coils/coils.module';
import { StatusModule } from './status/status.module';
import { Coils } from './entities/entities/Coils.entity';
import { Users } from './entities/entities/Users.entity';
import { UsersLocationAccessModule } from './userslocationaccess/Userslocationaccessmodule';
import { LocationModule } from './location/location.module';
import { MeResolver } from './auth/me.resolver';
import { AuthModule } from './auth/auth.module';
import { CoilColorModule } from './color/coil.color.module';
import { PanelspeedsModule } from './panelspeeds/panelspeeds.module';
import { PpackagesModule } from './ppackages/ppackages.module';
import { Pporderlines2Module } from './pporderlines2/pporderlines2.module';
import { PpordersModule } from './pporders/pporders.module';
import { MasterlengthModule } from './Masterlength/Masterlength.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PanelworkinghoursModule } from './panelworkinghours/panelworkinghours.module';
import { PanelMachinePausesModule } from './panelmachinepauses/panel-machine-pauses.module';
import { ProdOrdersViewModule } from './panelproductionordersext2/panelproductionordersext2.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    RecipesModule,
    UsersModule,
    CoilsModule,
     StatusModule,
     CoilColorModule,
     UsersLocationAccessModule,
     LocationModule,
     PpackagesModule,
     MasterlengthModule,
             PpackagesModule,
    Pporderlines2Module,
    PpordersModule,
    PanelworkinghoursModule,
    ProdOrdersViewModule,
    PanelspeedsModule,
    PanelMachinePausesModule,
     AuthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),
      // installSubscriptionHandlers: true, // legacy; harmless here
     subscriptions: { 'graphql-ws': {path: '/graphql',},},
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
 TypeOrmModule.forRoot({
  type: 'mssql',
  host: '192.168.10.230',
  port: 1433,
  database: 'panelMESDB_testing',
  username: 'tseroki',
  password: 'ariskobo',
 entities: [__dirname + '/**/**/*.entity{.ts,.js}',__dirname + '/**/**/*.view{.ts,.js}'],
  synchronize: false,  // true ONLY if you want to auto-create tables
  autoLoadEntities: true,
  options: {
    encrypt: false,  // required for older SQL Server, or if no SSL
    trustServerCertificate: true,
    
  },
}),

TypeOrmModule.forRoot({
  name: 'atlantisdb', 
  type: 'mssql',
  host: '192.168.10.167',
  port: 1433,
  database: 'panel_aris_testing',
  username: 'sa',
  password: 'm@n@g3r',
 entities: [__dirname + 'src/entities/atlantisEntities/*.entity{.ts,.js}',__dirname + 'src/entities/atlantisViews/*.view{.ts,.js}'],
  synchronize: false,  // true ONLY if you want to auto-create tables
  autoLoadEntities: false,
  options: {
    encrypt: false,  // required for older SQL Server, or if no SSL
    trustServerCertificate: true,
    
  },
}),
    // Add other modules here (AuthorModule, CompanyModule, etc.)
  ],
})
export class AppModule {}