// 1. Remove log files
// remove all the files from the Logs directory, if exists
// output the file names to delete
// remove the Logs directory

// 2. Create log files
// create a Logs directory, if it does not exist
// change the current process to the new Logs directory
// create 10 log files and write some text into the file
// output the files names to console

const fs = require('fs');
const path = require('path');

const logDir = './logs';

function removeLogFiles() {
    if (fs.existsSync(logDir)) {
        fs.readdirSync(logDir).forEach(file => {
            const filePath = path.join(logDir, file);
            fs.unlinkSync(filePath);
            console.log(`delete file...${file}`);
        });

        fs.rmdirSync(logDir);
        console.log('Deleted Logs directory successfully');
        } else {
            console.log('Logs directory does not exist');
        }
    }

removeLogFiles();



function createLogFiles() {
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
        console.log('Created Logs directory successfully');
    }

    process.chdir(logDir);

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `Log file #${i}`);
        console.log(`create file...${fileName}`);
    }
}

createLogFiles();