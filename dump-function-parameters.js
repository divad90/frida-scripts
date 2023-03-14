/*
Here I overload the function that receives one string parameter to bypass the password validation in crackme1
Link: https://github.com/OWASP/owasp-mastg/tree/master/Crackmes/Android/Level_01
*/
Java.perform(()=>{
    const classa = Java.use("sg.vantagepoint.uncrackable1.a");

    classa.a.overload("java.lang.String").implementation = function(s){
        console.log(s.toString());

        return true;
    }
});