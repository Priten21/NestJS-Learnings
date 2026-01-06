import { Body, Controller,Delete,Get,Param,Post, Put, Inject} from '@nestjs/common';
import { CreateUserDTO } from "./dto"
import { UsersModule } from './users.module';
let USERS: CreateUserDTO[]= []



@Controller( '/users')
export class UsersController{

    constructor(
        @Inject('APP_INFO')
        private readonly appInfo: { appName: string; version: string },
    ) {}

    @Get('info')
    getInfo() {
        return this.appInfo;
    }

    
    // constructor(@Inject('ENV_CONFIG') private config: Record<string,any>) {
    //         console.log(this.config)     
    // }


    // constructor(@Inject('MAIL') private emails: string[]){
    //     console.log(this.emails);    
    // }



    // constructor(@Inject('DATABASE_NAME') private dbname: string) {
    //     console.log(this.dbname)
    // }



    @Post("/")
    addUser(@Body() CreateUserDTO: CreateUserDTO){
        USERS.push(CreateUserDTO);
    }

    @Get("/")
    getAllUsers(){
        return USERS;
    }

    @Get("/:id")
    getUser(@Param("id") id: number){
        return USERS.find(user => user.id === +id );
    }

    @Put("/:id")
    UpdateUser(@Param("id") id: number, @Body() updateUserDTO: CreateUserDTO){
       const userIdx =  USERS.findIndex(user => user.id === +id );
       
       

       if(userIdx === -1){
        return;
       } else{
        USERS[userIdx] = updateUserDTO;
       }
    }

    @Delete("/:id")
    deleteUser(@Param("id") id: number){
         USERS = USERS.filter(user => user.id !== +id );

    }
}