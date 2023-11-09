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
            {localItems.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Produit</th>
                            <th>Image</th>
                            <th>Quantité</th>
                            <th>Prix unitaire</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {localItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td><img className="img-panier" src={'/images/' + item.image}></img></td>
                                <td>
                                    <button className="btn-ligne" onClick={() => handleDecrement(item)}>-</button>
                                    {item.quantity}
                                    <button className="btn-ligne" onClick={() => handleIncrement(item)}>+</button>
                                </td>
                                <td className='td-prix'>{item.price} €</td>
                                <td className='td-prix'>{item.quantity * item.price} €</td>
                                <td>
                                    <button className="btn-remove" onClick={() => handleRemove(item)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h1>Le panier est vide</h1>
            )}

            {cartTotal > 0 && (
                <div className='total-panier'>Total du panier : {cartTotal} €</div>
            )}
        </div>
    );
}

export default Panier;