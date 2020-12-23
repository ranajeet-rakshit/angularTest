import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
        <input type='text' (input)='onUserInput($event)' [value]="name"/>
        <p>Hello {{name}}!!</p>
        <p>I'm the User Component</p>
    `
})
export class UserComponent{
    @Input() name;
    @Output() nameChanged = new EventEmitter<String>();

    onUserInput(event){
        this.nameChanged.emit(event.target.value);
    }
}