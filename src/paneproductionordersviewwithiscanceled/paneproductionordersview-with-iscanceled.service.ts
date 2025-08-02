// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersview-with-iscanceled';
// import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
// import { Repository } from 'typeorm';


// // @Injectable()
// // export class ProdordersviewService {
// //   constructor(
// //     @InjectRepository(ProdOrdersView)
// //     private readonly prodOrdersRepository: Repository<ProdOrdersView>,
// //   ) {}

// //   findAll(): Promise<ProdOrdersView[]> {
// //     return this.prodOrdersRepository
// //       .createQueryBuilder('prodOrdersView')
// //       .leftJoinAndMapOne(
// //         'prodOrdersView.panelSpeed',
// //         PanelSpeeds,
// //         'panelSpeed',
// //         'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code'
// //       )
// //       .where('prodOrdersView.isCanceled = :isCanceled', { isCanceled: 0 })
// //       .getMany();
// //   }

// //   findOne(prodOrder: string): Promise<ProdOrdersView | null> {
// //     return this.prodOrdersRepository
// //       .createQueryBuilder('prodOrdersView')
// //       .leftJoinAndMapOne(
// //         'prodOrdersView.panelSpeed',
// //         PanelSpeeds,
// //         'panelSpeed',
// //         'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code'
// //       )
// //       .where(
// //         'prodOrdersView.prodOrder  = :prodOrder',
// //         { prodOrder },
// //       )
// //             .andWhere('prodOrdersView.isCanceled = :isCanceled', { isCanceled: 0 })

// //       .getOne();
// //   }
// // }


// @Injectable()
// export class ProdordersviewService {
//   constructor(
//     @InjectRepository(ProdOrdersView)
//     private readonly prodOrdersRepository: Repository<ProdOrdersView>,
//   ) {}

//   async findAll(): Promise<ProdOrdersView[]> {
//     return this.prodOrdersRepository.find({
//       where: { isCanceled: false },
//       relations: ['panelSpeed'],
//     });
//   }

//   async findOne(prodOrder: string): Promise<ProdOrdersView | null> {
//     return this.prodOrdersRepository.findOne({
//       where: {
//         prodOrder,
//         isCanceled: false,
//       },
//       relations: ['panelSpeed'],
//     });
//   }
// }
