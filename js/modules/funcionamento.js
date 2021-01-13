export default function initFuncionamento(){
    const funcionamento = document.querySelector("[data-semana]");
    const diaSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horariosSemana = funcionamento.dataset.horario.split(',').map(Number)
    const dataAgora = new Date();
    const diasAgora = dataAgora.getDay();
    const horasAgora = dataAgora.getHours();
    const semanaAberta = diaSemana.indexOf(diasAgora) !== -1;
    const horarioAberto = horasAgora >= horariosSemana[0] && horasAgora < horariosSemana[1]
    console.log(horarioAberto)
    if(semanaAberta && horarioAberto){
        funcionamento.classList.add('aberto')
    }
}