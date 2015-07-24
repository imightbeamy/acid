var Promise = require('promise');

var auth = require('./auth');
var twitter = require('./twitter');


function handle(method, user_id) {
    return new Promise(function(resolve, reject) {
        switch (method) {
            default:
                auth.getAccessToken().then(function(token) {
                    resolve(twitter.getTweets(token));
                });
        }
    });
}

exports.handle = handle;
