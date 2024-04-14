import { Component, HostListener, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'maids';

  constructor(private el: ElementRef) { }
  @HostListener('window:scroll', ['$event'])
  
  ngOnInit(): void {
    this.myNav = this.el.nativeElement.querySelector('nav');
    this.navTransparent()
  }
  myScrollTop: number = 0;
  myNav: HTMLElement | undefined
  navTransparent() {
    this.myScrollTop = window.scrollY
    // if (this.trendingPosition < 0) {
    if (this.myScrollTop > 1) {
      console.log(this.myScrollTop);
      this.myNav?.classList.add('myScrollNav');
      this.myNav?.classList.remove('myNav');

    } else {
      this.myNav?.classList.remove('myScrollNav');
      this.myNav?.classList.add('myNav');
    }

  }
}
