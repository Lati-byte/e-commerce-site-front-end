import React from "react";
import PropTypes from 'prop-types';
import './Item.css';
import { Link } from "react-router-dom";

const Item = (props) => {
    const handleImageClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="item">
            <Link to={`/product/${props.id}`}>
                <img onClick={handleImageClick} src={props.image} alt="" />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    R{props.new_price}
                </div>
                <div className="item-price-old">
                    R{props.old_price}
                </div>
            </div>
        </div>
    );
}

// Define PropTypes for Item component
Item.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    new_price: PropTypes.number.isRequired,
    old_price: PropTypes.number.isRequired,
};

export default Item;
