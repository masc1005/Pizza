import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity("Tastes")
class Taste {

    @PrimaryGeneratedColumn('uuid')
    id_taste: string

    @Column()
    code: string

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    description: string
    
}

export default Taste