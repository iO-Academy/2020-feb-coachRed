"use strict";
exports.__esModule = true;
var getLocation = navigator.geolocation.getCurrentPosition(function (position) {
    var currentPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };
    return currentPosition;
});
exports["default"] = getLocation;
