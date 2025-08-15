import React, { useState } from 'react';
import './Bookservice.css';

const Bookservice = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    files: null,
    notRobot: false,
    // serviceType: '',
    // theme: ''
  });

  const [colorTheme, setColorTheme] = useState({
    primary: '#f9f9f9',
    secondary: '#f8c537',
    background: '#f9f9f9'
  });
 // Updated themes to match your image
  const colorOptions = [
    { name: 'Blue', value: '#1a3e72' },
    { name: 'Green', value: '#2e7d32' },
    { name: 'Red', value: '#c62828' },
    { name: 'Purple', value: '#6a1b9a' },
    { name: 'Dark', value: '#212121' },
    { name: 'Custom', value: '' }
  ];
    const [showColorPicker, setShowColorPicker] = useState(false);
  const [customColor, setCustomColor] = useState('#ffffff');

  const handleThemeChange = (color) => {
    if (color.name === 'Custom') {
      setShowColorPicker(true);
      return;
    }
    setColorTheme({
      primary: color.value,
      secondary: getComplementaryColor(color.value),
      background: '#f9f9f9'
    });
    setShowColorPicker(false);
  };

  const handleCustomColorChange = (e) => {
    const newColor = e.target.value;
    setCustomColor(newColor);
    setColorTheme({
      primary: newColor,
      secondary: getComplementaryColor(newColor),
      background: '#f9f9f9'
    });
  };

  // Helper function to get complementary color
  const getComplementaryColor = (hex) => {
    // Simple complementary color calculation
    // For a real app, you might want a more sophisticated approach
    if (hex === '#1a3e72') return '#f8c537';
    if (hex === '#2e7d32') return '#a5d6a7';
    if (hex === '#c62828') return '#ff8a65';
    if (hex === '#6a1b9a') return '#ce93d8';
    if (hex === '#212121') return '#757575';
    return '#f8c537'; // default
  };
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files : value
    }));
  };

//   const handleThemeChange = (theme) => {
//     setColorTheme({
//       primary: theme.primary,
//       secondary: theme.secondary,
//       background: theme.background
//     });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="book-service-container" >
      <div className="book-service-content">
        <section className="book-service" style={{ color: colorTheme.primary }}>
          <div className="container">
            <h1>Book Service Now</h1>
            
            <form onSubmit={handleSubmit} className="service-form" style={{
                 backgroundColor: colorTheme.primary,
                  color: colorTheme.secondary
                }}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name*</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+97xxxxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group file-upload">
                <label>Upload Room Picture(s)</label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    id="files"
                    name="files"
                    onChange={handleChange}
                    multiple
                    accept="image/*"
                  />
                  <label htmlFor="files" className="file-label">
                    Choose Files
                  </label>
                  <span className="file-name">
                    {formData.files ? `${formData.files.length} file(s) selected` : 'No file chosen'}
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject (optional)"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write something..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="notRobot"
                    checked={formData.notRobot}
                    onChange={handleChange}
                    required
                  />
                  <span className="checkmark"></span>
                  I'm not a robot
                </label>
              </div>

              {/* <div className="service-options">
                <h3>Choose Service Type</h3>
                <div className="options-grid">
                  <label className="option-card">
                    <input
                      type="radio"
                      name="serviceType"
                      value="roller"
                      checked={formData.serviceType === 'roller'}
                      onChange={handleChange}
                    />
                    <div className="option-content">
                      <span className="option-title">Roller</span>
                    </div>
                  </label>

                  <label className="option-card">
                    <input
                      type="radio"
                      name="serviceType"
                      value="brush"
                      checked={formData.serviceType === 'brush'}
                      onChange={handleChange}
                    />
                    <div className="option-content">
                      <span className="option-title">Brush</span>
                    </div>
                  </label>

                  <label className="option-card">
                    <input
                      type="radio"
                      name="serviceType"
                      value="spray"
                      checked={formData.serviceType === 'spray'}
                      onChange={handleChange}
                    />
                    <div className="option-content">
                      <span className="option-title">Spray</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="theme-selection">
                <h3>Choose Theme</h3>
                <select
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  className="theme-select"
                >
                  <option value="">Select a theme</option>
                  <option value="modern">Modern</option>
                  <option value="classic">Classic</option>
                  <option value="minimalist">Minimalist</option>
                  <option value="vintage">Vintage</option>
                </select>
              </div> */}

              <button 
                type="submit" 
                className="submit-btn"
                // style={{
                //   backgroundColor: colorTheme.primary,
                //   color: colorTheme.secondary
                // }}
              >
                Book Appointment
              </button>
            </form>
          </div>
        </section>

 <div className="theme-selector">
          <h3>Choose Theme</h3>
          <div className="color-options">
            {colorOptions.map((color, index) => (
              <div
                key={index}
                className={`color-option ${color.name === 'Custom' ? 'custom-option' : ''}`}
                onClick={() => handleThemeChange(color)}
                style={{
                  backgroundColor: color.value || 'transparent',
                  border: colorTheme.primary === color.value ? `2px solid ${colorTheme.secondary}` : '1px solid #ddd'
                }}
                title={color.name}
              >
                {color.name === 'Custom' && (
                  <span className="custom-label">+</span>
                )}
              </div>
            ))}
          </div>

          {showColorPicker && (
            <div className="color-picker-container">
              <input
                type="color"
                value={customColor}
                onChange={handleCustomColorChange}
                className="color-picker"
              />
              <span className="color-value">{customColor}</span>
            </div>
          )}

          <div className="selected-theme-preview">
            <div className="theme-preview" style={{ backgroundColor: colorTheme.primary }}>
              <div className="theme-accent" style={{ backgroundColor: colorTheme.secondary }}></div>
            </div>
            <div className="theme-info">
              <span className="theme-name">Current Theme</span>
              <span className="theme-color-code">{colorTheme.primary}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Bookservice;