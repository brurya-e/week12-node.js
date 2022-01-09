const fs = require('fs')

// 1. Create a new txt file using the same fs module method we have
// learned before.
// fs.writeFileSync('notes.txt', 'My name is Brurya.')

// 2. Create a copy of the newly created txt file using a method from
// the fs module.
// fs.copyFile('./notes.txt', 'copy_notes.txt',(err)=>{ if (err) throw err;
//     console.log('source.txt was copied to destination.txt');})
  
// 3. Rename one of the files using a method from the fs module.
// fs.rename('copy_notes.txt', 'newName.txt', (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
//   });

// 4. Get a list of all the file names of the current directory using a
// method from the fs module.

fs.readdir('./', (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

// 5. Find out and implement another method for the fs module.
//append text to file
fs.appendFileSync('notes.txt', ', and i like node.js.')
