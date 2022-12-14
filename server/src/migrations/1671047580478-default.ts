import { MigrationInterface, QueryRunner } from "typeorm";

export class default1671047580478 implements MigrationInterface {
    name = 'default1671047580478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animals" DROP COLUMN "owner_phone"`);
        await queryRunner.query(`ALTER TABLE "animals" ADD "owner_phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animals" DROP COLUMN "owner_phone"`);
        await queryRunner.query(`ALTER TABLE "animals" ADD "owner_phone" numeric NOT NULL`);
    }

}
