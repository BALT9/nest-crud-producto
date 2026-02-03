import { Injectable } from "@nestjs/common";

@Injectable()
export class productoService{

    getProducto(){
        return "listando desde servicio"
    }

    sendProducto(datos){
        return "guardando desde servicio"
    }


}