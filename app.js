// const fs = require('fs');
const notes = require('./notes.js');
const yargs = require('yargs');

//add notes
yargs.command({
    command: 'add',
    describe: 'Add note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.description);
    }
});
//remove note
yargs.command({
    command: 'remove',
    describe: 'remove note',
    title: {
        description: 'Note title',
        demandOption: true,
        type: 'string'
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});
// read note
yargs.command({
    command: 'read',
    describe: 'read note',
    title: {
        description: 'Read note',
        demandOption: true,
        type: 'string'
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});
// list notes
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        notes.listNotes();
    }
});

yargs.parse();
// console.log(yargs.argv);


// console.log(getNotes());
// //writing file synchronously
// fs.writeFileSync('notes.txt','This is notes app.');

// //appending data to file
// fs.appendFileSync('notes.txt','We can append text to this file like this sentence is appended.');


