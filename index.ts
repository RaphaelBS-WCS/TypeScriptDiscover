function hello (name: string) {
    console.log("Hello " + name);
}
type firstname = String;
const firstname = "bob";

hello(firstname);
hello(firstname + " Marley");

function concat(a: String, b: String) {
    return a + " " + b;
}

const wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);