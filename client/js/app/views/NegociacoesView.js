class NegociacoesView extends View{
    constructor(elemento){
        super(elemento);
    }


    template(model) {
        return `
            <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            </tbody>
                ${model.negociacoes.map(n=>
                     `
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `
                ).join('')}
            <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${model.volumeTotal}
                    </td>
            </tfoot>
            </table>
        `
    }

}