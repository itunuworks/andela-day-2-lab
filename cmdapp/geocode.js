#!/usr/bin/env node

var program = require('commander');
var googleMapsClient = require('@google/maps').createClient ({
  key: 'AIzaSyDs_nf9H4KHLJgkDdXqBc26ayvlq2koT_Q'
});

program
  .arguments('<add>')
  .action(function(add){
    googleMapsClient.geocode({
      address: add
      }, function (err, response){
        if (!err){
          var res = response.json.results;
          var long = res[0].geometry.location.lng;
          var lat = res[0].geometry.location.lat;
          var fullAddress = res[0].formatted_address;
          console.log("Full Address is: " + fullAddress);
          console.log("Longitude is: " + long);
          console.log("Latitude is: " + lat);
        }
      });
  })
  .parse(process.argv);

