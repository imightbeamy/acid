var https = require('https');
var Promise = require('promise');

var api_hostname = 'api.twitter.com';

function callApi(api_path, token) {
    var options = {
        hostname: api_hostname,
        path: api_path + "?screen_name=" + process.env.TWITTER_SCREEN_NAME,
        headers: {
            Authorization: 'Bearer ' + token
        }
    };

    return new Promise(function(resolve, reject) {
        https.get(options, function(result){
            var buffer = '';
            result.setEncoding('utf8');

            result.on('data', function(data){
                buffer += data;
            });

            result.on('end', function(){
                resolve(buffer);
            });
        });
    });
}

function getTweets(token) {
    return callApi('/1.1/statuses/user_timeline.json', token);
}

exports.getTweets = getTweets;
