import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  books = null;
  books1 = [
    {
      'bookid': 101,
      'bookname':'PonniyinSelvan',
      'author':'Nathiya',
      'bookstatus': 'available',
      'category':'history'
      
  },
  {
    'bookid': 102,
    'bookname':'Ponniyin -Selvan',
    'author':'Nathiya',
    'bookstatus': 'available',
    'category':'history'
  
},
{
  'bookid': 103,
  'bookname':'PonniyinSelvan1',
  'author':'Nathiya',
  'bookstatus': 'Notavailable',
  'category':'history'
 
},
{
  'bookid': 104,
  'bookname':'PonniyinSelvan2',
  'author':'Nathiya',
  'bookstatus': 'available',
  'category':'history'

},


  ]

}
