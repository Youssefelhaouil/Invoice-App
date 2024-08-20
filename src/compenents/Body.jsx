import React, { useState } from 'react'
import Button from './BodyCompenents/Button'
import NothingPage from './BodyCompenents/NothingPage'
import InvoiceForm from './BodyCompenents/InvoiceForm'

function Body({ isDark }) {
    const [newInvoice, setNewInvoice] = useState(false)

    return (
        <>
            <div className=' w-[730px] mx-auto  pt-[77px] lg:pt-[104] md:w-[327px]  '>
                <Button newInvoice={newInvoice} setNewInvoice={setNewInvoice} isDark={isDark} />
            </div>
            <div>
                <NothingPage isDark={isDark} />
            </div>
            {
                newInvoice &&
                 <div >
                    <InvoiceForm newInvoice={newInvoice} setNewInvoice={setNewInvoice} isDark={isDark} />
                </div>
            }
        </>
    )
}

export default Body
