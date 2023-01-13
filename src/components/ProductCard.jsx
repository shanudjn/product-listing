import React from "react";


export const ProductCard = ({ product }) => {
    return (
        <div className="card">
            <img src={product.image} alt={product.name} className="image" />
            <div className="card-content">
                <em>{product.brand}</em>
                <span>{product.name}</span>
                <b>₹{product.price}</b>
                <span> Size: {product.size.join(", ")}</span>
            </div>
        </div>
    );
};
