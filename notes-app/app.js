//when we require some file we actually run it.
//for core packages and npm packages we can directly give the package name.
//nodemon was installed for the operating system giving us new command in cmd.
//process and global are two objects in node like document and window in browser
//process.argv gives us an array vector for arguments passes during runtime.
//1st and 2nd element of array is path to node.js and app.js 
//sending multiple texts in cmd line as nodemon app.js add --title="Add a title" (-- is used to set variable name).
//yargs take process.argv and makes it into yargs arguments. 
//gives an object with first key as _ containing commands.
//other variables is set as property

const chalk = require('chalk');
const yargs = require('yargs');
const myNotes = require('./notes');

//change the version of yargs.
yargs.version('1.1.0');
//yargs make an interactive command line tool.
//process.argv parsed by yargs.
//the array has commands
//node app.js --help yargs tool, tells us what is going on with our app
//node app.js --version, version of our yargs, can be customised.

//add, remove, read, list
//creating the add command
yargs.command({
    command:'add',
    description:'Adding a note',
    handler:function(){
        console.log("Adding a new note");
    }
});

//creating remove command.
yargs.command({
    command:"remove",
    describe:"Removing a note",
    handler:function(){
        console.log("Removing a note");
    }
})

//read all notes
yargs.command({
    command:"read",
    describe:"Reading all the notes",
    handler:function(){
        console.log("Reading a note");
    }
})

//list all notes
yargs.command({
    command:"list",
    describe:"List all the notes",
    handler:function(){
        console.log("Here are all your notes, listed");
    }
})

//must be in end log all commands when we give --help.
console.log(yargs.argv);
