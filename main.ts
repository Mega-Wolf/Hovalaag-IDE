#!/usr/bin/env node.exe

class RegisterValues {
    A : number = 0;
    B : number = 0;
    C : number = 0;
    D : number = 0;
    F : number = 0;
    W : number = 0;
    O : number = 0;
    J : number = 0;

    public toString = () : string => {
        return `A:${this.A} - B:${this.B} - C:${this.C} - D:${this.D} - F:${this.F} - W:${this.W} - O:${this.O} - J:${this.J}`;
    }
};

function main() {
    let regs = new RegisterValues();
    regs.D = 4;
    regs.A = 17;
    regs.C = 43;
    console.log(regs.toString());
}

main();