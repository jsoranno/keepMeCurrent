var twitterAuth = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var fs = require('fs');
// var twitterUser = new twitter ({
//     consumer_key: keys.twitterKeys.consumer_key,
//     consumer_secret: keys.twitterKeys.consumer_secret,
//     access_token_key: keys.twitterKeys.access_token_key,
//     access_token_secret: keys.twitterKeys.access_token_secret
// })
switch (process.argv[2]) {
    case 'movie-this':
        var omdb = require('omdb');
        var movieInput = "";
        for (i=3; i< process.argv.length; i++) {
            movieInput += process.argv[i] + ' ';
        }
        movieInput = movieInput.trim();
        if (!process.argv[3]){
            movieInput = "Mr.Nobody";
            return;
        }

        omdb.get({ title: movieInput }, true, function(err, movie){
            if(err) {
                return console.error(err);
            }
            if(!movie) {
                return console.log("Sorry, I couldn't find your movie!");
            }
        console.log("==============================================");
        console.log("Here is your movie info!" + '\n');
        console.log('Title: %s ', movie.title + '\n');
        console.log('Year: %d', movie.year + '\n');
        console.log('IMDB Rating: %s', movie.imdb.rating + '\n');
        console.log('Country Produced In: %s', movie.countries[0] + '\n');
        console.log('Actors: %s', movie.actors + '\n');
        console.log('Plot: %s', movie.plot);
        console.log("==============================================");
        });
        break;
}














//When I want to update and add inputs.... revisit
// var operator = process.argv[2];
//var inquirer = require('inquirer');
// console.log("==============================================");
// console.log("");
// console.log("Hello there, I'm LIRI");
// console.log("Please tell me what you're looking for.");
// console.log("");
// console.log("==============================================");
//
//
// inquirer.prompt([
//
//     {
//         type: "confirm",
//         name: "movieQ",
//         message: "Would you like to search for a movie?"
//     },
//
//     {
//         type: "input",
//         name: "songQ",
//         message: "Would you like to search for a song?"
//     },
//
//     {
//         type: "input",
//         name: "twitterQ",
//         message: "Would you like to read some tweets?"
//     }
//         .then(function (user) {
//
//             if (user.confirm && user.name == "movieQ" ){
//                 inquirer.prompt([
//                     {
//                         type: "input",
//                         message: "Please tell me what movie you'd like to search for."
//                         name: "movie"
//                     }
//                 ]).then(function (user) {
//                     request('http://www.omdbapi.com/?t='+ user.name +'&y=&plot=short&r=json', function (error, response, body) {
//                         if (!error && response.statusCode == 200) {
//                             console.log("Here is your movie information: ");
//                             console.log(body);
//                 })
//
//                 // Then console log the result and stringify it.
//                 // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
//                 // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
//                 console.log(JSON.stringify(data, null, 2));
//             });
//         });


//need to change Space Jam to argument
// request('http://www.omdbapi.com/?t='+ omdb +'&y=&plot=short&r=json', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log("Here is your movie information: ");
//         console.log(body);
//     }
// });

