import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity("Drinks")
class Taste {

    @PrimaryGeneratedColumn('uuid')
    id_drink: string

    @Column()
    code: string

    @Column()
    name: string

    @Column()
    price: number
    
}

export default Taste