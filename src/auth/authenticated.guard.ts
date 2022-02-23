import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const http = context.switchToHttp();
    // console.log('http:', http);
    const request = http.getRequest();
    console.log(Object.keys(request));
    //console.log(request.client);
    return true;
    //return validateRequest(request);
  }
}
