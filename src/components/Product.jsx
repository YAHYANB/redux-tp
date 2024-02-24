import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/actions";

export default ({ data, isCart }) => {
    const dispatch = useDispatch();

    return <div className="product-item">
        <img src={data.thumbnail} />
        <h3 className="title">{data.title}</h3>
        <span className="price">{data.price.toFixed(2)} $</span><br />
        {
            isCart ?
            <>
              <span>Quantity: {data.quantity || 1}</span>
              <div className="items">
                <div className="item">
                  <button className="plus" onClick={()=>dispatch({type:'PLUS-QUANTITY' ,payload:data.id})}>+</button>
                  <button className="minus" onClick={()=>dispatch({type:'MINUS-QUANTITY' ,payload:data.id})}>-</button>
                </div>
                <div></div>
              </div>
              <button onClick={() => dispatch(removeFromCart(data.id))}>Supprimer</button>
            </>
            :
            <button onClick={() => dispatch(addToCart(data))}>Ajouter au panier</button>
        }
    </div>
}