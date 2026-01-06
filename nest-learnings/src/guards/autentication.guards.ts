import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { log } from "node:console";
import { env } from "node:process";
import { Observable } from "rxjs";

const SECRET_KEY = "HEBFISHBEVSKJKSVNONVSVPBISBFRIBVISBS"



@Injectable()
export class AuthenticationGuard implements CanActivate{
    constructor(private jwtService: JwtService){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

    try {

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization.split(' ')[1];
    console.log(token);
        
    if(!token){
        throw new UnauthorizedException();
    }


    request.user =  this.jwtService.verify(token);
    console.log(request.user);
    
    } catch (error){
        console.log(error);
        throw new UnauthorizedException();
        
    }
        
        return true
    }
}