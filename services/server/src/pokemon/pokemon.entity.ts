import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn} from 'typeorm'

@Entity('pokemon')
export class PokemonEntity {
	@PrimaryGeneratedColumn('uuid') id: string

    @Column('varchar', { length: 500 })
    name: string

    @Column('varchar', { length: 500 })
    type: string

    @Column('numeric')
    pokedex: number

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;
}