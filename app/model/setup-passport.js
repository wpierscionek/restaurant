var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({
    domain: 'wpierscionek.auth0.com',
    clientID: 'tEaGOexj9Byq751gMNg3qGpupCuuYlnV',
    clientSecret: 'k81m6PHA-iA1C6oIi53cqqB7zVQk2HGPUwevtnDijHnVOnpvN2lI8OIv-aGKpOdK',
    callbackURL: 'https://experiod00.herokuapp.com/user'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
});

passport.use(strategy);

// This is not a best practice, but we want to keep things simple for now
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

module.exports = strategy;
