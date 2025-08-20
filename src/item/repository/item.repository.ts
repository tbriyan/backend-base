import { DataSource, Repository } from 'typeorm';
import { Item } from '../entities/item.entity';
import { Injectable } from '@nestjs/common';
import { CreateItemDto } from '../dto/create-item.dto';
import { UpdateItemDto } from '../dto/update-item.dto';

@Injectable()
export class ItemRepository {
  private readonly itemRepository: Repository<Item>;

  constructor(private dataSource: DataSource) {
    this.itemRepository = this.dataSource.getRepository(Item);
  }

  async crearItem(dto: CreateItemDto): Promise<Item> {
    const item = this.itemRepository.create(dto);
    console.log('Item a crear', item);
    return this.itemRepository.save(item);
  }

  async obtenerItems(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async obtenerPorId(id: string): Promise<Item | null> {
    return this.itemRepository.findOneBy({ id });
  }

  async actualizarItem(id: string, dto: UpdateItemDto): Promise<Item | null> {
    await this.itemRepository
      .createQueryBuilder()
      .update(Item)
      .set(dto)
      .where('id = :id', { id })
      .execute();

    return this.itemRepository.findOneBy({ id });
  }

  async eliminarItem(id: string): Promise<void> {
    await this.itemRepository.delete(id);
  }
}
