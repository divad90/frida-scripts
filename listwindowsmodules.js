/*
It enumerates all Windows modules inside the EXE file
*/
const modulearray = Process.enumerateModules();

for(var i=0; i<modulearray.length; i++){
    console.log(modulearray[i].name);
}
