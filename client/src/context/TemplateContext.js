// TemplateContext.js
import React, { createContext, useEffect, useState } from 'react';

const TemplateContext = createContext();

const TemplateContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetching template data from API on page load
    fetch('/api/v1/templates')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <TemplateContext.Provider value={{ data, setData }}>
      {children}
    </TemplateContext.Provider>
  );
};

export { TemplateContext, TemplateContextProvider };