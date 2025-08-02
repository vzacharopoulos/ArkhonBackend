import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Customer } from "./Customer";

@Index("UNIX_1158", ["cusid"], {})
@Entity("WEBCUSTOMER", { schema: "dbo" })
export class Webcustomer {
  @Column("int", { name: "CUSID" })
  cusid: number;

  @Column("varchar", { name: "WELCOMEMSG", nullable: true })
  welcomemsg: string | null;

  @Column("smallint", { name: "SHOWMSG", nullable: true })
  showmsg: number | null;

  @Column("smallint", { name: "PLACEORDERS", nullable: true })
  placeorders: number | null;

  @Column("varchar", { name: "RESTRICTIONMSG", nullable: true })
  restrictionmsg: string | null;

  @Column("smallint", { name: "NEEDAPPROVAL", nullable: true })
  needapproval: number | null;

  @Column("smallint", {
    name: "ALLOWEDCONNECTIONS",
    nullable: true,
    default: () => "(1)",
  })
  allowedconnections: number | null;

  @ManyToOne(() => Customer, (customer) => customer.webcustomers, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "CUSID", referencedColumnName: "id" }])
  cus: Customer;
}
