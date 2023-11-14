// kainos skaiciavimas
let kaina = 20
document.getElementById('kubo-kaina').textContent = kaina

let calculateButton = document.getElementById('calculate')
calculateButton.addEventListener('click', () => {
    let rastoIlgis = document.getElementById('rasto-ilgis').valueAsNumber
    let rastoPlotis = document.getElementById('rasto-plotis').valueAsNumber
    let rastoAukstis = document.getElementById('rasto-aukstis').valueAsNumber
    let rastuKiekis = document.getElementById('rastu-kiekis').valueAsNumber
    
    let rastuKubatura = rastoIlgis * rastoPlotis * rastoAukstis * rastuKiekis
    let uzsakymoKaina = rastuKubatura * kaina

    let results = document.getElementById('results')
    results.innerHTML = `<p>Bendra užsakymo kubatūra: ${rastuKubatura}m<sup>3</sup><p>`
    results.innerHTML += `<p>Užsakymo suma: ${uzsakymoKaina}EUR`
})

document.getElementById('rasto-ilgis').addEventListener('keyup', (event) => {
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.class.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.class.remove('show')
    }
})