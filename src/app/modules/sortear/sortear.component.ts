import {Component, OnInit} from '@angular/core';
import {SortearService} from '../../services/sortear.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sortear',
  templateUrl: './sortear.component.html',
  styleUrls: ['./sortear.component.scss']
})
export class SortearComponent implements OnInit {

  titulo: string;

  constructor(private sortearService: SortearService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

  }

}
