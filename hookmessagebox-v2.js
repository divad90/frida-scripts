

const messageboxaddr = Module.findExportByName("user32.dll", "MessageBoxA");
console.log("--address of messagebox: " + messageboxaddr);

Interceptor.attach(messageboxaddr, {
    onEnter: function(args){
        console.log("--entered messagebox--");
        console.log("--lpText: " + args[1].readUtf8String());
        console.log("--lpCaption: " + args[2].readUtf8String());
    },

    onLeave: function(retval){
        console.log("--exited messagebox--");
    },
});

