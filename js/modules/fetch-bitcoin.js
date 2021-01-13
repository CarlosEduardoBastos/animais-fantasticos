export default function initBitcoin(){
    const url = 'https://www.blockchain.com/ticker';
    const btcPreco = document.querySelector('.btc-preco');
    fetch(url).then(response => response.json()).then(btc => {
        btcPreco.innerText = (1000 / btc.BRL.sell).toFixed(4)
    }).catch(erro=>{
        console.log(Error(erro))
    })
}