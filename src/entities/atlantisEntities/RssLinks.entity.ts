import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RssNews } from "./RssNews.entity";

@Index("UNI_6474", ["id"], { unique: true })
@ObjectType()
@Entity("RSS_LINKS", { schema: "dbo" })
export class RssLinks {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "PARENTID", nullable: true })
  parentid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DOMAINKIND", nullable: true })
  domainkind: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCRIPTION", nullable: true, length: 200 })
  description: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LINK", nullable: true, length: 200 })
  link: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "IMAGE", nullable: true, length: 200 })
  image: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "PUBDATE", nullable: true })
  pubdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTUPDATE", nullable: true })
  lastupdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SITELINK", nullable: true, length: 200 })
  sitelink: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE", nullable: true, length: 200 })
  title: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "USERID", nullable: true, default: () => "0" })
  userid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GROUPID", nullable: true, default: () => "0" })
  groupid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "GDENABLE", default: () => "(0)" })
  gdenable: number;

  @Field(() => [RssNews], { nullable: true })
  @OneToMany(() => RssNews, (rssNews) => rssNews.rssl)
  rssNews: RssNews[];
}
