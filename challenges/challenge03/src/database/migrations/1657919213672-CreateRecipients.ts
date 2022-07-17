import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRecipients1657919213672 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "recipients",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "street",
                        type: "varchar",
                    },
                    {
                        name: "number",
                        type: "varchar",
                    },
                    {
                        name: "complement",
                        type: "varchar",
                    },
                    {
                        name: "state",
                        type: "varchar",
                    },
                    {
                        name: "city",
                        type: "varchar",
                    },
                    {
                        name: "cep",
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("recipients");
    }
}
