import{ Controller, Get, Post,Req, HttpCode, HttpStatus, Res, Header, Redirect, Param, Query, Headers, Body} from "@nestjs/common";
import type { Request, Response } from 'express';

import { of } from 'rxjs';


// Interfaces for params
    interface VideoParams {
        id: number;
        name: string;
    }

    interface QueryParams {
        name: string;
        age: number;
    }

//Interface for Data transfer obeject 
    interface VideoDTO { 
        name: string;
        tag: string
    }

@Controller("/users")
export class UsersController {

    @Get('/profile')
    @Header('Cache-Control','None')
    @Header('X-name', "Priten")
    // @Redirect('users/account', 302)
    // @HttpCode(200)
    // @HttpCode(HttpStatus.OK)
    getProfile(@Req() req: Request, @Res({ 
        passthrough: true }) res:Response) {

        // const rn = ~~(Math.random() * 10 + 1)
        //  if(rn>5 ) {
        //     return res.redirect(302,"/users/account")

        //  } else {
        //     return {
        //         url: 'users/wallet',
        //         statusCode: 302,
        //     }
        //  }
         console.log(req.params);
        
        //sending manually
        // res.json({
        //     hello:"world",
        // })
        res.status(200);
        return ({
            hello: "World"
        })
    }



    @Get('/account')
    redirectRoute(){
        return({
            account: " This is your acount "
        })
    }

    // redirecting 
    // @Get("/userInfo", )
    // @Redirect("/users/profile",302)
    // userInfo(){
    // }


    // request and Query parameters
    @Get('videos/:id')
    getVideos(@Param() params: VideoParams,@Query() query: QueryParams,@Headers() headers: Record<string,any>){
        console.log(params);
        console.log(query);
        console.log(headers);
        
        return 'Success'
    }

    @Post('/Videos')
    addVideo(@Body() requestData: VideoDTO){
        console.log(requestData.name,requestData.tag);
        
        return { success: true };
    }
    
}
 