var twitterAuth = require('./keys.js');
var inquirer = require('inquirer');
var request = require('request');
var operator = process.argv[2];
console.log("==============================================");
console.log("");
console.log("Hello there, I'm LIRI");
console.log("Please tell me what you're looking for.");
console.log("");
console.log("==============================================");


inquirer.prompt([

    {
        type: "confirm",
        name: "movieQ",
        message: "Would you like to search for a movie?"
    },

    {
        type: "input",
        name: "songQ",
        message: "Would you like to search for a song?"
    },

    {
        type: "input",
        name: "twitterQ",
        message: "Would you like to read some tweets?"
    }
        .then(function (user) {

            if (user.confirm && user.name == "movieQ" ){
                inquirer.prompt([
                    {
                        type: "input",
                        message: "Please tell me what movie you'd like to search for."
                        name: "movie"
                    }
                ]).then(function (user) {
                    request('http://www.omdbapi.com/?t='+ user.name +'&y=&plot=short&r=json', function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                            console.log("Here is your movie information: ");
                            console.log(body);
                })

                // Then console log the result and stringify it.
                // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
                // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
                console.log(JSON.stringify(data, null, 2));
            });
        });


//need to change Space Jam to argument
// request('http://www.omdbapi.com/?t='+ omdb +'&y=&plot=short&r=json', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log("Here is your movie information: ");
//         console.log(body);
//     }
// });

