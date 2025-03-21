import React, { useState } from 'react';

function ManageAddresses() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pin: '',
    locality: '',
    city: '',
    state: '',
    landmark: '',
    alternatePhone: '',
    addressType: 'Home',
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle address submission logic here
    setShowForm(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleEdit = () => {
    // Handle edit logic here
    console.log("Edit address");
  };

  const handleDelete = () => {
    // Handle delete logic here
    console.log("Delete address");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 font-sans">
      <h2 className="text-lg font-bold mb-4">Manage Addresses</h2>

      <button
        className="w-full py-2 mb-6 bg-gray-100 text-left font-semibold text-gray-700 hover:bg-gray-200 rounded-md"
        onClick={() => setShowForm(!showForm)}
      >
        + ADD A NEW ADDRESS
      </button>

      {showForm && (
        <form onSubmit={handleFormSubmit} className="border border-gray-300 rounded-lg p-4 mb-6">
          {/* Form Fields */}
          {Object.keys(formData).map((key) => (
            <div className="mb-4" key={key}>
              <label className="block text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input
                type={key === 'mobile' || key === 'pin' || key === 'alternatePhone' ? 'text' : 'text'}
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                required={key !== 'landmark' && key !== 'alternatePhone'} // make optional
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Save Address
          </button>
        </form>
      )}

      {/* Existing address card */}
      <div className="border border-gray-300 bg-white rounded-lg p-4 relative flex items-start">
        <div className="absolute top-2 left-2 bg-gray-200 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
          HOME
        </div>
        <div className="ml-16">
          <h3 className="text-md font-semibold">Ajay Kammar <span className="text-sm font-normal text-gray-700">8904736408</span></h3>
          <p className="text-sm text-gray-700">
            house no-2512, kangrali B K , Belgaum, Kamgrali B K BELGAUM, Belagavi, Karnataka - <strong>590010</strong>
          </p>
        </div>
        <div className="ml-auto relative">
          <div className="text-gray-500 cursor-pointer" onClick={toggleDropdown}>
            <span className="text-2xl">⋮</span>
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
              <div className="py-2">
                <button onClick={handleEdit} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Edit
                </button>
                <button onClick={handleDelete} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageAddresses;
