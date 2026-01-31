import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // console.log('Consola');
    return 'Hola Mundo Mundial!';
  }
}
