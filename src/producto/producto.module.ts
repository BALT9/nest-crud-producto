import { Controller, Module } from "@nestjs/common";
import { ProductoController } from "./producto.controller";
import { productoService } from "./producto.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { producto } from "./entity/producto.entity";

@Module({
    imports: [TypeOrmModule.forFeature([producto])],
    controllers: [ProductoController],
    providers: [productoService]

})

export class ProductoModule{}