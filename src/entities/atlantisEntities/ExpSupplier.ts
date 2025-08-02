import { Column, Entity, Index } from "typeorm";

@Index("ExpSupplier_pk", ["comid", "pFileId"], { unique: true })
@Entity("ExpSupplier", { schema: "dbo" })
export class ExpSupplier {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { name: "FYEID" })
  fyeid: number;

  @Column("int", { primary: true, name: "pFileId" })
  pFileId: number;

  @Column("varchar", { name: "pCode", nullable: true, length: 15 })
  pCode: string | null;

  @Column("varchar", { name: "pName", nullable: true, length: 39 })
  pName: string | null;

  @Column("varchar", { name: "pRelCode", nullable: true, length: 15 })
  pRelCode: string | null;

  @Column("varchar", { name: "pCountry", nullable: true, length: 3 })
  pCountry: string | null;

  @Column("varchar", { name: "pVATNo", nullable: true, length: 15 })
  pVatNo: string | null;

  @Column("varchar", { name: "pFeatCode1", nullable: true, length: 3 })
  pFeatCode1: string | null;

  @Column("varchar", { name: "pFeatCode2", nullable: true, length: 3 })
  pFeatCode2: string | null;

  @Column("varchar", { name: "pAddres11", nullable: true, length: 19 })
  pAddres11: string | null;

  @Column("varchar", { name: "pAddres12", nullable: true, length: 19 })
  pAddres12: string | null;

  @Column("varchar", { name: "pZipCode1", nullable: true, length: 9 })
  pZipCode1: string | null;

  @Column("varchar", { name: "pArea1", nullable: true, length: 19 })
  pArea1: string | null;

  @Column("varchar", { name: "pManager", nullable: true, length: 19 })
  pManager: string | null;

  @Column("varchar", { name: "pTel1", nullable: true, length: 13 })
  pTel1: string | null;

  @Column("varchar", { name: "pTel2", nullable: true, length: 13 })
  pTel2: string | null;

  @Column("varchar", { name: "pTelex", nullable: true, length: 13 })
  pTelex: string | null;

  @Column("varchar", { name: "paddres21", nullable: true, length: 19 })
  paddres21: string | null;

  @Column("varchar", { name: "paddres22", nullable: true, length: 19 })
  paddres22: string | null;

  @Column("varchar", { name: "pZipCode2", nullable: true, length: 9 })
  pZipCode2: string | null;

  @Column("varchar", { name: "pArea2", nullable: true, length: 19 })
  pArea2: string | null;

  @Column("varchar", { name: "pBank1", nullable: true, length: 19 })
  pBank1: string | null;

  @Column("varchar", { name: "pBank2", nullable: true, length: 19 })
  pBank2: string | null;

  @Column("varchar", { name: "pGLCode", nullable: true, length: 15 })
  pGlCode: string | null;

  @Column("smallint", { name: "pMHaveVAT", nullable: true })
  pMHaveVat: number | null;

  @Column("float", { name: "pCredLim", nullable: true, precision: 53 })
  pCredLim: number | null;

  @Column("float", { name: "pDiscount", nullable: true, precision: 53 })
  pDiscount: number | null;

  @Column("varchar", { name: "pSalesman", nullable: true, length: 17 })
  pSalesman: string | null;

  @Column("varchar", { name: "PayMode", nullable: true, length: 3 })
  payMode: string | null;

  @Column("varchar", { name: "DelivMode", nullable: true, length: 3 })
  delivMode: string | null;

  @Column("varchar", { name: "pCarrier", nullable: true, length: 19 })
  pCarrier: string | null;

  @Column("varchar", { name: "pFCncycode", nullable: true, length: 3 })
  pFCncycode: string | null;

  @Column("varchar", { name: "pImage", nullable: true, length: 9 })
  pImage: string | null;

  @Column("varchar", { name: "pComment", nullable: true, length: 39 })
  pComment: string | null;

  @Column("datetime", { name: "pDebDate", nullable: true })
  pDebDate: Date | null;

  @Column("float", { name: "pOpenDebit", nullable: true, precision: 53 })
  pOpenDebit: number | null;

  @Column("float", { name: "pMonthDebit", nullable: true, precision: 53 })
  pMonthDebit: number | null;

  @Column("float", { name: "pYearDebit", nullable: true, precision: 53 })
  pYearDebit: number | null;

  @Column("datetime", { name: "pCredDate", nullable: true })
  pCredDate: Date | null;

  @Column("float", { name: "pOpenCredit", nullable: true, precision: 53 })
  pOpenCredit: number | null;

  @Column("float", { name: "pMnthCredit", nullable: true, precision: 53 })
  pMnthCredit: number | null;

  @Column("float", { name: "pYearCredit", nullable: true, precision: 53 })
  pYearCredit: number | null;

  @Column("float", { name: "pFCOpenDeb", nullable: true, precision: 53 })
  pFcOpenDeb: number | null;

  @Column("float", { name: "pFCYearDeb", nullable: true, precision: 53 })
  pFcYearDeb: number | null;

  @Column("float", { name: "pFCOpnCred", nullable: true, precision: 53 })
  pFcOpnCred: number | null;

  @Column("float", { name: "pFCYrCred", nullable: true, precision: 53 })
  pFcYrCred: number | null;

  @Column("datetime", { name: "pInsDate", nullable: true })
  pInsDate: Date | null;

  @Column("datetime", { name: "pLastOrder", nullable: true })
  pLastOrder: Date | null;

  @Column("smallint", { name: "pPayDays", nullable: true })
  pPayDays: number | null;

  @Column("datetime", { name: "pCalcDate", nullable: true })
  pCalcDate: Date | null;

  @Column("float", { name: "pPayables", nullable: true, precision: 53 })
  pPayables: number | null;

  @Column("float", { name: "pNonPaid", nullable: true, precision: 53 })
  pNonPaid: number | null;

  @Column("float", { name: "pPersales1", nullable: true, precision: 53 })
  pPersales1: number | null;

  @Column("float", { name: "pPersales2", nullable: true, precision: 53 })
  pPersales2: number | null;

  @Column("float", { name: "pPersales3", nullable: true, precision: 53 })
  pPersales3: number | null;

  @Column("float", { name: "pPersales4", nullable: true, precision: 53 })
  pPersales4: number | null;

  @Column("float", { name: "pPersales5", nullable: true, precision: 53 })
  pPersales5: number | null;

  @Column("float", { name: "pPersales6", nullable: true, precision: 53 })
  pPersales6: number | null;

  @Column("float", { name: "pPersales7", nullable: true, precision: 53 })
  pPersales7: number | null;

  @Column("float", { name: "pPersales8", nullable: true, precision: 53 })
  pPersales8: number | null;

  @Column("float", { name: "pPersales9", nullable: true, precision: 53 })
  pPersales9: number | null;

  @Column("float", { name: "pPersales10", nullable: true, precision: 53 })
  pPersales10: number | null;

  @Column("float", { name: "pPersales11", nullable: true, precision: 53 })
  pPersales11: number | null;

  @Column("float", { name: "pPersales12", nullable: true, precision: 53 })
  pPersales12: number | null;

  @Column("float", { name: "pPrevYearDb", nullable: true, precision: 53 })
  pPrevYearDb: number | null;

  @Column("float", { name: "pPerDeb1", nullable: true, precision: 53 })
  pPerDeb1: number | null;

  @Column("float", { name: "pPerDeb2", nullable: true, precision: 53 })
  pPerDeb2: number | null;

  @Column("float", { name: "pPerDeb3", nullable: true, precision: 53 })
  pPerDeb3: number | null;

  @Column("float", { name: "pPerDeb4", nullable: true, precision: 53 })
  pPerDeb4: number | null;

  @Column("float", { name: "pPerDeb5", nullable: true, precision: 53 })
  pPerDeb5: number | null;

  @Column("float", { name: "pPerDeb6", nullable: true, precision: 53 })
  pPerDeb6: number | null;

  @Column("float", { name: "pPerDeb7", nullable: true, precision: 53 })
  pPerDeb7: number | null;

  @Column("float", { name: "pPerDeb8", nullable: true, precision: 53 })
  pPerDeb8: number | null;

  @Column("float", { name: "pPerDeb9", nullable: true, precision: 53 })
  pPerDeb9: number | null;

  @Column("float", { name: "pPerDeb10", nullable: true, precision: 53 })
  pPerDeb10: number | null;

  @Column("float", { name: "pPerDeb11", nullable: true, precision: 53 })
  pPerDeb11: number | null;

  @Column("float", { name: "pPerDeb12", nullable: true, precision: 53 })
  pPerDeb12: number | null;

  @Column("float", { name: "pPrevYearCr", nullable: true, precision: 53 })
  pPrevYearCr: number | null;

  @Column("float", { name: "pPerCred1", nullable: true, precision: 53 })
  pPerCred1: number | null;

  @Column("float", { name: "pPerCred2", nullable: true, precision: 53 })
  pPerCred2: number | null;

  @Column("float", { name: "pPerCred3", nullable: true, precision: 53 })
  pPerCred3: number | null;

  @Column("float", { name: "pPerCred4", nullable: true, precision: 53 })
  pPerCred4: number | null;

  @Column("float", { name: "pPerCred5", nullable: true, precision: 53 })
  pPerCred5: number | null;

  @Column("float", { name: "pPerCred6", nullable: true, precision: 53 })
  pPerCred6: number | null;

  @Column("float", { name: "pPerCred7", nullable: true, precision: 53 })
  pPerCred7: number | null;

  @Column("float", { name: "pPerCred8", nullable: true, precision: 53 })
  pPerCred8: number | null;

  @Column("float", { name: "pPerCred9", nullable: true, precision: 53 })
  pPerCred9: number | null;

  @Column("float", { name: "pPerCred10", nullable: true, precision: 53 })
  pPerCred10: number | null;

  @Column("float", { name: "pPerCred11", nullable: true, precision: 53 })
  pPerCred11: number | null;

  @Column("float", { name: "pPerCred12", nullable: true, precision: 53 })
  pPerCred12: number | null;

  @Column("float", { name: "pPYSales1", nullable: true, precision: 53 })
  pPySales1: number | null;

  @Column("float", { name: "pPYSales2", nullable: true, precision: 53 })
  pPySales2: number | null;

  @Column("float", { name: "pPYSales3", nullable: true, precision: 53 })
  pPySales3: number | null;

  @Column("float", { name: "pPYSales4", nullable: true, precision: 53 })
  pPySales4: number | null;

  @Column("float", { name: "pPYSales5", nullable: true, precision: 53 })
  pPySales5: number | null;

  @Column("float", { name: "pPYSales6", nullable: true, precision: 53 })
  pPySales6: number | null;

  @Column("float", { name: "pPYSales7", nullable: true, precision: 53 })
  pPySales7: number | null;

  @Column("float", { name: "pPYSales8", nullable: true, precision: 53 })
  pPySales8: number | null;

  @Column("float", { name: "pPYSales9", nullable: true, precision: 53 })
  pPySales9: number | null;

  @Column("float", { name: "pPYSales10", nullable: true, precision: 53 })
  pPySales10: number | null;

  @Column("float", { name: "pPYSales11", nullable: true, precision: 53 })
  pPySales11: number | null;

  @Column("float", { name: "pPYSales12", nullable: true, precision: 53 })
  pPySales12: number | null;

  @Column("float", { name: "pForSales1", nullable: true, precision: 53 })
  pForSales1: number | null;

  @Column("float", { name: "pForSales2", nullable: true, precision: 53 })
  pForSales2: number | null;

  @Column("float", { name: "pForSales3", nullable: true, precision: 53 })
  pForSales3: number | null;

  @Column("float", { name: "pForSales4", nullable: true, precision: 53 })
  pForSales4: number | null;

  @Column("float", { name: "pForSales5", nullable: true, precision: 53 })
  pForSales5: number | null;

  @Column("float", { name: "pForSales6", nullable: true, precision: 53 })
  pForSales6: number | null;

  @Column("float", { name: "pForSales7", nullable: true, precision: 53 })
  pForSales7: number | null;

  @Column("float", { name: "pForSales8", nullable: true, precision: 53 })
  pForSales8: number | null;

  @Column("float", { name: "pForSales9", nullable: true, precision: 53 })
  pForSales9: number | null;

  @Column("float", { name: "pForSales10", nullable: true, precision: 53 })
  pForSales10: number | null;

  @Column("float", { name: "pForSales11", nullable: true, precision: 53 })
  pForSales11: number | null;

  @Column("float", { name: "pForSales12", nullable: true, precision: 53 })
  pForSales12: number | null;

  @Column("float", { name: "pForDeb1", nullable: true, precision: 53 })
  pForDeb1: number | null;

  @Column("float", { name: "pForDeb2", nullable: true, precision: 53 })
  pForDeb2: number | null;

  @Column("float", { name: "pForDeb3", nullable: true, precision: 53 })
  pForDeb3: number | null;

  @Column("float", { name: "pForDeb4", nullable: true, precision: 53 })
  pForDeb4: number | null;

  @Column("float", { name: "pForDeb5", nullable: true, precision: 53 })
  pForDeb5: number | null;

  @Column("float", { name: "pForDeb6", nullable: true, precision: 53 })
  pForDeb6: number | null;

  @Column("float", { name: "pForDeb7", nullable: true, precision: 53 })
  pForDeb7: number | null;

  @Column("float", { name: "pForDeb8", nullable: true, precision: 53 })
  pForDeb8: number | null;

  @Column("float", { name: "pForDeb9", nullable: true, precision: 53 })
  pForDeb9: number | null;

  @Column("float", { name: "pForDeb10", nullable: true, precision: 53 })
  pForDeb10: number | null;

  @Column("float", { name: "pForDeb11", nullable: true, precision: 53 })
  pForDeb11: number | null;

  @Column("float", { name: "pForDeb12", nullable: true, precision: 53 })
  pForDeb12: number | null;

  @Column("float", { name: "pForCred1", nullable: true, precision: 53 })
  pForCred1: number | null;

  @Column("float", { name: "pForCred2", nullable: true, precision: 53 })
  pForCred2: number | null;

  @Column("float", { name: "pForCred3", nullable: true, precision: 53 })
  pForCred3: number | null;

  @Column("float", { name: "pForCred4", nullable: true, precision: 53 })
  pForCred4: number | null;

  @Column("float", { name: "pForCred5", nullable: true, precision: 53 })
  pForCred5: number | null;

  @Column("float", { name: "pForCred6", nullable: true, precision: 53 })
  pForCred6: number | null;

  @Column("float", { name: "pForCred7", nullable: true, precision: 53 })
  pForCred7: number | null;

  @Column("float", { name: "pForCred8", nullable: true, precision: 53 })
  pForCred8: number | null;

  @Column("float", { name: "pForCred9", nullable: true, precision: 53 })
  pForCred9: number | null;

  @Column("float", { name: "pForCred10", nullable: true, precision: 53 })
  pForCred10: number | null;

  @Column("float", { name: "pForCred11", nullable: true, precision: 53 })
  pForCred11: number | null;

  @Column("float", { name: "pForCred12", nullable: true, precision: 53 })
  pForCred12: number | null;

  @Column("varchar", { name: "pUsrStrs1", nullable: true, length: 39 })
  pUsrStrs1: string | null;

  @Column("varchar", { name: "pUsrStrs2", nullable: true, length: 39 })
  pUsrStrs2: string | null;

  @Column("varchar", { name: "pUsrStrs3", nullable: true, length: 39 })
  pUsrStrs3: string | null;

  @Column("varchar", { name: "pUsrStrs4", nullable: true, length: 39 })
  pUsrStrs4: string | null;

  @Column("datetime", { name: "pUsrDates1", nullable: true })
  pUsrDates1: Date | null;

  @Column("datetime", { name: "pUsrDates2", nullable: true })
  pUsrDates2: Date | null;

  @Column("datetime", { name: "pUsrDates3", nullable: true })
  pUsrDates3: Date | null;

  @Column("smallint", { name: "pUsrTable1", nullable: true })
  pUsrTable1: number | null;

  @Column("smallint", { name: "pUsrTable2", nullable: true })
  pUsrTable2: number | null;

  @Column("smallint", { name: "pUsrTable3", nullable: true })
  pUsrTable3: number | null;

  @Column("float", { name: "pUsrNums1", nullable: true, precision: 53 })
  pUsrNums1: number | null;

  @Column("float", { name: "pUsrNums2", nullable: true, precision: 53 })
  pUsrNums2: number | null;

  @Column("float", { name: "pUsrNums3", nullable: true, precision: 53 })
  pUsrNums3: number | null;

  @Column("float", { name: "pUsrNums4", nullable: true, precision: 53 })
  pUsrNums4: number | null;

  @Column("float", { name: "pUsrNums5", nullable: true, precision: 53 })
  pUsrNums5: number | null;

  @Column("float", { name: "pUsrNums6", nullable: true, precision: 53 })
  pUsrNums6: number | null;

  @Column("float", { name: "pUsrCnts1", nullable: true, precision: 53 })
  pUsrCnts1: number | null;

  @Column("float", { name: "pUsrCnts2", nullable: true, precision: 53 })
  pUsrCnts2: number | null;

  @Column("float", { name: "pUsrCnts3", nullable: true, precision: 53 })
  pUsrCnts3: number | null;

  @Column("float", { name: "pUsrCnts4", nullable: true, precision: 53 })
  pUsrCnts4: number | null;

  @Column("float", { name: "pUsrCnts5", nullable: true, precision: 53 })
  pUsrCnts5: number | null;

  @Column("float", { name: "pUsrCnts6", nullable: true, precision: 53 })
  pUsrCnts6: number | null;

  @Column("float", { name: "pUsrCnts7", nullable: true, precision: 53 })
  pUsrCnts7: number | null;

  @Column("float", { name: "pUsrCnts8", nullable: true, precision: 53 })
  pUsrCnts8: number | null;

  @Column("smallint", { name: "pInvNum", nullable: true })
  pInvNum: number | null;

  @Column("float", { name: "pInvVal", nullable: true, precision: 53 })
  pInvVal: number | null;

  @Column("smallint", { name: "pInvNum1", nullable: true })
  pInvNum1: number | null;

  @Column("float", { name: "pInvVal1", nullable: true, precision: 53 })
  pInvVal1: number | null;

  @Column("smallint", { name: "ptthndl", nullable: true })
  ptthndl: number | null;

  @Column("smallint", { name: "pUserid", nullable: true })
  pUserid: number | null;

  @Column("smallint", { name: "pAgeDays", nullable: true })
  pAgeDays: number | null;

  @Column("smallint", { name: "pFirstDays", nullable: true })
  pFirstDays: number | null;

  @Column("smallint", { name: "pInvNum0", nullable: true })
  pInvNum0: number | null;

  @Column("float", { name: "pInvVal0", nullable: true, precision: 53 })
  pInvVal0: number | null;

  @Column("smallint", { name: "pEDI", nullable: true })
  pEdi: number | null;

  @Column("varchar", { name: "pEDICode", nullable: true, length: 15 })
  pEdiCode: string | null;

  @Column("varchar", { name: "pEDICCode", nullable: true, length: 15 })
  pEdicCode: string | null;

  @Column("smallint", { name: "pSenCredit", nullable: true })
  pSenCredit: number | null;

  @Column("varchar", { name: "pRepCode", nullable: true, length: 15 })
  pRepCode: string | null;

  @Column("float", { name: "pEuro", nullable: true, precision: 53 })
  pEuro: number | null;

  @Column("varchar", { name: "p2Code", nullable: true, length: 25 })
  p2Code: string | null;

  @Column("varchar", { name: "pEmail", nullable: true, length: 39 })
  pEmail: string | null;

  @Column("smallint", { name: "pKepyoCategory", nullable: true })
  pKepyoCategory: number | null;

  @Column("varchar", { name: "pProfession", nullable: true, length: 25 })
  pProfession: string | null;

  @Column("smallint", { name: "pSolvency", nullable: true })
  pSolvency: number | null;

  @Column("int", { name: "ptthndl1", nullable: true })
  ptthndl1: number | null;

  @Column("smallint", { name: "pKepyoExcl", nullable: true })
  pKepyoExcl: number | null;

  @Column("varchar", { name: "pConfComment1", nullable: true, length: 19 })
  pConfComment1: string | null;

  @Column("varchar", { name: "pConfComment2", nullable: true, length: 19 })
  pConfComment2: string | null;

  @Column("varchar", { name: "pConfComment3", nullable: true, length: 19 })
  pConfComment3: string | null;

  @Column("float", { name: "pTotDeb", nullable: true, precision: 53 })
  pTotDeb: number | null;

  @Column("float", { name: "pTotCred", nullable: true, precision: 53 })
  pTotCred: number | null;

  @Column("float", { name: "pRemain", nullable: true, precision: 53 })
  pRemain: number | null;

  @Column("float", { name: "pYrem", nullable: true, precision: 53 })
  pYrem: number | null;

  @Column("float", { name: "pOpen", nullable: true, precision: 53 })
  pOpen: number | null;

  @Column("float", { name: "pPlafon", nullable: true, precision: 53 })
  pPlafon: number | null;

  @Column("float", { name: "pMRem1", nullable: true, precision: 53 })
  pMRem1: number | null;

  @Column("float", { name: "pMRem2", nullable: true, precision: 53 })
  pMRem2: number | null;

  @Column("float", { name: "pMRem3", nullable: true, precision: 53 })
  pMRem3: number | null;

  @Column("float", { name: "pMRem4", nullable: true, precision: 53 })
  pMRem4: number | null;

  @Column("float", { name: "pMRem5", nullable: true, precision: 53 })
  pMRem5: number | null;

  @Column("float", { name: "pMRem6", nullable: true, precision: 53 })
  pMRem6: number | null;

  @Column("float", { name: "pMRem7", nullable: true, precision: 53 })
  pMRem7: number | null;

  @Column("float", { name: "pMRem8", nullable: true, precision: 53 })
  pMRem8: number | null;

  @Column("float", { name: "pMRem9", nullable: true, precision: 53 })
  pMRem9: number | null;

  @Column("float", { name: "pMRem10", nullable: true, precision: 53 })
  pMRem10: number | null;

  @Column("float", { name: "pMRem11", nullable: true, precision: 53 })
  pMRem11: number | null;

  @Column("float", { name: "pMRem12", nullable: true, precision: 53 })
  pMRem12: number | null;

  @Column("float", { name: "pFCRemain", nullable: true, precision: 53 })
  pFcRemain: number | null;

  @Column("float", { name: "pCurrDeb", nullable: true, precision: 53 })
  pCurrDeb: number | null;

  @Column("float", { name: "pCurrCred", nullable: true, precision: 53 })
  pCurrCred: number | null;

  @Column("float", { name: "pTotTziros", nullable: true, precision: 53 })
  pTotTziros: number | null;

  @Column("float", { name: "pTotLTziros", nullable: true, precision: 53 })
  pTotLTziros: number | null;

  @Column("varchar", { name: "pF1Data", nullable: true, length: 17 })
  pF1Data: string | null;

  @Column("varchar", { name: "pF2Data", nullable: true, length: 17 })
  pF2Data: string | null;

  @Column("varchar", { name: "pPayData", nullable: true, length: 17 })
  pPayData: string | null;

  @Column("varchar", { name: "pSendData", nullable: true, length: 17 })
  pSendData: string | null;

  @Column("varchar", { name: "pKepyoDescr", nullable: true, length: 25 })
  pKepyoDescr: string | null;

  @Column("varchar", { name: "pSolvDescr", nullable: true, length: 25 })
  pSolvDescr: string | null;
}
