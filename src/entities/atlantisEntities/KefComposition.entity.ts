import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_COMPOSITION_PK", ["iteid", "prlinetype", "iteidcomponent"], {
  unique: true,
})
@ObjectType()
@Entity("KEF_COMPOSITION", { schema: "dbo" })
export class KefComposition {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("float", { primary: true, name: "PRLINETYPE", precision: 53 })
  prlinetype: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEIDCOMPONENT" })
  iteidcomponent: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITECODECOMPONENT", nullable: true, length: 25 })
  itecodecomponent: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "COMPONENTQTY", nullable: true, precision: 53 })
  componentqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LINETYPE", nullable: true, precision: 53 })
  linetype: number | null;
}
