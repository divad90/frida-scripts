/*
It intercepts the lpText and lpCaption parameters passed to MessageBoxA
note: in the case of MessageBoxW changhe readUtf8String to readUtf16String
*/

const messageboxaddr = Module.findExportByName("user32.dll", "MessageBoxA");
console.log("--address of messagebox: " + messageboxaddr);

Interceptor.attach(messageboxaddr, {
    onEnter: function(args){
        console.log("--entered messagebox--");
        console.log("--lpText: " + Memory.readUtf8String(args[1]));
        console.log("--lpCaption: " + Memory.readUtf8String(args[2]));
    },

    onLeave: function(retval){
        console.log("--exited messagebox--");
    },
});

