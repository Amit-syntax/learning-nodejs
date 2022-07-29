import fsPromises from 'fs/promises'
import fs from 'fs'


/*
============================================================
*/
const data = fsPromises.readFile('./temp/temp.csv','utf-8', function(err, data){
    if(err){
        console.error(err)
        return
    }
    return data
})
data.then((e)=>console.log('async version reading without "await": \n', e))




/*
============================================================
 using async-await here reading file
*/
const dataAwait = async () => {
    return await fsPromises.readFile('./temp/temp.csv',{encoding: 'utf-8'},)
}

dataAwait().then((e)=>console.log('async version reading with "await": ', e))




/*
============================================================
here it will read the full data then only it will release the control. 
*/
const dataSync = fs.readFileSync('./temp/temp.csv','utf-8', function(err, data){
    if(err){
        console.error(err)
        return
    }
    return data
})

console.log('syncronous reading : ', dataSync)