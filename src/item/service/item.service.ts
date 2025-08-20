import { Injectable } from '@nestjs/common';
import { CreateItemDto } from '../dto/create-item.dto';
import { UpdateItemDto } from '../dto/update-item.dto';
import { ItemRepository } from '../repository/item.repository';

@Injectable()
export class ItemService {
  constructor(private readonly itemRepository: ItemRepository) {}

  create(createItemDto: CreateItemDto) {
    return this.itemRepository.crearItem(createItemDto);
  }

  findAll() {
    return this.itemRepository.obtenerItems();
  }

  findOne(id: string) {
    return this.itemRepository.obtenerPorId(id);
  }

  update(id: string, updateItemDto: UpdateItemDto) {
    return this.itemRepository.actualizarItem(id, updateItemDto);
  }

  remove(id: string) {
    return this.itemRepository.eliminarItem(id);
  }
}
