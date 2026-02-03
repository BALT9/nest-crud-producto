import { Controller, Module } from "@nestjs/common";
import { ProductoController } from "./producto.controller";
import { productoService } from "./producto.service";

@Module({
    imports: [],
    controllers: [ProductoController],
    providers: [productoService]

})

export class ProductoModule{}