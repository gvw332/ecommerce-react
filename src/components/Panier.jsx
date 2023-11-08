import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import '../css/Panier.css';

function Panier() {
    const { items, cartTotal, updateItemQuantity, removeItem } = useCart();
    const [localItems, setLocalItems] = useState(items);

    useEffect(() => {
        // Mettez à jour l'état local chaque fois que les articles changent
        setLocalItems(items);
    }, [items]);

    const handleRemove = (item) => {
        removeItem(item.id);
    }

    const handleIncrement = (item) => {
        const updatedItems = localItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                };
            }
            return cartItem;
        });
        setLocalItems(updatedItems);
        updateItemQuantity(item.id, item.quantity + 1);
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            const updatedItems = localItems.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity - 1,
                    };
                }
                return cartItem;
            });
            setLocalItems(updatedItems);
            updateItemQuantity(item.id, item.quantity - 1);
        } else {
            removeItem(item.id);
        }
    };

    return (
        <div className='element-panier'>
            <h1>Panier</h1>
            <ul>
                {localItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - Quantité : {item.quantity} - Prix : {item.price} - Total : {item.quantity * item.price}
                        <button className="btn-ligne" onClick={() => handleDecrement(item)}>-</button>{item.quantity}
                        <button className="btn-ligne" onClick={() => handleIncrement(item)}>+</button>
                        <button className="btn-remove" onClick={() => handleRemove(item)}>Supprimer</button>
                    </li>
                ))}
                
            </ul>
            
            {cartTotal > 0 ? (
                <div>Total du panier : {cartTotal}</div>
            ) : (
                <h1>Le panier est vide</h1>
            )}
        </div>
    );
}

export default Panier;