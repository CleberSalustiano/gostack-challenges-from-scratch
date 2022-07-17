import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCouriers1658083720779 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "couriers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "avatar_id",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "update_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("couriers");
    }

}