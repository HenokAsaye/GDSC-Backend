const fs = require("fs");
const path = require("path");

let filepath = path.join(__dirname, "line.txt");
let filepath2 = path.join(__dirname ,"2ndline.txt")

async function countLines(filepath) {
    try {
        let lineCount = 0;
        await new Promise((resolve, reject) => {
            fs.createReadStream(filepath)
                .on("data", (buffer) => {
                    let idx = -1;
                    do {
                        idx = buffer.indexOf(10, idx + 1);
                        if (idx !== -1) lineCount++;
                    } while (idx !== -1);
                })
                .on("end", () => {
                    resolve(lineCount);
                })
                .on("error", (err) => {
                    if (err.code === 'ENOENT') {
                        console.error("File not found");
                    } else if (err.code === 'EACCES') {
                        console.error("Permission denied");
                    } else if (err.code === 'EISDIR') {
                        console.error("Path is a directory");
                    } else {
                        console.error("An error occurred", err.message);
                    }
                    reject(err);
                });
        });
        return lineCount + 1;
    } catch (error) {
        console.error(error);
    }
}

async function count2ndLines(filepath2) {
    try {
        let lineCount2 = 0;
        await new Promise((resolve, reject) => {
            fs.createReadStream(filepath2)
                .on("data", (buffer) => {
                    let idx = -1;
                    do {
                        idx = buffer.indexOf(10, idx + 1); // 10 is the ASCII code for newline
                        if (idx !== -1) lineCount2++;
                    } while (idx !== -1);
                })
                .on("end", () => {
                    resolve(lineCount2);
                })
                .on("error", (err) => {
                    if (err.code === 'ENOENT') {
                        console.error("File not found");
                    } else if (err.code === 'EACCES') {
                        console.error("Permission denied");
                    } else if (err.code === 'EISDIR') {
                        console.error("Path is a directory");
                    } else {
                        console.error("An error occurred", err.message);
                    }
                    reject(err);
                });
        });
        return lineCount2 + 1;
    } catch (error) {
        console.error(error);
    }
}


async function main(){
    try{
        const lineCount = await countLines(filepath)
        const lineCount2 = await count2ndLines(filepath2)
        const result = await sum(lineCount,lineCount2)
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
main();
function sum(lineCount,lineCount2){
    let sum = lineCount + lineCount2
    return new Promise((resolve,reject)=>{
        try{
            resolve(sum)
        } catch(err) {
            reject("error has occured")
        } 
    })
    
}


   
