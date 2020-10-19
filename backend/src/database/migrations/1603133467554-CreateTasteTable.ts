import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTasteTable1603133467554 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Tastes',
            columns:[
                {
                    name: 'id_taste',
                    type: 'varchar',
                    isPrimary: true,
                    isNullable: false,
                    isUnique: true,
                    length: '36',
                },
                {
                    name: 'code',
                    type: 'varchar',
                    isUnique: true,
                    length: '15',
                    isNullable: false,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isUnique: true,
                    length: '25',
                    isNullable: false,
                },
                {
                    name: 'price',
                    type: 'varchar',
                    isNullable: false, 
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Tastes')
    }

}
