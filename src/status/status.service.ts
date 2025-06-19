import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from '../entities/entities/Status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService {
    constructor(
        @InjectRepository(Status)
        private readonly statusRepository: Repository<Status>,
    ) {}

    // Get all statuses
    async findAll(): Promise<Status[]> {
        return this.statusRepository.find({
            order: {
                name: 'ASC', // optional: order by name
            },
        });
    }

    // Get a status by id
    async findOne(id: number): Promise<Status | null> {
        return this.statusRepository.findOneBy({ id });
    }

    // Get a status by name
    async findByName(name: string): Promise<Status | null> {
        return this.statusRepository
            .createQueryBuilder('status')
            .where('RTRIM(status.name) = :name', { name }) // trims potential trailing spaces
            .getOne();
    }
}