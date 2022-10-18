const Manager = require('../lib/manager')

describe("Manager Class", ()=>{
    it ("test all properties", ()=>{
        const manager=new Manager('Jane',1,'jdoe@yahoo.com','101')

        expect(manager.name).toEqual('Jane')
        expect(manager.id).toEqual(1)
        expect(manager.email).toEqual('jdoe@yahoo.com')
        expect(manager.getRole()).toEqual('Manager')
        expect(manager.officeNumber).toEqual('101')
    })
})