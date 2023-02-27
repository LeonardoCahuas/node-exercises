import figlet from "figlet";

figlet('Hello World!!', function(err, data) {
    if (err) {
        throw  new Error("There is an error")
    }
    console.log(data)
});