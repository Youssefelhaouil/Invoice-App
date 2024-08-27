import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './compenents/Header';
import Body from './compenents/Body';
import { InvoiceProvider } from './context/InvoiceContext.jsx';
import InvoiceDetails from './compenents/BodyCompenents/InvoiceDetails'




function App() {
  const [isDark, setDark] = useState(false);
  const [newInvoice, setNewInvoice] = useState(false);
  const [isEditing, setIsEditing] = useState(false);



  useEffect(() => {

    if (isDark) {
      document.body.classList.add('bg-dark-bg')
      document.body.classList.remove('bg-light-bg')

    } else {
      document.body.classList.add('bg-light-bg')
      document.body.classList.remove('bg-dark-bg')
    }

  }, [isDark])

  useEffect(() => {
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const navigationType = navigationEntries[0].type;
      if (navigationType === 'reload') {
        window.location.replace('/'); // Redirect to home page on reload
      }
    }
  }, []);

  return (
    <>
      <Router>
        <InvoiceProvider>

          <Header isDark={isDark} setDark={setDark} />
          <Routes>
            <Route path='/' element={<Body isDark={isDark} isEditing={isEditing} setIsEditing={setIsEditing} setNewInvoice={setNewInvoice} newInvoice={newInvoice} />} />
            <Route path='/invoice/:invoiceId' element={<InvoiceDetails isEditing={isEditing} setIsEditing={setIsEditing} isDark={isDark} setNewInvoice={setNewInvoice} newInvoice={newInvoice} />} />

          </Routes>

        </InvoiceProvider>

      </Router>


    </>
  )
}

export default App
