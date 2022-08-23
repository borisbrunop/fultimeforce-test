import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const Config : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'ec2-34-203-182-65.compute-1.amazonaws.com',
    port: 5432,
    username: 'cnfbmywtioavqe',
    password: '66b2c406905d23dbaf38167ec84aedb0eaccaeb2a302f4383598741292605779',
    database: 'dcpr6pqqtqiaa5',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    ssl: {
        rejectUnauthorized: false
    },
    autoLoadEntities: true,
    // extra: {
    //   ssl: {
    //     rejectUnauthorized: false
    //   }
    // }
}