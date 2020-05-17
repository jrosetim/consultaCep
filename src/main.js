//import BuscaCep from './buscaCep';
import BuscaCep from './buscaCep';
import axios from 'axios';

class App{
    constructor(){
        this.enderecos = [];
        
        this.formEl = document.querySelector('form[id=form]');
        this.inputEl = document.querySelector('input[id=cep]');
        this.listEl = document.querySelector('ul[id=listaEndereco]');

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addCep(event);   
    }

    async addCep(event){
        event.preventDefault();
        
        const inputCep = this.inputEl.value;

        if (inputCep.length === 0)
            return;

        try{
            const bc = new BuscaCep(inputCep);

            const response = await bc.getDadosCep();

            console.log(response.data);

            const {logradouro, bairro, localidade, uf} = response.data;

            this.enderecos.push({
                logradouro,
                bairro,
                localidade,
                uf
            });

            this.render();
        
        }catch(erro){
            console.log(erro);
        }
    }

    render(){
        this.listEl.innerHTML = '';

        this.enderecos.forEach(endereco =>{
            let labelEl = document.createElement('label');
            labelEl.textContent = endereco.logradouro;

            let itemEl = document.createElement('li');
            itemEl.appendChild(labelEl);

            this.listEl.appendChild(itemEl);
        })
    }    
}

const MeuApp = new App();