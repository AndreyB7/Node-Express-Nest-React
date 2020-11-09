import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PokemonModule } from './pokemon/pokemon.module'

import ormoptions from './ormconfig'

@Module({
	imports: [ 
		TypeOrmModule.forRoot(ormoptions),
		PokemonModule
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
