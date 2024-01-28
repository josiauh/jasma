var jasma = require("./src/index.js")
var myfunc = new jasma.JasmaFunction((hi, yes) => {
    console.log(hi)
    if (yes == true) {
        console.log("true!")
    }
})
myfunc.typechecks = [typeof "", typeof true]
myfunc.call("hello", false)
myfunc.call("bye", true)
myfunc.call(true, "this should throw an error")