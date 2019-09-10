export class Recipe {
  public name: string;
  public description: string;
  public imageSrc: string;

  constructor(name: string, desc: string, imageSrc: string) {
    this.name = name;
    this.description = desc;
    this.imageSrc = imageSrc;
  }
}
