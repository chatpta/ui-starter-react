export function createProductPrice( product ) {

    let price = ( parseInt( product?.price ) / 100.0 ).toFixed( 2 );

    if ( isNaN( price ) ) {
        price = null;
    }

    return ( price || '0.00' );

}

export function createProductAvailableCount( product ) {

    if ( parseInt( product?.quantity_available ) > 0 ) {

        return product?.quantity_available + " available";

    } else {

        return "Not available";

    }

}

export function createProductWeight( product ) {

    let weightToDisplay;
    let weightInGrams = parseInt( product?.weight?.grams );
    let weightInKg = ( parseInt( product?.weight?.grams ) / 1000.0 ).toFixed( 2 );

    if ( isNaN( weightInGrams ) ) {

        weightToDisplay = "0.00 Kg";

    } else {

        if ( weightInGrams <= 1000 ) {

            weightToDisplay = weightInGrams + " grams"

        } else {

            weightToDisplay = weightInKg + " Kg"

        }

    }

    return weightToDisplay;

}

export function formatPrice( priceInCents ) {

    let priceCAD = ( parseInt( priceInCents ) / 100.0 ).toFixed( 2 );

    if ( isNaN( priceCAD ) ) {
        priceCAD = null;
    }

    return ( priceCAD || '0.00' );

}
