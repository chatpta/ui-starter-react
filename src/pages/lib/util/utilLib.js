export function getRandomNumber( min, max ) {
    return Math.round( Math.random() * ( max - min ) * 2 ) / 2 + min;
}
