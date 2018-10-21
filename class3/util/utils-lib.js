const uuidV1 = require('uuid/v1');

class UuidGenerator{
    generateUuid(){
        return uuidV1();
    }
}

class DateTimeUtils{
    getTimeInTicks(){
        let now = new Date();
        var epochTicks=621355968000000000;
        var ticksPerMillisecond=10000;

        var yourTicks = epochTicks+( now.getTime() * ticksPerMillisecond);

        return yourTicks;
        
    } 
}

module.exports = {UuidGenerator,DateTimeUtils};