import fs from 'fs'
import fsPromise from 'fs/promises'
import chalk from 'chalk'


/*
due to asyncronous behaviour it will put this 
*/
function writeFile(){
    console.log(chalk.yellow('Statment before Writing File but'), ' : "File is not Finished writing"');

    fs.writeFile(`./temp/writing-${Date.now()}`, 'this is written by node async method', err=>{
        if(err){console.error(err)}
        console.log(chalk.green('Success writing data'))
    })

    console.log(chalk.yellow('Statment after Writing File but'), ' : "may be File is not Finished writing"');
}


/*
writing this file is with async await with fs/promises
*/
async function writeFileUsingAwait() {
    const content = 'this is written by node async method using "await"'

    console.log(chalk.yellow('Statment before Writing File using "await"'), ' : "File is not Finished writing"')
    await fsPromise.writeFile(`./temp/writing-${Date.now()}`, content)
    console.log(chalk.yellow('Statment after Writing File using "await"'), chalk.green(' : "File is Finished writing"'))

}
// writeFileUsingAwait()



/*
appending file asyncronously.
*/
function appendContent(){
    let content = '\nrohit kumar, 2019554622, 190101031'
    
    fs.appendFile('./temp/temp.csv', content, (err)=>{
        if(err){
            console.error(err)
            return
        }
        console.log(chalk.green('Appended to file "./temp/temp.csv"'))
    })
    console.log(chalk.yellow('Statment after appending into file') + " : but content is not appended")
}

/*

*/

let fl = fsPromise.open('./temp/temp.csv')

console.log(fl)