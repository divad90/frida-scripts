/*
It shows how to modify the MessageBoxA parameters in memory
*/

//--  https://frida.re/docs/best-practices/

const messageboxaddr = Module.getExportByName("user32.dll", "MessageBoxA");
console.log("--address of messagebox: " + messageboxaddr);

var welldone = Memory.allocUtf8String("well done");
var congrats = Memory.allocUtf8String("congrats");

Interceptor.attach(messageboxaddr, {
    onEnter: function(args){
        console.log("--entered messagebox--");
        console.log("--lpText: " + args[1].readUtf8String());
        console.log("--lpCaption: " + args[2].readUtf8String());

        args[1] = welldone;
        args[2] = congrats;
        args[3] = ptr("0x0000040");//information icon -see API reference

    },

    onLeave: function(retval){
        console.log("--exited messagebox--");
    }
});

