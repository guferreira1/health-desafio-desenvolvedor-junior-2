import { MigrationInterface, QueryRunner } from "typeorm";

export class default1671049606215 implements MigrationInterface {
    name = 'default1671049606215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animals" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animals" DROP COLUMN "isActive"`);
    }

}
