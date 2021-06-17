"use strict";
(function () {
	console.log("Hi");

    function Product(name, price, expirationDate, productid){

        productid = productid || Math.floor( 100000 * Math.random() )
        price = price.toFixed(2);
        this.name = name;
		this.price = price;
        this.expirationDate = expirationDate;
        this.productid = productid;
        
        this.getInfo = function () {
			return this.name.toUpperCase().charAt(0) + this.name.toUpperCase().slice(-1) + this.productid + ', ' + this.name + ', ' + this.price
		}

    }


    function ShoppingBag(){

        this.listOfProducts = [];

        this.addProduct = function(product) {
        var curentDate = new Date();
            if (curentDate <= expirationDate) {
            this.listOfProducts.push(product);
            }
        }   
       
		






        
    }


    //tsting

    var cokoBananica = new Product("Cokoladna Bananica", 15,"03/12/2028");
    var gumiBone = new Product("Gumene Bombone", 100.688888,"03/12/2020");
    console.log(cokoBananica);
    console.log(gumiBone);
    console.log(gumiBone.getInfo());

    var kupovina1 = new ShoppingBag()
    kupovina1.addProduct("cokoBananica");
    console.log(kupovina1)
    

})()