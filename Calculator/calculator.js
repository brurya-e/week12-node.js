const yargs = require('yargs')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add 2 number',
    builder: {
        numbers: {
            describe: 'numbers',
            demandOption: true,
            type: 'array'
        }
    },
    handler: function (argv) {
        console.log(+argv.numbers[0] + +argv.numbers[1])
    }
})

// Create sub command -diffrent way
yargs.command({
    command: 'sub',
    describe: 'Sub 2 number',
    
    handler: function (argv) {
        console.log(argv._[1] - argv._[2])
    }
})

// Create mult command 
yargs.command({
    command: 'mult',
    describe: 'mult 2 number',
    
    handler: function (argv) {
        console.log(argv._[1] * argv._[2])
    }
})

// Create pow command 
yargs.command({
    command: 'pow',
    describe: 'pow a number',
    
    handler: function (argv) {
        console.log(argv._[1] * argv._[1])
    }
})





yargs.parse()