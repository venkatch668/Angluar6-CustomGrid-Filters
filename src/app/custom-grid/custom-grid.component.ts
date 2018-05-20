import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.scss']
})
export class CustomGridComponent implements OnInit {
  tableGrid:any;
  tableHeading:any;
  tableFilters:any=[];
  defaultDropdown:any={};
  tableFilterSelected:any=[];
  filterOptions:any;
  result:any;
  copyData:any;
  theading:any;
  theadingx:any;
  constructor() { }

  ngOnInit() {

    this.tableGrid = [
            {
              'engagement': 'ramesh',
              'gro': 'Open',
              'topic': 'Close',
              'sector':'retail',
              'stc':'review',
              'mark':'us'
            },
            {
              'engagement': 'raghu',
              'gro': 'Open1',
              'topic': 'Close1',
              'sector':'retail1',
              'stc':'review1',
              'mark':'us1'
            },
            {
              'engagement': 'raghu',
              'gro': 'Open3',
              'topic': 'Close3',
              'sector':'retail3',
              'stc':'review3',
              'mark':'us3'
            },
            {
              'engagement': 'rajesh',
              'gro': 'Open2',
              'topic': 'Close2',
              'sector':'retail2',
              'stc':'review2',
              'mark':'us2'
            },
            {
              'engagement': 'test',
              'gro': 'Open1',
              'topic': 'Close1',
              'sector':'retail1',
              'stc':'review1',
              'mark':'us1'
            }
          ];
          this.copyData=this.tableGrid;
          this.tableHeading = Object.keys(this.tableGrid[0]);  
        
          console.log(this.tableFilters);
          //  this.tableFilterSelected={
          //    'attr':'',
          //    'val':[]
          //  }
          this.setDefaultDropdown();

    }

  getUniqueColumnValues(arr,prop){
      return arr.map(function(e) { return e[prop]; }).filter(function(e,i,a){
          return i === a.indexOf(e);
      });
  }
  setDefaultDropdown(){
    for(var i in this.tableHeading){
      this.defaultDropdown[this.tableHeading[i]]={
        key:'',
        values:[],
        dropSelected:[] 
      };
    }

    for(let y:any=0;y<this.tableHeading.length;y++){
      this.defaultDropdown[this.tableHeading[y]].key=this.tableHeading[y];
      this.defaultDropdown[this.tableHeading[y]].values= this.getUniqueColumnValues(this.tableGrid,this.tableHeading[y]);
//      this.tableFilters.push({'heading': this.tableHeading[i],'values': uniqueColumns});
    }
    console.log(this.defaultDropdown);
  }
  getSelected(heading){
    this.theadingx = this.defaultDropdown[heading];
    console.log(this.theadingx);
  }

  getVal(heading,selection){
       var x= this.defaultDropdown[heading].dropSelected.indexOf(selection);  
    console.log("----"+heading+'-'+selection);
    if(x<0){
     this.defaultDropdown[heading].dropSelected.push(selection);
    }else{
      this.defaultDropdown[heading].dropSelected.splice(x,1);
    }
    console.log(this.defaultDropdown);
    this.fitlerAssingments(this.defaultDropdown[heading]);
  }  
  getClear(){
    this.copyData= this.tableGrid;
    this.setDefaultDropdown();
  }
    fitlerAssingments(data) {
      let contactsList = this.tableGrid;
      this.filterOptions = this.filterOptions || {};
      this.filterOptions[data.key] = data.dropSelected;
      for (const key in this.filterOptions) {
        if(data.dropSelected!=[]){
          contactsList = this.getFilterData(contactsList, key, this.filterOptions[key]);
        }
      }
      this.copyData = contactsList;
      console.log(this.result);
    }

    getFilterData(list, column, filterData) {
      let result = list;
      if (filterData && filterData.length) {
          result = list.filter((item) => {
              return filterData.indexOf(item[column]) > -1;
          });
      }
      return result;
  }
}