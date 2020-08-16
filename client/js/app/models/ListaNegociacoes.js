class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);//entrega uma cópia do Array original Negociacoes
    }

    esvazia(){
        this._negociacoes = [];
    }
}