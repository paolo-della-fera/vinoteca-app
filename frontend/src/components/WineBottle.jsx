import rosso from '../assets/bottles/rosso.png'
import bianco from '../assets/bottles/bianco.png'
import rosato from '../assets/bottles/rosato.png'
import spumante from '../assets/bottles/spumante.png'

function WineBottle({ wine }) {
    // Determina l'immagine della bottiglia in base alla categoria del vino
    let immagine = ''

    if (wine.category === 'Rosso') {
        immagine = rosso
    } else if (wine.category === 'Bianco') {
        immagine = bianco
    } else if (wine.category === 'Rosato') {
        immagine = rosato
    } else if (wine.category === 'Spumante') {
        immagine = spumante
    }

    // Ritorna l'elemento immagine con la sorgente e l'attributo alt appropriati
    return <img src={immagine} alt={wine.category} />

}

export default WineBottle