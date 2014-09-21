'use strict';

var cards = require('../controllers/card');
// The Package is past automatically as first parameter
module.exports = function(Rfid, app, auth, database, Cards) {

// Require Lo-DASH
//var _ = require('lodash');
var _ = require('lodash/dist/lodash.underscore');
    
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

    
 app.post('/rfid/swipe', function(req, res, next) {
     var status, number, name, card;
     
     var cards = [
        {
        "rfid": "1001",
        "fnamn": "Skurt",
        "enamn": "Skutt",
        "email": "skurt@test.com"
        }, {
        "rfid": "1002",
        "fnamn": "Kurt",
        "enamn": "Ohlsson",
        "email": "kurt@test.lab"
        }
      ];

    // var rfid = req.params('rfid')
    // var unitid = req.params('unitid')
    // TODO: kolla om RFID finns i cards
      
    //var db = mongoskin.db('mongodb://@localhost:27017/test', {safe:true})
    //req.collection = db.collection(collectionName)
//    req.collection.find({} ,{limit:10, sort: [['_id',-1]]}).toArray(function(e, results){
//        if (e) return next(e);
//        res.send(results);
//        })
//    });

     number = req.param("number");
     status = 'ERR';
     name = 'test';
     
     card = _.find(cards, { 'rfid': number });
     name = card;
     
//     cards.forEach(card, 0) {
//         if (card.rfid === number){
//             status = 'OK';
//             name = card.fnamn + ' ' + card.enamn;
//         }
//     }
     
     res.json({"status": status,
               "fullname": name                 
     });
 });

  // app.get('/rfid/example/anyone', function(req, res, next) {
  //   res.send('Anyone can access this');
  // });

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
