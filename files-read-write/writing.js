import fs from 'fs'
import chalk from 'chalk'


/*
due to asyncronous behaviour it will put this 
*/
fs.writeFile(`./temp/writing-${Date.now()}`, 'this is written by node async method', err=>{
    if(err){console.error(err)}
    console.log(chalk.green('Success writing data'))
})

console.log(chalk.yellow('Statment after Writing File but'), ' : "File is not Finished writing"')

/*

*/