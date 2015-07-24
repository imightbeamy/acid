var OAuth = require('oauth');
var Promise = require('promise');

var oauth2 = new OAuth.OAuth2(
    process.env.TWITTER_API_KEY,
    process.env.TWITTER_API_SECRET,
    'https://api.twitter.com/',
    null,
    'oauth2/token',
    null
);

function getAccessToken() {
    return new Promise(function(resolve, reject) {
        oauth2.getOAuthAccessToken('', {
            'grant_type': 'client_credentials'
        }, function (e, access_token) {
            resolve(access_token);
        });
    });
}

exports.getAccessToken = getAccessToken
