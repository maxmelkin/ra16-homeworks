import React from 'react';
import PropTypes from 'prop-types';
import ItemModel from "./ItemModel";
import './App.css';

class ShopItemClass extends React.Component {

    render() {
        const {item} = this.props
        return (
            <div className="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="description">{item.descriptionFull}</div>
                <div className="highlight-window mobile"><div className="highlight-overlay"/></div>
                <div className="divider"/>
                <div className="purchase-info">
                    <div className="price">{item.currency}{item.price}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        )
    }
}

ShopItemClass.propTypes = {
    item: PropTypes.instanceOf(ItemModel).isRequired,
}

export default ShopItemClass;