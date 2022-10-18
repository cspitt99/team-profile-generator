const Intern = require('../lib/intern')

describe("Intern Class", ()=>{
    it ("test all properties", ()=>{
        const intern=new Intern('Jane',1,'jdoe@yahoo.com','Ohio State')

        expect(intern.name).toEqual('Jane')
        expect(intern.id).toEqual(1)
        expect(intern.email).toEqual('jdoe@yahoo.com')
        expect(intern.getRole()).toEqual('Intern')
        expect(intern.school).toEqual('Ohio State')
    })
})