const fs = require('fs');
const chalk = require('chalk');
const log = console.log;

addNote = (title, description) => {
    const notes = loadNotes();
    const duplicate = notes.find(note => note.title === title);
    if (!duplicate) {
        notes.push({
            title: title,
            description: description
        });
        saveNotes(notes);
        log(chalk.green('Note added successfully!'));
    } else {
        log(chalk.red('Title already taken'));

    }
}

removeNote = (title) => {
    const notes = loadNotes();
    const notesKept = notes.filter(note => note.title !== title)
    if (notes.length === notesKept.length + 1) {
        saveNotes(notesKept);
        log(chalk.green('Note deleted successfully'));
    } else {
        log(chalk.red('No such note found!'));
    }
}

readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        log(note);
    } else {
        log(chalk.red('No such note found!'));        
     }
}

listNotes = () => {
    const notes = loadNotes();
    if (notes.length !== 0) {
        notes.forEach(note => {
            log(note);
        });
    } else {
        log(chalk.red('No notes available'));
    }
}

loadNotes = () => {
    let notes;
    try {
        notes = JSON.parse(fs.readFileSync('notes.json').toString());
    } catch (e) {
        notes = [];
    }
    return notes;
}

saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
};