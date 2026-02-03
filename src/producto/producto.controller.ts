import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";

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
    funGuardar(@Body() datos){
        return this.productoService.sendProducto(datos);
    }

    @Get(":id")
    funMostrar(@Param('id') id:number){
        return this.productoService.getMostrar(id);
    }

    @Patch(":id")
    funModificar(@Param('id') id:number, @Body() datos){
        return this.productoService.funcionActualizar(id,datos);
    }

    @Delete(":id")
    funEliminar(@Param('id') id:number){
        return this.productoService.funcionEliminar(id);   
    }
}