export class CreateItemDto {
  id: string;
  nombre: string;
  codigo: string;
  description?: string;
  precio: number;
  cantidad: number;
  disponible: boolean;
}
