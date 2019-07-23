import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  p = 1;
  allRecords = [
  { CategoryID: 1, CategoryName: "Beverages", Description: "Coffees, teas", selected: false },
  { CategoryID: 2, CategoryName: "Condiments", Description: "Sweet and savory sauces", selected: false },
  { CategoryID: 3, CategoryName: "Confections", Description: "Desserts and candies", selected: false },
  { CategoryID: 4, CategoryName: "Cheeses", Description: "Smetana, Quark and Cheddar Cheese", selected: false },
  { CategoryID: 5, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal", selected: false },
  { CategoryID: 6, CategoryName: "Beverages", Description: "Beers, and ales", selected: false },
  { CategoryID: 7, CategoryName: "Condiments", Description: "Selishes, spreads, and seasonings", selected: false },
  { CategoryID: 8, CategoryName: "Confections", Description: "Sweet breads", selected: false },
  { CategoryID: 9, CategoryName: "Cheeses", Description: "Cheese Burger", selected: false },
  { CategoryID: 10, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal", selected: false },
  { CategoryID: 11, CategoryName: "Gdsdeverages", Description: "Coffees, teas", selected: false },
  { CategoryID: 12, CategoryName: "Zondiments", Description: "Sweet and savory sauces", selected: false },
  { CategoryID: 13, CategoryName: "Yonfections", Description: "Desserts and candies", selected: false },
  { CategoryID: 14, CategoryName: "Pheeses", Description: "Smetana, Quark and Cheddar Cheese", selected: false },
  { CategoryID: 15, CategoryName: "Fins/Rreals", Description: "Breads, crackers, pasta, and cereal", selected: false },
  { CategoryID: 16, CategoryName: "Tererages", Description: "Beers, and ales", selected: false },
  { CategoryID: 17, CategoryName: "Vondiments", Description: "Selishes, spreads, and seasonings", selected: false },
  { CategoryID: 18, CategoryName: "Nbnonfections", Description: "Sweet breads", selected: false },
  { CategoryID: 19, CategoryName: "Threeses", Description: "Cheese Burger", selected: false },
  { CategoryID: 20, CategoryName: "Grainers/Ceresls", Description: "Breads, crackers, pasta, and cereal", selected: false },
  { CategoryID: 1, CategoryName: "Beverages", Description: "Coffees, teas", selected: false },
  { CategoryID: 2, CategoryName: "Condiments", Description: "Sweet and savory sauces", selected: false },
  { CategoryID: 3, CategoryName: "Confections", Description: "Desserts and candies", selected: false },
  { CategoryID: 4, CategoryName: "Cheeses", Description: "Smetana, Quark and Cheddar Cheese", selected: false },
  { CategoryID: 5, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal", selected: false },
  { CategoryID: 6, CategoryName: "Beverages", Description: "Beers, and ales", selected: false },
  { CategoryID: 7, CategoryName: "Condiments", Description: "Selishes, spreads, and seasonings", selected: false },
  { CategoryID: 8, CategoryName: "Confections", Description: "Sweet breads", selected: false },
  { CategoryID: 9, CategoryName: "Cheeses", Description: "Cheese Burger", selected: false },
  { CategoryID: 10, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal", selected: false },
  { CategoryID: 11, CategoryName: "Gdsdeverages", Description: "Coffees, teas", selected: false },
  { CategoryID: 12, CategoryName: "Zondiments", Description: "Sweet and savory sauces", selected: false },
  { CategoryID: 13, CategoryName: "Yonfections", Description: "Desserts and candies", selected: false },
  { CategoryID: 14, CategoryName: "Pheeses", Description: "Smetana, Quark and Cheddar Cheese", selected: false },
  { CategoryID: 15, CategoryName: "Fins/Rreals", Description: "Breads, crackers, pasta, and cereal", selected: false },
  { CategoryID: 16, CategoryName: "Tererages", Description: "Beers, and ales", selected: false },
  { CategoryID: 17, CategoryName: "Vondiments", Description: "Selishes, spreads, and seasonings", selected: false },
  { CategoryID: 18, CategoryName: "Nbnonfections", Description: "Sweet breads", selected: false },
  { CategoryID: 19, CategoryName: "Threeses", Description: "Cheese Burger", selected: false },
  { CategoryID: 20, CategoryName: "Grainers/Ceresls", Description: "Breads, crackers, pasta, and cereal", selected: false }
];

  constructor() { }

  ngOnInit() {
  }

  

}
