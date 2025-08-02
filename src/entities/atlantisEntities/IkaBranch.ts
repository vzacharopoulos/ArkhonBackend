import { Column, Entity, Index } from "typeorm";

@Index("UNI_6480", ["code"], { unique: true })
@Entity("IKA_BRANCH", { schema: "dbo" })
export class IkaBranch {
  @Column("varchar", { primary: true, name: "CODE", length: 25 })
  code: string;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Column("varchar", { name: "CITY", nullable: true, length: 30 })
  city: string | null;
}
