import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private navegador: Router) {
    //http://localhost:4200/portfolio/{1}
    this.activeRoute.firstChild?.params.subscribe((res) => console.log(res));

    //http://localhost:4200/portfolio/1?{name=judenilson&token=12345}
    this.activeRoute.firstChild?.queryParams.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    //depois de 50s ele executa a ação de voltar p HOME, poderia ser qualquer outra ação
    setInterval(() => {
      this.navegador.navigate(['/']);
    }, 50000);
  }
}
