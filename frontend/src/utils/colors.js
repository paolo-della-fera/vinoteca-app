// Funzione per ottenere il colore della categoria del vino
export function getCategoryColor(category) {
    if (category === 'Rosso') {
        return 'var(--rosso)'
    } else if (category === 'Bianco') {
        return 'var(--bianco)'
    } else if (category === 'Rosato') {
        return 'var(--rosato)'
    } else if (category === 'Spumante') {
        return 'var(--spumante)'
    }
    return ''
}