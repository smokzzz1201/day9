const os = require('os');

console.log('Arch : ' + os.arch());

console.log('type : ' + os.type());
 
console.log('platform : ' + os.platform());
 
console.log('total memory : ' + os.totalmem() + " bytes.");
 
console.log('free memory : ' + os.freemem() + " bytes.");