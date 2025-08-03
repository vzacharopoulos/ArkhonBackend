import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_3872", ["id"], { unique: true })
@ObjectType()
@Entity("PDA_SERIALNUMBERS", { schema: "dbo" })
export class PdaSerialnumbers {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "PDAKEY", length: 100 })
  pdakey: string;

  @Column("varchar", { name: "DESCR", nullable: true, length: 100 })
  descr: string | null;
}
