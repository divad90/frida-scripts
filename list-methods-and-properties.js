Java.perform(()=>{
    console.log("[+] Listing Methods and properties for main activity...");
    const activityclass = Java.use("com.example.helloapp.MainActivity");
    console.log(activityclass);
    console.log(Object.getOwnPropertyNames(activityclass).join("\n"));
});