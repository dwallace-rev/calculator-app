import { add, multiply, sub } from "./calc-functions";

describe("Calculator Test", ()=>{

    it("should add 2 + 2", ()=>{
        const sum = add(2, 2);
        expect(sum).toBe(4);
    });

    it("should subtract 5-3", ()=>{
        const dif = sub(5, 3);
        expect(dif).toBe(2);
    })

    it("should multiply 5 by 5", ()=>{
        const prod = multiply(5, 5);
        expect(prod).toBe(25)
    })


});

describe("Acessing environment variables", ()=>{
    it("should read an environment variable", ()=>{
        const PASSWORD = process.env.DB_PASSWORD;
        expect(PASSWORD).toBeTruthy();
    })
})