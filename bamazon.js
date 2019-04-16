var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;

    start();
});

function start() {

    inquirer.prompt([

        {
            type: "list",
            message: "What type of item would you like to purchase?",
            choices: ["Electronics", "Clothing", "Home_and_Garden", "Grocery", "Misc"],
            name: "QueryPurchase"
        },


    ]).then(function (answer) {
        if (answer.QueryPurchase === "Electronics") {
            showElectronics();
        } else if (answer.QueryPurchase === "Clothing") {
            showClothing();
        } else if (answer.QueryPurchase === "Home_and_Garden") {
            showHomeAndGarden();
        } else if (answer.QueryPurchase === "Grocery") {
            showGrocery();
        } else if (answer.QueryPurchase === "Misc") {
            showMisc();
        } else {
            connection.end();
        }
    })
}

function showElectronics() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        inquirer.prompt([{
                name: "item",
                type: "list",
                message: "What would you like to buy?",
                choices: ["DVD player", "Cd Player"]
            },
            {
                name: "quantity",
                type: "choices",
                message: "How many would you like to buy?"
            }
        ]).then(function (answer) {
            connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: answer.quantity
                }],
                function (error) {
                    if (error) throw error;;
                    console.log("Your purchase of " + answer.quantity + answer.item + " is on the way");
                    start();
                }
            )
        })
    });

    function showClothing() {
        connection.query("SELECT * FROM products", function (err, results) {
            if (err) throw err;
            inquirer.prompt([{
                    name: "item",
                    type: "list",
                    message: "What would you like to buy?",
                    choices: ["shirt", "pants"]
                },
                {
                    name: "quantity",
                    type: "choices",
                    message: "How many would you like to buy?"
                }
            ]).then(function (answer) {
                connection.query("UPDATE products SET ? WHERE ?", [{
                        stock_quantity: answer.quantity
                    }],
                    function (error) {
                        if (error) throw error;
                        console.log("Your purchase of " + answer.quantity + answer.item + " is on the way");
                        start();
                    }
                )
            })
        });
    }
        function showHome_and_Garden() {
            connection.query("SELECT * FROM products", function (err, results) {
                if (err) throw err;
                inquirer.prompt([{
                        name: "item",
                        type: "list",
                        message: "What would you like to buy?",
                        choices: ["Charcoal Grill", "Lawn Chair"]
                    },
                    {
                        name: "quantity",
                        type: "choices",
                        message: "How many would you like to buy?"
                    }
                ]).then(function (answer) {
                    connection.query("UPDATE products SET ? WHERE ?", [{
                            stock_quantity: answer.quantity
                        }],
                        function (error) {
                            if (error) throw error;
                            console.log("Your purchase of " + answer.quantity + answer.item + " is on the way");
                            start();
                        }
                    )
                })
            });
        }
            function showGrocery() {
                connection.query("SELECT * FROM products", function (err, results) {
                    if (err) throw err;
                    inquirer.prompt([{
                            name: "item",
                            type: "list",
                            message: "What would you like to buy?",
                            choices: ["Apples", "Oranges"]
                        },
                        {
                            name: "quantity",
                            type: "input",
                            message: "How many would you like to buy?"
                        }
                    ]).then(function (answer) {
                        connection.query("UPDATE products SET ? WHERE ?", [{
                                stock_quantity: answer.quantity
                            }],
                            function (error) {
                                if (error) throw error;
                                console.log("Your purchase of " + answer.quantity + answer.item + " is on the way");
                                start();
                            }
                        )
                    })
                });
            }
                function showMisc() {
                    connection.query("SELECT * FROM products", function (err, results) {
                        if (err) throw err;
                        inquirer.prompt([{
                                name: "item",
                                type: "list",
                                message: "What would you like to buy?",
                                choices: ["Gnome", "Christmas Elf"]
                            },
                            {
                                name: "quantity",
                                type: "input",
                                message: "How many would you like to buy?"

                            }
                        ]).then(function (answer) {
                            connection.query("UPDATE products SET ? WHERE ?", [{
                                    stock_quantity: answer.quantity
                                }],
                                function (error) {
                                    if (error) throw error;
                                    console.log("Your purchase of " + answer.quantity + answer.item + " is on the way");
                                    start();
                                }
                            )
                        })
                    })
                }};