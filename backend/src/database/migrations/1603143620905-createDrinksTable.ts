import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createDrinksTable1603143620905 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Drinks',
            columns: [
                {
                    name: 'id_drink',
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
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Drinks')
    }

}
