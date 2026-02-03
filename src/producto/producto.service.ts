import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { producto } from "./entity/producto.entity";
import { Repository } from "typeorm";

@Injectable()
export class productoService {

    // usas la entidad producto
    constructor(@InjectRepository(producto) private prodRepository: Repository<producto>) { }

    getProducto() {
        return this.prodRepository.find();
    }

    sendProducto(datos) {
        const prod = this.prodRepository.create(datos);
        return this.prodRepository.save(prod)
    }

    getMostrar(id: number) {
        return this.prodRepository.findOneBy({ id });
    }

    funcionActualizar(id: number, datos) {
        return this.prodRepository.update(id, datos);
    }

    funcionEliminar(id: number){
        return this.prodRepository.delete(id);
    }
}