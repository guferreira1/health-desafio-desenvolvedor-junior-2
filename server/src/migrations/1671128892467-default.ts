import { MigrationInterface, QueryRunner } from "typeorm";

export class default1671128892467 implements MigrationInterface {
    name = 'default1671128892467'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animals" DROP CONSTRAINT "FK_5be7b6488e5e2ed3ddb768b1e86"`);
        await queryRunner.query(`ALTER TABLE "animals" DROP COLUMN "petshopId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animals" ADD "petshopId" uuid`);
        await queryRunner.query(`ALTER TABLE "animals" ADD CONSTRAINT "FK_5be7b6488e5e2ed3ddb768b1e86" FOREIGN KEY ("petshopId") REFERENCES "petshop"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
