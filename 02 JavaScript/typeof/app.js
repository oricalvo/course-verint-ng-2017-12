if(typeof indexedDB == "undefined") {
    console.log("Not defined");
}

var x = 10;
console.log(typeof x);

x = "abc";
console.log(typeof x);

x = function() {
};
console.log(typeof x);
