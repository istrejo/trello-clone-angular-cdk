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

  items: any[] = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub Item 1.1',
        },

        {
          label: 'Sub Item 1.2',
        },
        {
          label: 'Sub Item 1.3',
        },
      ],
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub Item 2.1',
        },
        {
          label: 'Sub Item 2.2',
        },
      ],
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub Item 3.1',
        },
        {
          label: 'Sub Item 3.2',
        },
        {
          label: 'Sub Item 3.3',
        },
        {
          label: 'Sub Item 3.4',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
