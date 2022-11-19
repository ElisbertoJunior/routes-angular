import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router
  ) {

    //recuperando id
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

    //recuperando queryParams
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )



  }

  ngOnInit(): void {
    //setInterval(() => {
    //  this.navegador.navigate(['/'])
    //}, 5000)
  }

}
