import axios from 'axios';

class BuscaCep{
    constructor(cep){
        this.cep = cep;
    }

    getDadosCep(){
        return axios.get(`https://viacep.com.br/ws/${this.cep}/json/`);
    }

}


export default BuscaCep;