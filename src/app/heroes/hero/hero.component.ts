import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return 'Hola mundo';
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 20;
  }
  reset(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
