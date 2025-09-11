import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation, ID } from '@nestjs/graphql';
import { CoilsService } from './coils.service';
import { Coils } from '../entities/entities/Coils.entity';
import { ObjectType, Field } from '@nestjs/graphql';
import { CoilsFilterInput } from './dto/coils-filter.input';
import { CoilsResponse } from './dto/coils-response.type'
import { StatusType } from 'src/status/status.resolver';
import { CoilsSortInput } from './dto/coils-sort-input';
import { UsersLocationAccess } from 'src/entities/entities/UserLocationAccess.entity';
import { UsersLocationAccessService } from 'src/userslocationaccess/userslocationaccess.service';
import { openstatus } from './dto/coils-enum-types';
import { LocationType } from 'src/location/location.resolver';
import {  UpdateCoilInput, UpdateOneCoilInput } from './dto/update-coil-input';
import { CoilColor } from 'src/entities/entities/CoilColor.entity';
import { CoilCoating } from 'src/entities/entities/CoilCoating.entity';
@ObjectType('Coil')
export class CoilType {
  // Previous fields (already added)
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  coilno: string;

  @Field({ nullable: true })
  color: string;

  @Field({ nullable: true })
  sheetType: string;

  @Field({ nullable: true })
  coating: string;
  
  @Field(() => CoilCoating, { nullable: true })
  coatingRef?: CoilCoating;

  @Field({ nullable: true })
  coathick: string;

  @Field({ nullable: true })
  paintType: string;

  @Field({ nullable: true })
  steelGrade: string;

  @Field({ nullable: true })
  createDate: Date;

  @Field({ nullable: true })
  delDate: Date;

  @Field({ nullable: true })
  upDate: Date;

    @Field({ nullable: true })
  loadDate: Date;
  
  @Field({ nullable: true })
  isUnloaded: Boolean;

  @Field({ nullable: true })
  gaugeThickness: string;

  @Field({ nullable: true })
  thickness: number;

  @Field({ nullable: true })
  widthCoil: number;

  @Field({ nullable: true })
  initWeight: number;

  @Field({ nullable: true })
  weight: number;

  @Field({ nullable: true })
  currWeight: number;

  @Field({ nullable: true })
  grossWeight: number;

  @Field({ nullable: true })
  wastage: number;

   @Field(() => StatusType)
    status: StatusType;

  @Field({ nullable: true })
  loc: number;

  @Field({ nullable: true })
  currLength: number;

  @Field({ nullable: true })
  comments: string;

  @Field({ nullable: true })
  commentsPanel: string;

  @Field({ nullable: true })
  supplier: string;

  @Field({ nullable: true })
  openstatus: openstatus;

  @Field({ nullable: true })
  innerdiameter: number;

  @Field({ nullable: true })
  quality: number;

  @Field({ nullable: true })
  supcoilId: string;

  @Field({ nullable: true })
  customer: string;

  @Field({ nullable: true })
  orderDate: Date;

  @Field({ nullable: true })
  corderid: string;

 

  @Field({ nullable: true })
  tporderId: string;

  @Field({ nullable: true })
  tporderSort: number;

  @Field({ nullable: true })
  classification: string;

  @Field({ nullable: true })
  painted: string;

  @Field({ nullable: true })
  heatno: string;

  @Field({ nullable: true })
  cutDate: Date;

  @Field({ nullable: true })
  cutWastage: number;

  @Field({ nullable: true })
  nomthickness: string;

  @Field({ nullable: true })
  price: number;

  @Field({ nullable: true })
  paintDate: Date;

  @Field({ nullable: true })
  cutComment: string;

  @Field({ nullable: true })
  surfaceType: string;

  @Field({ nullable: true })
  loaderid: string;

  @Field({ nullable: true })
  donkey: number;

  @Field({ nullable: true })
  dateofDes34: Date;

  @Field({ nullable: true })
  dcustomer: string;

  @Field({ nullable: true })
  prodDate: Date;

  @Field({ nullable: true })
  datediff: number;

  @Field({ nullable: true })
  datediffnow: number;

  @Field({ nullable: true })
  tempStatus: number;

  @Field({ nullable: true })
  property: number;

  @Field({ nullable: true })
  slitrange: string;

  @Field({ nullable: true })
  slithick: string;

  @Field({ nullable: true })
  locTrans: number;

  @Field({ nullable: true })
  dateTrans: Date;

  @Field({ nullable: true })
  customs: number;

 @Field({ nullable: true })
  currLengthAgr: number;

  @Field({ nullable: true })
  currLengthPol: number;

  @Field({ nullable: true })
  currLengthAlu: number;

  @Field({ nullable: true })
  currLengthAlup: number;

  @Field({ nullable: true })
  currLengthPap: number;

  @Field({ nullable: true })
  currLengthAlue: number;

  @Field({ nullable: true })
  currLengthBit: number;

  @Field({ nullable: true })
  currLengthSto: number;

  @Field({ nullable: true })
  anVcoated: number;

  @Field({ nullable: true })
  prodComment: string;

  @Field({ nullable: true })
  documents: string;

  @Field({ nullable: true })
  vesselName: string;

  @Field({ nullable: true })
  dischargePort: string;

  @Field({ nullable: true })
  productCode: string;

  @Field({ nullable: true })
  dcustomerName: string;

  @Field({ nullable: true })
  cnomthickness: string;

  @Field({ nullable: true })
  tnomthickness: string;

  @Field({ nullable: true })
  ptradecode: string;

  @Field({ nullable: true })
  clength: number;

  @Field({ nullable: true })
  dateDiffDelNow: number;

  @Field({ nullable: true })
  dateDiffCutNow: number;

  @Field({ nullable: true })
  dateDiffCutProd: number;

  @Field({ nullable: true })
  dateDiffCutSales: number;

  @Field({ nullable: true })
  dateDiffDelPaint: number;

  @Field({ nullable: true })
  dateDiffDelSales: number;

  @Field({ nullable: true })
  dateDiffDelCut: number;

  @Field({ nullable: true })
  company: string;

   @Field(() => [UsersLocationAccess], { description: 'User access permissions for this coil location' })
  locationAccess: UsersLocationAccess[];

    @Field({ nullable: true })
  shipBayNo: number;


//  @Field(() => CoilColor, { nullable: true })
//   colorRef?: CoilColor ;
// 
}

@Resolver(() => CoilType)
export class CoilsResolver {
  constructor(private readonly coilsService: CoilsService,
  private readonly usersLocationAccessService: UsersLocationAccessService
) {}
  @ResolveField('locationAccess', () => [UsersLocationAccess])
  async getLocationAccess(@Parent() coil: Coils) {
    if (!coil.loc) return [];
    return this.usersLocationAccessService.findByLocationIdBatch(coil.loc);
  }


  // 🔍 Query to get all coils
@Query(() => CoilsResponse, { name: 'coils' })
async getAllCoils(
  @Args('filter', { nullable: true }) filter?: CoilsFilterInput,
  @Args('limit', { type: () => Int, nullable: true }) limit?: number,
  @Args('offset', { type: () => Int, nullable: true }) offset?: number,
  @Args('sorting', { type: () => [CoilsSortInput], nullable: true }) sorting?: CoilsSortInput[],
): Promise<CoilsResponse> {
  return this.coilsService.findAll(filter, limit, offset);
}

@Query(() => CoilsResponse, { name: 'availableCoils' })
async getAvailableCoils(
  @Args('filter',  { nullable: true })         filter?: CoilsFilterInput,
    @Args('sorting', { type: () => [CoilsSortInput], nullable: true })
                                                  sorting?: CoilsSortInput[],
    @Args('limit',   { type: () => Int, nullable: true }) limit?: number,
    @Args('offset',  { type: () => Int, nullable: true }) offset?: number,
): Promise<CoilsResponse> {
    return this.coilsService.findAvailableCoils(filter, sorting,  limit, offset);
}

@Query(() => CoilsResponse, { name: 'expectedCoils' })
async getExpectedCoils(
  @Args('filter',  { nullable: true })         filter?: CoilsFilterInput,
    @Args('sorting', { type: () => [CoilsSortInput], nullable: true })
                                                  sorting?: CoilsSortInput[],
    @Args('limit',   { type: () => Int, nullable: true }) limit?: number,
    @Args('offset',  { type: () => Int, nullable: true }) offset?: number,
): Promise<CoilsResponse> {
    return this.coilsService.findExpectedCoils(filter, sorting,  limit, offset);
}


  // 🔍 Query to get a single coil by id
  @Query(() => CoilType, { name: 'coil', nullable: true })
  async getCoil(@Args('id', { type: () => Int }) id: number): Promise<Coils | null> {
    return this.coilsService.findOne(id);
  }

@Mutation(() => CoilType)
async updateOneCoil(
  @Args('input') input: UpdateOneCoilInput
): Promise<Coils | null> {
  return this.coilsService.updateOne(input);
}


  @Mutation(() => CoilType, { name: 'updateCoilStatus' })
  async updateCoilStatus(
    @Args('id', { type: () => Int }) id: number,
    @Args('statusIds', { type: () => [Int] }) statusIds: number[],
    @Args('shipBayNo', { type: () => Int }) shipBayNo: number,
  ): Promise<Coils> {
    return this.coilsService.updateIsUnloadedById(id, statusIds, shipBayNo);
  }





}
