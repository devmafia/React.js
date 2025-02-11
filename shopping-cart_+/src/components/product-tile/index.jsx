import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../../store/slices/cart-slice"

export default function ProductTile({product}) {

    const dispatch = useDispatch()

    function handleAddToCart() {
        dispatch(addToCart(product))
    }

    function handleRemoveFromCart() {
        dispatch(removeFromCart(product.id))
    }

    return (
        <div className="group flex flex-col p-4 items-center gap-3">
            <div className="h-[180px]">
                <img src={product?.image} alt={product?.title} className="object-cover h-full w-full"/>
            </div>
            <div>
                <h1 className="w-40 truncate mt-3 font-bold text-lg">
                {product?.title}
                </h1>
            </div>
            <div className="flex items-center justify-center w-full mt-5">
                <button onClick={handleAddToCart} className="p-4 bg-red-950 text-white border-2 rounded-lg">Add to cart</button>
            </div>
            <div className="flex items-center justify-center w-full mt-5">
                <button onClick={handleRemoveFromCart} className="p-4 bg-red-950 text-white border-2 rounded-lg">Remove from cart</button>
            </div>
        </div>
    )
}