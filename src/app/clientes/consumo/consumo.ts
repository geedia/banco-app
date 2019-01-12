import { TarjetaCliente } from '../tarjeta/tarjeta-cliente';

export class Consumo {
  id: number;
  descripcion: string;
  monto: number;
  tarjeta: TarjetaCliente;
  fecha: number;
}
