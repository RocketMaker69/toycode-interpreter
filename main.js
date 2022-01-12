let interpreter = { };

Object.defineProperties(interpreter, {
    stack: { value: [ ], writable: true },
    load: { value: function (val) {
        this.stack.push(val) } 
    },
    add: { value: function () {
        let b = this.stack.pop();
        let a = this.stack.pop();
        this.load((a + b)); }
    },
    run: { value: function (c) {
        let [ins, dat] = [c.ins, c.dat];
        for (let step in ins) {
            let [i, a] = step;
            switch (i) {
                case "load":
                    this.load(a);
                    break;
                case "add":
                    this.add();
                    break;
                case "print":
                    if (a === null) console.log(this.stack.pop());
                    else            console.log(dat[a]);
                    break;
            }
        }
    }
});
