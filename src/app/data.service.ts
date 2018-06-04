import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	private goals = new BehaviorSubject<any>(['goal1', 'goal2']);
	goal = this.goals.asObservable();

  	constructor() { }

  	changeGoal(goal) {
  		//this.goal.next(goal);
  	}
}
