import { Component, OnInit, Input, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  @Input() user: string;
  chatArr: object[] = [];
  constructor(private changeDetection: ChangeDetectorRef) { }
  chatBot1: boolean = false;
  typing: boolean = true;
  message: string = '';
  ngOnInit(): void {

  }

  public toggleBot(){
    console.log('In chatBot')
    this.chatBot1 = !this.chatBot1
    const filter = this.chatArr.filter(obj => obj);
    setTimeout(() => {
      this.typing = false;
      this.chatArr = [...filter, {name:'bot',msg: 'My Name is Lisa, I am LPL Interactive Service Assistant'}];
    },2000)
    if(!this.chatBot1){
      this.chatArr = [];
    }
  }

  public pushUserMsg(event){
    let userMsg = event;
    this.typing = true;
    if(userMsg.toLowerCase() == 'hi'){
      const filter = this.chatArr.filter(obj => obj);
      this.chatArr = [...filter, {name:'you', msg: userMsg}]
      setTimeout(() => {
        this.typing = false;
        const filter1 = this.chatArr.filter(obj => obj);
        this.chatArr = [...filter1,{name:'bot', msg: `${"Hello " + this.user}`}];
      }, 3000)
      console.log('1:' , this.chatArr)
      //this.changeDetection.detectChanges();
    } else if(userMsg.toLowerCase() == 'how are you'){
      const filter = this.chatArr.filter(obj => obj);
      this.chatArr = [...filter,{name:'you', msg: userMsg}];
      setTimeout(() => {
        this.typing = false;
        const filter1 = this.chatArr.filter(obj => obj);
        this.chatArr = [...filter1,{name:'bot', msg: 'I am Fine!'}];
      }, 3000)
      console.log('2:' , this.chatArr)
    } else {
      const filter = this.chatArr.filter(obj => obj);
      this.chatArr = [...filter,{name:'you', msg: userMsg}];
      setTimeout(() => {
        this.typing = false;
        const filter1 = this.chatArr.filter(obj => obj);
        this.chatArr = [...filter1,{name:'bot', msg: 'Start a ICE Breaker by saying How are you'}];
      }, 3000)
      console.log('3:' , this.chatArr)
    }

    this.message = '';
  }

  ngOnDestroy() {
    this.chatArr = [];
  }

}
