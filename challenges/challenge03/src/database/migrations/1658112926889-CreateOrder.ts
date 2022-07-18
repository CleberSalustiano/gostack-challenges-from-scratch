import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateOrder1658112926889 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orders",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "recipient_id",
                        type: "uuid",
                    },
                    {
                        name: "courier_id",
                        type: "uuid",
                    },
                    {
                        name: "signature_id",
                        type: "varchar",
                    },
                    {
                        name: "product",
                        type: "varchar",
                    },
                    {
                        name: "canceled_at",
                        type: "timestamp",
                    },
                    {
                        name: "start_date",
                        type: "timestamp",
                    },
                    {
                        name: "end_date",
                        type: "timestamp",
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
            "orders",
            new TableForeignKey({
                name: "OrderRecipient",
                columnNames: ["recipient_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "recipients",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            })
        )

        await queryRunner.createForeignKey(
            "orders",
            new TableForeignKey({
                name: "OrderCourier",
                columnNames: ["courier_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "couriers",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('orders', 'OrderRecipient');
        await queryRunner.dropForeignKey('orders', 'OrderCourier');

        await queryRunner.dropTable("orders");
    }
}
