import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity("usersTable")
class Users{ 

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    user: string

    @Column()
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password = bcrypt.hashSync( this.password, 8)
    }


}

export default Users