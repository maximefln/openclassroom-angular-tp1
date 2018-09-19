import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postcreated_at;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt(): void {
    this.postLoveIts++;
  }

  onDontLoveIt() {
    this.postLoveIts--;
  }
}
