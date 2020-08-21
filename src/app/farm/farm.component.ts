import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  data = {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "user_id": 1,
        "item_code": "111",
        "project": "TheProject",
        "location": "Here",
        "hectars": "69",
        "active": 1,
        "created_at": "2020-08-21T15:11:00.000000Z",
        "updated_at": "2020-08-21T15:11:00.000000Z"
      },
      {
        "id": 1,
        "user_id": 1,
        "item_code": "111",
        "project": "TheProject",
        "location": "Here",
        "hectars": "69",
        "active": 1,
        "created_at": "2020-08-21T15:11:00.000000Z",
        "updated_at": "2020-08-21T15:11:00.000000Z"
      }
    ],
    "first_page_url": "http://dev.bilinguar.systems/api/projects?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://dev.bilinguar.systems/api/projects?page=1",
    "next_page_url": null,
    "path": "http://dev.bilinguar.systems/api/projects",
    "per_page": 10,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }

  constructor() { }

  ngOnInit() {
    //load data here
  }

  getRandomImage(){
    return  `../../assets/farm/farm${Math.floor((Math.random() * 3) + 1).toString()}.jpeg`;
  }

}
