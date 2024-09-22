import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

export class authGuard implements CanActivate {
  canActivate(): Promise<boolean> | Observable<boolean> | boolean {}
}
