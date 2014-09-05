'use strict';

// The Package is past automatically as first parameter
module.exports = function(Rfid, app, auth, database) {

  app.post('/rfid/swipe', function(req, res, next) {
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
    
    res.json({ "status": "OK",
               "fullname": "Kurt Ohlsson"
             });
  });

  app.get('/rfid/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

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
