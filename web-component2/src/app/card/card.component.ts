import { Component, OnInit, Input, Injector } from '@angular/core';

@Component({
  selector: 'card-tag',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() imagePath="";
  @Input() title="John Doe";
  @Input()  text="Some Text";
  @Input()  btnText="Show values";


  constructor(injector : Injector) { }

  ngOnInit(): void {
  }

}
