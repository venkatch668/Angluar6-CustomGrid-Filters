import { Component, OnInit } from '@angular/core';
import {  Ng2TreeSettings, NodeEvent, RenamableNode, TreeModel} from 'ng2-tree';
import { _ } from 'underscore';
import { HelperServiceService} from './helper-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  records:any;
  private _fruits = ["Apple", "Banana", "Grapefruit"];
  states:any;
  public testData = [{
    'participant': {
      'name':'tony smith',
      'language':'english',
      'country':'ireland'
    },
    'gameofchoice':{
      'gamename':'chess',
      'bought':true
    },
    'performance':{
      'bankbalance':3000,
      'rating':5
    }
  },
  {
    'participant': {
      'name':'tony smith',
      'language':'english',
      'country':'ireland'
    },
    'gameofchoice':{
      'gamename':'chess',
      'bought':true
    },
    'performance':{
      'bankbalance':3000,
      'rating':5
    }
  },{
    'participant': {
      'name':'tony smith',
      'language':'english',
      'country':'ireland'
    },
    'gameofchoice':{
      'gamename':'chess',
      'bought':true
    },
    'performance':{
      'bankbalance':3000,
      'rating':5
    }
  },
  {
    'participant': {
      'name':'tony smith',
      'language':'english',
      'country':'ireland'
    },
    'gameofchoice':{
      'gamename':'chess',
      'bought':true
    },
    'performance':{
      'bankbalance':3000,
      'rating':5
    }
  }
  ];
  public tree: TreeModel;
  // private _fruits = ["Apple", "Banana", "Grapefruit"];
  
  constructor(private _helper: HelperServiceService){
    
    this.records={
      value: 'Programming languages by programming paradigm',
      children: [
        {
          value: 'participant',
          children: [{ value: 'name'}, 
          { value: 'language'},
           { value: 'country'}]
        },
        {
          value: 'game of choice',
          children: [{ value: 'game name'}, 
          { value: 'bought'}]
        },
        {
          value: 'performance',
          children: [{ value: 'bank balance'}, 
          { value: 'rating'}]
        },
      ]
    }
    this.tree = this.records;
    this.states={
      'name':0,
      'language':0,
      'country':0,
      'gamename':0,
      'bought':0,
      'bankbalance':0,
      'rating':0
    }
  }
 

  public ngOnInit() {
    this._helper.each(this._fruits, console.log);
  }
  public logEvent(e: NodeEvent): void {
    console.log(e);
  }
  handleRemoved(event){
    console.log(event);
  }
  handleSelected(event){
    var j=0;
    var selectedvalue = event.node.value.replace(/\s/g, '');
    if(this.states[selectedvalue]==1){
      this.states[selectedvalue]=0;
    }else{
      this.states[selectedvalue]=1;
    }

    // for(var i in this.states){
    //     if(selectedvalue===i+''){
    //       this.states[selectedvalue]=1;
    //     }  
    //   }
    //   j++;
    // }
    // if(x<0){
    //   this.state.push(event.node.value+'');  
    // }
    // else{
    //   this.state.splice(x,1);
    // }
    console.log(this.states);
  }

  handleRenamed(event){
    console.log(event);
  }

  handleCreated(event){
    console.log(event);
  }  
  handleMoved(event){
    console.log(event);
  }
  handleCollapsed(event){
    console.log(event);
  }
  handleExpanded(event){
    console.log(event);
  }
  handleNextLevel(event){
    console.log(event);
  }
  // public disabledCheckboxesSettings: Ng2TreeSettings = {
  //   rightMenu: false,
  //   showCheckboxes: false,
  //   enableCheckboxes: true
  // };

}
