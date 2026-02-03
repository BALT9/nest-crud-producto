import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller("usuario")
export class UsuarioController{

    @Get()
    funListar(){
        return "listando usuarios..."
    }

    @Post()
    funGuardar(){
        return "guardando usuario..."
    }

    @Get(':id')
    funMostrar(){
        return "mostrando usuario..."
    }

    @Put(':id')
    funModificar(){
        return "modificando usuario..."
    }

    @Delete(':id')
    funEliminar(){
        return "eliminando usuario..."
    }
}