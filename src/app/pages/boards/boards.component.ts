import { Component, OnInit } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {
  faClock,
  faStar,
  faChevronDown,
  faChevronUp,
  faHeart,
  faBorderAll,
  faUsers,
  faBars,
  faBox,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent implements OnInit {
  faTrello = faTrello;
  faClock = faClock;
  faStar = faStar;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faBars = faBars;
  faBox = faBox;
  faWaveSquare = faWaveSquare;

  constructor() {}

  ngOnInit(): void {}
}
