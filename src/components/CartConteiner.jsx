import Carritems from "./Carritems";
import Carrito from "./Carrito";

const CartConteiner = () => {
    return (
        <div className="bg-danger p-3 position-relative">
            <Carrito color="yellow" />
            <Carritems count={5}/>
        </div>
    )
}

export default CartConteiner;