const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filepath = path.join(__dirname, 'command.txt');
const lastProcessedFilePath = path.join(__dirname, 'lastProcessedLine.txt');

function readLastProcessedLine() {
    try {
        const data = fs.readFileSync(lastProcessedFilePath, 'utf-8');
        return parseInt(data, 10) || 0;
    } catch (err) {
        return 0;
    }
}

function writeLastProcessedLine(lineNumber) {
    fs.writeFileSync(lastProcessedFilePath, lineNumber.toString(), 'utf-8');
}

function processCommand(command) {
    const words = command.split(' ');
    if (words[0] === 'create' && words[1] === 'a' && words[2] === 'file') {
        const name = words[3];
        fs.writeFile(name, '', (err) => {
            if (err) {
                console.error(`Error creating file "${name}":`, err);
            } else {
                console.log(`File "${name}" created successfully.`);
            }
        });
    } else if (words[0] === 'delete' && words[1] === 'the' && words[2] === 'file') {
        const name = words[3];
        fs.unlink(name, (err) => {
            if (err) {
                console.error(`Error deleting file "${name}":`, err);
            } else {
                console.log(`File "${name}" deleted successfully.`);
            }
        });
    } else if (words[0] === 'rename' && words[1] === 'the' && words[2] === 'file') {
        const name = words[3];
        const newName = words.slice(6).join(' ');
        fs.rename(name, newName, (err) => {
            if (err) {
                console.error(`Error renaming file "${name}" to "${newName}":`, err);
            } else {
                console.log(`File "${name}" renamed to "${newName}" successfully.`);
            }
        });
    } else if (words[0] === 'add' && words[1] === 'to' && words[2] === 'the' && words[3] === 'file') {
        const name = words[4];
        const text = words.slice(5).join(' ');
        fs.appendFile(name, text, (err) => {
            if (err) {
                console.error(`Error adding text to file "${name}":`, err);
            } else {
                console.log(`Text added to "${name}" successfully.`);
            }
        });
    } else {
        console.error('Unknown command:', command);
    }
}

function readCommands() {
    const lastProcessedCommand = readLastProcessedLine();
    const commandStream = fs.createReadStream(filepath);
    const rl = readline.createInterface({
        input: commandStream,
        crlfDelay: Infinity
    });

    let currentLine = 0;

    rl.on('line', (line) => {
        currentLine++;
        if (currentLine > lastProcessedCommand) {
            processCommand(line.trim());
        }
    });

    rl.on('close', () => {
        writeLastProcessedLine(currentLine);
    });
}

fs.watch(filepath, (eventType) => {
    if (eventType === 'change' || eventType === 'rename') {
        readCommands();
    }
});

readCommands();
