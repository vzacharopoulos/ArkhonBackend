import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoilColorService } from "./coil.color.service";
import { CoilColorResolver } from "./coil.color.resolver";
import { CoilColor } from "src/entities/entities/CoilColor";

@Module({
  imports: [TypeOrmModule.forFeature([CoilColor])],
  providers: [CoilColorService, CoilColorResolver],
})
export class CoilColorModule {}
