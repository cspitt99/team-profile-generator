const Engineer = require('../lib/engineer')

describe("Engineer Class", ()=>{
    it ("test all properties", ()=>{
        const engineer=new Engineer('Jane',1,'jdoe@yahoo.com','janedoe')

        expect(engineer.name).toEqual('Jane')
        expect(engineer.id).toEqual(1)
        expect(engineer.email).toEqual('jdoe@yahoo.com')
        expect(engineer.getRole()).toEqual('Engineer')
        expect(engineer.github).toEqual('janedoe')
    })
})