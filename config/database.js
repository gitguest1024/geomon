﻿module.exports = {
    
    url : 'mongodb://localhost:27017/geomondb', // template mongodb://<user>:<pass>@server:port/<yourdbname>
    
    // Size of history saved.
    // Examples:
    //  trackSize : 20 -- Only 20 last coordinates saved in DB
    //  trackSize : 0  -- No history saved
    //  trackSize : -1 -- All history saved
    trackSize : 25,
	
	// Proximity of two points in meters. When two points too close to each other - remove previos point from track
	proximity : 10

};