import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { detail } from './app.model';


@Injectable()
export class AppService{
    
     private url = '/push';
    constructor(private http:Http){
    }
    upload(data:detail) : Observable<any>{
         var result=this.http.post(this.url,{data:data})
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
         return result;

        
     }

    
}