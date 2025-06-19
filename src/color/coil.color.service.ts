import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CoilColor } from "src/entities/entities/CoilColor";
import { Repository } from "typeorm";


@Injectable()
export class CoilColorService {
  constructor(
    @InjectRepository(CoilColor)
    private coilColorRepo: Repository<CoilColor>,
  ) {}

  findAll(): Promise<CoilColor[]> {
    return this.coilColorRepo.find();
  }

  findOne(id: number): Promise<CoilColor | null> {
    return this.coilColorRepo.findOne({ where: { id } });
  }
}
