import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Roles, ROLES_KEY } from "roles.decorators"
import { Observable } from "rxjs";




@Injectable()
export class AuthorizationGuard implements CanActivate {
    constructor(private reflector: Reflector){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        
        const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [context.getClass(),context.getHandler()])
        console.log("The required roles are: ", requiredRoles);
        
        

        console.log('Inside Authorization Guard');
        return true;
    }
}