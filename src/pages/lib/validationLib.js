import { isNameString } from "@chatpta/validate/lib/validate";

const handleChangeText = mutateFunction => event => {
    event.preventDefault();
    event.stopPropagation();

    mutateFunction( {
        [ event?.target?.name ]: {
            value: event.target.value,
            error: false
        }
    } );
}

const handleBlurText = mutateFunction => event => {

    if ( isNameString( event?.target?.value ) &&
        event?.target?.value?.toString()?.replaceAll( /\s/g, '' )?.length > 4 ) {

        mutateFunction( {
            [ event?.target?.name ]: {
                value: event.target.value,
                error: false
            }
        } );

    } else {

        mutateFunction( {
            [ event?.target?.name ]: {
                value: event.target.value,
                error: true
            }
        } );

    }
}

function isString( value ) {
    return typeof value === 'string' || value instanceof String;
}

export {
    handleChangeText,
    handleBlurText,
    isString
};
