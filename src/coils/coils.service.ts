import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoilsFilterInput } from './dto/coils-filter.input';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { Coils } from '../entities/entities/Coils.entity';
import { CoilsSortInput } from './dto/coils-sort-input';
import { CreateCoilInput } from './dto/create-coil-input';
import { UpdateOneCoilInput } from './dto/update-coil-input';

@Injectable()
export class CoilsService {
  constructor(
    @InjectRepository(Coils)
    private coilsRepository: Repository<Coils>,
  ) {}

  private applyFilters(qb: SelectQueryBuilder<Coils>,
     filter?: CoilsFilterInput,
     userId?: string): void {
    if (!filter) return;

     // Add user access filter if userId is provided
    if (userId) {
      qb.andWhere('access.userId = :userId', { userId });
    }

    if (filter.status !== undefined && filter.status !== null) {
        qb.andWhere('coil.status = :status', { status: filter.status });
    }

    if (filter.coilno) {
    if (filter.coilno.eq) {
      qb.andWhere('coil.coilno = :coilno', { coilno: filter.coilno.eq });
    }
    if (filter.coilno.iLike) {
      qb.andWhere('coil.coilno LIKE :coilno', { 
        coilno: `%${filter.coilno.iLike}%` 
      });
    }
    if (filter.coilno.contains) {
      qb.andWhere('coil.coilno LIKE :coilno', { 
        coilno: `%${filter.coilno.contains}%` 
      });
    }
  }

  if (filter.openstatus) {
  if (filter.openstatus.eq) {
    // Exact match
    qb.andWhere('coil.openstatus = :openstatusEq', { 
      openstatusEq: filter.openstatus.eq 
    });
  }
  if (filter.openstatus.in && filter.openstatus.in.length > 0) {
    // Match any of provided values
    qb.andWhere('coil.openstatus IN (:...openstatusIn)', { 
      openstatusIn: filter.openstatus.in 
    });
  }

}


   if (filter.loc?.in) {
  const locations = filter.loc.in
    .map(loc => Number(loc))  // Force conversion to number
    .filter(loc => !isNaN(loc));  // Remove invalid numbers

  if (locations.length === 1) {
    qb.andWhere('coil.loc = :loc', { loc: locations[0] });
  } else if (locations.length > 1) {
    qb.andWhere('coil.loc IN (:...locations)', { locations });
  }
}

   if (filter.loc_in?.in && filter.loc_in.in.length > 0) {
    // Convert any strings to numbers to be safe
    const locInNumbers = filter.loc_in.in.map(loc => 
        typeof loc === 'string' ? parseInt(loc, 10) : loc
    ).filter(loc => !isNaN(loc)); // Remove any NaN values
    
    if (locInNumbers.length > 0) {
        qb.andWhere('coil.loc IN (:...loc_in)', { loc_in: locInNumbers });
    }
}
    if (filter.upDateFrom) {
        qb.andWhere('coil.up_date >= :upDateFrom', { upDateFrom: filter.upDateFrom });
    }

    if (filter.upDateTo) {
        qb.andWhere('coil.up_date <= :upDateTo', { upDateTo: filter.upDateTo });
    }
if (filter.currWeightFrom?.eq !== undefined && filter.currWeightFrom.eq !== null) {
  qb.andWhere('coil.curr_weight >= :currWeightFrom', { 
    currWeightFrom: filter.currWeightFrom.eq 
  });
}

if (filter.currWeightTo?.eq !== undefined && filter.currWeightTo.eq !== null) {
  qb.andWhere('coil.curr_weight <= :currWeightTo', { 
    currWeightTo: filter.currWeightTo.eq 
  });
}

    if (filter.thickness) {
    if (filter.thickness.eq) {
      qb.andWhere('coil.thickness = :thickness', { thickness: filter.thickness.eq });
    }}

      if (filter.widthCoil) {
    if (filter.widthCoil.eq) {
      qb.andWhere('coil.widthCoil = :widthCoil', { widthCoil: Number((Number(filter.widthCoil.eq) / 1000).toFixed(4)) // convert mm → meters
      });
    }}

     if (filter.color) {
    if (filter.color.eq) {
      qb.andWhere('coil.color = :color', { color: filter.color.eq });
    }}
   

    
}
private applySorting(
    qb: SelectQueryBuilder<Coils>,
    sorting?: CoilsSortInput[],
  ): void {
    if (sorting && sorting.length > 0) {
      sorting.forEach(({ field, direction }) => {
        // will append `ORDER BY coil.<field> <order>`
        qb.addOrderBy(`coil.${field}`, direction);
      });
    }
  }


async findAll(filter?: CoilsFilterInput, limit?: number, offset?: number): Promise<{ nodes: Coils[], totalCount: number }> {
  const qb = this.coilsRepository.createQueryBuilder('coil')
    // .leftJoinAndSelect('coil.colorRef', 'color'); // <-- important


/*                                        allowed status based on location                   userstatuscontrol
 async findAll(filter?: CoilsFilterInput, limit?: number, offset?: number, currentUser?: User): Promise<...> {
  const qb = this.coilsRepository.createQueryBuilder('coil');

  // Apply API filters
  if (filter?.coilno) { ... }
  if (filter?.loc) { ... }
  if (filter?.status) { ... }

  // Apply Access Control
  if (currentUser?.location === 5) {
    qb.andWhere('coil.status IN (:...allowedStatuses)', { allowedStatuses: [1, 2, 3] });
  }

  // Pagination, etc.
*/
  this.applyFilters(qb, filter);

const totalCount = await qb.getCount();


// ✅ Pagination
  if (limit !== undefined && limit !== null) {
    qb.take(limit);
  }

  if (offset !== undefined && offset !== null) {
    qb.skip(offset);
  }

   const nodes = await qb.getMany();
  return {
    nodes,
    totalCount,
  };
}
async findAvailableCoils(filter?: CoilsFilterInput,
   sorting?: CoilsSortInput[],
    limit?: number,
     offset?: number,
      userId?: any): Promise<{ nodes: Coils[]; totalCount: number }> {
    const qb = this.coilsRepository
        .createQueryBuilder('coil')
        
        .leftJoinAndSelect('coil.status', 'status')
        .where('RTRIM(status.nameGrp) = :nameGrp', { nameGrp: 'ΔΙΑΘΕΣΙΜΟ' })
                // .leftJoinAndSelect('coil.colorRef', 'color'); // <-- important  

        

       this.applyFilters(qb, filter);
        this.applySorting(qb,  sorting);

    // filters and pagination will go here...

    const totalCount = await qb.getCount();

    if (limit !== undefined && limit !== null) {
        qb.take(limit);
    }

    if (offset !== undefined && offset !== null) {
        qb.skip(offset);
    }

    const nodes = await qb.getMany();

    return {
        nodes,
        totalCount,
    };
}

async findExpectedCoils(filter?: CoilsFilterInput,
   sorting?: CoilsSortInput[],
    limit?: number,
     offset?: number,
      userId?: any): Promise<{ nodes: Coils[]; totalCount: number }> {
    const qb = this.coilsRepository
        .createQueryBuilder('coil')
        .leftJoinAndSelect('coil.status', 'status')
        
        .where('RTRIM(status.nameGrp) = :nameGrp', { nameGrp: 'ΑΝΑΜΕΝΟΜΕΝΟ' })
         //       .leftJoinAndSelect('coil.colorRef', 'coilColor'); // <-- important  



       this.applyFilters(qb, filter);
        this.applySorting(qb,  sorting);

    // filters and pagination will go here...

    const totalCount = await qb.getCount();

    if (limit !== undefined && limit !== null) {
        qb.take(limit);
    }

    if (offset !== undefined && offset !== null) {
        qb.skip(offset);
    }

    const nodes = await qb.getMany();

    return {
        nodes,
        totalCount,
    };
}



  async findOne(id: number): Promise<Coils | null> {
  return this.coilsRepository.findOne({
    where: { id },
    relations: ['status'], // <-- THIS IS CRITICAL FOR findOne
  });
}
async create(data: CreateCoilInput): Promise<Coils> {
  const newCoil = this.coilsRepository.create(data);
  return this.coilsRepository.save(newCoil);
}

async updateOne(input: UpdateOneCoilInput): Promise<Coils> {
  const { id, update } = input;

  const coil = await this.coilsRepository.findOne({ where: { id } });

  if (!coil) {
    throw new NotFoundException(`Coil with id ${id} not found`);
  }

  Object.assign(coil, update);
  return this.coilsRepository.save(coil);
}

}
