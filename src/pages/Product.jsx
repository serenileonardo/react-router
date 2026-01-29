import { useParams } from "react-router"
import { useEffect, useState } from "react";

export default function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    if (!product) {
        return <p>Caricamento...</p>
    }

    return (
        <div>
            <h3>{product.title}</h3>
            <img src={product.image} />
            <p>{product.description}</p>
            <p>{product.price} </p>
        </div>

    )
}