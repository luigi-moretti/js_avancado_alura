class NegociacaoService {
    constructor(){
        this._http = new HttpService();
    }

    obterNegociacoesDaSemana() {

        //return new Promise((resolve, reject) => {
        return this._http
                .get('http://localhost:3000/negociacoes/semana')
                .then(negociacoes => {
                    return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                })
                .catch(erro => {
                    console.log(erro);
                    throw new Error('Não foi possivel obter as negociações da semana');
                });
        };


    obterNegociacoesDaSemanaAnterior() {

        //return new Promise((resolve, reject) => {
        return this._http
                .get('http://localhost:3000/negociacoes/anterior')
                .then(negociacoes => {
                    return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                })
                .catch(erro => {
                    console.log(erro);
                    throw new Error('Não foi possivel obter as negociações da semana');
                });
        

    }

    obterNegociacoesDaSemanaRetrasada() {

        //return new Promise((resolve, reject) => {
        return this._http
                .get('http://localhost:3000/negociacoes/retrasada')
                .then(negociacoes => {
                    return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                })
                .catch(erro => {
                    console.log(erro);
                    throw new Error('Não foi possivel obter as negociações da semana');
                });


    }

    obterNegociacoes(){
        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ])
            .then(periodos => {
                let negociacoes = periodos
                    .reduce((dados, periodo) => dados.concat(periodo),[]);
                return negociacoes;
            })
            .catch(erro => {
                throw new Error(erro);
            });
    }
}