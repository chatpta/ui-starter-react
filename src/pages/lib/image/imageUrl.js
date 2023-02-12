import { pathAndURL } from "../../../config";

export function createUrlForCard( item, size = '1500', imageNo = 0 ) {

    const imageUrl = item?.image_urls[ imageNo ];

    if ( imageUrl && item?.all_image_sizes_available ) {
        return `${ pathAndURL.imageUrl() }/${ imageUrl.replaceAll( '1500', size ) }`;
    } else {
        return `${ pathAndURL.imageUrl() }/${ imageUrl.replaceAll( '1500', '1500' ) }`;
    }
}

export function createUrlsForItem( item, size = '1500' ) {

    return item?.image_urls?.map( imageUrl => {

        if ( imageUrl && item?.all_image_sizes_available ) {
            return `${ pathAndURL.imageUrl() }/${ imageUrl.replaceAll( '1500', size ) }`;
        } else {
            return `${ pathAndURL.imageUrl() }/${ imageUrl.replaceAll( '1500', '1500' ) }`;
        }

    } );

}

export function createImageUrl( receivedUrlString, size = '1500' ) {

    if ( receivedUrlString && typeof receivedUrlString === "string" ) {
        return `${ pathAndURL.imageUrl() }/${ receivedUrlString.replaceAll( '1500', size ) }`;
    }
}
