import { add, sub } from "./calc-functions";

describe("Calculator Test", ()=>{

    it("should add 2 + 2", ()=>{
        const sum = add(2, 2);
        expect(sum).toBe(4);
    });

    it("should subtract 5-3", ()=>{
        const dif = sub(5, 3);
        expect(dif).toBe(2);
    })


});