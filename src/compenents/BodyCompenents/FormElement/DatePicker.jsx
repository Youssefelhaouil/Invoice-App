import React from 'react';
import { format, addDays } from 'date-fns';

function DatePicker({ isDark, date, setDate ,invoice,isEditing }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'date') {
      setDate((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (name === 'PaymentTerms') {
      const paymentTermsMap = {
        thirty: 30,
        fourteen: 14,
        seven: 7,
        one: 1,
      };
      const selectedTerm = paymentTermsMap[value];
      const issueDate = new Date(date.date);
      const dueDate = addDays(issueDate, selectedTerm);
      const formattedDueDate = format(dueDate, 'dd MMM yyyy');

      setDate((prev) => ({
        ...prev,
        [name]: value,
        dueDate: formattedDueDate,
      }));
    }
  };

  return (
    <div className='pt-3 grid grid-cols-2 gap-1'>
      <div className='flex flex-col gap-1'>
        <label className={`font-sans font-medium text-[15px] ${isDark ? 'text-light-gray' : 'text-m-gray'}`} htmlFor='date'>
          Issue Date
        </label>
        <input
          type='date'
          onChange={handleChange}
          value={date.date}
          name='date'
          required
          id='date'
          className={`h-12 border-[1px] font-sans font-bold px-3 text-[15px] rounded ${
            isDark ? 'bg-dark-blue border-none text-white' : 'bg-white border text-secondary-black-light-gray'
          }`}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label className={`font-sans font-medium text-[15px] ${isDark ? 'text-light-gray' : 'text-m-gray'}`} htmlFor='Payment'>
          Payment Terms
        </label>
        <select
          className={`h-12 border-[1px] font-sans font-bold px-3 text-[15px] rounded ${
            isDark ? 'bg-dark-blue border-none text-white' : 'bg-white border text-secondary-black-light-gray'
          }`}
          name='PaymentTerms'
          value={date.PaymentTerms}
          id='PaymentTerms'
          onChange={handleChange}
        >
          <option value='thirty'>Net 30 Days</option>
          <option value='fourteen'>Net 14 Days</option>
          <option value='seven'>Net 7 Days</option>
          <option value='one'>Net 1 Day</option>
        </select>
      </div>
    </div>
  );
}

export default DatePicker;
