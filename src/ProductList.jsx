import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    const CartItems = useSelector((state) => state.cart.items);

    const isAddedToCart = (plantName) => {
        return CartItems.some((item) => item.name === plantName);
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    const calculateTotalQuantity = () => {
        return CartItems ? CartItems.reduce((total, item) => total + item.quantity, 0) : 0;
    };

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://unsplash.com", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
                { name: "Spider Plant", image: "https://unsplash.com", description: "Filters formaldehyde and xylene from the air.", cost: "$12" },
                { name: "Peace Lily", image: "https://unsplash.com", description: "Removes mold spores and purifies the air.", cost: "$18" },
                { name: "Boston Fern", image: "https://unsplash.com", description: "Adds humidity to the air and removes toxins.", cost: "$20" },
                { name: "Rubber Plant", image: "https://unsplash.com", description: "Easy to care for and effective at removing toxins.", cost: "$17" },
                { name: "Aloe Vera", image: "https://unsplash.com", description: "Purifies the air and has healing properties for skin.", cost: "$14" }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                { name: "Lavender", image: "https://unsplash.com", description: "Calming scent, used in aromatherapy.", cost: "$20" },
                { name: "Jasmine", image: "https://unsplash.com", description: "Sweet fragrance, promotes relaxation.", cost: "$18" },
                { name: "Rosemary", image: "https://unsplash.com", description: "Invigorating scent, often used in cooking.", cost: "$15" },
                { name: "Mint", image: "https://unsplash.com", description: "Refreshing aroma, used in teas and cooking.", cost: "$12" },
                { name: "Lemon Balm", image: "https://unsplash.com", description: "Citrusy scent, relieves stress and promotes sleep.", cost: "$14" },
                { name: "Hyacinth", image: "https://unsplash.com", description: "Hyacinth is a beautiful flowering plant known for its fragrance.", cost: "$22" }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                { name: "Oregano", image: "https://unsplash.com", description: "The oregano plant contains compounds that can deter certain insects.", cost: "$10" },
                { name: "Marigold", image: "https://unsplash.com", description: "Natural insect repellent, also adds color to the garden.", cost: "$8" },
                { name: "Geraniums", image: "https://unsplash.com", description: "Known for their insect-repelling properties while adding a pleasant scent.", cost: "$20" },
                { name: "Basil", image: "https://unsplash.com", description: "Repels flies and mosquitoes, also used in cooking.", cost: "$9" },
                { name: "Citronella", image: "https://unsplash.com", description: "Strong citrus aroma effective at keeping mosquitoes away.", cost: "$16" },
                { name: "Catnip", image: "https://unsplash.com", description: "Repels mosquitoes and attracts cats.", cost: "$13" }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                { name: "Echinacea", image: "https://unsplash.com", description: "Boosts immune system, helps fight colds.", cost: "$16" },
                { name: "Peppermint", image: "https://unsplash.com", description: "Relieves digestive issues and headaches.", cost: "$13" },
                { name: "Chamomile", image: "https://unsplash.com", description: "Soothes anxiety and promotes sleep.", cost: "$15" },
                { name: "Calendula", image: "https://unsplash.com", description: "Heals wounds and soothes skin irritations.", cost: "$12" },
                { name: "Sage", image: "https://unsplash.com", description: "Supports memory and soothes sore throats.", cost: "$14" },
                { name: "Thyme", image: "https://unsplash.com", description: "Natural antiseptic properties and respiratory support.", cost: "$13" }
            ]
        }
    ];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };

    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://unsplash.com" alt="Paradise Nursery Logo" />
                        <a href="/" onClick={handleHomeClick}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>

                <div style={styleObjUl}>
                    <div>
                        <a href="#plants" onClick={handlePlantsClick} style={styleA}>Plants</a>
                    </div>
                    <div>
                        <a href="#cart" onClick={handleCartClick} style={styleA}>
                            <h1 className="cart">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                </svg>
                                <span className="cart_quantity_count">{calculateTotalQuantity()}</span>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((categoryObj, index) => (
                        <div key={index}>
                            <h1 className="plantname_heading">
                                <div className="plant_heading">{categoryObj.category}</div>
                            </h1>
                            <div className="product-list">
                                {categoryObj.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-description">{plant.description}</div>
                                        <div className="product-price">{plant.cost}</div>
                                        <button
                                            className={`product-button ${isAddedToCart(plant.name) ? 'added-to-cart' : ''}`}
                                            disabled={isAddedToCart(plant.name)}
                                            onClick={() => handleAddToCart(plant)}
                                        >
                                            {isAddedToCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
