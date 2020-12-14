import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PokemonModule } from './pokemon/pokemon.module'

import {TypeOrmConfigService} from "./typeorm.options";
import { AuthModule } from './auth/auth.module';
import ormconfig from './ormconfig'

@Module({
	imports: [ 
		//TypeOrmModule.forRootAsync({
		//	useClass: TypeOrmConfigService,
		//}),
		//PokemonModule
	AuthModule],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
