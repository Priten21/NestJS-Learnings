import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { firstValueFrom, map, Observable, timestamp } from "rxjs";



@Injectable()
export class CustomInterceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        console.log('Request Caught by Interceptors',context.switchToHttp().getRequest().originalUrl);


        const request = context.switchToHttp().getRequest();

        request.headers['accept-language'] = 'fr';
        
        // const response = await next.handle();
        // console.log(response);

        return next.handle().pipe(map(data => ({ data, timestamp: new Date() })))
    }
}