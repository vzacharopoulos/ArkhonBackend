import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersLocationAccess } from "../entities/entities/UserLocationAccess.entity";
import { UsersLocationAccessService } from "./userslocationaccess.service";
import { UsersLocationAccessResolver } from "./userslocationaccess.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([UsersLocationAccess])],
  providers: [UsersLocationAccessService, UsersLocationAccessResolver],
  exports: [UsersLocationAccessService],
})
export class UsersLocationAccessModule {}
