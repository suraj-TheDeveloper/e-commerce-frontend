import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-landing',
  imports: [CommonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

  constructor(private router: Router) {
    console.log("constructor")
  }

  categories = [
    { name: 'Electronics', image: 'assets/images/electronics.jpg' },
    { name: 'Fashion', image: 'assets/images/fashion.jpg' },
    { name: 'Home', image: 'assets/images/home.jpg' },
    { name: 'Sports', image: 'assets/images/sports.jpg' }
  ];

  products = [
    {
      name: 'Smartphone',
      price: 19999,
      image: 'assets/images/product1.jpg'
    },
    {
      name: 'Headphones',
      price: 2999,
      image: 'assets/images/product2.jpg'
    },
    {
      name: 'Shoes',
      price: 1499,
      image: 'assets/images/product3.jpg'
    },
    {
      name: 'Watch',
      price: 3999,
      image: 'assets/images/product4.jpg'
    }
  ];

  registerRedirect(url: any) {
    console.log("url", url)
    this.router.navigate([url])
  }

}
