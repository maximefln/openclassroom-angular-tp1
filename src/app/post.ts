export class Post {

  private postTitle: string;
  private postContent: string;
  private postLoveIts: number;
  private postcreated_at: Date;

  constructor(
    postTitle: string,
    postContent: string,
  ) {
    this.postTitle = postTitle;
    this.postContent = postContent;
    this.postLoveIts = 0;
    this.postcreated_at = new Date();
  }
}
