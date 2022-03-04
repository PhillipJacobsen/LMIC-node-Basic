/*******************************************************************************
 *
 *  File:         lmic-node-uplink-formatters.js
 * 
 *  Function:     LMIC-node uplink payload formatter JavaScript function(s).
 * 
 *  Author:       Phillip Jacobsen
 * 
 *  Description:  These function(s) are for use with the Helium Network
 *                 
 ******************************************************************************/

function Decoder(bytes, port) { 
 var data = {};
    var warnings = [];
//
    if (port == 10) {
        data.counter = (bytes[0] << 8) + bytes[1];
    }
    else {
        warnings.push("Unsupported Port");
    }
    return {
        data: data,
        warnings: warnings
    };
}