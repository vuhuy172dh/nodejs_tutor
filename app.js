
const fs = require('fs')

//create a folder
fs.mkdir('tutorial', (err) => {
    if(err)
        console.log(err)
    else{
        console.log('Folder successfully created')
    }
})

//delete a folder
fs.rmdir('tutorial', (err) => {
    if(err)
        console.log(err)
    else{
        console.log('folder successfully removed')
    }
})

//delete a folder of multiple files (create a folder example contains multiple file to practice)
fs.readdir('example', (err, files) => {
    if(err)
        console.log(err)
    else{
        for (let file of files){
            fs.unlink('./example/' + file, (err) => {
                if(err)
                    console.log(err)
                else{
                    console.log('successfully deleted file')
                }
            })
        }
        fs.rmdir('example', (err) => {
            if(err)
                console.log(err)
            else 
                console.log('successfully')
        })
    }
})
