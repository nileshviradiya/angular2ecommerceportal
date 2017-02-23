import { Component,Input,Output, EventEmitter } from '@angular/core'

@Component
({
    selector: 'event-thumbnail',
    template: '<div><h1>Upcoming Angular 2 Events </h1><div class="well hoverwell thumbnail"><h2>{{event.name}}</h2>'+
    '<div> Date: {{event.date}}</div><div> Time: {{event.time}}</div><div> Price: \${{event.price}}</div>'+
    '<div> <span>Location : {{event.location.address}} </span> <span>&nbsp;</span><span>{{event.location.city}}, {{event.location.country}} </span> </div> </div>' +
    '<button class="btn btn-primary" (click)="handleClickMe()">click me!</button> </div>'
})
export class EventsThumbnailComponent
{
   @Input() event:any
   @Output() eventClick = new EventEmitter()
   handleClickMe()
   {
       this.eventClick.emit('foo');
   }
}