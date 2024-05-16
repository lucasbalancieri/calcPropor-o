function calcular() {
    const inptTotal_tubos = document.querySelector('input#tubos')
    const inptTubos100 = document.querySelector('input#tubos-de-100')
    const inptNao_tubos = document.querySelector('input#nao-tubos')
    const inptCpvc = document.querySelector('input#cpvc')
    const resultado = document.querySelector('div#resultado')

    //Conversão para Número
    const total_tubos = Number(inptTotal_tubos.value);
    const tubos100 = Number(inptTubos100.value);
    const nao_tubos = Number(inptNao_tubos.value);
    const cpvc = Number(inptCpvc.value);

    //Processamento
    const tubos_conexoes = total_tubos + nao_tubos;
    const total_pedido = tubos_conexoes + cpvc;
    const perc_tubos = (total_tubos / tubos_conexoes) * 100;
    const perc_tubos100 = ((tubos100) / total_tubos) * 100;

    saida(total_tubos, nao_tubos, tubos100, tubos_conexoes, total_pedido, perc_tubos, perc_tubos100, cpvc);
    atualizarCoresPorcentagens(perc_tubos, perc_tubos100)

}

function atualizarCoresPorcentagens(perc_tubos, perc_tubos100){
    const td_tubos = document.querySelector("td#prct-tubos");
    const td_tubos100 = document.querySelector("td#prct-tubos-100");
    
    (perc_tubos > 60) ? td_tubos.style.background = 'red' : td_tubos.style.background = 'green';
    (perc_tubos100 > 40) ? td_tubos100.style.background = 'red' : td_tubos100.style.background = 'green';
}

function saida(total_tubos, nao_tubos, tubos100, tubos_conexoes, total_pedido, perc_tubos, perc_tubos100, cpvc) {
    resultado.style.display = 'flex';
    resultado.innerHTML = `
    <table>
        <tr>
            <td class="fixo">Total Tubos</td>
            <td class="out">${total_tubos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        </tr>

        <tr>
            <td class="fixo">Total Tubos de 100</td>
            <td class="out">${tubos100.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        </tr>

        <tr>
            <td class="fixo">CPVC</td>
            <td class="out">${cpvc.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        </tr>

        <tr>
            <td class="fixo">Não Tubos</td>
            <td class="out">${nao_tubos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        </tr>

        <tr>
            <td class="fixo">Tubos + Conexões</td>
            <td class="out">${tubos_conexoes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        </tr>

        <tr>
            <td class="fixo">Total do Pedido</td>
            <td class="out">${total_pedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        </tr>

        <tr>
            <td class="fixo">% Tubos</td>
            <td class="out" id="prct-tubos">${perc_tubos.toFixed(2) + '%'}</td>
        </tr>

        <tr>
            <td class="fixo">% Tubos de 100</td>
            <td class="out" id="prct-tubos-100">${perc_tubos100.toFixed(2) + '%'}</td>
        </tr>
    </table>
`;
}

function limpar(){
    resultado.innerHTML = '';
    resultado.style.display = 'none';
}