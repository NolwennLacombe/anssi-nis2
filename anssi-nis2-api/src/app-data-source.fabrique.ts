import { DataSourceOptions } from 'typeorm';

export const fabriqueAppDataSource = async (
  databaseConnectionUrl: string,
): Promise<DataSourceOptions> => ({
  type: 'postgres',
  url: databaseConnectionUrl,
  synchronize: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  subscribers: [],
  migrations: [],
});
