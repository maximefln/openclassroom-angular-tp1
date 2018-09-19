import {Component, Input} from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon blog';

  @Input() posts = [
    new Post('Mon premier post', 'Intellectum est enim mihi quidem in multis, ' +
      'et maxime in me ipso, sed paulo ante in omnibus, cum M. ' +
      'Marcellum senatui reique publicae concessisti, commemoratis' +
      ' praesertim offensionibus, te auctoritatem ...'),
    new Post('Mon deuxième post', 'Intellectum est enim mihi quidem in multis, ' +
      'et maxime in me ipso, sed paulo ante in omnibus, cum M. ' +
      'Marcellum senatui reique publicae concessisti, commemoratis' +
      ' praesertim offensionibus, te auctoritatem ...'),
    new Post('Mon troisème post', 'Intellectum est enim mihi quidem in multis, ' +
      'et maxime in me ipso, sed paulo ante in omnibus, cum M. ' +
      'Marcellum senatui reique publicae concessisti, commemoratis' +
      ' praesertim offensionibus, te auctoritatem ...')
  ];

  constructor() {}

  getPosts() {
    return this.posts;
  }
}
