const fs = require('fs');
//create a file
fs.writeFile('example.txt', "this is an example", (err) => {
    if(err)
        console.log(err)
    else
    {
        console.log('File successfully created')
        fs.readFile('example.txt', 'utf-8',(err, file) => {
            if(err)
                console.log(err)
            else 
                console.log(file)
        })
    } 
})
//rename a file
fs.rename('example.txt', 'example2.txt', (err) => {
    if(err)
        console.log(err)
    else
        console.log('successfully renamed the file')
})
//append a file
fs.appendFile('example2.txt', 'some data being expanded', (err) => {
    if(err)
        console.log(err)
    else
        console.log('Successfully appended data to file')
})
//delete a file
fs.unlink('example2.txt', (err)=> {
    if(err)
        console.log(err)
    else  
        console.log('successfully deleted the file')
})