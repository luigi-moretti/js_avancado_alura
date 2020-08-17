class DateHelper{

    constructor(){
        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textoParaData(texto){

        //alterado para aceitar o novo formato
        if(!/\d{2}\/\d{2}\/\d{4}/.test(texto)) throw new Error('A Data deve estar no formato dd/mm/aaaa');
        return new Date(...texto.split('/').reverse().map((item,indice) => item - indice % 2));


        // if(!/^\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd');
        // return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
    }

}