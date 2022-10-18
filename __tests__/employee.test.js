const Employee = require('../lib/employee')

describe("Employee Class", ()=>{
    it ("test all properties", ()=>{
        const employee=new Employee('Jane',1,'jdoe@yahoo.com')

        expect(employee.name).toEqual('Jane')
        expect(employee.id).toEqual(1)
        expect(employee.email).toEqual('jdoe@yahoo.com')
    })
})