import {Component, Input, OnInit} from '@angular/core';
import {BsComponentRef} from 'ngx-bootstrap';
import {MainComponent} from '../main/main.component';
import {Router} from '@angular/router';
import {Observer} from '../../../../node_modules/rxjs';



@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.less']
})
export class SetupComponent implements OnInit {
  @Input() username: string;
  private userList: string[] = [];

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  completeSetup() {
    this.userList.push(this.username);
    this.route.navigateByUrl('main');
  }
}
