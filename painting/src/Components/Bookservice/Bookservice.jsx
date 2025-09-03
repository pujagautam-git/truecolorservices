// import React, { useState } from 'react';
// import './Bookservice.css';

// const Bookservice = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//     files: null,
//     notRobot: false,
    
//   });

//   const [colorTheme, setColorTheme] = useState({
//     primary: '#f9f9f9',
//     secondary: '#f8c537',
//     background: '#f9f9f9'
//   });
 
//   const colorOptions = [
//     { name: 'Blue', value: '#1a3e72' },
//     { name: 'Green', value: '#2e7d32' },
//     { name: 'Red', value: '#c62828' },
//     { name: 'Purple', value: '#6a1b9a' },
//     { name: 'Dark', value: '#212121' },
//     { name: 'Custom', value: '' }
//   ];
//     const [showColorPicker, setShowColorPicker] = useState(false);
//   const [customColor, setCustomColor] = useState('#ffffff');

//   const handleThemeChange = (color) => {
//     if (color.name === 'Custom') {
//       setShowColorPicker(true);
//       return;
//     }
//     setColorTheme({
//       primary: color.value,
//       secondary: getComplementaryColor(color.value),
//       background: '#f9f9f9'
//     });
//     setShowColorPicker(false);
//   };

//   const handleCustomColorChange = (e) => {
//     const newColor = e.target.value;
//     setCustomColor(newColor);
//     setColorTheme({
//       primary: newColor,
//       secondary: getComplementaryColor(newColor),
//       background: '#f9f9f9'
//     });
//   };

 
//   const getComplementaryColor = (hex) => {

//     if (hex === '#1a3e72') return '#f8c537';
//     if (hex === '#2e7d32') return '#a5d6a7';
//     if (hex === '#c62828') return '#ff8a65';
//     if (hex === '#6a1b9a') return '#ce93d8';
//     if (hex === '#212121') return '#757575';
//     return '#f8c537'; // default
//   };
//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : type === 'file' ? files : value
//     }));
//   };



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="book-service-container" >
//       <div className="book-service-content">
//         <section className="book-service" style={{ color: colorTheme.primary }}>
//           <div className="container">
//             <h1>Book Service Now</h1>
            
//             <form onSubmit={handleSubmit} className="service-form" style={{
//                  backgroundColor: colorTheme.primary,
//                   color: colorTheme.secondary
//                 }}>
//               <div className="form-group">
//                 <label htmlFor="fullName">Full Name*</label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   placeholder="Your full name"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="email">Email*</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="example@email.com"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="phone">Phone Number*</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     placeholder="+61xxxxxxxxx"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-group file-upload">
//                 <label>Upload Room Picture(s)</label>
//                 <div className="file-input-wrapper">
//                   <input
//                     type="file"
//                     id="files"
//                     name="files"
//                     onChange={handleChange}
//                     multiple
//                     accept="image/*"
//                   />
//                   <label htmlFor="files" className="file-label">
//                     Choose Files
//                   </label>
//                   <span className="file-name">
//                     {formData.files ? `${formData.files.length} file(s) selected` : 'No file chosen'}
//                   </span>
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="subject">Subject</label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   placeholder="Subject (optional)"
//                   value={formData.subject}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="message">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   placeholder="Write something..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                 ></textarea>
//               </div>

//               <div className="checkbox-group">
//                 <label className="checkbox-label">
//                   <input
//                     type="checkbox"
//                     name="notRobot"
//                     checked={formData.notRobot}
//                     onChange={handleChange}
//                     required
//                   />
//                   <span className="checkmark"></span>
//                   I'm not a robot
//                 </label>
//               </div>

             

//               <button 
//                 type="submit" 
//                 className="submit-btn"
                
//               >
//                 Book Appointment
//               </button>
//             </form>
//           </div>
//         </section>

//  <div className="theme-selector">
//           <h3>Choose Theme</h3>
//           <div className="color-options">
//             {colorOptions.map((color, index) => (
//               <div
//                 key={index}
//                 className={`color-option ${color.name === 'Custom' ? 'custom-option' : ''}`}
//                 onClick={() => handleThemeChange(color)}
//                 style={{
//                   backgroundColor: color.value || 'transparent',
//                   border: colorTheme.primary === color.value ? `2px solid ${colorTheme.secondary}` : '1px solid #ddd'
//                 }}
//                 title={color.name}
//               >
//                 {color.name === 'Custom' && (
//                   <span className="custom-label">+</span>
//                 )}
//               </div>
//             ))}
//           </div>

//           {showColorPicker && (
//             <div className="color-picker-container">
//               <input
//                 type="color"
//                 value={customColor}
//                 onChange={handleCustomColorChange}
//                 className="color-picker"
//               />
//               <span className="color-value">{customColor}</span>
//             </div>
//           )}

//           <div className="selected-theme-preview">
//             <div className="theme-preview" style={{ backgroundColor: colorTheme.primary }}>
//               <div className="theme-accent" style={{ backgroundColor: colorTheme.secondary }}></div>
//             </div>
//             <div className="theme-info">
//               <span className="theme-name">Current Theme</span>
//               <span className="theme-color-code">{colorTheme.primary}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default Bookservice;



// service_ullc9jm
//service_mg2lm9v


import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./Bookservice.css";

const Bookservice = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    // files: null,
    notRobot: false,
  });

  const [colorTheme, setColorTheme] = useState({
    primary: "#f9f9f9",
    secondary: "#f8c537",
    background: "#f9f9f9",
  });

  const colorOptions = [
    { name: "Blue", value: "#1a3e72" },
    { name: "Green", value: "#2e7d32" },
    { name: "Red", value: "#c62828" },
    { name: "Purple", value: "#6a1b9a" },
    { name: "Dark", value: "#212121" },
    { name: "Custom", value: "" },
  ];

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [customColor, setCustomColor] = useState("#ffffff");
  const [isSubmitting, setIsSubmitting] = useState(false);
const [showThankYou, setShowThankYou] = useState(false);


  const handleThemeChange = (color) => {
    if (color.name === "Custom") {
      setShowColorPicker(true);
      return;
    }
    setColorTheme({
      primary: color.value,
      secondary: getComplementaryColor(color.value),
      background: "#f9f9f9",
    });
    setShowColorPicker(false);
  };

  const handleCustomColorChange = (e) => {
    const newColor = e.target.value;
    setCustomColor(newColor);
    setColorTheme({
      primary: newColor,
      secondary: getComplementaryColor(newColor),
      background: "#f9f9f9",
    });
  };

  // Helper function to get complementary color
  const getComplementaryColor = (hex) => {
    if (hex === "#1a3e72") return "#f8c537";
    if (hex === "#2e7d32") return "#a5d6a7";
    if (hex === "#c62828") return "#ff8a65";
    if (hex === "#6a1b9a") return "#ce93d8";
    if (hex === "#212121") return "#757575";
    return "#f8c537"; // default
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.files && formData.files.length > 0) {
    // Convert all selected files to Base64
    const readers = Array.from(formData.files).map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve({ name: file.name, data: reader.result });
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((filesData) => {
      sendEmail(filesData);
    });
  } else {
    sendEmail([]);
  }
};

//      if (formData.files) {
//     const reader = new FileReader();
//     reader.onload = () => {
//       sendEmail(reader.result); 
//     };
//     reader.readAsDataURL(formData.files[0]); 
//   } else {
//     sendEmail(null);
//   }
// };
  //  
  
  const sendEmail = (filesData) => {
   setIsSubmitting(true); // start loading

  const fileNames = filesData.length
    ? filesData.map((f) => f.name).join(", ")
    : "No files uploaded";

  // join multiple Base64 images as <img> tags (so you can show them in email)
  // const imagePreview = filesData
  //   .map((f) => `<p><b>${f.name}</b><br/><img src="${f.data}" style="max-width:300px;"/></p>`)
  //   .join("");


  const templateParams = {
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
    // files: fileNames,
    // imagePreview: imagePreview,
  };

  emailjs
    .send(
      "service_mg2lm9v",   // 🔹 Replace with EmailJS service ID
      "template_m5fnk98",  // 🔹 Replace with EmailJS template ID
      templateParams,
      "M4sMBFySj5QVM__uX"    // 🔹 Replace with your EmailJS public key
    )
    .then(
      (result) => {
        console.log("✅ Email sent:", result.text);
         setIsSubmitting(false);
        setShowThankYou(true); // show modal
        // alert("Your booking request was sent successfully!");
         setFormData({  // reset form
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          files: null,
          notRobot: false,
        });
      
      },
      (error) => {
        console.error("❌ Error sending email:", error);
         setIsSubmitting(false);
        alert("Failed to send email. Please try again.");
      }
    );

  };

  return (
    <div className="book-service-container">
      <div className="book-service-content">
        <section
          className="book-service"
          style={{ color: colorTheme.primary }}
        >
          <div className="container">
            <h1>Book Service Now</h1>

            <form
              onSubmit={handleSubmit}
              className="service-form"
              style={{
                backgroundColor: colorTheme.primary,
                color: colorTheme.secondary,
              }}
            >
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
                    placeholder="+61xxxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* <div className="form-group file-upload">
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
                    {formData.files
                      ? `${formData.files.length} file(s) selected`
                      : "No file chosen"}
                  </span>
                </div>
              </div> */}

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

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Book Appointment"}
              </button>
            </form>
          </div>

          {showThankYou && (
  <div className="thank-you-modal">
    <div className="thank-you-content">
      <h2>Thank You!</h2>
      <p>Your booking request has been sent successfully.</p>
      <button onClick={() => setShowThankYou(false)}>Close</button>
    </div>
  </div>
)}
        </section>

        <div className="theme-selector">
          <h3>Choose Theme</h3>
          <div className="color-options">
            {colorOptions.map((color, index) => (
              <div
                key={index}
                className={`color-option ${
                  color.name === "Custom" ? "custom-option" : ""
                }`}
                onClick={() => handleThemeChange(color)}
                style={{
                  backgroundColor: color.value || "transparent",
                  border:
                    colorTheme.primary === color.value
                      ? `2px solid ${colorTheme.secondary}`
                      : "1px solid #ddd",
                }}
                title={color.name}
              >
                {color.name === "Custom" && (
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
            <div
              className="theme-preview"
              style={{ backgroundColor: colorTheme.primary }}
            >
              <div
                className="theme-accent"
                style={{ backgroundColor: colorTheme.secondary }}
              ></div>
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
