const utils = require('./util/utils-lib');

const generator = new utils.UuidGenerator();

let uuid = generator.generateUuid();
console.log(uuid);

const dt = new utils.DateTimeUtils();
let ticks=dt.getTimeInTicks();
console.log(ticks);