import { TarjetaCliente } from './tarjeta/tarjeta-cliente';

export class Cliente {
  id: number;
  nombre: string;
  direccion: string;
  ciudad: string;
  telefono: number;
  tarjetas: TarjetaCliente[];
}
