import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller("/producto")

export class ProductoController{

    @Get()
    funListar(){
        return "listando productos...";
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