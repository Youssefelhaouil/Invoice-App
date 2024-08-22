import { useState, useEffect } from 'react';
import Header from './compenents/Header';
import Body from './compenents/Body';
import { InvoiceProvider } from './context/InvoiceContext.jsx';
// import InvoiceDetails from './BodyCompenents/InvoiceDetails'




function App() {
  const [isDark, setDark] = useState(false);

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

  }, [])

  return (
    <>
      <InvoiceProvider>

        <Header isDark={isDark} setDark={setDark} />
        <Body isDark={isDark} />

        {/* <InvoiceDetails isDark={isDark} /> */}
      </InvoiceProvider>

    </>
  )
}

export default App
