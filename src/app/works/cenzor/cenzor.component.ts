import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  words = [];
  badWords = ' ';
  classValidation = false;
  cenzorValidation = false;
  cenzorText: string;

  constructor() { }

  ngOnInit(): void {
  }
  printBadWords():void{
    this.badWords += ' ' + document.forms[0].text.value;
  }
  saveWords(): void{
    this.words.push(document.forms[0].text.value);
  }
  clearMainText():void{
    document.forms[0].text.value = "";
  }
  clearTextArea():void{
    document.forms[0].textarea.value = "";
    this.badWords = ' ';
  }
  cenzor():void{
    this.cenzorText = document.forms[0].textarea.value;
    for( let i = 0; i < this.words.length; i++){
      let count = '*';
      for(let j = 1; j < this.words[i].length; j++){
        count +='*'
      }
      this.cenzorText = this.cenzorText.replace(new RegExp(this.words[i],"g"), count);
  }
    document.forms[0].textarea.value = this.cenzorText; 
  }

  isInValidClass(): void{
    if ( document.forms[0].text.value !== '' ){
      this.classValidation = false;
      document.forms[0].text.placeholder = "type here...";
      this.saveWords();
      this.printBadWords();
      this.clearMainText();
    } 
    else{
      this.classValidation = true;
      document.forms[0].text.placeholder = "Please write words!";
    } 
  } 

  isInValidCenzor(): void{
    if ( document.forms[0].textarea.value !== '' ){
      this.cenzorValidation = false;
      document.forms[0].textarea.placeholder = "Please WRITE A WORD ...";
      this.cenzor();
    } 
    else{
      this.cenzorValidation = true;
      document.forms[0].textarea.placeholder = "Please write words!";
    } 
  }

}
