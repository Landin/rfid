'use strict';

var cards = require('../controllers/card');
var swipe = require('../controllers/swipe');
var loggswipe = require('../controllers/loggswipe');


// The Package is past automatically as first parameter
module.exports = function(Rfid, app, auth, database, Cards) {

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.article.user.id !== req.user.id) {
    return res.send(401, 'User is not authorized');
  }
  next();
};  

app.route('/rfid/cards')
        .get(cards.all)
        .post(auth.requiresLogin, cards.create);
app.route('/rfid/cards/:cardId')
//    .get(card.show)
//    .put(auth.requiresLogin, hasAuthorization, cards.update)
      .delete(auth.requiresLogin, hasAuthorization, cards.destroy);
    
// Finish with setting up the cardId param
app.param('cardId', cards.card);

    
app.post('/rfid/swipe', swipe.process);

app.get('/rfid/loggswipes', loggswipe.all);

    app.get('/rfid/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

    app.get('/rfid/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

    app.get('/rfid/example/render', function(req, res, next) {
        Rfid.render('index', {
        package: 'rfid'
        }, function(err, html) {
      //Rendering a view from the Package server/views
        res.send(html);
    });
  });
};
