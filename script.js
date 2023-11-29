function redirect() {
    var selectedHospital = document.getElementById("hospitalList").value;
    if (selectedHospital) {
      window.location.href = selectedHospital;
    }
  }

  var healthTips = {
    'Get plenty of sleep': 'Getting 7-8 hours of sleep each night is important for physical and mental health.',
    'Exercise regularly': 'Regular exercise can help improve cardiovascular health, boost mood, and maintain a healthy weight.',
    'Eat a balanced diet': 'A balanced diet that includes a variety of nutrient-rich foods can help prevent chronic diseases.',            
    'Stay hydrated': 'Drinking plenty of water helps keep the body hydrated and can improve physical and cognitive performance.',
    'Wash your hands frequently': 'Washing your hands regularly can help prevent the spread of germs and reduce the risk of infection.',
    'Reduce stress': 'Chronic stress can have negative effects on both physical and mental health. Finding ways to manage stress, such as through meditation or exercise, can help improve overall health.',
    
    'Limit screen time': 'Excessive screen time can contribute to eyestrain, headaches, and poor sleep. It is recommended to take breaks from screens every hour and limit total screen time each day.',
    'Avoid smoking and tobacco use': 'Smoking and other tobacco use can increase the risk of many health problems, including cancer and heart disease. Quitting smoking or never starting in the first place is important for long-term health.',
    'Get regular check-ups': 'Regular check-ups with a healthcare provider can help identify and prevent health problems before they become serious.',
    'Maintain social connections': 'Social connections can have a positive impact on mental health and well-being. Spending time with loved ones, joining social groups or clubs, and volunteering can all help build social connections.',
    'Limit alcohol consumption': 'Drinking too much alcohol can have negative effects on health, including liver disease and increased risk of accidents. It is recommended to limit alcohol consumption to moderate levels (up to one drink per day for women, up to two drinks per day for men).',
    'Practice good posture': 'Good posture can help prevent back pain and improve overall physical health. It is important to maintain good posture while sitting, standing, and moving throughout the day.'
};

function showTipDescription(element) {
    var selectedTip = element.innerText;
    var tipDescription = document.getElementById('tipDescription');
    tipDescription.innerText = healthTips[selectedTip];
}

function checkMe() {
    var sugarLevel = parseFloat(document.getElementById("sugar_level").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var bmi = (weight * Math.pow(100, 2)) / Math.pow(height, 2);
    bmi = bmi.toFixed(2);

    var result = "BMI: " + bmi + "<br>";

    if (bmi < 18.5) {
        result += "Your BMI is underweight. Please consult a doctor.";
    } else if (bmi < 24.9) {
        result += "Your BMI is normal. Keep it up!";
    } else if (bmi < 29.9) {
        result += "Your BMI is overweight. Please exercise regularly.";
    } else {
        result += "Your BMI is obese. Please consult a doctor.";
    }

    result += "<br>";

    if (sugarLevel < 80 || sugarLevel > 140) {
        result += "Your sugar level is not within the normal range. Please consult a doctor.";
    }

    document.getElementById("result").innerHTML = result;
}

function closeWindow() {
    window.close();
}

var hospitals = [ {
    "name": "Ruby Hall Clinic",
    
    "doctors": [
        {"name": "Dr. Nirmala Castellino", "speciality": "Cardiologist", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. Parvez K.Grant", "speciality": "Cardiologist", "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)"},
        {"name": "Dr Rashmi Aderao", "speciality": "Dermatology", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)"},
        {"name": "Dr. Rajendra Patil", "speciality": "Anesthesia", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)"}, 
        {"name": "Dr. Murarji Ghadge", "speciality": "ENT", "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)"},
        {"name": "Dr. Sunita Tandulwadkar", "speciality": "Gynaecology", "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)"},              
        {"name": "Dr. Nitin Pai", "speciality": "IVF and Endoscopy", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)"}, 
        {"name": "Dr. Devashish Desai", "speciality": "Infectious Diseases", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. A.N. Sadre", "speciality": "Kidney Transplant", "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)"},
    ],
},
{
    "name": "Noble Hospitals",
   
    "doctors": [
        {"name": "Dr. Sangeeta Chandrashekhar ", "speciality": "Anesthesiology", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. Vishal Chaudhari", "speciality": "Bone & Joint", "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)"},
        {"name": "Dr.Minish Jain", "speciality": "Cancer Care", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)"},
        {"name": "Dr. Prasad Shah", "speciality": "Cardiology", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)"}, 
        {"name": "Dr. Akshay Raut", "speciality": "Dental & Maxillofacial Surgery", "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)"},
        {"name": "Dr. Nudurat Kamal", "speciality": "ENT", "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)"},              
        {"name": "Dr. Pramod Kadam", "speciality": "Kidney Transplant", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)"}, 
        {"name": "Dr. Anuja Athale", "speciality": "Endoscopy", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. Ramesh Dumbre", "speciality": "Gynaecology", "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)"},
    ],
},
{
    "name": "Sancheti Hospital ",
   
    "doctors": [
        {"name": "Dr. Narendra Vaidya", "speciality": "Orthopedist", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. Rajeev Joshi", "speciality": "Orthopaedics Orthopedist", "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)"},
        {"name": "Dr. Sudheer Jadhav", "speciality": "", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)"},
         {"name": "Dr. Sangeeta Chandrashekhar ", "speciality": "Anesthesiology", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. Vishal Chaudhari", "speciality": "Bone & Joint", "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)"},
        {"name": "Dr.Minish Jain", "speciality": "Cancer Care", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)"},
        {"name": "Dr. Prasad Shah", "speciality": "Cardiology", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)"}, 
        {"name": "Dr. Akshay Raut", "speciality": "Dental & Maxillofacial Surgery", "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)"},
        {"name": "Dr. Nudurat Kamal", "speciality": "ENT", "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)"},              
        {"name": "Dr. Pramod Kadam", "speciality": "Kidney Transplant", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)"}, 
        {"name": "Dr. Anuja Athale", "speciality": "Endoscopy", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. Ramesh Dumbre", "speciality": "Gynaecology", "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)"},
    ],
},
{
    "name": "Deenanath Mangeshkar Hospital",
   
    "doctors": [
       {"name": "Dr. Nirmala Castellino", "speciality": "Cardiologist", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. Parvez K.Grant", "speciality": "Cardiologist", "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)"},
        {"name": "Dr Rashmi Aderao", "speciality": "Dermatology", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)"},
        {"name": "Dr. Rajendra Patil", "speciality": "Anesthesia", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)"}, 
        {"name": "Dr. Murarji Ghadge", "speciality": "ENT", "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)"},
        {"name": "Dr. Sunita Tandulwadkar", "speciality": "Gynaecology", "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)"},              
        {"name": "Dr. Nitin Pai", "speciality": "IVF and Endoscopy", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)"}, 
        {"name": "Dr. Devashish Desai", "speciality": "Infectious Diseases", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. A.N. Sadre", "speciality": "Kidney Transplant", "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)"},
    ],
},
{
    "name": "Sahyadri Super Speciality Hospital",
   
    "doctors": [
         {"name": "Dr. Narendra Vaidya", "speciality": "Orthopedist", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. Rajeev Joshi", "speciality": "Orthopaedics Orthopedist", "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)"},
        {"name": "Dr. Sudheer Jadhav", "speciality": "", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)"},
         {"name": "Dr. Nitin Pai", "speciality": "IVF and Endoscopy", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)"}, 
        {"name": "Dr. Devashish Desai", "speciality": "Infectious Diseases", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. A.N. Sadre", "speciality": "Kidney Transplant", "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)"},
         {"name": "Dr. Parvez K.Grant", "speciality": "Cardiologist", "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)"},
        {"name": "Dr Rashmi Aderao", "speciality": "Dermatology", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)"},      
        {"name": "Dr. Murarji Ghadge", "speciality": "ENT", "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)"},
        {"name": "Dr. Sunita Tandulwadkar", "speciality": "Gynaecology", "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)"}              
       
    ],
},
  {
    "name": "Aditya Birla Memorial Hospital ",
   
    "doctors": [
        {"name": "Dr. Murarji Ghadge", "speciality": "ENT", "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)"},
        {"name": "Dr. Sunita Tandulwadkar", "speciality": "Gynaecology", "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)"},              
        {"name": "Dr. Nitin Pai", "speciality": "IVF and Endoscopy", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)"}, 
        {"name": "Dr. Devashish Desai", "speciality": "Infectious Diseases", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. A.N. Sadre", "speciality": "Kidney Transplant", "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)"},
        {"name": "Dr. Narendra Vaidya", "speciality": "Orthopedist", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. Rajeev Joshi", "speciality": "Orthopaedics Orthopedist", "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)"},
        {"name": "Dr. Sudheer Jadhav", "speciality": "", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)"}
    ],
},
{
    "name": "KEM Hospital (King Edward Memorial Hospital)",
   
    "doctors": [
        {"name": "Dr. Nirmala Castellino", "speciality": "Cardiologist", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. Parvez K.Grant", "speciality": "Cardiologist", "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)"},
        {"name": "Dr Rashmi Aderao", "speciality": "Dermatology", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)"},
        {"name": "Dr. Rajendra Patil", "speciality": "Anesthesia", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)"},     
         {"name": "Dr. Narendra Vaidya", "speciality": "Orthopedist", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. Rajeev Joshi", "speciality": "Orthopaedics Orthopedist", "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)"},
        {"name": "Dr. Sudheer Jadhav", "speciality": "", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)"},
    ],
},
 {
    "name": "Columbia Asia Hospital",
    
    "doctors": [
        {"name": "Dr. Nirmala Castellino", "speciality": "Cardiologist", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. Parvez K.Grant", "speciality": "Cardiologist", "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)"},
        {"name": "Dr Rashmi Aderao", "speciality": "Dermatology", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)"},
        {"name": "Dr. Rajendra Patil", "speciality": "Anesthesia", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)"}, 
        {"name": "Dr. Murarji Ghadge", "speciality": "ENT", "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)"},
        {"name": "Dr. Sunita Tandulwadkar", "speciality": "Gynaecology", "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)"},              
        {"name": "Dr. A.N. Sadre", "speciality": "Kidney Transplant", "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)"},
    ],
},
{
    "name": "Jehangir Hospital",
    
    "doctors": [
        {"name": "Dr. Nirmala Castellino", "speciality": "Cardiologist", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. Parvez K.Grant", "speciality": "Cardiologist", "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)"},
        {"name": "Dr. Murarji Ghadge", "speciality": "ENT", "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)"},
        {"name": "Dr. Sunita Tandulwadkar", "speciality": "Gynaecology", "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)"},              
        {"name": "Dr. Nitin Pai", "speciality": "IVF and Endoscopy", "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)"}, 
        {"name": "Dr. Devashish Desai", "speciality": "Infectious Diseases", "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)"},
        {"name": "Dr. A.N. Sadre", "speciality": "Kidney Transplant", "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)"},
    ],
},];  
var hospitalsListbox = document.getElementById('hospitals-listbox');
hospitals.forEach(function (hospital) {
var option = document.createElement('option');
option.text = hospital.name;
hospitalsListbox.add(option);
});
function showHospitalInfo() {
var selectedHospital = hospitalsListbox.options[hospitalsListbox.selectedIndex].text;

var hospitalInfo = document.getElementById('hospital-info');
hospitalInfo.style.display = 'block';

var hospitalTitle = document.getElementById('hospital-title');
hospitalTitle.innerText = selectedHospital;

var doctorTable = document.getElementById('doctor-table');
doctorTable.innerHTML = '';  
var selectedHospitalInfo = hospitals.find(function (hospital) {
    return hospital.name === selectedHospital;
});

if (selectedHospitalInfo) {
    // Create table headers
    var headers = ['Doctor Name', 'Speciality', 'OPD Day(OPD Timings)'];
    var headerRow = doctorTable.insertRow();
    headers.forEach(function (headerText) {
        var header = document.createElement('th');
        header.innerHTML = headerText;
        headerRow.appendChild(header);
    });

    // Populate table with doctor data
    selectedHospitalInfo.doctors.forEach(function (doctor) {
        var row = doctorTable.insertRow();
        row.insertCell().innerText = doctor.name;
        row.insertCell().innerText = doctor.speciality;
        row.insertCell().innerText = doctor['OPD Day(OPD Timings)'];
    });

    var errorLabel = document.getElementById('error-label');
    errorLabel.style.display = 'none';
} else {
    var errorLabel = document.getElementById('error-label');
    errorLabel.innerText = 'Hospital information not found.';
    errorLabel.style.display = 'block';
}
}
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotIcon = document.getElementById('chatbot-icon');

chatbotIcon.addEventListener('click', () => {
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
});
 // JavaScript for button click event and redirection
 document.getElementById('dashboardButton').addEventListener('click', function() {
    // Redirect to the personal dashboard URL
    window.location.href = 'your_dashboard_url_here';
  });