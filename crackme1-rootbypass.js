/*
Script to bypass root detection in the owasp android crackme 1
Link: https://github.com/OWASP/owasp-mastg/tree/master/Crackmes/Android/Level_01
*/
Java.perform(()=>{
    const rootcheckclass = Java.use("sg.vantagepoint.a.c");

    rootcheckclass.a.implementation = function(){
        console.log("[+] bypassing c.a()...");
        return false;
    }

    rootcheckclass.b.implementation = function(){
        console.log("[+] bypass c.b()...");
        return false;
    }

    rootcheckclass.c.implementation = function(){
        console.log("[+] bypass c.c()...");
        return false;
    }
});