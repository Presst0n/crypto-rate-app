import React from 'react';
import './CryptoList.css';

function CryptoList(props) {

    let cryptoList = props.cryptoList;
    let liElements = cryptoList.map((obj) => {

        return (
            <li key={obj.currency}>
                <span className="CryptoLabel">Last rate: </span>
                <span className={`CryptoRate ${obj.cssClass}`}>{obj.lastRate} {obj.htmlArrow}</span>
                <span className="CurrencyTicker">{obj.currency}</span>
                <span className="CurrencySymbol">[{obj.symbol}]</span>
            </li>
        );
    })

    return (
        <div className="CryptoList">
            <ul className="TheList">
                {liElements}
            </ul>
        </div>
    );
}

export default CryptoList;