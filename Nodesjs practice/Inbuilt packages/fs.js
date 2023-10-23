/*const fs = require('fs');

const quote="No beauty shines brighter than that of a good heart";

fs.writeFile("awesome.ppt", quote, (err) => {
    console.log("completed writing awesome.html");
});*/

/*const fs = require('fs');
  
let data = "This is a file containing a collection of books.";
  
fs.writeFile("books.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("books.txt", "utf8"));
  }
});*/



/*create the below fileswith quote2 as the content -creae folder backup inside that add text-1.html,text-2.html... text-10.html*/
/*const fs = require('fs');
const quote2="Live more, worry less";
for(let i=1;i<=10;i++){
  fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
    console.log(`completed writing text-${i}.html`);
});
}*/

/*node fs.js 8=> 8 files should be  craeted || note-1.txt, note-2.txt....note-8.txt*/
/*const fs = require('fs');
const quote3="Happy Day";
const[,,noffiles]=process.argv;
for(let i=1;i<=noffiles;i++){
  fs.writeFile(`./backup/note-${i}.txt`, quote3, (err) => {
    console.log(`completed writing note-${i}.txt`);
});
}*/

//read file
/*const fs = require('fs');
fs.readFile("./backup/cool.txt","utf-8",(err,data)=>{
  if (err){
    console.log("error",err)
  }
  console.log("The content of the file is=>",data)
});*/

//append file

/*const fs = require('fs');
const nicequote="\nmake everyday a little ordinary"
//fs.writeFile("./backup/nice.txt", nicequote, (err) => {
fs.appendFile("./backup/nice.txt", nicequote, (err) => {
  console.log("completed writing nice.txt");
});*/


//delete file

/*const fs = require('fs');
fs.unlink("./backup/removefile.txt",(err) => {
  console.log("Deleted successfully");
});*/


//Read the all the files from folder
/*const fs = require('fs');
fs.readdir("./backup",(err,files)=>{
  console.log("All file names",files)
});*/

//delete all the files in backup folder
/*const fs = require('fs');
fs.unlink("./backup/note-1.txt",(err) => { //delete one file
  console.log("Deleted successfully");
});*/

/*const fs = require('fs');
fs.readdir("./backup",(err,data)=>{ //delete all files
  data.forEach(fileName=>{
    fs.unlink(`./backup/${fileName}`,(err) => { 
      console.log("Deleted successfully",fileName);
    });
  });
});*/


//writeFile => CallStack =>WEbApi(Whoever finishes writing first) =>CallBack Queue => callStack
//fs.writeFile, fs.readFile, fs.appenedFile -async;
//fs.writeFileSync, fs.readFileSync, fs.appenedFileSync - sync;

const fs = require('fs');
const quote3="Happy Day";
const[,,noffiles]=process.argv;

for(let i=1;i<=noffiles;i++){
  fs.writeFileSync(`./backup/note-${i}.txt`, quote3);
    console.log(`completed writing note-${i}.txt`);
}



