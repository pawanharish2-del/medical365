'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('clinics');
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSolutions = () => setIsSolutionsOpen(!isSolutionsOpen);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
  }, []);

  return (
    <header className={`main-header ${isMenuOpen ? 'nav-active' : ''}`} id="main-header">
      <div className="header-container">
        <Link href="/" className="logo" aria-label="Medical365 Home">
          <img loading="lazy" src="/logo/medical365logo1.png" alt="Medical365" className="logo-img" />
        </Link>

        <button 
          className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`} 
          id="mobile-toggle" 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span className="bar top-bar"></span>
          <span className="bar mid-bar"></span>
          <span className="bar bot-bar"></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`} id="main-nav">
          <div className="mobile-menu-header">
            <img loading="lazy" src="/logo/medical365logo1.png" alt="Medical365" className="logo-img-mobile" />
          </div>

          <div className="nav-body">
            <ul className="nav-links">
              <li><Link href="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              
              <li className={`has-mega-menu ${isSolutionsOpen ? 'active' : ''}`}>
                <button 
                  className="nav-item solutions-toggle" 
                  aria-expanded={isSolutionsOpen} 
                  aria-controls="mega-menu-content"
                  onClick={toggleSolutions}
                >
                  Solutions 
                  <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                
                <div className={`mega-menu ${isSolutionsOpen ? 'active' : ''}`} id="mega-menu-content">
                  <div className="mega-menu-inner">
                    <div className="mega-sidebar" role="tablist" aria-orientation="vertical">
                      <button 
                        className={`tab-btn ${activeTab === 'clinics' ? 'active' : ''}`} 
                        role="tab" 
                        aria-selected={activeTab === 'clinics'} 
                        onClick={() => setActiveTab('clinics')}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        Clinics
                      </button>
                      <button 
                        className={`tab-btn ${activeTab === 'hospitals' ? 'active' : ''}`} 
                        role="tab" 
                        aria-selected={activeTab === 'hospitals'} 
                        onClick={() => setActiveTab('hospitals')}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                        Hospitals
                      </button>
                      <button 
                        className={`tab-btn ${activeTab === 'operations' ? 'active' : ''}`} 
                        role="tab" 
                        aria-selected={activeTab === 'operations'} 
                        onClick={() => setActiveTab('operations')}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        Operations
                      </button>
                      <button 
                        className={`tab-btn ${activeTab === 'revenue' ? 'active' : ''}`} 
                        role="tab" 
                        aria-selected={activeTab === 'revenue'} 
                        onClick={() => setActiveTab('revenue')}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="7" y1="10" x2="17" y2="10"></line><line x1="7" y1="14" x2="17" y2="14"></line></svg>
                        Revenue & CRM
                      </button>
                      <button 
                        className={`tab-btn ${activeTab === 'patients' ? 'active' : ''}`} 
                        role="tab" 
                        aria-selected={activeTab === 'patients'} 
                        onClick={() => setActiveTab('patients')}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                        Patients
                      </button>
                    </div>

                    <div className="mega-content">
                      {activeTab === 'clinics' && (
                        <div className="tab-pane active" id="clinics" role="tabpanel">
                          <div className="pane-header">
                            <h2 className="tab-title">Clinic Solutions</h2>
                            <p className="tab-desc">Comprehensive tools to streamline your daily clinic operations.</p>
                          </div>
                          <ul className="sub-menu-list two-columns">
                            <li><Link href="/clinics" onClick={() => setIsMenuOpen(false)}><span>Clinics Overview</span></Link></li>
                            <li><Link href="/outpatient" onClick={() => setIsMenuOpen(false)}><span>Outpatient (OPD)</span></Link></li>
                            <li><Link href="/telemedicine" onClick={() => setIsMenuOpen(false)}><span>Telemedicine</span></Link></li>
                            <li><Link href="/emr" onClick={() => setIsMenuOpen(false)}><span>EMR</span></Link></li>
                            <li><Link href="/pharmacy" onClick={() => setIsMenuOpen(false)}><span>Pharmacy</span></Link></li>
                            <li><Link href="/lims" onClick={() => setIsMenuOpen(false)}><span>Laboratory (LIMS)</span></Link></li>
                            <li><Link href="/vaccine-management" onClick={() => setIsMenuOpen(false)}><span>Vaccine Management</span></Link></li>
                            <li><Link href="/diabetes-care-management" onClick={() => setIsMenuOpen(false)}><span>Diabetes Care</span></Link></li>
                            <li><Link href="/doctor-mobile-app" onClick={() => setIsMenuOpen(false)}><span>Doctor Mobile App</span></Link></li>
                            <li><Link href="/revenue-cycle-management" onClick={() => setIsMenuOpen(false)}><span>Revenue Cycle Management</span></Link></li>
                          </ul>
                        </div>
                      )}
                      {activeTab === 'hospitals' && (
                        <div className="tab-pane active" id="hospitals" role="tabpanel">
                          <div className="pane-header">
                            <h2 className="tab-title">Hospital Management</h2>
                            <p className="tab-desc">Enterprise-grade solutions for mid to large scale hospitals.</p>
                          </div>
                          <ul className="sub-menu-list two-columns">
                            <li><Link href="/hospitals" onClick={() => setIsMenuOpen(false)}><span>Hospitals Overview</span></Link></li>
                            <li><Link href="/inpatient" onClick={() => setIsMenuOpen(false)}><span>Inpatient (IPD)</span></Link></li>
                            <li><Link href="/operation-theater-management" onClick={() => setIsMenuOpen(false)}><span>Operation Theater</span></Link></li>
                            <li><Link href="/nursing-management-system" onClick={() => setIsMenuOpen(false)}><span>Nursing Management</span></Link></li>
                            <li><Link href="/hospital-bed-management" onClick={() => setIsMenuOpen(false)}><span>Bed Management</span></Link></li>
                            <li><Link href="/blood-bank" onClick={() => setIsMenuOpen(false)}><span>Blood Bank</span></Link></li>
                            <li><Link href="/vaccine-management" onClick={() => setIsMenuOpen(false)}><span>Vaccine Management</span></Link></li>
                            <li><Link href="/doctor-mobile-app" onClick={() => setIsMenuOpen(false)}><span>Doctor Mobile App</span></Link></li>
                            <li><Link href="/revenue-cycle-management" onClick={() => setIsMenuOpen(false)}><span>Revenue Cycle Management</span></Link></li>
                          </ul>
                        </div>
                      )}
                      {activeTab === 'operations' && (
                        <div className="tab-pane active" id="operations" role="tabpanel">
                          <div className="pane-header">
                            <h2 className="tab-title">Clinical Operations</h2>
                            <p className="tab-desc">Specialized modules for hospital departments.</p>
                          </div>
                          <ul className="sub-menu-list two-columns">
                            <li><Link href="/lims" onClick={() => setIsMenuOpen(false)}><span>Laboratory (LIMS)</span></Link></li>
                            <li><Link href="/ris-pacs" onClick={() => setIsMenuOpen(false)}><span>Radiology (RIS/PACS)</span></Link></li>
                            <li><Link href="/pharmacy" onClick={() => setIsMenuOpen(false)}><span>Pharmacy Mgt</span></Link></li>
                            <li><Link href="/blood-bank" onClick={() => setIsMenuOpen(false)}><span>Blood Bank Mgt</span></Link></li>
                            <li><Link href="/operation-theater-management" onClick={() => setIsMenuOpen(false)}><span>OT Management</span></Link></li>
                            <li><Link href="/nursing-management-system" onClick={() => setIsMenuOpen(false)}><span>Nursing Station</span></Link></li>
                            <li><Link href="/hospital-bed-management" onClick={() => setIsMenuOpen(false)}><span>Bed Tracking</span></Link></li>
                          </ul>
                        </div>
                      )}
                      {activeTab === 'revenue' && (
                        <div className="tab-pane active" id="revenue" role="tabpanel">
                          <div className="pane-header">
                            <h2 className="tab-title">Revenue & Growth</h2>
                            <p className="tab-desc">Maximize collections and build patient loyalty.</p>
                          </div>
                          <ul className="sub-menu-list two-columns">
                            <li><Link href="/revenue-cycle-management" onClick={() => setIsMenuOpen(false)}><span>Revenue Cycle (RCM)</span></Link></li>
                            <li><Link href="/crm" onClick={() => setIsMenuOpen(false)}><span>Healthcare CRM</span></Link></li>
                            <li><Link href="/book-demo" onClick={() => setIsMenuOpen(false)}><span>Book a Demo</span></Link></li>
                            <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}><span>Talk to Sales</span></Link></li>
                          </ul>
                        </div>
                      )}
                      {activeTab === 'patients' && (
                        <div className="tab-pane active" id="patients" role="tabpanel">
                          <div className="pane-header">
                            <h2 className="tab-title">Patients & Families</h2>
                            <p className="tab-desc">Digital experience for modern patients.</p>
                          </div>
                          <ul className="sub-menu-list two-columns">
                            <li><Link href="/patient-portal" onClick={() => setIsMenuOpen(false)}><span>Patient Portal</span></Link></li>
                            <li><Link href="/telemedicine" onClick={() => setIsMenuOpen(false)}><span>Teleconsultation</span></Link></li>
                            <li><Link href="/queue-token-management" onClick={() => setIsMenuOpen(false)}><span>Queue Tracking</span></Link></li>
                            <li><Link href="/emr" onClick={() => setIsMenuOpen(false)}><span>Digital Records</span></Link></li>
                            <li><Link href="/pharmacy" onClick={() => setIsMenuOpen(false)}><span>e-Prescriptions</span></Link></li>
                            <li><Link href="/clinics" onClick={() => setIsMenuOpen(false)}><span>Online Scheduling</span></Link></li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>

              <li><Link href="/about" className="nav-item" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li><Link href="/blogs" className="nav-item" onClick={() => setIsMenuOpen(false)}>Insights & Blogs</Link></li>
            </ul>
          </div>
          <div className="mobile-cta-wrapper">
            <Link href="/book-demo" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Book a Free Demo</Link>
          </div>
        </nav>

        <div className="header-cta">
          <Link href="/book-demo" className="btn-primary">Book Demo</Link>
        </div>
      </div>
      {isMenuOpen && <div className="mobile-overlay" style={{ display: 'block' }} onClick={toggleMenu}></div>}
    </header>
  );
}
