import { Component, Output, EventEmitter} from '@angular/core';



@Component ({
    selector : 'app-header',
    templateUrl: '/header.component.html',
    styleUrls: ['/header.component.css']
})


export class HeaderComponent {
    collapsed = true;

    @Output () featureSelected = new EventEmitter <number> ();


    onSelect(n:number){
        this.featureSelected.emit(n);
    }
}