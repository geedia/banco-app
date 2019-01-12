import { Consumo } from '../consumo/consumo';
import { Cliente } from '../cliente';

export class TarjetaCliente {
  id: number;
  cliente: Cliente;
  numero: number;
  codigo: number;
  tipo: string;
  consumos: Consumo[];

}
