import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, of, take } from 'rxjs';
import {Observable,Subscription} from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class implements OnInit {
  // private _myDestroy: Subscription = new Subscription();
  // public get myDestroy(): Subscription {
  //   return this._myDestroy;
  // }
  // public set myDestroy(value: Subscription) {
  //   this._myDestroy = value;
  // }
  // public get myDestroy(): Subscription {
  //   return this._myDestroy;
  // }
  // public set myDestroy(value: Subscription) {
  //   this._myDestroy = value;
  // }
  constructor() { }

  ngOnInit(): void {
// const of$ = of(1,2,3,4,5,6,7,8,9,10)
// .pipe(filter(f => f % 2 == 0), map(m => m*100)
// );
// of$.subscribe(sub => {
//   console.log(sub)
}
  // const numbers$ = interval(1000).pipe(take(20));

  // this.myDestroy = numbers$.subscribe( sub =>  {
  //   console.log(sub);
  // });
  // }
  // ngOnDestroy(): void {
  //   this.myDestroy = unsubscribe();
  // }

//     const myobs$ = new Observable(obs=> {
//       console.log("Start Observable");
//       obs.next(' 100');
//       obs.next(' 200');
//       obs.complete()
//       // obs.error(" Not Wor");
//       setTimeout(() => {
//         obs.next(' 400');
//       } ,1000);
      
//       console.log("End Observable");
//     });
//     this.myDestroy = myobs$.subscribe({ 
//       next: (sub) => {
//         console.log('First' + sub);
//       },
//       error: (error) => {
//         console.log("Error" + error)
//       },
//       complete: () =>{
//         console.log("Completed");
//       }
//     }
      
      
      
//       );
//       this.myDestroy.unsubscribe();
     
//   }



