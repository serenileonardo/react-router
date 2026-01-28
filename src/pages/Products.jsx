
import { useEffect, useState } from "react"

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1>Prodotti</h1>

            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.price} €</p>
                </div>
            ))}
        </div>
    )
}

export default Products



