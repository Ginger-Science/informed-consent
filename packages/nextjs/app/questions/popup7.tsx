"use client";

import React from 'react';

const Popup7 = ({ helpText, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white p-4 rounded shadow-md z-10 max-w-md mx-auto mt-20">
        <h2 className="text-lg font-semibold text-black">Maintaining privacy and operational integrity while proving compliance, especially with sensitive human health data, is critical. DSciLife’s solution offers zero-knowledge proof compliance validation to protect your data while meeting regulatory requirements.</h2>
        <p className="text-black">{helpText}</p>
        <button
          onClick={onClose}
          className="btn btn-secondary"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup7;
