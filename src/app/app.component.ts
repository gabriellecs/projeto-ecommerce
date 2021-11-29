import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,) { }

  title = 'gabistore-app'
  categoriaID: string = ''
  ngOnInit(): void {
    this.categoriaID = this.route.snapshot.paramMap.get('id') || ''
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((e: any) => {

      if (e instanceof NavigationStart) {
        let arr = e.url.split('/')
        this.categoriaID = arr[2]
      }
    })
  }

}

