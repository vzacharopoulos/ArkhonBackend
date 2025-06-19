import { ObjectType, Field, Int, Resolver, Args,  Query } from '@nestjs/graphql';
import { StatusService } from './status.service';
import { Status } from 'src/entities/entities/Status.entity';


@ObjectType()
export class StatusType {
    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field({ nullable: true })
    nameGr?: string;

    @Field({ nullable: true })
    nameGr2?: string;

    @Field({ nullable: true })
    nameGrp?: string;

    @Field(() => Int, { nullable: true })
    selection1?: number;

    @Field(() => Int, { nullable: true })
    selection2?: number;

    @Field(() => Int, { nullable: true })
    selection3?: number;

    @Field(() => Int, { nullable: true })
    selection4?: number;

    @Field(() => Int, { nullable: true })
    selection5?: number;
}

@Resolver(() => StatusType)
export class StatusResolver {
    constructor(private readonly statusService: StatusService) {}

    // Get all statuses
    @Query(() => [StatusType])
    async statuses(): Promise<Status[]> {
        return this.statusService.findAll();
    }

    // Get one status by id
    @Query(() => StatusType, { nullable: true })
    async status(@Args('id', { type: () => Int }) id: number): Promise<Status | null> {
        return this.statusService.findOne(id);
    }

    // Optional: Get status by name
    @Query(() => StatusType, { nullable: true })
    async statusByName(@Args('name') name: string): Promise<Status | null> {
        return this.statusService.findByName(name);
    }
}