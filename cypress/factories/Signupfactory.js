var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

    var data = {
        name: `${firstName} ${lastName}`,
        cpf: '60832346977',
        email: faker.internet.email(firstName),
        whatsapp: '34999999999',
        address: {
            postalcode: '38400617',
            street: 'Rua Itumbiara',
            number: '1000',
            details: 'AP 142',
            district: 'Nossa Senhora Aparecida',
            city_state: 'Uberlândia/MG'
    },

        delivery_method: 'Moto',
        cnh: 'cnh-digital.jpg'
}
return data
}
}