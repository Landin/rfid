'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Rfid = new Module('rfid');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Rfid.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Rfid.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Rfid.menus
//      .add({
//        title: 'Swipe Card',
//        link: 'swipe page',
//        roles: ['authenticated'],
//        menu: 'main'
//      })
      .add({
        title: 'Kort',
        link: 'Kort', // link skickar till Routes $stateProvider.state
        roles: ['admin'],
        menu: 'main'
      })
      .add({
        title: 'Kort Logg',
        link: 'Kort Logg',
        roles: ['admin'],
        menu: 'main'
  });
    

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Rfid.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Rfid.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Rfid.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Rfid;
});
