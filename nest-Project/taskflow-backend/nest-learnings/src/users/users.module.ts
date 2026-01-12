import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { appInfoProvider } from "./app-info-provider"

@Module({
    controllers: [UsersController],
    providers: [
        { provide: 'APP_NAME', useValue: 'Nest-Learning' },
        // { provide: 'APP_VERSION', useValue: '1.0.0' },
        appInfoProvider,
        {provide: 'ENV_CONFIG', useValue: {
                type:'DEV',
                node:'17'
        }},
        {provide: 'DATABASE_NAME', useValue:'MOON_KNIGHT'},
        {provide: 'MAIL', useValue: ['hello@gmail.com','example@gmail.com']}],
})

//*****Injection Scope*****
/*

Default Scope: Single Shared Instance within module 

request Scope: Once per HTTP request

Transient: Every time it’s injected

*/


export class UsersModule {}