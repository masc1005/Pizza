import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('Solicitation')
class Solicitation {

    @PrimaryGeneratedColumn()
    id_solicitation: string

    @Column()
    table: number

    @Column()
    fk_taste: string

    @Column()
    fk_drink: string

}

export default Solicitation