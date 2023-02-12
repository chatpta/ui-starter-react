export default function JsonToHtml( array ) {

    return array.map( ( element, index ) => {

        switch ( element?.htmlElement ) {
            case "h3":
                return (
                    <h3 key={ index } style={ { fontSize: "16px", paddingBottom: "24px" } }>
                        { element?.content }
                    </h3>
                );
            case "p":
                return (
                    <p key={ index } style={ { fontSize: "16px", paddingBottom: "24px" } }>
                        { element?.content }
                    </p>
                );
            case "ul":
                return (
                    <ul key={ index } style={ { fontSize: "16px", paddingBottom: "8px" } }>
                        { createListItems( element?.content ) }
                    </ul> );
            default:
                return null;
        }
    } );
};

function createListItems( array ) {
    return (
        array.map( ( element, index ) => {
            return ( <li key={ index }>{ element }</li> );
        } )
    );
}
