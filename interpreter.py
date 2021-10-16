class Error(Exception):
    def __init__(self, msg="", idx):
        self.msg = msg
        self.idx = idx

    def __repr__(self):
        return f"""
Error --- code:{self.idx}
    {self.msg}
"""
 
#####################################

class Interpreter:
    def __init__(self, code):
        self.code  = code
        self.stack = [ ]    # The "stack" for values
        self.env   = { }    # The "stack" for variables

    def store_val(self, val):
        self.stack.append(eval(val))

    def last(self): return self.stack.pop()

    def get(self, item): return self.code["data"][item]

    def run(self):
        instructions = self.code["instructions"]
        data         = self.code["data"]
        for step in instructions:
            ins, arg = step
            if ins == "print":
                print(self.last()) if arg == -1 else data[arg]
