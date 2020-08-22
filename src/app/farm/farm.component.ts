import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  data ={}

  constructor(private projectService: ProjectService) { }

  async ngOnInit() {
    //load data here
    this.data = await this.projectService.getProject(1).toPromise();
  }

  getRandomImage(){
    return  `../../assets/farm/farm${Math.floor((Math.random() * 3) + 1).toString()}.jpeg`;
  }

}
