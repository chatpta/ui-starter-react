export function postReq( body, url, jwt = '' ) {

    return new Request( url,
        {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': window.location.origin,
                'Authorization': "bearer " + jwt
            },
            body: JSON.stringify( body )
        } )
}

export function postReqWithVisitor( body, url, jwt = '', visitor = '' ) {

    return new Request( url,
        {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': window.location.origin,
                'Authorization': "bearer " + jwt,
                'Visitor': "bearer " + visitor
            },
            body: JSON.stringify( body )
        } )
}

export function postReqMultipart( formData, url, jwt = '' ) {

    return new Request( url,
        {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Access-Control-Allow-Origin': window.location.origin,
                'Authorization': "bearer " + jwt
            },
            body: formData
        } )
}

export function getReq( url, jwt = '' ) {

    return new Request( url,
        {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': window.location.origin,
                'Authorization': "bearer " + jwt
            }
        } )
}

export function patchReq( body, url, jwt = '' ) {

    return new Request( url,
        {
            method: 'PATCH',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': window.location.origin,
                'Authorization': "bearer " + jwt
            },
            body: JSON.stringify( body )
        } )
}

export function patchReqWithVisitor( body, url, jwt = '', visitor = '' ) {

    return new Request( url,
        {
            method: 'PATCH',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': window.location.origin,
                'Authorization': "bearer " + jwt,
                'Visitor': "bearer " + visitor
            },
            body: JSON.stringify( body )
        } )
}

export function deleteReq( body, url, jwt = '' ) {

    return new Request( url,
        {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': window.location.origin,
                'Authorization': "bearer " + jwt
            },
            body: JSON.stringify( body )
        } )
}

export function deleteReqWithVisitor( body, url, jwt = '', visitor = '' ) {

    return new Request( url,
        {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': window.location.origin,
                'Authorization': "bearer " + jwt,
                'Visitor': "bearer " + visitor
            },
            body: JSON.stringify( body )
        } )
}
