import axios from 'axios';
import { CardElement } from '@stripe/react-stripe-js';
import '../css/Paiement.css';

const handlePayment = async (cardData) => {
    try {
        const response = await axios.post('http://localhost/api-php-react/paiement/', { cardData });
        if (response.status >= 200 && response.status < 300) {
            const responseData = response.data;
            // Faites quelque chose avec les données de réponse (par exemple, affichez un message de succès)
            console.log('Paiement réussi :', responseData);
        } else {
            // Gérez les erreurs de traitement de la réponse du serveur
            console.error('Erreur lors du paiement :', response.status, response.statusText);
        }
    } catch (error) {
        // Gérez les erreurs liées à la requête elle-même (par exemple, problème de réseau)
        console.error('Erreur lors de la requête:', error.message);
    }
};
const Paiement = () => {
    return (
        <form onSubmit={handlePayment} className="formulaire-paiement">
            <CardElement className="formulaire-paiement-element" name="" options={{hidePostalCode:true}}/>
            <button type="submit" className="formulaire-paiement-bouton">Payer</button>
        </form>
    );
};
export default Paiement;




