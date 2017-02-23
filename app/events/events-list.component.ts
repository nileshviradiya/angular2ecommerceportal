import { Component } from '@angular/core'
@Component
({
    selector:'events-list',
    template: '<div><event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1" ></event-thumbnail></div>'

})
export class EventsListComponent
{
 event1={
     id:1,
     name: 'Angular Connect',
     date: '9/26/2036',
     time: '10:00am',
     price : 599.99,
     imageUrl : 'app/assets/images/angularconnect-shield.png',
     location: {
         address: '1057 DT',
         city: 'London',
         country: 'England'
     }
 }
 handleEventClicked(data)
 {
     console.log('receibed'+ data);
 }
}