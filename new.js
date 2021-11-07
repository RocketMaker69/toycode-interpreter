// This is an example of how the interpreter works:
const i = require("main").interpreter;

const foo = {
    ins: {
        ["print", 0]
    },
    dat: [
        "Hello World!"
    ]
}

i.run(foo);   // Output: Hello World!
