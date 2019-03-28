jQuery.sap.includeScript("/webapp/src/src/cordova.js");
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("jatin.app.barcode.controller.Main", {
  onScan: function () {
	
cordova.plugins.barcodeScanner.scan(this.scanSuccessCallback,this.scanErrorCallback);

		},
		  scanSuccessCallback: function(result) {
                alert(result.text);
            },

            scanErrorCallback: function(error) {
                navigator.notification.alert("Scanning failed: " + JSON.stringify(error));
            },
            
            
             onGetLocation:function(){
     	navigator.geolocation.getCurrentPosition(this.onSuccess2, this.onError2);
     },
     onSuccess2:function(position){
     	 alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
     },
     onError2:function(){
     	alert("Error");
     }
	});
	
	
});