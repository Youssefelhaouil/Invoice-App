import React from 'react';

function BillFrom({ isDark, billFrom, setBillFrom,errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillFrom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <label
          className={`font-sans font-medium text-[15px] ${isDark ? 'text-light-gray' : 'text-m-gray'
            }`}
          htmlFor="StreetAddress"
        >
          Street Address
        </label>
        <input
          type="text"
          name="StreetAddress"
          onChange={handleChange}
          id="StreetAddress"
          value={billFrom.StreetAddress}
          className={`h-12 border-[1px] font-sans font-bold px-3 text-[15px] rounded ${isDark
            ? 'bg-dark-blue border-none text-white'
            : 'bg-white border-light-gray text-secondary-black'
            }`}
        />
        {errors.StreetAddress && <p className="text-red-500 text-xs">{errors.StreetAddress}</p>}

      </div>
      <div className="pt-3 flex md:grid md:grid-cols-2 gap-1">
        <div className="flex flex-col gap-1 w-1/3 md:w-auto">
          <label
            className={`font-sans font-medium text-[15px] ${isDark ? 'text-light-gray' : 'text-m-gray'
              }`}
            htmlFor="City"
          >
            City
          </label>
          <input
            type="text"
            name="City"
            onChange={handleChange}
            id="City"
            value={billFrom.City}
            className={`h-12 border-[1px] font-sans font-bold px-3 text-[15px] rounded ${isDark
              ? 'bg-dark-blue border-none text-white'
              : 'bg-white border-light-gray text-secondary-black'
              }`}
          />
        {errors.City && <p className="text-red-500 text-xs">{errors.City}</p>}

        </div>
        <div className="flex flex-col gap-1 w-1/3 md:w-auto">
          <label
            className={`font-sans font-medium text-[15px] ${isDark ? 'text-light-gray' : 'text-m-gray'
              }`}
            htmlFor="PostCode"
          >
            Post Code
          </label>
          <input
            type="text"
            name="PostCode"
            onChange={handleChange}
            id="PostCode"
            value={billFrom.PostCode}
            className={`h-12 border-[1px] font-sans font-bold px-3 text-[15px] rounded ${isDark
              ? 'bg-dark-blue border-none text-white'
              : 'bg-white border-light-gray text-secondary-black'
              }`}
          />
        {errors.PostCode && <p className="text-red-500 text-xs">{errors.PostCode}</p>}

        </div>
        <div className="flex flex-col gap-1 w-1/3 md:w-auto">
          <label
            className={`font-sans font-medium text-[15px] ${isDark ? 'text-light-gray' : 'text-m-gray'
              }`}
            htmlFor="Country"
          >
            Country
          </label>
          <input
            type="text"
            name="Country"
            onChange={handleChange}
            id="Country"
            value={billFrom.Country}
            className={`h-12 border-[1px] font-sans font-bold px-3 text-[15px] rounded ${isDark
              ? 'bg-dark-blue border-none text-white'
              : 'bg-white border-light-gray text-secondary-black'
              }`}
          />
        {errors.Country && <p className="text-red-500 text-xs">{errors.Country}</p>}

        </div>
      </div>
    </>
  );
}

export default BillFrom;
