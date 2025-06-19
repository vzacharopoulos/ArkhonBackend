import { Resolver, Query, Args, Int } from "@nestjs/graphql";
import { CoilColorType } from "./dto/coil.color.type";
import { CoilColorService } from "./coil.color.service";


@Resolver(() => CoilColorType)
export class CoilColorResolver {
  constructor(private readonly coilColorService: CoilColorService) {}

  @Query(() => [CoilColorType])
  async coilColors(): Promise<CoilColorType[]> {
    return this.coilColorService.findAll();
  }

  @Query(() => CoilColorType, { nullable: true })
  async coilColor(@Args('id', { type: () => Int }) id: number): Promise<CoilColorType | null> {
    return this.coilColorService.findOne(id);
  }
}
