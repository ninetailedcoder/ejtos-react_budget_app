import React, { useState } from 'react';

const CurrencySelector = () => {
  const [currency, setSelectedCurrency] = useState('£ Pound');

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
  };
return(
    <div>
        <select className="col-sm btn" style={{backgroundColor: 'limegreen', color: 'white', marginBottom: '3rem'}} value={currency} onChange={handleCurrencyChange}>
            <option defaultValue="£">Currency (£ Pound)
            </option>
            <option value="$">Currency ($ Dollar)
            </option>
            <option value="€">Currency (€ Euro)
            </option>
            <option value="₹">Currency (₹ Ruppee)
            </option>
        </select>
    </div>
    )
}
export default CurrencySelector;