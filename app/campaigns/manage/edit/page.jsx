"use client"

import React, { useState, useRef } from 'react';

const Page = () => {
  const [activeForm, setActiveForm] = useState('signup');
  const [postalCode, setPostalCode] = useState('');
  const [postalError, setPostalError] = useState(false);
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [title, setTitle] = useState('');
  const [charCount, setCharCount] = useState(60);
  const [titleError, setTitleError] = useState(false);
  const [storyError, setStoryError] = useState(false);
  const [files, setFiles] = useState([]);
  const [step, setStep] = useState(1);
  const fileInputRef = useRef(null);
  const dropzoneRef = useRef(null);

  const handlePostalChange = (e) => {
    const value = e.target.value;
    setPostalCode(value);
    setPostalError(!/^\d{5}$/.test(value));
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setAmountError(value <= 1);
  };

  const selectCard = (index) => {
    setSelectedCard(index);
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    setCharCount(60 - value.length);
    setTitleError(value.length === 0);
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dropzoneRef.current.classList.add('dragover');
  };

  const handleDragLeave = () => {
    dropzoneRef.current.classList.remove('dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dropzoneRef.current.classList.remove('dragover');
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...newFiles]);
  };

  const formatFileSize = (bytes) => {
    const kb = bytes / 1024;
    if (kb < 1024) {
      return kb.toFixed(2) + " KB";
    } else {
      return (kb / 1024).toFixed(2) + " MB";
    }
  };

  const nextStep = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const showForm = (formName) => {
    setActiveForm(formName);
  };

  const categories = [
    "Beerdigungen", "Bildung", "Ehrenamt", "Events", "Familie", 
    "Jungverheiratete", "Kreativprojekte", "Lokale Projekte", 
    "Medizinisches", "Monatliche Rechnungen", "Notfälle", "Reisen", 
    "Religiöse Projekte", "Sonstiges", "Sport", "Tiere", 
    "Ukraine-Nothilfe", "Umwelt", "Unternehmen", "Wettkämpfe", "Wünsche"
  ];

  // Step indicator with icons
  const steps = [
    { number: 1, label: "Standort", icon: "📍" },
    { number: 2, label: "Betrag", icon: "💰" },
    { number: 3, label: "Empfänger", icon: "👤" },
    { number: 4, label: "Details", icon: "✏️" },
    { number: 5, label: "Bilder", icon: "🖼️" },
    { number: 6, label: "Fertig", icon: "🎉" }
  ];

  return (
    <div className="fundraiser-creator">
      {/* Progress Steps */}
      <div className="progress-steps">
        {steps.map((stepItem) => (
          <div 
            key={stepItem.number} 
            className={`step ${step === stepItem.number ? 'active' : ''} ${step > stepItem.number ? 'completed' : ''}`}
          >
            <div className="step-icon">{stepItem.icon}</div>
            <div className="step-label">{stepItem.label}</div>
            <div className="step-number">{stepItem.number}</div>
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="form-container">
        {/* Step 1: Country Selection */}
        {step === 1 && (
          <div className="form-step">
            <h1>Start Your Fundraising Journey</h1>
            <p className="subtitle">Where should we send the funds?</p>
            
            <div className="input-group">
              <label>Country</label>
              <div className="select-wrapper">
                <select>
                  <option value="de">Germany 🇩🇪</option>
                  <option value="us">United States 🇺🇸</option>
                  <option value="uk">United Kingdom 🇬🇧</option>
                </select>
                <span className="select-arrow">▼</span>
              </div>
            </div>
            
            <div className="input-group">
              <label>Postal Code</label>
              <input 
                type="text" 
                placeholder="e.g. 10115"
                value={postalCode}
                onChange={handlePostalChange}
                className={postalError ? 'error' : ''}
              />
              {postalError && <p className="error-message">Please enter a valid postal code</p>}
            </div>
            
            <div className="category-section">
              <h3>What best describes your fundraising purpose?</h3>
              <div className="category-cloud">
                {categories.map((category, index) => (
                  <div key={index} className="category-bubble">{category}</div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Donation Amount */}
        {step === 2 && (
          <div className="form-step">
            <h1>Set Your Goal</h1>
            <p className="subtitle">How much would you like to raise?</p>
            
            <div className="donation-input">
              <span className="currency">€</span>
              <input 
                type="number" 
                placeholder="Enter amount"
                value={amount}
                onChange={handleAmountChange}
                className={amountError ? 'error' : ''}
              />
              <span className="currency-label">EUR</span>
            </div>
            {amountError && <p className="error-message">Please enter an amount greater than 1</p>}
            
            <div className="goal-suggestion">
              <div className="suggestion-card">
                <div className="suggestion-amount">€500</div>
                <div className="suggestion-label">Small Project</div>
              </div>
              <div className="suggestion-card recommended">
                <div className="suggestion-amount">€2,000</div>
                <div className="suggestion-label">Recommended</div>
              </div>
              <div className="suggestion-card">
                <div className="suggestion-amount">€5,000+</div>
                <div className="suggestion-label">Big Cause</div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Who is collecting */}
        {step === 3 && (
          <div className="form-step">
            <h1>Who Benefits?</h1>
            <p className="subtitle">Select who will receive the funds</p>
            
            <div className="beneficiary-cards">
              <div 
                className={`beneficiary-card ${selectedCard === 0 ? 'selected' : ''}`}
                onClick={() => selectCard(0)}
              >
                <div className="card-icon">👤</div>
                <h3>Yourself</h3>
                <p>Funds will be deposited to your personal bank account</p>
                {selectedCard === 0 && <div className="checkmark">✓</div>}
              </div>
              
              <div 
                className={`beneficiary-card ${selectedCard === 1 ? 'selected' : ''}`}
                onClick={() => selectCard(1)}
              >
                <div className="card-icon">👥</div>
                <h3>Someone Else</h3>
                <p>Funds will be sent to another person or organization</p>
                {selectedCard === 1 && <div className="checkmark">✓</div>}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Title and Story */}
        {step === 4 && (
          <div className="form-step">
            <h1>Tell Your Story</h1>
            <p className="subtitle">Compelling stories raise more funds</p>
            
            <div className="input-group">
              <label>Campaign Title</label>
              <div className="title-input-wrapper">
                <input 
                  type="text" 
                  placeholder="e.g. Help John beat cancer"
                  maxLength="60"
                  value={title}
                  onChange={handleTitleChange}
                  className={titleError ? 'error' : ''}
                />
                <div className="char-counter">{charCount}</div>
              </div>
              {titleError && <p className="error-message">Please enter a campaign title</p>}
            </div>
            
            <div className="input-group">
              <label>Your Story</label>
              <div className="story-toolbar">
                <button>B</button>
                <button>I</button>
                <button>U</button>
                <button>🔗</button>
                <button>📷</button>
              </div>
              <textarea 
                placeholder="Tell people why you're fundraising..."
                className={storyError ? 'error' : ''}
              ></textarea>
              {storyError && <p className="error-message">Your story should be at least 10 characters</p>}
            </div>
            
            <div className="story-tips">
              <h4>Tips for a great story:</h4>
              <ul>
                <li>Explain why you're raising funds</li>
                <li>Share your personal connection</li>
                <li>Be authentic and heartfelt</li>
                <li>Include how funds will be used</li>
              </ul>
            </div>
          </div>
        )}

        {/* Step 5: Image Upload */}
        {step === 5 && (
          <div className="form-step">
            <h1>Add Visual Appeal</h1>
            <p className="subtitle">Images increase engagement by up to 300%</p>
            
            <div 
              className={`dropzone ${files.length > 0 ? 'has-files' : ''}`}
              ref={dropzoneRef}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="dropzone-content">
                <div className="upload-icon">📤</div>
                <p>Drag & drop photos here or</p>
                <button 
                  className="browse-button"
                  onClick={() => fileInputRef.current.click()}
                >
                  Browse Files
                </button>
                <p className="file-requirements">JPG, PNG, GIF (max 50MB each)</p>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                multiple
                style={{display: "none"}}
                accept=".jpg, .jpeg, .png, .gif"
                onChange={handleFileChange}
              />
            </div>
            
            {files.length > 0 && (
              <div className="file-preview">
                <h3>Your Images ({files.length})</h3>
                <div className="preview-grid">
                  {files.map((file, index) => (
                    <div key={index} className="preview-item">
                      <img src={URL.createObjectURL(file)} alt={file.name} />
                      <div className="file-info">
                        <span>{file.name.substring(0, 15)}...</span>
                        <span>{formatFileSize(file.size)}</span>
                      </div>
                      <button 
                        className="remove-button"
                        onClick={() => removeFile(index)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 6: Completion */}
        {step === 6 && (
          <div className="form-step completion-step">
            <div className="confetti">🎉</div>
            <h1>You're All Set!</h1>
            <p className="subtitle">Your fundraiser is ready to launch</p>
            
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h2>Fundraiser Created Successfully</h2>
              <p>Share your fundraiser with friends and family to start receiving donations</p>
              
              <div className="campaign-url">
                <span>givebutter.com/</span>
                <input type="text" value={title.toLowerCase().replace(/\s+/g, '-')} readOnly />
                <button>Copy</button>
              </div>
              
              <div className="share-buttons">
                <button className="share-facebook">Share on Facebook</button>
                <button className="share-twitter">Share on Twitter</button>
                <button className="share-whatsapp">Share on WhatsApp</button>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Controls */}
        <div className="form-navigation">
          {step > 1 && (
            <button className="nav-button back-button" onClick={prevStep}>
              ← Back
            </button>
          )}
          
          <div className="step-indicator">
            Step {step} of 6
          </div>
          
          {step < 6 ? (
            <button 
              className="nav-button next-button"
              onClick={nextStep}
              disabled={
                (step === 1 && postalError) || 
                (step === 2 && amountError) ||
                (step === 3 && selectedCard === null) ||
                (step === 4 && (titleError || storyError))
              }
            >
              Continue →
            </button>
          ) : (
            <button className="nav-button launch-button">
              Launch Campaign 🚀
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .fundraiser-creator {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Inter', sans-serif;
          color: #333;
        }
        
        .progress-steps {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3rem;
          position: relative;
        }
        
        .progress-steps::before {
          content: '';
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          height: 4px;
          background: #e0e0e0;
          z-index: 1;
        }
        
        .step {
          position: relative;
          z-index: 2;
          text-align: center;
          flex: 1;
        }
        
        .step-icon {
          width: 40px;
          height: 40px;
          background: #f0f0f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
          font-size: 20px;
        }
        
        .step-label {
          font-size: 14px;
          color: #888;
          margin-bottom: 5px;
        }
        
        .step-number {
          width: 30px;
          height: 30px;
          background: #f0f0f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          font-weight: bold;
          color: #888;
        }
        
        .step.active .step-icon,
        .step.active .step-number {
          background: #4f46e5;
          color: white;
        }
        
        .step.completed .step-icon,
        .step.completed .step-number {
          background: #10b981;
          color: white;
        }
        
        .step.active .step-label {
          color: #4f46e5;
          font-weight: 500;
        }
        
        .form-container {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }
        
        .form-step {
          max-width: 700px;
          margin: 0 auto;
        }
        
        h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #111827;
        }
        
        .subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          margin-bottom: 2rem;
        }
        
        .input-group {
          margin-bottom: 1.5rem;
        }
        
        label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #374151;
        }
        
        input, select, textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }
        
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
        
        input.error, textarea.error {
          border-color: #ef4444;
        }
        
        .error-message {
          color: #ef4444;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
        
        .select-wrapper {
          position: relative;
        }
        
        .select-arrow {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #6b7280;
        }
        
        .category-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        
        .category-bubble {
          background: #f3f4f6;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .category-bubble:hover {
          background: #e5e7eb;
        }
        
        .donation-input {
          display: flex;
          align-items: center;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          max-width: 300px;
        }
        
        .donation-input input {
          border: none;
          padding: 0.5rem;
          flex: 1;
          font-size: 1.5rem;
          font-weight: bold;
        }
        
        .donation-input input:focus {
          box-shadow: none;
        }
        
        .currency {
          font-size: 1.5rem;
          font-weight: bold;
          margin-right: 0.5rem;
        }
        
        .currency-label {
          color: #6b7280;
          margin-left: 0.5rem;
        }
        
        .goal-suggestion {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .suggestion-card {
          flex: 1;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .suggestion-card:hover {
          border-color: #4f46e5;
        }
        
        .suggestion-card.recommended {
          border: 2px solid #4f46e5;
          background: #f5f3ff;
        }
        
        .suggestion-amount {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .suggestion-label {
          color: #6b7280;
          font-size: 0.875rem;
        }
        
        .beneficiary-cards {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .beneficiary-card {
          flex: 1;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }
        
        .beneficiary-card:hover {
          border-color: #4f46e5;
        }
        
        .beneficiary-card.selected {
          border: 2px solid #4f46e5;
          background: #f5f3ff;
        }
        
        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .beneficiary-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        
        .beneficiary-card p {
          color: #6b7280;
          font-size: 0.875rem;
        }
        
        .checkmark {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 30px;
          height: 30px;
          background: #4f46e5;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        
        .title-input-wrapper {
          position: relative;
        }
        
        .char-counter {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          font-size: 0.875rem;
        }
        
        .story-toolbar {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .story-toolbar button {
          background: #f3f4f6;
          border: none;
          border-radius: 4px;
          padding: 0.5rem 0.75rem;
          cursor: pointer;
        }
        
        textarea {
          min-height: 200px;
          resize: vertical;
        }
        
        .story-tips {
          background: #f9fafb;
          border-radius: 8px;
          padding: 1.5rem;
          margin-top: 1.5rem;
        }
        
        .story-tips h4 {
          margin-top: 0;
          margin-bottom: 0.75rem;
        }
        
        .story-tips ul {
          padding-left: 1.25rem;
          margin: 0;
        }
        
        .story-tips li {
          margin-bottom: 0.5rem;
        }
        
        .dropzone {
          border: 2px dashed #d1d5db;
          border-radius: 12px;
          padding: 3rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          margin-bottom: 2rem;
        }
        
        .dropzone:hover, .dropzone.dragover {
          border-color: #4f46e5;
          background: #f5f3ff;
        }
        
        .dropzone.has-files {
          padding: 1.5rem;
          text-align: left;
        }
        
        .upload-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .browse-button {
          background: #4f46e5;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
          cursor: pointer;
          margin: 1rem 0;
          transition: background 0.2s;
        }
        
        .browse-button:hover {
          background: #4338ca;
        }
        
        .file-requirements {
          color: #6b7280;
          font-size: 0.875rem;
        }
        
        .file-preview {
          margin-top: 2rem;
        }
        
        .file-preview h3 {
          margin-bottom: 1rem;
        }
        
        .preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1rem;
        }
        
        .preview-item {
          position: relative;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .preview-item img {
          width: 100%;
          height: 100px;
          object-fit: cover;
        }
        
        .file-info {
          padding: 0.75rem;
          font-size: 0.75rem;
        }
        
        .file-info span {
          display: block;
        }
        
        .remove-button {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          width: 24px;
          height: 24px;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        
        .completion-step {
          text-align: center;
        }
        
        .confetti {
          font-size: 4rem;
          margin-bottom: 1rem;
          animation: bounce 1s infinite alternate;
        }
        
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }
        
        .success-card {
          background: white;
          border-radius: 12px;
          padding: 2.5rem;
          margin-top: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .success-icon {
          width: 60px;
          height: 60px;
          background: #10b981;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 auto 1.5rem;
        }
        
        .success-card h2 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }
        
        .campaign-url {
          display: flex;
          align-items: center;
          background: #f3f4f6;
          border-radius: 6px;
          padding: 0.5rem;
          margin: 1.5rem 0;
        }
        
        .campaign-url span {
          padding: 0 0.5rem;
          color: #6b7280;
        }
        
        .campaign-url input {
          flex: 1;
          border: none;
          background: transparent;
          padding: 0.5rem;
        }
        
        .campaign-url button {
          background: #4f46e5;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 0.5rem 1rem;
          cursor: pointer;
        }
        
        .share-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .share-buttons button {
          flex: 1;
          padding: 0.75rem;
          border: none;
          border-radius: 6px;
          color: white;
          font-weight: 500;
          cursor: pointer;
        }
        
        .share-facebook {
          background: #4267B2;
        }
        
        .share-twitter {
          background: #1DA1F2;
        }
        
        .share-whatsapp {
          background: #25D366;
        }
        
        .form-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
        }
        
        .nav-button {
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .back-button {
          background: transparent;
          border: 1px solid #d1d5db;
          color: #374151;
        }
        
        .back-button:hover {
          background: #f3f4f6;
        }
        
        .next-button {
          background: #4f46e5;
          color: white;
          border: none;
        }
        
        .next-button:hover {
          background: #4338ca;
        }
        
        .next-button:disabled {
          background: #e5e7eb;
          cursor: not-allowed;
        }
        
        .launch-button {
          background: #10b981;
          color: white;
          border: none;
        }
        
        .launch-button:hover {
          background: #059669;
        }
        
        .step-indicator {
          color: #6b7280;
        }
      `}</style>
    </div>
  );
};

export default Page;