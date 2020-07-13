import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  vendors = [];
  vendor = {}

  constructor(
    private service: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): any {
    this.service.list()
    .subscribe(dados => this.vendors = dados);
  }

  onView(id) {
    this.router.navigate(['/item/', id], { relativeTo: this.route });
  }

}
