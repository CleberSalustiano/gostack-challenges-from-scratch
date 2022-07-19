import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateDeliveryProblems1658201317328 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "delivery_problems",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "delivery_id",
                        type: "uuid",
                    },
                    {
                        name: "description",
                        type: "varchar",
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
                ],
            })
        );
        await queryRunner.createForeignKey(
            "delivery_problems",
            new TableForeignKey({
                name: "DeliveryProblemOrder",
                columnNames: ["delivery_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "orders",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "delivery_problems",
            "DeliveryProblemOrder"
        );
        await queryRunner.dropTable("delivery_problems");
    }
}
