import { connect } from "react-redux";
import reduxStoreUtility from "@chatpta/redux-store-utility";
import LoginElement from "./LoginElement";


const prsAct = reduxStoreUtility.createAsyncActions( "Products" );
const productsFetch = dispatch => request => dispatch( prsAct.productsFetch( request ) );

const mapStateToProps = state => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        productsFetch: productsFetch( dispatch )
    };
};

const ProductsListContainer = connect( mapStateToProps, mapDispatchToProps )( LoginElement );

export default ProductsListContainer;
