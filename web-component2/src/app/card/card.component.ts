import { Component, OnInit, Input, Injector } from '@angular/core';

@Component({
  selector: 'card-tag',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() imagePath:string="assets/images/ProfileImage.png";
  @Input() title="John Doe";
  @Input()  text="Some Text";
  @Input()  btnText="Show values";
  //D:\Repo_WebComponent\Repo_WebComponent\web-component2\src\assets\images\ProfileImage.png
  
  @Input() imgFileName:string = "ProfileImage.png";

  public profiles=
    {
      "profileTitle":"",
      "profileText":""

    };
  

  constructor(injector : Injector) { }

  ngOnInit(): void {
  }

  formSubmitted = false;
  onSubmit() {
     // this.title = this.profiles.profileTitle;
     // this.text = this.profiles.profileText;
      this.onAdd(this.profiles.profileTitle,this.profiles.profileText);

     this.formSubmitted = true;
  }
  public proArray:any=[];
  
  onAdd(t:string,m:string) {
    this.proArray.push(new Profile(t,m));
    console.log(this.proArray);
  }

  onRemove(){
    //this.proArray.pop();
  }

}

export class Profile {
  constructor(
    public profileTitle: string,
    public profileMsg: string) { }
}
