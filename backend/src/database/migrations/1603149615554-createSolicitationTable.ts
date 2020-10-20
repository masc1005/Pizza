import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class createSolicitationTable1603149615554 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'Solicitation',
            columns: [
                {
                    name: 'id_solicitation',
                    type: 'varchar',
                    isPrimary: true,
                    isNullable: false,
                    isUnique: true,
                    length: '36',
                },
                {
                    name: 'table',
                    type: 'integer',
                    isNullable: false
                }
            ]
        }))

        await queryRunner.addColumn('Solicitation',
            new TableColumn({
                name: 'fk_taste',
                type: 'varchar',
                isNullable: false
            })
        )

        await queryRunner.createForeignKey('Solicitation',
            new TableForeignKey({
                columnNames: ['fk_taste'],
                referencedTableName: 'Tastes',
                referencedColumnNames: ['code'],
                onDelete: 'CASCADE'
            })
        )

/// ========================================================================= ///

        await queryRunner.addColumn('Solicitation',
            new TableColumn({
                name: 'fk_drink',
                type: 'varchar',
                isNullable: false
            })
        )


        await queryRunner.createForeignKey('Solicitation',
            new TableForeignKey({
                columnNames: ['fk_drink'],
                referencedTableName: 'Drinks',
                referencedColumnNames: ['code'],
                onDelete: 'CASCADE'
            })
        )    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey('Solicitation', 'fk_drink')
        await queryRunner.dropColumn('Solicitation', 'fk_drink')

        await queryRunner.dropForeignKey('Solicitation', 'fk_taste')
        await queryRunner.dropColumn('Solicitation', 'fk_taste')

        await queryRunner.dropTable('Solicitation')

    }
    
}