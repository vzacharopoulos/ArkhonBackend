import { Column, Entity, Index } from "typeorm";

@Index("ExpCustomer_pk", ["comid", "cFileId"], { unique: true })
@Entity("ExpCustomer", { schema: "dbo" })
export class ExpCustomer {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { name: "FYEID" })
  fyeid: number;

  @Column("int", { primary: true, name: "cFileId" })
  cFileId: number;

  @Column("varchar", { name: "cCode", nullable: true, length: 15 })
  cCode: string | null;

  @Column("varchar", { name: "cName", nullable: true, length: 39 })
  cName: string | null;

  @Column("varchar", { name: "cRelCode", nullable: true, length: 15 })
  cRelCode: string | null;

  @Column("varchar", { name: "cCountry", nullable: true, length: 3 })
  cCountry: string | null;

  @Column("varchar", { name: "cVATNo", nullable: true, length: 15 })
  cVatNo: string | null;

  @Column("varchar", { name: "cFeatCode1", nullable: true, length: 3 })
  cFeatCode1: string | null;

  @Column("varchar", { name: "cF1Data", nullable: true, length: 17 })
  cF1Data: string | null;

  @Column("varchar", { name: "cFeatCode2", nullable: true, length: 3 })
  cFeatCode2: string | null;

  @Column("varchar", { name: "cF2Data", nullable: true, length: 17 })
  cF2Data: string | null;

  @Column("varchar", { name: "cAddress11", nullable: true, length: 19 })
  cAddress11: string | null;

  @Column("varchar", { name: "cAddress12", nullable: true, length: 19 })
  cAddress12: string | null;

  @Column("varchar", { name: "cZipCode1", nullable: true, length: 9 })
  cZipCode1: string | null;

  @Column("varchar", { name: "cArea1", nullable: true, length: 19 })
  cArea1: string | null;

  @Column("varchar", { name: "cManager", nullable: true, length: 19 })
  cManager: string | null;

  @Column("varchar", { name: "cPhone1", nullable: true, length: 13 })
  cPhone1: string | null;

  @Column("varchar", { name: "cPhone2", nullable: true, length: 13 })
  cPhone2: string | null;

  @Column("varchar", { name: "cTelex", nullable: true, length: 13 })
  cTelex: string | null;

  @Column("varchar", { name: "cAddress21", nullable: true, length: 19 })
  cAddress21: string | null;

  @Column("varchar", { name: "cAddress22", nullable: true, length: 19 })
  cAddress22: string | null;

  @Column("varchar", { name: "cZipCode2", nullable: true, length: 9 })
  cZipCode2: string | null;

  @Column("varchar", { name: "cArea2", nullable: true, length: 19 })
  cArea2: string | null;

  @Column("varchar", { name: "cBank1", nullable: true, length: 19 })
  cBank1: string | null;

  @Column("varchar", { name: "cBank2", nullable: true, length: 19 })
  cBank2: string | null;

  @Column("varchar", { name: "cGlCode", nullable: true, length: 15 })
  cGlCode: string | null;

  @Column("smallint", { name: "cMHaveVAT", nullable: true })
  cMHaveVat: number | null;

  @Column("varchar", { name: "cFpaState", nullable: true, length: 17 })
  cFpaState: string | null;

  @Column("float", { name: "cCredLimit", nullable: true, precision: 53 })
  cCredLimit: number | null;

  @Column("float", { name: "cDiscPcnt", nullable: true, precision: 53 })
  cDiscPcnt: number | null;

  @Column("smallint", { name: "cPrlstRange", nullable: true })
  cPrlstRange: number | null;

  @Column("smallint", { name: "cSalesMan", nullable: true })
  cSalesMan: number | null;

  @Column("varchar", { name: "cCurrSellCode", nullable: true, length: 15 })
  cCurrSellCode: string | null;

  @Column("varchar", { name: "cCurrSellName", nullable: true, length: 39 })
  cCurrSellName: string | null;

  @Column("varchar", { name: "PayMode", nullable: true, length: 3 })
  payMode: string | null;

  @Column("varchar", { name: "cPayData", nullable: true, length: 17 })
  cPayData: string | null;

  @Column("varchar", { name: "DelivMode", nullable: true, length: 3 })
  delivMode: string | null;

  @Column("varchar", { name: "cSendData", nullable: true, length: 17 })
  cSendData: string | null;

  @Column("varchar", { name: "cDelivMan", nullable: true, length: 19 })
  cDelivMan: string | null;

  @Column("varchar", { name: "cFrgnCurr", nullable: true, length: 3 })
  cFrgnCurr: string | null;

  @Column("varchar", { name: "cImage", nullable: true, length: 9 })
  cImage: string | null;

  @Column("varchar", { name: "cComment", nullable: true, length: 39 })
  cComment: string | null;

  @Column("datetime", { name: "cInvDate", nullable: true })
  cInvDate: Date | null;

  @Column("float", { name: "copenDeb", nullable: true, precision: 53 })
  copenDeb: number | null;

  @Column("float", { name: "cmonthDeb", nullable: true, precision: 53 })
  cmonthDeb: number | null;

  @Column("float", { name: "cyearDeb", nullable: true, precision: 53 })
  cyearDeb: number | null;

  @Column("datetime", { name: "cCredDate", nullable: true })
  cCredDate: Date | null;

  @Column("float", { name: "cOpenCred", nullable: true, precision: 53 })
  cOpenCred: number | null;

  @Column("float", { name: "cmonthCred", nullable: true, precision: 53 })
  cmonthCred: number | null;

  @Column("float", { name: "cyearCred", nullable: true, precision: 53 })
  cyearCred: number | null;

  @Column("float", { name: "cFCopenDeb", nullable: true, precision: 53 })
  cFCopenDeb: number | null;

  @Column("float", { name: "cFCyearDeb", nullable: true, precision: 53 })
  cFCyearDeb: number | null;

  @Column("float", { name: "cFCopenCred", nullable: true, precision: 53 })
  cFCopenCred: number | null;

  @Column("float", { name: "cFCyearCred", nullable: true, precision: 53 })
  cFCyearCred: number | null;

  @Column("datetime", { name: "cStartDate", nullable: true })
  cStartDate: Date | null;

  @Column("datetime", { name: "cLastOrder", nullable: true })
  cLastOrder: Date | null;

  @Column("datetime", { name: "cRefUse", nullable: true })
  cRefUse: Date | null;

  @Column("smallint", { name: "cPayBack", nullable: true })
  cPayBack: number | null;

  @Column("datetime", { name: "cCalcDate", nullable: true })
  cCalcDate: Date | null;

  @Column("float", { name: "cPayables", nullable: true, precision: 53 })
  cPayables: number | null;

  @Column("float", { name: "cNonPaid", nullable: true, precision: 53 })
  cNonPaid: number | null;

  @Column("float", { name: "cProfits", nullable: true, precision: 53 })
  cProfits: number | null;

  @Column("float", { name: "cPersales1", nullable: true, precision: 53 })
  cPersales1: number | null;

  @Column("float", { name: "cPersales2", nullable: true, precision: 53 })
  cPersales2: number | null;

  @Column("float", { name: "cPersales3", nullable: true, precision: 53 })
  cPersales3: number | null;

  @Column("float", { name: "cPersales4", nullable: true, precision: 53 })
  cPersales4: number | null;

  @Column("float", { name: "cPersales5", nullable: true, precision: 53 })
  cPersales5: number | null;

  @Column("float", { name: "cPersales6", nullable: true, precision: 53 })
  cPersales6: number | null;

  @Column("float", { name: "cPersales7", nullable: true, precision: 53 })
  cPersales7: number | null;

  @Column("float", { name: "cPersales8", nullable: true, precision: 53 })
  cPersales8: number | null;

  @Column("float", { name: "cPersales9", nullable: true, precision: 53 })
  cPersales9: number | null;

  @Column("float", { name: "cPersales10", nullable: true, precision: 53 })
  cPersales10: number | null;

  @Column("float", { name: "cPersales11", nullable: true, precision: 53 })
  cPersales11: number | null;

  @Column("float", { name: "cPersales12", nullable: true, precision: 53 })
  cPersales12: number | null;

  @Column("float", { name: "cPrevYearDb", nullable: true, precision: 53 })
  cPrevYearDb: number | null;

  @Column("float", { name: "cPerDeb1", nullable: true, precision: 53 })
  cPerDeb1: number | null;

  @Column("float", { name: "cPerDeb2", nullable: true, precision: 53 })
  cPerDeb2: number | null;

  @Column("float", { name: "cPerDeb3", nullable: true, precision: 53 })
  cPerDeb3: number | null;

  @Column("float", { name: "cPerDeb4", nullable: true, precision: 53 })
  cPerDeb4: number | null;

  @Column("float", { name: "cPerDeb5", nullable: true, precision: 53 })
  cPerDeb5: number | null;

  @Column("float", { name: "cPerDeb6", nullable: true, precision: 53 })
  cPerDeb6: number | null;

  @Column("float", { name: "cPerDeb7", nullable: true, precision: 53 })
  cPerDeb7: number | null;

  @Column("float", { name: "cPerDeb8", nullable: true, precision: 53 })
  cPerDeb8: number | null;

  @Column("float", { name: "cPerDeb9", nullable: true, precision: 53 })
  cPerDeb9: number | null;

  @Column("float", { name: "cPerDeb10", nullable: true, precision: 53 })
  cPerDeb10: number | null;

  @Column("float", { name: "cPerDeb11", nullable: true, precision: 53 })
  cPerDeb11: number | null;

  @Column("float", { name: "cPerDeb12", nullable: true, precision: 53 })
  cPerDeb12: number | null;

  @Column("float", { name: "cPrevYearCr", nullable: true, precision: 53 })
  cPrevYearCr: number | null;

  @Column("float", { name: "cPerCred1", nullable: true, precision: 53 })
  cPerCred1: number | null;

  @Column("float", { name: "cPerCred2", nullable: true, precision: 53 })
  cPerCred2: number | null;

  @Column("float", { name: "cPerCred3", nullable: true, precision: 53 })
  cPerCred3: number | null;

  @Column("float", { name: "cPerCred4", nullable: true, precision: 53 })
  cPerCred4: number | null;

  @Column("float", { name: "cPerCred5", nullable: true, precision: 53 })
  cPerCred5: number | null;

  @Column("float", { name: "cPerCred6", nullable: true, precision: 53 })
  cPerCred6: number | null;

  @Column("float", { name: "cPerCred7", nullable: true, precision: 53 })
  cPerCred7: number | null;

  @Column("float", { name: "cPerCred8", nullable: true, precision: 53 })
  cPerCred8: number | null;

  @Column("float", { name: "cPerCred9", nullable: true, precision: 53 })
  cPerCred9: number | null;

  @Column("float", { name: "cPerCred10", nullable: true, precision: 53 })
  cPerCred10: number | null;

  @Column("float", { name: "cPerCred11", nullable: true, precision: 53 })
  cPerCred11: number | null;

  @Column("float", { name: "cPerCred12", nullable: true, precision: 53 })
  cPerCred12: number | null;

  @Column("float", { name: "cPYSales1", nullable: true, precision: 53 })
  cPySales1: number | null;

  @Column("float", { name: "cPYSales2", nullable: true, precision: 53 })
  cPySales2: number | null;

  @Column("float", { name: "cPYSales3", nullable: true, precision: 53 })
  cPySales3: number | null;

  @Column("float", { name: "cPYSales4", nullable: true, precision: 53 })
  cPySales4: number | null;

  @Column("float", { name: "cPYSales5", nullable: true, precision: 53 })
  cPySales5: number | null;

  @Column("float", { name: "cPYSales6", nullable: true, precision: 53 })
  cPySales6: number | null;

  @Column("float", { name: "cPYSales7", nullable: true, precision: 53 })
  cPySales7: number | null;

  @Column("float", { name: "cPYSales8", nullable: true, precision: 53 })
  cPySales8: number | null;

  @Column("float", { name: "cPYSales9", nullable: true, precision: 53 })
  cPySales9: number | null;

  @Column("float", { name: "cPYSales10", nullable: true, precision: 53 })
  cPySales10: number | null;

  @Column("float", { name: "cPYSales11", nullable: true, precision: 53 })
  cPySales11: number | null;

  @Column("float", { name: "cPYSales12", nullable: true, precision: 53 })
  cPySales12: number | null;

  @Column("float", { name: "cForSales1", nullable: true, precision: 53 })
  cForSales1: number | null;

  @Column("float", { name: "cForSales2", nullable: true, precision: 53 })
  cForSales2: number | null;

  @Column("float", { name: "cForSales3", nullable: true, precision: 53 })
  cForSales3: number | null;

  @Column("float", { name: "cForSales4", nullable: true, precision: 53 })
  cForSales4: number | null;

  @Column("float", { name: "cForSales5", nullable: true, precision: 53 })
  cForSales5: number | null;

  @Column("float", { name: "cForSales6", nullable: true, precision: 53 })
  cForSales6: number | null;

  @Column("float", { name: "cForSales7", nullable: true, precision: 53 })
  cForSales7: number | null;

  @Column("float", { name: "cForSales8", nullable: true, precision: 53 })
  cForSales8: number | null;

  @Column("float", { name: "cForSales9", nullable: true, precision: 53 })
  cForSales9: number | null;

  @Column("float", { name: "cForSales10", nullable: true, precision: 53 })
  cForSales10: number | null;

  @Column("float", { name: "cForSales11", nullable: true, precision: 53 })
  cForSales11: number | null;

  @Column("float", { name: "cForSales12", nullable: true, precision: 53 })
  cForSales12: number | null;

  @Column("float", { name: "cForDeb1", nullable: true, precision: 53 })
  cForDeb1: number | null;

  @Column("float", { name: "cForDeb2", nullable: true, precision: 53 })
  cForDeb2: number | null;

  @Column("float", { name: "cForDeb3", nullable: true, precision: 53 })
  cForDeb3: number | null;

  @Column("float", { name: "cForDeb4", nullable: true, precision: 53 })
  cForDeb4: number | null;

  @Column("float", { name: "cForDeb5", nullable: true, precision: 53 })
  cForDeb5: number | null;

  @Column("float", { name: "cForDeb6", nullable: true, precision: 53 })
  cForDeb6: number | null;

  @Column("float", { name: "cForDeb7", nullable: true, precision: 53 })
  cForDeb7: number | null;

  @Column("float", { name: "cForDeb8", nullable: true, precision: 53 })
  cForDeb8: number | null;

  @Column("float", { name: "cForDeb9", nullable: true, precision: 53 })
  cForDeb9: number | null;

  @Column("float", { name: "cForDeb10", nullable: true, precision: 53 })
  cForDeb10: number | null;

  @Column("float", { name: "cForDeb11", nullable: true, precision: 53 })
  cForDeb11: number | null;

  @Column("float", { name: "cForDeb12", nullable: true, precision: 53 })
  cForDeb12: number | null;

  @Column("float", { name: "cForCred1", nullable: true, precision: 53 })
  cForCred1: number | null;

  @Column("float", { name: "cForCred2", nullable: true, precision: 53 })
  cForCred2: number | null;

  @Column("float", { name: "cForCred3", nullable: true, precision: 53 })
  cForCred3: number | null;

  @Column("float", { name: "cForCred4", nullable: true, precision: 53 })
  cForCred4: number | null;

  @Column("float", { name: "cForCred5", nullable: true, precision: 53 })
  cForCred5: number | null;

  @Column("float", { name: "cForCred6", nullable: true, precision: 53 })
  cForCred6: number | null;

  @Column("float", { name: "cForCred7", nullable: true, precision: 53 })
  cForCred7: number | null;

  @Column("float", { name: "cForCred8", nullable: true, precision: 53 })
  cForCred8: number | null;

  @Column("float", { name: "cForCred9", nullable: true, precision: 53 })
  cForCred9: number | null;

  @Column("float", { name: "cForCred10", nullable: true, precision: 53 })
  cForCred10: number | null;

  @Column("float", { name: "cForCred11", nullable: true, precision: 53 })
  cForCred11: number | null;

  @Column("float", { name: "cForCred12", nullable: true, precision: 53 })
  cForCred12: number | null;

  @Column("varchar", { name: "cUsrStrs1", nullable: true, length: 39 })
  cUsrStrs1: string | null;

  @Column("varchar", { name: "cUsrStrs2", nullable: true, length: 39 })
  cUsrStrs2: string | null;

  @Column("varchar", { name: "cUsrStrs3", nullable: true, length: 39 })
  cUsrStrs3: string | null;

  @Column("varchar", { name: "cUsrStrs4", nullable: true, length: 39 })
  cUsrStrs4: string | null;

  @Column("datetime", { name: "cUsrDates1", nullable: true })
  cUsrDates1: Date | null;

  @Column("datetime", { name: "cUsrDates2", nullable: true })
  cUsrDates2: Date | null;

  @Column("datetime", { name: "cUsrDates3", nullable: true })
  cUsrDates3: Date | null;

  @Column("smallint", { name: "cUsrTable1", nullable: true })
  cUsrTable1: number | null;

  @Column("smallint", { name: "cUsrTable2", nullable: true })
  cUsrTable2: number | null;

  @Column("smallint", { name: "cUsrTable3", nullable: true })
  cUsrTable3: number | null;

  @Column("float", { name: "cUsrNums1", nullable: true, precision: 53 })
  cUsrNums1: number | null;

  @Column("float", { name: "cUsrNums2", nullable: true, precision: 53 })
  cUsrNums2: number | null;

  @Column("float", { name: "cUsrNums3", nullable: true, precision: 53 })
  cUsrNums3: number | null;

  @Column("float", { name: "cUsrNums4", nullable: true, precision: 53 })
  cUsrNums4: number | null;

  @Column("float", { name: "cUsrNums5", nullable: true, precision: 53 })
  cUsrNums5: number | null;

  @Column("float", { name: "cUsrNums6", nullable: true, precision: 53 })
  cUsrNums6: number | null;

  @Column("float", { name: "cUsrCnts1", nullable: true, precision: 53 })
  cUsrCnts1: number | null;

  @Column("float", { name: "cUsrCnts2", nullable: true, precision: 53 })
  cUsrCnts2: number | null;

  @Column("float", { name: "cUsrCnts3", nullable: true, precision: 53 })
  cUsrCnts3: number | null;

  @Column("float", { name: "cUsrCnts4", nullable: true, precision: 53 })
  cUsrCnts4: number | null;

  @Column("float", { name: "cUsrCnts5", nullable: true, precision: 53 })
  cUsrCnts5: number | null;

  @Column("float", { name: "cUsrCnts6", nullable: true, precision: 53 })
  cUsrCnts6: number | null;

  @Column("float", { name: "cUsrCnts7", nullable: true, precision: 53 })
  cUsrCnts7: number | null;

  @Column("float", { name: "cUsrCnts8", nullable: true, precision: 53 })
  cUsrCnts8: number | null;

  @Column("smallint", { name: "cInvNo1", nullable: true })
  cInvNo1: number | null;

  @Column("float", { name: "cInvVal1", nullable: true, precision: 53 })
  cInvVal1: number | null;

  @Column("smallint", { name: "cInvNo", nullable: true })
  cInvNo: number | null;

  @Column("float", { name: "cInvVal", nullable: true, precision: 53 })
  cInvVal: number | null;

  @Column("smallint", { name: "cTxtHndl", nullable: true })
  cTxtHndl: number | null;

  @Column("smallint", { name: "cUserId", nullable: true })
  cUserId: number | null;

  @Column("smallint", { name: "cAgeDays", nullable: true })
  cAgeDays: number | null;

  @Column("smallint", { name: "cFirstDays", nullable: true })
  cFirstDays: number | null;

  @Column("smallint", { name: "cInvNo0", nullable: true })
  cInvNo0: number | null;

  @Column("float", { name: "cInvVal0", nullable: true, precision: 53 })
  cInvVal0: number | null;

  @Column("varchar", { name: "cEdiCode", nullable: true, length: 15 })
  cEdiCode: string | null;

  @Column("varchar", { name: "cEdiPCode", nullable: true, length: 15 })
  cEdiPCode: string | null;

  @Column("smallint", { name: "cOthExp1", nullable: true })
  cOthExp1: number | null;

  @Column("smallint", { name: "cOthExp2", nullable: true })
  cOthExp2: number | null;

  @Column("smallint", { name: "cMEfkIn", nullable: true })
  cMEfkIn: number | null;

  @Column("smallint", { name: "cSenCredit", nullable: true })
  cSenCredit: number | null;

  @Column("smallint", { name: "cSpPrice", nullable: true })
  cSpPrice: number | null;

  @Column("varchar", { name: "cRepCode", nullable: true, length: 15 })
  cRepCode: string | null;

  @Column("varchar", { name: "c2Code", nullable: true, length: 25 })
  c2Code: string | null;

  @Column("varchar", { name: "cEmail", nullable: true, length: 39 })
  cEmail: string | null;

  @Column("smallint", { name: "cKepyoCategory", nullable: true })
  cKepyoCategory: number | null;

  @Column("varchar", { name: "cKepyoDescr", nullable: true, length: 17 })
  cKepyoDescr: string | null;

  @Column("varchar", { name: "cProfession", nullable: true, length: 25 })
  cProfession: string | null;

  @Column("smallint", { name: "cSolvency", nullable: true })
  cSolvency: number | null;

  @Column("varchar", { name: "cSolvDescr", nullable: true, length: 17 })
  cSolvDescr: string | null;

  @Column("int", { name: "cTxtHndl1", nullable: true })
  cTxtHndl1: number | null;

  @Column("varchar", { name: "cHouseCateg", nullable: true, length: 1 })
  cHouseCateg: string | null;

  @Column("varchar", { name: "cHouseCategDescr", nullable: true, length: 25 })
  cHouseCategDescr: string | null;

  @Column("smallint", { name: "cKEPYOExcl", nullable: true })
  cKepyoExcl: number | null;

  @Column("varchar", { name: "cConfComment1", nullable: true, length: 19 })
  cConfComment1: string | null;

  @Column("varchar", { name: "cConfComment2", nullable: true, length: 19 })
  cConfComment2: string | null;

  @Column("varchar", { name: "cConfComment3", nullable: true, length: 19 })
  cConfComment3: string | null;

  @Column("float", { name: "cTotDeb", nullable: true, precision: 53 })
  cTotDeb: number | null;

  @Column("float", { name: "cTotCred", nullable: true, precision: 53 })
  cTotCred: number | null;

  @Column("float", { name: "cRemain", nullable: true, precision: 53 })
  cRemain: number | null;

  @Column("float", { name: "cProfFact", nullable: true, precision: 53 })
  cProfFact: number | null;

  @Column("float", { name: "cYRem", nullable: true, precision: 53 })
  cYRem: number | null;

  @Column("float", { name: "cOpen", nullable: true, precision: 53 })
  cOpen: number | null;

  @Column("float", { name: "cPlafon", nullable: true, precision: 53 })
  cPlafon: number | null;

  @Column("float", { name: "cMRem1", nullable: true, precision: 53 })
  cMRem1: number | null;

  @Column("float", { name: "cMRem2", nullable: true, precision: 53 })
  cMRem2: number | null;

  @Column("float", { name: "cMRem3", nullable: true, precision: 53 })
  cMRem3: number | null;

  @Column("float", { name: "cMRem4", nullable: true, precision: 53 })
  cMRem4: number | null;

  @Column("float", { name: "cMRem5", nullable: true, precision: 53 })
  cMRem5: number | null;

  @Column("float", { name: "cMRem6", nullable: true, precision: 53 })
  cMRem6: number | null;

  @Column("float", { name: "cMRem7", nullable: true, precision: 53 })
  cMRem7: number | null;

  @Column("float", { name: "cMRem8", nullable: true, precision: 53 })
  cMRem8: number | null;

  @Column("float", { name: "cMRem9", nullable: true, precision: 53 })
  cMRem9: number | null;

  @Column("float", { name: "cMRem10", nullable: true, precision: 53 })
  cMRem10: number | null;

  @Column("float", { name: "cMRem11", nullable: true, precision: 53 })
  cMRem11: number | null;

  @Column("float", { name: "cMRem12", nullable: true, precision: 53 })
  cMRem12: number | null;

  @Column("float", { name: "cFCRemain", nullable: true, precision: 53 })
  cFcRemain: number | null;

  @Column("float", { name: "cCurrDeb", nullable: true, precision: 53 })
  cCurrDeb: number | null;

  @Column("float", { name: "cCurrCred", nullable: true, precision: 53 })
  cCurrCred: number | null;

  @Column("float", { name: "cTotTziros", nullable: true, precision: 53 })
  cTotTziros: number | null;

  @Column("float", { name: "cTotLTziros", nullable: true, precision: 53 })
  cTotLTziros: number | null;
}
