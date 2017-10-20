import { Component, OnInit } from '@angular/core';

import { AgendaService } from './services/agenda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	private agendaObj: any[] = [];
	private agenda: any[] = [];
	private dates: string[] = [];
  
  constructor(private agendaService: AgendaService) { };

	ngOnInit() {
		this.getAgenda();
	}  

  private getAgenda(): void {
    this.agendaService
        .getAgenda()
        .subscribe(data => {     
        						let response = JSON.parse(data._body);
        						//console.log(response); 

        						this.dates = response['headers'].date.options;        					                                                         
                    console.log(this.dates);                                                         

										this.agendaObj = response.values;
										//console.log(this.agendaObj);  

                    let this_ = this;
										Object.keys(this.agendaObj).map(function(val, key) {
										  this_.agenda.push({
										  	date: +this_.agendaObj[val].date,
										  	start: this_.agendaObj[val].start,
										  	end: this_.agendaObj[val].end,										  	
										  	title: this_.agendaObj[val].title,
										  	place: this_.agendaObj[val].place,
										  	order: +this_.agendaObj[val].order
										  });
										});  
										console.log(this.agenda)                                                                     
                  }, 
                  err => {
                    console.log('err')         
                  });    
  };   

}
