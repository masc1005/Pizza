import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity("usersTable")
class Users{ 

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    user: string

    @Column()
    password: string

}

export default Users