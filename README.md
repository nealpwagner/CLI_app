# CLI_app

I created an Amazon-like storefront app, called Bamazon, using MySQL, the MySQL NPM Package.

This app takes in orders from customers and depletes from the store's total supplies.

The app first displays a list of all of the available products ID's, product name, and product price. 

<img src="https://user-images.githubusercontent.com/40208124/46054710-7d464a80-c116-11e8-9fe0-37c1225601b9.png" width="90%"></img>

The app asks the following things from the user.

1.  Product ID

2.  The amount the user wants to purchase 

<img src="https://user-images.githubusercontent.com/40208124/46054712-7fa8a480-c116-11e8-9f7c-1aeabb952926.png" width="90%"></img>

After user inputs quantity, if there is enough in inventory it will give you a price for your order.  

In the event there is not enough it will let you know there is insufficient inventory. 

<img src="https://user-images.githubusercontent.com/40208124/46054715-846d5880-c116-11e8-9ad8-edc4e70f5579.png" width="90%"></img> 

It must be ran in the command line.

Type in node BamazonCustomer.js to start the app.

These are the npm packages I used and are needed to run the app

    fs package in node
    mysql

to install these npm packages run the following command.

    npm install 

if that does not work run these commands one at a time.

    npm install inquire
    npm install mysql
