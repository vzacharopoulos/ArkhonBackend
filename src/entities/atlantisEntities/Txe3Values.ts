import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_15500", ["id"], { unique: true })
@Index("UNI_15508", ["afm", "fyeid"], { unique: true })
@Entity("TXE3VALUES", { schema: "dbo" })
export class Txe3Values {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "FYEID", unique: true })
  fyeid: number;

  @Column("varchar", { name: "AFM", unique: true, length: 20 })
  afm: string;

  @Column("varchar", { name: "F021", nullable: true, length: 25 })
  f021: string | null;

  @Column("float", { name: "F070", nullable: true, precision: 53 })
  f070: number | null;

  @Column("float", { name: "F071", nullable: true, precision: 53 })
  f071: number | null;

  @Column("float", { name: "F072", nullable: true, precision: 53 })
  f072: number | null;

  @Column("float", { name: "F073", nullable: true, precision: 53 })
  f073: number | null;

  @Column("float", { name: "F074", nullable: true, precision: 53 })
  f074: number | null;

  @Column("float", { name: "F075", nullable: true, precision: 53 })
  f075: number | null;

  @Column("float", { name: "F076", nullable: true, precision: 53 })
  f076: number | null;

  @Column("float", { name: "F077", nullable: true, precision: 53 })
  f077: number | null;

  @Column("float", { name: "F078", nullable: true, precision: 53 })
  f078: number | null;

  @Column("float", { name: "F079", nullable: true, precision: 53 })
  f079: number | null;

  @Column("float", { name: "F080", nullable: true, precision: 53 })
  f080: number | null;

  @Column("float", { name: "F101", nullable: true, precision: 53 })
  f101: number | null;

  @Column("float", { name: "F103", nullable: true, precision: 53 })
  f103: number | null;

  @Column("float", { name: "F104", nullable: true, precision: 53 })
  f104: number | null;

  @Column("float", { name: "F105", nullable: true, precision: 53 })
  f105: number | null;

  @Column("float", { name: "F106", nullable: true, precision: 53 })
  f106: number | null;

  @Column("float", { name: "F162", nullable: true, precision: 53 })
  f162: number | null;

  @Column("float", { name: "F163", nullable: true, precision: 53 })
  f163: number | null;

  @Column("float", { name: "F164", nullable: true, precision: 53 })
  f164: number | null;

  @Column("float", { name: "F165", nullable: true, precision: 53 })
  f165: number | null;

  @Column("float", { name: "F166", nullable: true, precision: 53 })
  f166: number | null;

  @Column("float", { name: "F167", nullable: true, precision: 53 })
  f167: number | null;

  @Column("float", { name: "F168", nullable: true, precision: 53 })
  f168: number | null;

  @Column("float", { name: "F169", nullable: true, precision: 53 })
  f169: number | null;

  @Column("float", { name: "F170", nullable: true, precision: 53 })
  f170: number | null;

  @Column("float", { name: "F182", nullable: true, precision: 53 })
  f182: number | null;

  @Column("float", { name: "F183", nullable: true, precision: 53 })
  f183: number | null;

  @Column("float", { name: "F184", nullable: true, precision: 53 })
  f184: number | null;

  @Column("float", { name: "F186", nullable: true, precision: 53 })
  f186: number | null;

  @Column("float", { name: "F187", nullable: true, precision: 53 })
  f187: number | null;

  @Column("float", { name: "F188", nullable: true, precision: 53 })
  f188: number | null;

  @Column("float", { name: "F189", nullable: true, precision: 53 })
  f189: number | null;

  @Column("float", { name: "F190", nullable: true, precision: 53 })
  f190: number | null;

  @Column("float", { name: "F195", nullable: true, precision: 53 })
  f195: number | null;

  @Column("float", { name: "F196", nullable: true, precision: 53 })
  f196: number | null;

  @Column("float", { name: "F197", nullable: true, precision: 53 })
  f197: number | null;

  @Column("float", { name: "F201", nullable: true, precision: 53 })
  f201: number | null;

  @Column("float", { name: "F203", nullable: true, precision: 53 })
  f203: number | null;

  @Column("float", { name: "F204", nullable: true, precision: 53 })
  f204: number | null;

  @Column("float", { name: "F205", nullable: true, precision: 53 })
  f205: number | null;

  @Column("float", { name: "F207", nullable: true, precision: 53 })
  f207: number | null;

  @Column("float", { name: "F208", nullable: true, precision: 53 })
  f208: number | null;

  @Column("float", { name: "F209", nullable: true, precision: 53 })
  f209: number | null;

  @Column("float", { name: "F210", nullable: true, precision: 53 })
  f210: number | null;

  @Column("float", { name: "F212", nullable: true, precision: 53 })
  f212: number | null;

  @Column("float", { name: "F262", nullable: true, precision: 53 })
  f262: number | null;

  @Column("float", { name: "F263", nullable: true, precision: 53 })
  f263: number | null;

  @Column("float", { name: "F264", nullable: true, precision: 53 })
  f264: number | null;

  @Column("float", { name: "F265", nullable: true, precision: 53 })
  f265: number | null;

  @Column("float", { name: "F266", nullable: true, precision: 53 })
  f266: number | null;

  @Column("float", { name: "F267", nullable: true, precision: 53 })
  f267: number | null;

  @Column("float", { name: "F268", nullable: true, precision: 53 })
  f268: number | null;

  @Column("float", { name: "F269", nullable: true, precision: 53 })
  f269: number | null;

  @Column("float", { name: "F270", nullable: true, precision: 53 })
  f270: number | null;

  @Column("float", { name: "F282", nullable: true, precision: 53 })
  f282: number | null;

  @Column("float", { name: "F283", nullable: true, precision: 53 })
  f283: number | null;

  @Column("float", { name: "F284", nullable: true, precision: 53 })
  f284: number | null;

  @Column("float", { name: "F286", nullable: true, precision: 53 })
  f286: number | null;

  @Column("float", { name: "F287", nullable: true, precision: 53 })
  f287: number | null;

  @Column("float", { name: "F288", nullable: true, precision: 53 })
  f288: number | null;

  @Column("float", { name: "F289", nullable: true, precision: 53 })
  f289: number | null;

  @Column("float", { name: "F290", nullable: true, precision: 53 })
  f290: number | null;

  @Column("float", { name: "F295", nullable: true, precision: 53 })
  f295: number | null;

  @Column("float", { name: "F296", nullable: true, precision: 53 })
  f296: number | null;

  @Column("float", { name: "F297", nullable: true, precision: 53 })
  f297: number | null;

  @Column("float", { name: "F301", nullable: true, precision: 53 })
  f301: number | null;

  @Column("float", { name: "F303", nullable: true, precision: 53 })
  f303: number | null;

  @Column("float", { name: "F304", nullable: true, precision: 53 })
  f304: number | null;

  @Column("float", { name: "F305", nullable: true, precision: 53 })
  f305: number | null;

  @Column("float", { name: "F307", nullable: true, precision: 53 })
  f307: number | null;

  @Column("float", { name: "F308", nullable: true, precision: 53 })
  f308: number | null;

  @Column("float", { name: "F309", nullable: true, precision: 53 })
  f309: number | null;

  @Column("float", { name: "F310", nullable: true, precision: 53 })
  f310: number | null;

  @Column("float", { name: "F312", nullable: true, precision: 53 })
  f312: number | null;

  @Column("float", { name: "F314", nullable: true, precision: 53 })
  f314: number | null;

  @Column("float", { name: "F315", nullable: true, precision: 53 })
  f315: number | null;

  @Column("float", { name: "F317", nullable: true, precision: 53 })
  f317: number | null;

  @Column("float", { name: "F318", nullable: true, precision: 53 })
  f318: number | null;

  @Column("float", { name: "F362", nullable: true, precision: 53 })
  f362: number | null;

  @Column("float", { name: "F363", nullable: true, precision: 53 })
  f363: number | null;

  @Column("float", { name: "F364", nullable: true, precision: 53 })
  f364: number | null;

  @Column("float", { name: "F365", nullable: true, precision: 53 })
  f365: number | null;

  @Column("float", { name: "F366", nullable: true, precision: 53 })
  f366: number | null;

  @Column("float", { name: "F367", nullable: true, precision: 53 })
  f367: number | null;

  @Column("float", { name: "F368", nullable: true, precision: 53 })
  f368: number | null;

  @Column("float", { name: "F369", nullable: true, precision: 53 })
  f369: number | null;

  @Column("float", { name: "F370", nullable: true, precision: 53 })
  f370: number | null;

  @Column("float", { name: "F382", nullable: true, precision: 53 })
  f382: number | null;

  @Column("float", { name: "F383", nullable: true, precision: 53 })
  f383: number | null;

  @Column("float", { name: "F384", nullable: true, precision: 53 })
  f384: number | null;

  @Column("float", { name: "F386", nullable: true, precision: 53 })
  f386: number | null;

  @Column("float", { name: "F387", nullable: true, precision: 53 })
  f387: number | null;

  @Column("float", { name: "F388", nullable: true, precision: 53 })
  f388: number | null;

  @Column("float", { name: "F389", nullable: true, precision: 53 })
  f389: number | null;

  @Column("float", { name: "F390", nullable: true, precision: 53 })
  f390: number | null;

  @Column("float", { name: "F395", nullable: true, precision: 53 })
  f395: number | null;

  @Column("float", { name: "F462", nullable: true, precision: 53 })
  f462: number | null;

  @Column("float", { name: "F463", nullable: true, precision: 53 })
  f463: number | null;

  @Column("float", { name: "F464", nullable: true, precision: 53 })
  f464: number | null;

  @Column("float", { name: "F465", nullable: true, precision: 53 })
  f465: number | null;

  @Column("float", { name: "F466", nullable: true, precision: 53 })
  f466: number | null;

  @Column("float", { name: "F467", nullable: true, precision: 53 })
  f467: number | null;

  @Column("float", { name: "F468", nullable: true, precision: 53 })
  f468: number | null;

  @Column("float", { name: "F469", nullable: true, precision: 53 })
  f469: number | null;

  @Column("float", { name: "F470", nullable: true, precision: 53 })
  f470: number | null;

  @Column("float", { name: "F482", nullable: true, precision: 53 })
  f482: number | null;

  @Column("float", { name: "F483", nullable: true, precision: 53 })
  f483: number | null;

  @Column("float", { name: "F484", nullable: true, precision: 53 })
  f484: number | null;

  @Column("float", { name: "F486", nullable: true, precision: 53 })
  f486: number | null;

  @Column("float", { name: "F487", nullable: true, precision: 53 })
  f487: number | null;

  @Column("float", { name: "F488", nullable: true, precision: 53 })
  f488: number | null;

  @Column("float", { name: "F489", nullable: true, precision: 53 })
  f489: number | null;

  @Column("float", { name: "F490", nullable: true, precision: 53 })
  f490: number | null;

  @Column("float", { name: "F495", nullable: true, precision: 53 })
  f495: number | null;

  @Column("float", { name: "F496", nullable: true, precision: 53 })
  f496: number | null;

  @Column("float", { name: "F497", nullable: true, precision: 53 })
  f497: number | null;

  @Column("float", { name: "F562", nullable: true, precision: 53 })
  f562: number | null;

  @Column("float", { name: "F563", nullable: true, precision: 53 })
  f563: number | null;

  @Column("float", { name: "F564", nullable: true, precision: 53 })
  f564: number | null;

  @Column("float", { name: "F565", nullable: true, precision: 53 })
  f565: number | null;

  @Column("float", { name: "F566", nullable: true, precision: 53 })
  f566: number | null;

  @Column("float", { name: "F567", nullable: true, precision: 53 })
  f567: number | null;

  @Column("float", { name: "F568", nullable: true, precision: 53 })
  f568: number | null;

  @Column("float", { name: "F569", nullable: true, precision: 53 })
  f569: number | null;

  @Column("float", { name: "F570", nullable: true, precision: 53 })
  f570: number | null;

  @Column("float", { name: "F582", nullable: true, precision: 53 })
  f582: number | null;

  @Column("float", { name: "F583", nullable: true, precision: 53 })
  f583: number | null;

  @Column("float", { name: "F584", nullable: true, precision: 53 })
  f584: number | null;

  @Column("float", { name: "F586", nullable: true, precision: 53 })
  f586: number | null;

  @Column("float", { name: "F587", nullable: true, precision: 53 })
  f587: number | null;

  @Column("float", { name: "F588", nullable: true, precision: 53 })
  f588: number | null;

  @Column("float", { name: "F589", nullable: true, precision: 53 })
  f589: number | null;

  @Column("float", { name: "F590", nullable: true, precision: 53 })
  f590: number | null;

  @Column("float", { name: "F595", nullable: true, precision: 53 })
  f595: number | null;

  @Column("float", { name: "F596", nullable: true, precision: 53 })
  f596: number | null;

  @Column("float", { name: "F597", nullable: true, precision: 53 })
  f597: number | null;

  @Column("float", { name: "F102_001", nullable: true, precision: 53 })
  f102_001: number | null;

  @Column("float", { name: "F102_002", nullable: true, precision: 53 })
  f102_002: number | null;

  @Column("float", { name: "F102_003", nullable: true, precision: 53 })
  f102_003: number | null;

  @Column("float", { name: "F102_004", nullable: true, precision: 53 })
  f102_004: number | null;

  @Column("float", { name: "F102_005", nullable: true, precision: 53 })
  f102_005: number | null;

  @Column("float", { name: "F102_006", nullable: true, precision: 53 })
  f102_006: number | null;

  @Column("float", { name: "F161_001", nullable: true, precision: 53 })
  f161_001: number | null;

  @Column("float", { name: "F161_002", nullable: true, precision: 53 })
  f161_002: number | null;

  @Column("float", { name: "F161_003", nullable: true, precision: 53 })
  f161_003: number | null;

  @Column("float", { name: "F161_004", nullable: true, precision: 53 })
  f161_004: number | null;

  @Column("float", { name: "F161_005", nullable: true, precision: 53 })
  f161_005: number | null;

  @Column("float", { name: "F161_006", nullable: true, precision: 53 })
  f161_006: number | null;

  @Column("float", { name: "F161_007", nullable: true, precision: 53 })
  f161_007: number | null;

  @Column("float", { name: "F181_001", nullable: true, precision: 53 })
  f181_001: number | null;

  @Column("float", { name: "F181_002", nullable: true, precision: 53 })
  f181_002: number | null;

  @Column("float", { name: "F181_003", nullable: true, precision: 53 })
  f181_003: number | null;

  @Column("float", { name: "F185_001", nullable: true, precision: 53 })
  f185_001: number | null;

  @Column("float", { name: "F185_002", nullable: true, precision: 53 })
  f185_002: number | null;

  @Column("float", { name: "F185_003", nullable: true, precision: 53 })
  f185_003: number | null;

  @Column("float", { name: "F185_004", nullable: true, precision: 53 })
  f185_004: number | null;

  @Column("float", { name: "F185_005", nullable: true, precision: 53 })
  f185_005: number | null;

  @Column("float", { name: "F185_006", nullable: true, precision: 53 })
  f185_006: number | null;

  @Column("float", { name: "F185_007", nullable: true, precision: 53 })
  f185_007: number | null;

  @Column("float", { name: "F185_008", nullable: true, precision: 53 })
  f185_008: number | null;

  @Column("float", { name: "F185_009", nullable: true, precision: 53 })
  f185_009: number | null;

  @Column("float", { name: "F185_010", nullable: true, precision: 53 })
  f185_010: number | null;

  @Column("float", { name: "F185_011", nullable: true, precision: 53 })
  f185_011: number | null;

  @Column("float", { name: "F185_012", nullable: true, precision: 53 })
  f185_012: number | null;

  @Column("float", { name: "F185_013", nullable: true, precision: 53 })
  f185_013: number | null;

  @Column("float", { name: "F185_014", nullable: true, precision: 53 })
  f185_014: number | null;

  @Column("float", { name: "F185_015", nullable: true, precision: 53 })
  f185_015: number | null;

  @Column("float", { name: "F185_016", nullable: true, precision: 53 })
  f185_016: number | null;

  @Column("float", { name: "F198_001", nullable: true, precision: 53 })
  f198_001: number | null;

  @Column("float", { name: "F198_002", nullable: true, precision: 53 })
  f198_002: number | null;

  @Column("float", { name: "F198_003", nullable: true, precision: 53 })
  f198_003: number | null;

  @Column("float", { name: "F202_001", nullable: true, precision: 53 })
  f202_001: number | null;

  @Column("float", { name: "F202_002", nullable: true, precision: 53 })
  f202_002: number | null;

  @Column("float", { name: "F202_003", nullable: true, precision: 53 })
  f202_003: number | null;

  @Column("float", { name: "F202_004", nullable: true, precision: 53 })
  f202_004: number | null;

  @Column("float", { name: "F202_005", nullable: true, precision: 53 })
  f202_005: number | null;

  @Column("float", { name: "F261_001", nullable: true, precision: 53 })
  f261_001: number | null;

  @Column("float", { name: "F261_002", nullable: true, precision: 53 })
  f261_002: number | null;

  @Column("float", { name: "F261_003", nullable: true, precision: 53 })
  f261_003: number | null;

  @Column("float", { name: "F261_004", nullable: true, precision: 53 })
  f261_004: number | null;

  @Column("float", { name: "F261_005", nullable: true, precision: 53 })
  f261_005: number | null;

  @Column("float", { name: "F261_006", nullable: true, precision: 53 })
  f261_006: number | null;

  @Column("float", { name: "F261_007", nullable: true, precision: 53 })
  f261_007: number | null;

  @Column("float", { name: "F281_001", nullable: true, precision: 53 })
  f281_001: number | null;

  @Column("float", { name: "F281_002", nullable: true, precision: 53 })
  f281_002: number | null;

  @Column("float", { name: "F281_003", nullable: true, precision: 53 })
  f281_003: number | null;

  @Column("float", { name: "F285_001", nullable: true, precision: 53 })
  f285_001: number | null;

  @Column("float", { name: "F285_002", nullable: true, precision: 53 })
  f285_002: number | null;

  @Column("float", { name: "F285_003", nullable: true, precision: 53 })
  f285_003: number | null;

  @Column("float", { name: "F285_004", nullable: true, precision: 53 })
  f285_004: number | null;

  @Column("float", { name: "F285_005", nullable: true, precision: 53 })
  f285_005: number | null;

  @Column("float", { name: "F285_006", nullable: true, precision: 53 })
  f285_006: number | null;

  @Column("float", { name: "F285_007", nullable: true, precision: 53 })
  f285_007: number | null;

  @Column("float", { name: "F285_008", nullable: true, precision: 53 })
  f285_008: number | null;

  @Column("float", { name: "F285_009", nullable: true, precision: 53 })
  f285_009: number | null;

  @Column("float", { name: "F285_010", nullable: true, precision: 53 })
  f285_010: number | null;

  @Column("float", { name: "F285_011", nullable: true, precision: 53 })
  f285_011: number | null;

  @Column("float", { name: "F285_012", nullable: true, precision: 53 })
  f285_012: number | null;

  @Column("float", { name: "F285_013", nullable: true, precision: 53 })
  f285_013: number | null;

  @Column("float", { name: "F285_014", nullable: true, precision: 53 })
  f285_014: number | null;

  @Column("float", { name: "F285_015", nullable: true, precision: 53 })
  f285_015: number | null;

  @Column("float", { name: "F285_016", nullable: true, precision: 53 })
  f285_016: number | null;

  @Column("float", { name: "F298_001", nullable: true, precision: 53 })
  f298_001: number | null;

  @Column("float", { name: "F298_002", nullable: true, precision: 53 })
  f298_002: number | null;

  @Column("float", { name: "F298_003", nullable: true, precision: 53 })
  f298_003: number | null;

  @Column("float", { name: "F302_001", nullable: true, precision: 53 })
  f302_001: number | null;

  @Column("float", { name: "F302_002", nullable: true, precision: 53 })
  f302_002: number | null;

  @Column("float", { name: "F302_003", nullable: true, precision: 53 })
  f302_003: number | null;

  @Column("float", { name: "F302_004", nullable: true, precision: 53 })
  f302_004: number | null;

  @Column("float", { name: "F302_005", nullable: true, precision: 53 })
  f302_005: number | null;

  @Column("float", { name: "F313_001", nullable: true, precision: 53 })
  f313_001: number | null;

  @Column("float", { name: "F313_002", nullable: true, precision: 53 })
  f313_002: number | null;

  @Column("float", { name: "F313_003", nullable: true, precision: 53 })
  f313_003: number | null;

  @Column("float", { name: "F313_004", nullable: true, precision: 53 })
  f313_004: number | null;

  @Column("float", { name: "F313_005", nullable: true, precision: 53 })
  f313_005: number | null;

  @Column("float", { name: "F361_001", nullable: true, precision: 53 })
  f361_001: number | null;

  @Column("float", { name: "F361_002", nullable: true, precision: 53 })
  f361_002: number | null;

  @Column("float", { name: "F361_003", nullable: true, precision: 53 })
  f361_003: number | null;

  @Column("float", { name: "F361_004", nullable: true, precision: 53 })
  f361_004: number | null;

  @Column("float", { name: "F361_005", nullable: true, precision: 53 })
  f361_005: number | null;

  @Column("float", { name: "F361_006", nullable: true, precision: 53 })
  f361_006: number | null;

  @Column("float", { name: "F361_007", nullable: true, precision: 53 })
  f361_007: number | null;

  @Column("float", { name: "F381_001", nullable: true, precision: 53 })
  f381_001: number | null;

  @Column("float", { name: "F381_002", nullable: true, precision: 53 })
  f381_002: number | null;

  @Column("float", { name: "F381_003", nullable: true, precision: 53 })
  f381_003: number | null;

  @Column("float", { name: "F385_001", nullable: true, precision: 53 })
  f385_001: number | null;

  @Column("float", { name: "F385_002", nullable: true, precision: 53 })
  f385_002: number | null;

  @Column("float", { name: "F385_003", nullable: true, precision: 53 })
  f385_003: number | null;

  @Column("float", { name: "F385_004", nullable: true, precision: 53 })
  f385_004: number | null;

  @Column("float", { name: "F385_005", nullable: true, precision: 53 })
  f385_005: number | null;

  @Column("float", { name: "F385_006", nullable: true, precision: 53 })
  f385_006: number | null;

  @Column("float", { name: "F385_007", nullable: true, precision: 53 })
  f385_007: number | null;

  @Column("float", { name: "F385_008", nullable: true, precision: 53 })
  f385_008: number | null;

  @Column("float", { name: "F385_009", nullable: true, precision: 53 })
  f385_009: number | null;

  @Column("float", { name: "F385_010", nullable: true, precision: 53 })
  f385_010: number | null;

  @Column("float", { name: "F385_011", nullable: true, precision: 53 })
  f385_011: number | null;

  @Column("float", { name: "F385_012", nullable: true, precision: 53 })
  f385_012: number | null;

  @Column("float", { name: "F385_013", nullable: true, precision: 53 })
  f385_013: number | null;

  @Column("float", { name: "F385_014", nullable: true, precision: 53 })
  f385_014: number | null;

  @Column("float", { name: "F385_015", nullable: true, precision: 53 })
  f385_015: number | null;

  @Column("float", { name: "F385_016", nullable: true, precision: 53 })
  f385_016: number | null;

  @Column("float", { name: "F398_001", nullable: true, precision: 53 })
  f398_001: number | null;

  @Column("float", { name: "F398_002", nullable: true, precision: 53 })
  f398_002: number | null;

  @Column("float", { name: "F398_003", nullable: true, precision: 53 })
  f398_003: number | null;

  @Column("float", { name: "F461_001", nullable: true, precision: 53 })
  f461_001: number | null;

  @Column("float", { name: "F461_002", nullable: true, precision: 53 })
  f461_002: number | null;

  @Column("float", { name: "F461_003", nullable: true, precision: 53 })
  f461_003: number | null;

  @Column("float", { name: "F461_004", nullable: true, precision: 53 })
  f461_004: number | null;

  @Column("float", { name: "F461_005", nullable: true, precision: 53 })
  f461_005: number | null;

  @Column("float", { name: "F461_006", nullable: true, precision: 53 })
  f461_006: number | null;

  @Column("float", { name: "F461_007", nullable: true, precision: 53 })
  f461_007: number | null;

  @Column("float", { name: "F481_001", nullable: true, precision: 53 })
  f481_001: number | null;

  @Column("float", { name: "F481_002", nullable: true, precision: 53 })
  f481_002: number | null;

  @Column("float", { name: "F481_003", nullable: true, precision: 53 })
  f481_003: number | null;

  @Column("float", { name: "F485_001", nullable: true, precision: 53 })
  f485_001: number | null;

  @Column("float", { name: "F485_002", nullable: true, precision: 53 })
  f485_002: number | null;

  @Column("float", { name: "F485_003", nullable: true, precision: 53 })
  f485_003: number | null;

  @Column("float", { name: "F485_004", nullable: true, precision: 53 })
  f485_004: number | null;

  @Column("float", { name: "F485_005", nullable: true, precision: 53 })
  f485_005: number | null;

  @Column("float", { name: "F485_006", nullable: true, precision: 53 })
  f485_006: number | null;

  @Column("float", { name: "F485_007", nullable: true, precision: 53 })
  f485_007: number | null;

  @Column("float", { name: "F485_008", nullable: true, precision: 53 })
  f485_008: number | null;

  @Column("float", { name: "F485_009", nullable: true, precision: 53 })
  f485_009: number | null;

  @Column("float", { name: "F485_010", nullable: true, precision: 53 })
  f485_010: number | null;

  @Column("float", { name: "F485_011", nullable: true, precision: 53 })
  f485_011: number | null;

  @Column("float", { name: "F485_012", nullable: true, precision: 53 })
  f485_012: number | null;

  @Column("float", { name: "F485_013", nullable: true, precision: 53 })
  f485_013: number | null;

  @Column("float", { name: "F485_014", nullable: true, precision: 53 })
  f485_014: number | null;

  @Column("float", { name: "F485_015", nullable: true, precision: 53 })
  f485_015: number | null;

  @Column("float", { name: "F485_016", nullable: true, precision: 53 })
  f485_016: number | null;

  @Column("float", { name: "F498_001", nullable: true, precision: 53 })
  f498_001: number | null;

  @Column("float", { name: "F498_002", nullable: true, precision: 53 })
  f498_002: number | null;

  @Column("float", { name: "F498_003", nullable: true, precision: 53 })
  f498_003: number | null;

  @Column("float", { name: "F561_001", nullable: true, precision: 53 })
  f561_001: number | null;

  @Column("float", { name: "F561_002", nullable: true, precision: 53 })
  f561_002: number | null;

  @Column("float", { name: "F561_003", nullable: true, precision: 53 })
  f561_003: number | null;

  @Column("float", { name: "F561_004", nullable: true, precision: 53 })
  f561_004: number | null;

  @Column("float", { name: "F561_005", nullable: true, precision: 53 })
  f561_005: number | null;

  @Column("float", { name: "F561_006", nullable: true, precision: 53 })
  f561_006: number | null;

  @Column("float", { name: "F561_007", nullable: true, precision: 53 })
  f561_007: number | null;

  @Column("float", { name: "F581_001", nullable: true, precision: 53 })
  f581_001: number | null;

  @Column("float", { name: "F581_002", nullable: true, precision: 53 })
  f581_002: number | null;

  @Column("float", { name: "F581_003", nullable: true, precision: 53 })
  f581_003: number | null;

  @Column("float", { name: "F585_001", nullable: true, precision: 53 })
  f585_001: number | null;

  @Column("float", { name: "F585_002", nullable: true, precision: 53 })
  f585_002: number | null;

  @Column("float", { name: "F585_003", nullable: true, precision: 53 })
  f585_003: number | null;

  @Column("float", { name: "F585_004", nullable: true, precision: 53 })
  f585_004: number | null;

  @Column("float", { name: "F585_005", nullable: true, precision: 53 })
  f585_005: number | null;

  @Column("float", { name: "F585_006", nullable: true, precision: 53 })
  f585_006: number | null;

  @Column("float", { name: "F585_007", nullable: true, precision: 53 })
  f585_007: number | null;

  @Column("float", { name: "F585_008", nullable: true, precision: 53 })
  f585_008: number | null;

  @Column("float", { name: "F585_009", nullable: true, precision: 53 })
  f585_009: number | null;

  @Column("float", { name: "F585_010", nullable: true, precision: 53 })
  f585_010: number | null;

  @Column("float", { name: "F585_011", nullable: true, precision: 53 })
  f585_011: number | null;

  @Column("float", { name: "F585_012", nullable: true, precision: 53 })
  f585_012: number | null;

  @Column("float", { name: "F585_013", nullable: true, precision: 53 })
  f585_013: number | null;

  @Column("float", { name: "F585_014", nullable: true, precision: 53 })
  f585_014: number | null;

  @Column("float", { name: "F585_015", nullable: true, precision: 53 })
  f585_015: number | null;

  @Column("float", { name: "F585_016", nullable: true, precision: 53 })
  f585_016: number | null;

  @Column("float", { name: "F598_001", nullable: true, precision: 53 })
  f598_001: number | null;

  @Column("float", { name: "F598_002", nullable: true, precision: 53 })
  f598_002: number | null;

  @Column("float", { name: "F598_003", nullable: true, precision: 53 })
  f598_003: number | null;

  @Column("float", { name: "F800_001", nullable: true, precision: 53 })
  f800_001: number | null;

  @Column("float", { name: "F800_002", nullable: true, precision: 53 })
  f800_002: number | null;

  @Column("float", { name: "F800_003", nullable: true, precision: 53 })
  f800_003: number | null;

  @Column("float", { name: "F800_004", nullable: true, precision: 53 })
  f800_004: number | null;

  @Column("float", { name: "F801_001", nullable: true, precision: 53 })
  f801_001: number | null;

  @Column("float", { name: "F801_002", nullable: true, precision: 53 })
  f801_002: number | null;

  @Column("float", { name: "F801_003", nullable: true, precision: 53 })
  f801_003: number | null;

  @Column("float", { name: "F801_004", nullable: true, precision: 53 })
  f801_004: number | null;

  @Column("float", { name: "F802_001", nullable: true, precision: 53 })
  f802_001: number | null;

  @Column("float", { name: "F802_002", nullable: true, precision: 53 })
  f802_002: number | null;

  @Column("float", { name: "F802_003", nullable: true, precision: 53 })
  f802_003: number | null;

  @Column("float", { name: "F802_004", nullable: true, precision: 53 })
  f802_004: number | null;

  @Column("float", { name: "F803_001", nullable: true, precision: 53 })
  f803_001: number | null;

  @Column("float", { name: "F803_002", nullable: true, precision: 53 })
  f803_002: number | null;

  @Column("float", { name: "F803_003", nullable: true, precision: 53 })
  f803_003: number | null;

  @Column("float", { name: "F803_004", nullable: true, precision: 53 })
  f803_004: number | null;

  @Column("float", { name: "F820_001", nullable: true, precision: 53 })
  f820_001: number | null;

  @Column("float", { name: "F820_002", nullable: true, precision: 53 })
  f820_002: number | null;

  @Column("float", { name: "F820_003", nullable: true, precision: 53 })
  f820_003: number | null;

  @Column("float", { name: "F820_004", nullable: true, precision: 53 })
  f820_004: number | null;

  @Column("float", { name: "F821_001", nullable: true, precision: 53 })
  f821_001: number | null;

  @Column("float", { name: "F821_002", nullable: true, precision: 53 })
  f821_002: number | null;

  @Column("float", { name: "F821_003", nullable: true, precision: 53 })
  f821_003: number | null;

  @Column("float", { name: "F821_004", nullable: true, precision: 53 })
  f821_004: number | null;

  @Column("float", { name: "F822_001", nullable: true, precision: 53 })
  f822_001: number | null;

  @Column("float", { name: "F822_002", nullable: true, precision: 53 })
  f822_002: number | null;

  @Column("float", { name: "F822_003", nullable: true, precision: 53 })
  f822_003: number | null;

  @Column("float", { name: "F822_004", nullable: true, precision: 53 })
  f822_004: number | null;

  @Column("float", { name: "F823_001", nullable: true, precision: 53 })
  f823_001: number | null;

  @Column("float", { name: "F823_002", nullable: true, precision: 53 })
  f823_002: number | null;

  @Column("float", { name: "F823_003", nullable: true, precision: 53 })
  f823_003: number | null;

  @Column("float", { name: "F823_004", nullable: true, precision: 53 })
  f823_004: number | null;

  @Column("float", { name: "F840_001", nullable: true, precision: 53 })
  f840_001: number | null;

  @Column("float", { name: "F840_002", nullable: true, precision: 53 })
  f840_002: number | null;

  @Column("float", { name: "F840_003", nullable: true, precision: 53 })
  f840_003: number | null;

  @Column("float", { name: "F840_004", nullable: true, precision: 53 })
  f840_004: number | null;

  @Column("float", { name: "F841_001", nullable: true, precision: 53 })
  f841_001: number | null;

  @Column("float", { name: "F841_002", nullable: true, precision: 53 })
  f841_002: number | null;

  @Column("float", { name: "F841_003", nullable: true, precision: 53 })
  f841_003: number | null;

  @Column("float", { name: "F841_004", nullable: true, precision: 53 })
  f841_004: number | null;

  @Column("float", { name: "F842_001", nullable: true, precision: 53 })
  f842_001: number | null;

  @Column("float", { name: "F842_002", nullable: true, precision: 53 })
  f842_002: number | null;

  @Column("float", { name: "F842_003", nullable: true, precision: 53 })
  f842_003: number | null;

  @Column("float", { name: "F842_004", nullable: true, precision: 53 })
  f842_004: number | null;

  @Column("float", { name: "F843_001", nullable: true, precision: 53 })
  f843_001: number | null;

  @Column("float", { name: "F843_002", nullable: true, precision: 53 })
  f843_002: number | null;

  @Column("float", { name: "F843_003", nullable: true, precision: 53 })
  f843_003: number | null;

  @Column("float", { name: "F843_004", nullable: true, precision: 53 })
  f843_004: number | null;

  @Column("float", { name: "F860_001", nullable: true, precision: 53 })
  f860_001: number | null;

  @Column("float", { name: "F860_002", nullable: true, precision: 53 })
  f860_002: number | null;

  @Column("float", { name: "F860_003", nullable: true, precision: 53 })
  f860_003: number | null;

  @Column("float", { name: "F860_004", nullable: true, precision: 53 })
  f860_004: number | null;

  @Column("float", { name: "F861_001", nullable: true, precision: 53 })
  f861_001: number | null;

  @Column("float", { name: "F861_002", nullable: true, precision: 53 })
  f861_002: number | null;

  @Column("float", { name: "F861_003", nullable: true, precision: 53 })
  f861_003: number | null;

  @Column("float", { name: "F861_004", nullable: true, precision: 53 })
  f861_004: number | null;

  @Column("float", { name: "F862_001", nullable: true, precision: 53 })
  f862_001: number | null;

  @Column("float", { name: "F862_002", nullable: true, precision: 53 })
  f862_002: number | null;

  @Column("float", { name: "F862_003", nullable: true, precision: 53 })
  f862_003: number | null;

  @Column("float", { name: "F862_004", nullable: true, precision: 53 })
  f862_004: number | null;

  @Column("float", { name: "F863_001", nullable: true, precision: 53 })
  f863_001: number | null;

  @Column("float", { name: "F863_002", nullable: true, precision: 53 })
  f863_002: number | null;

  @Column("float", { name: "F863_003", nullable: true, precision: 53 })
  f863_003: number | null;

  @Column("float", { name: "F863_004", nullable: true, precision: 53 })
  f863_004: number | null;

  @Column("float", { name: "F880_001", nullable: true, precision: 53 })
  f880_001: number | null;

  @Column("float", { name: "F880_002", nullable: true, precision: 53 })
  f880_002: number | null;

  @Column("float", { name: "F880_003", nullable: true, precision: 53 })
  f880_003: number | null;

  @Column("float", { name: "F880_004", nullable: true, precision: 53 })
  f880_004: number | null;

  @Column("float", { name: "F881_001", nullable: true, precision: 53 })
  f881_001: number | null;

  @Column("float", { name: "F881_002", nullable: true, precision: 53 })
  f881_002: number | null;

  @Column("float", { name: "F881_003", nullable: true, precision: 53 })
  f881_003: number | null;

  @Column("float", { name: "F881_004", nullable: true, precision: 53 })
  f881_004: number | null;

  @Column("float", { name: "F882_001", nullable: true, precision: 53 })
  f882_001: number | null;

  @Column("float", { name: "F882_002", nullable: true, precision: 53 })
  f882_002: number | null;

  @Column("float", { name: "F882_003", nullable: true, precision: 53 })
  f882_003: number | null;

  @Column("float", { name: "F882_004", nullable: true, precision: 53 })
  f882_004: number | null;

  @Column("float", { name: "F883_001", nullable: true, precision: 53 })
  f883_001: number | null;

  @Column("float", { name: "F883_002", nullable: true, precision: 53 })
  f883_002: number | null;

  @Column("float", { name: "F883_003", nullable: true, precision: 53 })
  f883_003: number | null;

  @Column("float", { name: "F883_004", nullable: true, precision: 53 })
  f883_004: number | null;

  @Column("float", { name: "F081", nullable: true, precision: 53 })
  f081: number | null;

  @Column("float", { name: "F259", nullable: true, precision: 53 })
  f259: number | null;

  @Column("float", { name: "F396", nullable: true, precision: 53 })
  f396: number | null;

  @Column("float", { name: "F559", nullable: true, precision: 53 })
  f559: number | null;

  @Column("float", { name: "F999", nullable: true, precision: 53 })
  f999: number | null;

  @Column("float", { name: "F144_001", nullable: true, precision: 53 })
  f144_001: number | null;

  @Column("float", { name: "F144_002", nullable: true, precision: 53 })
  f144_002: number | null;

  @Column("float", { name: "F144_003", nullable: true, precision: 53 })
  f144_003: number | null;

  @Column("float", { name: "F144_004", nullable: true, precision: 53 })
  f144_004: number | null;

  @Column("float", { name: "F144_005", nullable: true, precision: 53 })
  f144_005: number | null;

  @Column("float", { name: "F144_006", nullable: true, precision: 53 })
  f144_006: number | null;

  @Column("float", { name: "F144_007", nullable: true, precision: 53 })
  f144_007: number | null;

  @Column("float", { name: "F144_008", nullable: true, precision: 53 })
  f144_008: number | null;

  @Column("float", { name: "F144_009", nullable: true, precision: 53 })
  f144_009: number | null;

  @Column("float", { name: "F144_010", nullable: true, precision: 53 })
  f144_010: number | null;

  @Column("float", { name: "F144_011", nullable: true, precision: 53 })
  f144_011: number | null;

  @Column("float", { name: "F150_001", nullable: true, precision: 53 })
  f150_001: number | null;

  @Column("float", { name: "F150_002", nullable: true, precision: 53 })
  f150_002: number | null;

  @Column("float", { name: "F150_003", nullable: true, precision: 53 })
  f150_003: number | null;

  @Column("float", { name: "F244_001", nullable: true, precision: 53 })
  f244_001: number | null;

  @Column("float", { name: "F244_002", nullable: true, precision: 53 })
  f244_002: number | null;

  @Column("float", { name: "F244_003", nullable: true, precision: 53 })
  f244_003: number | null;

  @Column("float", { name: "F244_004", nullable: true, precision: 53 })
  f244_004: number | null;

  @Column("float", { name: "F244_005", nullable: true, precision: 53 })
  f244_005: number | null;

  @Column("float", { name: "F244_006", nullable: true, precision: 53 })
  f244_006: number | null;

  @Column("float", { name: "F244_007", nullable: true, precision: 53 })
  f244_007: number | null;

  @Column("float", { name: "F244_008", nullable: true, precision: 53 })
  f244_008: number | null;

  @Column("float", { name: "F244_009", nullable: true, precision: 53 })
  f244_009: number | null;

  @Column("float", { name: "F244_010", nullable: true, precision: 53 })
  f244_010: number | null;

  @Column("float", { name: "F244_011", nullable: true, precision: 53 })
  f244_011: number | null;

  @Column("float", { name: "F250_001", nullable: true, precision: 53 })
  f250_001: number | null;

  @Column("float", { name: "F250_002", nullable: true, precision: 53 })
  f250_002: number | null;

  @Column("float", { name: "F250_003", nullable: true, precision: 53 })
  f250_003: number | null;

  @Column("float", { name: "F344_001", nullable: true, precision: 53 })
  f344_001: number | null;

  @Column("float", { name: "F344_002", nullable: true, precision: 53 })
  f344_002: number | null;

  @Column("float", { name: "F344_003", nullable: true, precision: 53 })
  f344_003: number | null;

  @Column("float", { name: "F344_004", nullable: true, precision: 53 })
  f344_004: number | null;

  @Column("float", { name: "F344_005", nullable: true, precision: 53 })
  f344_005: number | null;

  @Column("float", { name: "F344_006", nullable: true, precision: 53 })
  f344_006: number | null;

  @Column("float", { name: "F344_007", nullable: true, precision: 53 })
  f344_007: number | null;

  @Column("float", { name: "F344_008", nullable: true, precision: 53 })
  f344_008: number | null;

  @Column("float", { name: "F344_009", nullable: true, precision: 53 })
  f344_009: number | null;

  @Column("float", { name: "F344_010", nullable: true, precision: 53 })
  f344_010: number | null;

  @Column("float", { name: "F344_011", nullable: true, precision: 53 })
  f344_011: number | null;

  @Column("float", { name: "F350_001", nullable: true, precision: 53 })
  f350_001: number | null;

  @Column("float", { name: "F350_002", nullable: true, precision: 53 })
  f350_002: number | null;

  @Column("float", { name: "F350_003", nullable: true, precision: 53 })
  f350_003: number | null;

  @Column("float", { name: "F396_000", nullable: true, precision: 53 })
  f396_000: number | null;

  @Column("float", { name: "F444_001", nullable: true, precision: 53 })
  f444_001: number | null;

  @Column("float", { name: "F444_002", nullable: true, precision: 53 })
  f444_002: number | null;

  @Column("float", { name: "F444_003", nullable: true, precision: 53 })
  f444_003: number | null;

  @Column("float", { name: "F444_004", nullable: true, precision: 53 })
  f444_004: number | null;

  @Column("float", { name: "F444_005", nullable: true, precision: 53 })
  f444_005: number | null;

  @Column("float", { name: "F444_006", nullable: true, precision: 53 })
  f444_006: number | null;

  @Column("float", { name: "F444_007", nullable: true, precision: 53 })
  f444_007: number | null;

  @Column("float", { name: "F444_008", nullable: true, precision: 53 })
  f444_008: number | null;

  @Column("float", { name: "F444_009", nullable: true, precision: 53 })
  f444_009: number | null;

  @Column("float", { name: "F444_010", nullable: true, precision: 53 })
  f444_010: number | null;

  @Column("float", { name: "F444_011", nullable: true, precision: 53 })
  f444_011: number | null;

  @Column("float", { name: "F450_001", nullable: true, precision: 53 })
  f450_001: number | null;

  @Column("float", { name: "F450_002", nullable: true, precision: 53 })
  f450_002: number | null;

  @Column("float", { name: "F450_003", nullable: true, precision: 53 })
  f450_003: number | null;

  @Column("float", { name: "F544_001", nullable: true, precision: 53 })
  f544_001: number | null;

  @Column("float", { name: "F544_002", nullable: true, precision: 53 })
  f544_002: number | null;

  @Column("float", { name: "F544_003", nullable: true, precision: 53 })
  f544_003: number | null;

  @Column("float", { name: "F544_004", nullable: true, precision: 53 })
  f544_004: number | null;

  @Column("float", { name: "F544_005", nullable: true, precision: 53 })
  f544_005: number | null;

  @Column("float", { name: "F544_006", nullable: true, precision: 53 })
  f544_006: number | null;

  @Column("float", { name: "F544_007", nullable: true, precision: 53 })
  f544_007: number | null;

  @Column("float", { name: "F544_008", nullable: true, precision: 53 })
  f544_008: number | null;

  @Column("float", { name: "F544_009", nullable: true, precision: 53 })
  f544_009: number | null;

  @Column("float", { name: "F544_010", nullable: true, precision: 53 })
  f544_010: number | null;

  @Column("float", { name: "F544_011", nullable: true, precision: 53 })
  f544_011: number | null;

  @Column("float", { name: "F550_001", nullable: true, precision: 53 })
  f550_001: number | null;

  @Column("float", { name: "F550_002", nullable: true, precision: 53 })
  f550_002: number | null;

  @Column("float", { name: "F550_003", nullable: true, precision: 53 })
  f550_003: number | null;

  @Column("float", { name: "F083", nullable: true, precision: 53 })
  f083: number | null;

  @Column("float", { name: "F804", nullable: true, precision: 53 })
  f804: number | null;

  @Column("float", { name: "F805", nullable: true, precision: 53 })
  f805: number | null;

  @Column("float", { name: "F806", nullable: true, precision: 53 })
  f806: number | null;

  @Column("float", { name: "F824", nullable: true, precision: 53 })
  f824: number | null;

  @Column("float", { name: "F825", nullable: true, precision: 53 })
  f825: number | null;

  @Column("float", { name: "F826", nullable: true, precision: 53 })
  f826: number | null;

  @Column("float", { name: "F844", nullable: true, precision: 53 })
  f844: number | null;

  @Column("float", { name: "F845", nullable: true, precision: 53 })
  f845: number | null;

  @Column("float", { name: "F846", nullable: true, precision: 53 })
  f846: number | null;

  @Column("float", { name: "F864", nullable: true, precision: 53 })
  f864: number | null;

  @Column("float", { name: "F865", nullable: true, precision: 53 })
  f865: number | null;

  @Column("float", { name: "F866", nullable: true, precision: 53 })
  f866: number | null;

  @Column("float", { name: "F884", nullable: true, precision: 53 })
  f884: number | null;

  @Column("float", { name: "F885", nullable: true, precision: 53 })
  f885: number | null;

  @Column("float", { name: "F886", nullable: true, precision: 53 })
  f886: number | null;

  @Column("float", { name: "F962", nullable: true, precision: 53 })
  f962: number | null;

  @Column("float", { name: "F144_027", nullable: true, precision: 53 })
  f144_027: number | null;

  @Column("float", { name: "F144_028", nullable: true, precision: 53 })
  f144_028: number | null;

  @Column("float", { name: "F144_030", nullable: true, precision: 53 })
  f144_030: number | null;

  @Column("float", { name: "F144_031", nullable: true, precision: 53 })
  f144_031: number | null;

  @Column("float", { name: "F244_027", nullable: true, precision: 53 })
  f244_027: number | null;

  @Column("float", { name: "F244_028", nullable: true, precision: 53 })
  f244_028: number | null;

  @Column("float", { name: "F244_030", nullable: true, precision: 53 })
  f244_030: number | null;

  @Column("float", { name: "F244_031", nullable: true, precision: 53 })
  f244_031: number | null;

  @Column("float", { name: "F344_027", nullable: true, precision: 53 })
  f344_027: number | null;

  @Column("float", { name: "F344_028", nullable: true, precision: 53 })
  f344_028: number | null;

  @Column("float", { name: "F344_030", nullable: true, precision: 53 })
  f344_030: number | null;

  @Column("float", { name: "F344_031", nullable: true, precision: 53 })
  f344_031: number | null;

  @Column("float", { name: "F444_027", nullable: true, precision: 53 })
  f444_027: number | null;

  @Column("float", { name: "F444_028", nullable: true, precision: 53 })
  f444_028: number | null;

  @Column("float", { name: "F444_030", nullable: true, precision: 53 })
  f444_030: number | null;

  @Column("float", { name: "F444_031", nullable: true, precision: 53 })
  f444_031: number | null;

  @Column("float", { name: "F544_027", nullable: true, precision: 53 })
  f544_027: number | null;

  @Column("float", { name: "F544_028", nullable: true, precision: 53 })
  f544_028: number | null;

  @Column("float", { name: "F544_030", nullable: true, precision: 53 })
  f544_030: number | null;

  @Column("float", { name: "F544_031", nullable: true, precision: 53 })
  f544_031: number | null;
}
