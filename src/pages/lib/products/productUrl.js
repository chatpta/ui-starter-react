import { pathAndURL } from "../../../config";

export function createProductLink( product ) {

    if ( product?.slug ) {
        return pathAndURL.productPath( product?.slug )
    } else {
        return pathAndURL.productPath( product?.item_id )
    }
}
