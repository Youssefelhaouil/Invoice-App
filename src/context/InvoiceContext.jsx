import React, { createContext, useState } from 'react';

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
    const [invoices, setInvoices] = useState([]);

    const addInvoice = (newInvoice) => {
        setInvoices([...invoices, newInvoice]);
    };
    const deleteInvoice = (id) => {
        setInvoices((prevInvoices) => prevInvoices.filter(invoice => invoice.id !== id));
    };
    const updateInvoiceStatus = (id, updatedInvoice) => {
        setInvoices(prevInvoices =>
            prevInvoices.map(invoice =>
                invoice.id === id ? { ...invoice, ...updatedInvoice } : invoice
            )
        );
    };


    return (
        <InvoiceContext.Provider value={{ invoices, addInvoice, updateInvoiceStatus ,deleteInvoice }}>
            {children}
        </InvoiceContext.Provider>
    );
};
