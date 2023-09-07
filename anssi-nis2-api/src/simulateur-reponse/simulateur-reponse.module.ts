import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimulateurReponse } from './simulateur-reponse.entity';
import { SimulateurReponseController } from './simulateur-reponse.controller';
import { simulateurReponseProviders } from './simulateur-reponse.providers';
import { DatabaseModule } from '../database/database.module';
import { SimulateurReponseService } from './simulateur-reponse.service';

@Module({
  imports: [DatabaseModule],
  providers: [...simulateurReponseProviders, SimulateurReponseService],
  controllers: [SimulateurReponseController],
})
export class SimulateurReponseModule {}
