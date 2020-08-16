class NegociacaoService {
    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', 'http://localhost:3000/negociacoes/semana'); /*'negociacoes/semana'*/
    
            xhr.onreadystatechange = () => {
                /* estado da requisição:
                 0:requisição ainda não iniciada
                 1:conexão com o servidor estabelecida
                 2:requisição recebida
                 3:processando requisição
                 4:requisição concluída e a resposta está pronta
                */
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociacoes da semana');
                    }
                }
            }
            xhr.send();
        })

    }

    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject)=>{

            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', 'http://localhost:3000/negociacoes/anterior'); /*'negociacoes/semana'*/
    
            xhr.onreadystatechange = () => {
                /* estado da requisição:
                 0:requisição ainda não iniciada
                 1:conexão com o servidor estabelecida
                 2:requisição recebida
                 3:processando requisição
                 4:requisição concluída e a resposta está pronta
                */
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociacoes da semana anterior');
                    }
                }
            }
            xhr.send();

        })

    }

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', 'http://localhost:3000/negociacoes/retrasada'); /*'negociacoes/semana'*/
    
            xhr.onreadystatechange = () => {
                /* estado da requisição:
                 0:requisição ainda não iniciada
                 1:conexão com o servidor estabelecida
                 2:requisição recebida
                 3:processando requisição
                 4:requisição concluída e a resposta está pronta
                */
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociacoes da semana retrasada');
                    }
                }
            }
            xhr.send();

        });

    }
}