const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'seo_template.html');
const templateContent = fs.readFileSync(templatePath, 'utf-8');

const seoPagesData = [
    { file: "emr-software-hospitals-bikaner.html", feature: "EMR Software for Hospitals", location: "Bikaner" },
    { file: "operation-theater-management-alwar.html", feature: "Operation Theater Management", location: "Alwar" },
    { file: "nursing-management-system-sikar.html", feature: "Nursing Management System", location: "Sikar" },
    { file: "lims-laboratory-information-management-jaipur.html", feature: "Laboratory Information Management System (LIMS)", location: "Jaipur" },
    { file: "ris-pacs-software-providers-jodhpur.html", feature: "RIS & PACS Software", location: "Jodhpur" },
    { file: "pharmacy-management-software-raja-park.html", feature: "Pharmacy Management Software", location: "Raja Park, Jaipur" },
    { file: "blood-bank-software-udaipur.html", feature: "Blood Bank Software", location: "Udaipur" },
    { file: "speech-to-text-medical-dictation-jagatpura.html", feature: "Speech to Text Medical Dictation", location: "Jagatpura, Jaipur" },
    { file: "diabetes-care-management-software-kota.html", feature: "Diabetes Care Management Software", location: "Kota" },
    { file: "emr-software-raja-park-jaipur.html", feature: "EMR Software", location: "Raja Park, Jaipur" },
    { file: "hospital-revenue-cycle-management-rajasthan.html", feature: "Hospital Revenue Cycle Management", location: "Rajasthan" },
    { file: "healthcare-billing-software-ajmer.html", feature: "Healthcare Billing Software", location: "Ajmer" },
    { file: "accounts-payable-software-hospitals-tonk-road.html", feature: "Accounts Payable Software for Hospitals", location: "Tonk Road, Jaipur" },
    { file: "hospital-ledger-accounting-software-bikaner.html", feature: "Hospital Ledger Accounting Software", location: "Bikaner" },
    { file: "medical-payment-gateway-integration-jaipur.html", feature: "Medical Payment Gateway Integration", location: "Jaipur" },
    { file: "hospital-financial-reporting-dashboard-jhotwara.html", feature: "Hospital Financial Reporting Dashboard", location: "Jhotwara, Jaipur" },
    { file: "integrated-population-healthcare-management-rajasthan.html", feature: "Integrated Population Healthcare Management", location: "Rajasthan" },
    { file: "multi-facility-hospital-software-jaipur.html", feature: "Multi-Facility Hospital Software", location: "Jaipur" },
    { file: "public-health-surveillance-software-jodhpur.html", feature: "Public Health Surveillance Software", location: "Jodhpur" },
    { file: "abha-compliance-software-hospitals-kota.html", feature: "ABHA Compliance Software for Hospitals", location: "Kota" },
    { file: "pradhan-mantri-yojana-support-software-ajmer.html", feature: "Pradhan Mantri Yojana Support Software", location: "Ajmer" },
    { file: "vaccine-management-system-bharatpur.html", feature: "Vaccine Management System", location: "Bharatpur" },
    { file: "hospital-hrms-jaipur.html", feature: "Hospital HRMS", location: "Jaipur" },
    { file: "healthcare-crm-software-udaipur.html", feature: "Healthcare CRM Software", location: "Udaipur" },
    { file: "hospital-bed-management-software-bapu-nagar.html", feature: "Hospital Bed Management Software", location: "Bapu Nagar, Jaipur" },
    { file: "canteen-management-software-hospitals-sikar.html", feature: "Hospital Canteen Management Software", location: "Sikar" },
    { file: "healthcare-digital-marketing-services-rajasthan.html", feature: "Healthcare Digital Marketing Services", location: "Rajasthan" },
    { file: "hospital-referral-management-software-malviya-nagar.html", feature: "Hospital Referral Management Software", location: "Malviya Nagar, Jaipur" },
    { file: "medical-asset-inventory-management-jodhpur.html", feature: "Medical Asset & Inventory Management", location: "Jodhpur" },
    { file: "clinic-management-system-jaipur.html", feature: "Clinic Management System", location: "Jaipur" },
    { file: "inpatient-management-software-udaipur.html", feature: "Inpatient Management Software", location: "Udaipur" },
    { file: "telemedicine-platform-clinics-mansarovar.html", feature: "Telemedicine Platform for Clinics", location: "Mansarovar, Jaipur" },
    { file: "hospital-queue-token-management-vaishali-nagar.html", feature: "Hospital Queue & Token Management", location: "Vaishali Nagar, Jaipur" },
    { file: "healthcare-kiosk-providers-kota.html", feature: "Healthcare Kiosk Providers", location: "Kota" },
    { file: "virtual-opd-software-ajmer.html", feature: "Virtual OPD Software", location: "Ajmer" },
    { file: "medical-camp-management-software-bhilwara.html", feature: "Medical Camp Management Software", location: "Bhilwara" },
    { file: "doctor-mobile-app-malviya-nagar.html", feature: "Doctor Mobile App", location: "Malviya Nagar, Jaipur" },
    { file: "clinic-management-system-vaishali-nagar.html", feature: "Clinic Management System", location: "Vaishali Nagar, Jaipur" },
    { file: "hospital-management-software-tonk-road.html", feature: "Hospital Management Software", location: "Tonk Road, Jaipur" },
    { file: "telemedicine-platform-jhotwara-jaipur.html", feature: "Telemedicine Platform", location: "Jhotwara, Jaipur" },
    { file: "hospital-management-software-pali.html", feature: "Hospital Management Software", location: "Pali" },
    { file: "clinic-management-system-sri-ganganagar.html", feature: "Clinic Management System", location: "Sri Ganganagar" },
    { file: "healthcare-cloud-migration-services-jaipur.html", feature: "Healthcare Cloud Migration Services", location: "Jaipur" },
    { file: "hospital-data-backup-recovery-kota.html", feature: "Hospital Data Backup & Recovery", location: "Kota" },
    { file: "fhir-hl7-compliant-software-rajasthan.html", feature: "FHIR & HL7 Compliant Software", location: "Rajasthan" },
    { file: "on-prem-hospital-software-bhilwara.html", feature: "On-Prem Hospital Software", location: "Bhilwara" },
    { file: "multilingual-hims-ajmer.html", feature: "Multilingual HIMS", location: "Ajmer" },
    { file: "healthcare-data-security-compliance-c-scheme.html", feature: "Healthcare Data Security & Compliance", location: "C-Scheme, Jaipur" },
    { file: "medical-robotic-process-automation-jodhpur.html", feature: "Medical Robotic Process Automation (RPA)", location: "Jodhpur" },
    { file: "hospital-online-scheduling-software-udaipur.html", feature: "Hospital Online Scheduling Software", location: "Udaipur" },
    { file: "patient-portal-software-vidyadhar-nagar.html", feature: "Patient Portal Software", location: "Vidyadhar Nagar, Jaipur" },
    { file: "patient-mobile-app-developers-rajasthan.html", feature: "Patient Mobile App Developers", location: "Rajasthan" },
    { file: "hospital-communication-management-jodhpur.html", feature: "Hospital Communication Management", location: "Jodhpur" },
    { file: "healthcare-feedback-satisfaction-surveys-alwar.html", feature: "Healthcare Feedback & Satisfaction Surveys", location: "Alwar" },
];

seoPagesData.forEach(data => {
    let content = templateContent
        .replace(/{{meta_title}}/g, `Best ${data.feature} in ${data.location} | ABDM`)
        .replace(/{{meta_description}}/g, `Upgrade your healthcare facility in ${data.location} with Medical365's cloud-based ${data.feature}. Fully ABDM compliant & DPDP Act 2023 ready.`)
        .replace(/{{feature}}/g, data.feature)
        .replace(/{{location}}/g, data.location)
        .replace(/{{h1_heading}}/g, `Top-Rated ${data.feature} for Healthcare Providers in ${data.location}`);

    fs.writeFileSync(path.join(__dirname, data.file), content);
    console.log(`Successfully refactored ${data.file}`);
});
