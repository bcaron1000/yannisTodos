// this is a gulp file 
// it uses NODE(uses the runtime of the machine)
// Node uses common JS modules
// this is how to import modules
// USED TO MOVE FILES INTO THE DIST FILE FOR PRODUCTION
const{src, dest} = require('gulp')

// pass in a callback function, once the process is finished it will run the CB function
const static = function(cb){

    //write the task here
    //grabbing the data held within this specific folder (*.* takes everything)
    return src('src/static/data/*.*')
    //moves all the data to this destination
    .pipe(dest('dist/data'))



    // call the CB function(temporal deadzone)
    cb()
}
// uses a different export method for Common JS modules
exports.default = static