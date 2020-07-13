import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  vendor: any;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute

    ) { }

  ngOnInit(): void {





    this.route.params.subscribe(
      (params: any) => {
        const id = params.id;
        const curso$ = this.api.loadByID(id);
        curso$.subscribe(vendor => {
          this.vendor = vendor;
          console.log(this.vendor);

        });
      }
    );


  }

}
