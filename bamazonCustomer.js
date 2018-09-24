var mysql = require("mysql");
require("inquirer");
var readline = require('readline-sync');
var numeral = require('numeral');
var con;
var items;
var desiredQuantity;
var availableQuantity;
var itemCost;

function createConnection(){
    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 3306,
        database: "dbo"
    });
}

function init() {
    createConnection();
    con.connect(function (err) {
        if (err) throw err;
        console.log("");
        con.query("select * from products", function (err, result) {
            if (err) throw err;
            items = result;
            for (var i = 0; i < result.length; i++) {
                printItem(result[i])
            }
            con.end();
            var item_id = readline.question("please enter ID of product you'd like to buy: ");
            desiredQuantity = readline.question("how many units would you like: ");
            getitemquantity(item_id);
        });
    });
}

function printItem(item) {
    console.log("ID: " + item.item_id);
    console.log("Name: " + item.product_name);
    //console.log("Dept: " + item.department_name);
    console.log("Price: " + item.price);
    //console.log("Quantity: " + item.stock_quantity);
    console.log("");
}

function getitemquantity(item_id) {
    createConnection();
    con.connect(function (err) {
        if (err) throw err;
        console.log("");
        con.query("select stock_quantity from products where item_id = "+item_id, function (err, result) {
            if (err) throw err;
            availableQuantity = result[0].stock_quantity;
            console.log("Available: "+availableQuantity);
            con.end();
            if(availableQuantity < desiredQuantity){
                console.log("Insuficient quantity!")
            }
            else{
                updateItemQuantity(item_id);
            }
        });
    });
}

function updateItemQuantity(item_id){
    createConnection();
    con.connect(function (err) {
        if (err) throw err;
        console.log("");
        con.query("update products set stock_quantity = "+(availableQuantity - desiredQuantity)+" where item_id = "+item_id, function (err, result) {
            if (err) throw err;
            con.end();
            //look up item
            var price = 0;
            for(var i=0; i<items.length;i++){
                if(item_id == items[i].item_id){
                    price = items[i].price;
                }
            }
            console.log("You owe "+numeral(desiredQuantity*price).format('$0,0.00'));
        });
    });
}

init();