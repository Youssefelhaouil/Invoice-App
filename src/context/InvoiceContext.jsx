import React, { createContext, useState } from 'react';

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
    const [invoices, setInvoices] = useState([]);

    const addInvoice = (newInvoice) => {
        setInvoices([...invoices, newInvoice]);
    };


    return (
        <InvoiceContext.Provider value={{ invoices, addInvoice }}>
            {children}
        </InvoiceContext.Provider>
    );
};
