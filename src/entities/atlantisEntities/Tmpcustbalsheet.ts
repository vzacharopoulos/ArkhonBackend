import { Column, Entity } from "typeorm";

@Entity("TMPCUSTBALSHEET", { schema: "dbo" })
export class Tmpcustbalsheet {
  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "FYEID" })
  fyeid: number;

  @Column("int", { name: "FIPID" })
  fipid: number;

  @Column("int", { name: "MASTERID" })
  masterid: number;

  @Column("float", { name: "FFMEANDUETIME", nullable: true, precision: 53 })
  ffmeanduetime: number | null;

  @Column("float", { name: "FFMEANPAYMENTTIME", nullable: true, precision: 53 })
  ffmeanpaymenttime: number | null;
}
