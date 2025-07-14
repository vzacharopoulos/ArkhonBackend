import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersview-with-iscanceled';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { Pporderlines2WatcherService } from './pporderlines2-watcher-service';

describe('Pporderlines2WatcherService', () => {
  let service: Pporderlines2WatcherService;
  let repo: { createQueryBuilder: jest.Mock };
  let qb: any;

  beforeEach(async () => {
    qb = {
      leftJoinAndMapOne: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      getMany: jest.fn().mockResolvedValue([{ id: 1 }]),
    };
    repo = {
      createQueryBuilder: jest.fn().mockReturnValue(qb),
    } as any;

    const moduleRef = await Test.createTestingModule({
      providers: [
        Pporderlines2WatcherService,
        { provide: getRepositoryToken(Pporderlines2), useValue: repo },
      ],
    }).compile();

    service = moduleRef.get(Pporderlines2WatcherService);
  });

  it('queries with joins and publishes on change', async () => {
    const publishSpy = jest
      .spyOn(service.getPubSub(), 'publish')
      .mockResolvedValue();

    await service.checkForUpdates();

    expect(repo.createQueryBuilder).toHaveBeenCalledWith('line');
    expect(qb.leftJoinAndMapOne).toHaveBeenNthCalledWith(
      1,
      'line.prodOrdersView',
      ProdOrdersView,
      'prodOrdersView',
      'line.custporderno COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder',
    );
    expect(qb.leftJoinAndMapOne).toHaveBeenNthCalledWith(
      2,
      'prodOrdersView.panelSpeed',
      PanelSpeeds,
      'panelSpeed',
      'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code',
    );
    expect(qb.where).toHaveBeenCalledWith('line.isCanceled = :isCanceled', {
      isCanceled: 0,
    });
    expect(qb.getMany).toHaveBeenCalled();
    expect(publishSpy).toHaveBeenCalledTimes(1);

    publishSpy.mockRestore();
  });

  it('does not publish when data hash is unchanged', async () => {
    jest
      .spyOn(service.getPubSub(), 'publish')
      .mockResolvedValue();

    await service.checkForUpdates();
    const publishSpy = jest
      .spyOn(service.getPubSub(), 'publish')
      .mockResolvedValue();
    await service.checkForUpdates();

    expect(publishSpy).not.toHaveBeenCalled();
    publishSpy.mockRestore();
  });
});