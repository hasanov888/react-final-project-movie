import React, { useState } from "react";

function Header() {
  const [language, setLanguage] = useState("AZ"); 

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage); 
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="app-title">CineBox</h1>
        <div className="header-actions">
          {}
          <button
            className="language-button"
            onClick={() => handleLanguageChange(language === "AZ" ? "EN" : "AZ")}
          >
            {language === "AZ" ? "EN" : "AZ"} {}
          </button>

          {}
          <button className="login-button">Daxil ol</button>
          <button className="signup-button">Qeydiyyat</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
