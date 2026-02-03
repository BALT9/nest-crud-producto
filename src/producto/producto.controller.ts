import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

import { productoService } from "./producto.service";

@Controller("/producto")

export class ProductoController{

    constructor(private productoService: productoService){

    }

    @Get()
    funListar(){
        return this.productoService.getProducto()
    }

    @Post()
    funGuardar(){
        return "Agregando Producto"
    }

    @Get(":id")
    funMostrar(){
        return "Mostrando Producto"   
    }

    @Put(":id")
    funModificar(){
        return "Modificando Producto"   
    }

    @Delete(":id")
    funEliminar(){
        return "Eliminando Producto"   
    }
}