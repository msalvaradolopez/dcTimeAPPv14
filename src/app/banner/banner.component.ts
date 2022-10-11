import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  bannerListAux: any[] = [];
  bannerList: any[] = [];

  constructor(private _servicios: ServiciosService) { }

  ngOnInit(): void {
    // setTimeout(()=> this.bannerRun(), 5000);

    this._servicios.wsGeneral("getBanners", {claUN: "ALT"})
    .subscribe(x => {
      this.bannerListAux = x;

      if(this.bannerListAux) {
        let addLinea: boolean = false;
        let textoLargo = this.bannerListAux.filter(x => x.texto.length > 100);
        this.bannerListAux.forEach(renglon => {
            this.bannerList.push(renglon.texto);
            this.bannerList.push("");
             if(textoLargo.length > 0) {
              this.bannerList.push("");
              this.bannerList.push("");
             }
              
        });
      }
    }
    , error => {

    }, () => setTimeout(()=> this.bannerRun(), 5000));
  }

  bannerRun () {
    const root = document.documentElement;
    const marqueeElementsDisplayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-elements-displayed"));
    const marqueeContent = document.querySelector("ul.marquee-content");

    let valor: any = marqueeContent?.children.length.toString();
    root.style.setProperty("--marquee-elements", valor);

    for(let i=0; i<marqueeElementsDisplayed; i++) {
      marqueeContent?.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }

}
