// Enhanced redirect with validation and feedback
function redirect() {
  const selectedHospital = document.getElementById("hospitalList").value;
  const button = event?.target;

  if (!selectedHospital) {
    showNotification("⚠️ Please select a hospital first", "warning");
    return;
  }

  // Show loading state
  if (button) {
    button.disabled = true;
    button.innerHTML = '<span class="spinner"></span> Redirecting...';
  }

  // Smooth transition
  setTimeout(() => {
    window.location.href = selectedHospital;
  }, 300);
}

var healthTips = {
  "Get plenty of sleep":
    "Getting 7-8 hours of sleep each night is important for physical and mental health.",
  "Exercise regularly":
    "Regular exercise can help improve cardiovascular health, boost mood, and maintain a healthy weight.",
  "Eat a balanced diet":
    "A balanced diet that includes a variety of nutrient-rich foods can help prevent chronic diseases.",
  "Stay hydrated":
    "Drinking plenty of water helps keep the body hydrated and can improve physical and cognitive performance.",
  "Wash your hands frequently":
    "Washing your hands regularly can help prevent the spread of germs and reduce the risk of infection.",
  "Reduce stress":
    "Chronic stress can have negative effects on both physical and mental health. Finding ways to manage stress, such as through meditation or exercise, can help improve overall health.",

  "Limit screen time":
    "Excessive screen time can contribute to eyestrain, headaches, and poor sleep. It is recommended to take breaks from screens every hour and limit total screen time each day.",
  "Avoid smoking and tobacco use":
    "Smoking and other tobacco use can increase the risk of many health problems, including cancer and heart disease. Quitting smoking or never starting in the first place is important for long-term health.",
  "Get regular check-ups":
    "Regular check-ups with a healthcare provider can help identify and prevent health problems before they become serious.",
  "Maintain social connections":
    "Social connections can have a positive impact on mental health and well-being. Spending time with loved ones, joining social groups or clubs, and volunteering can all help build social connections.",
  "Limit alcohol consumption":
    "Drinking too much alcohol can have negative effects on health, including liver disease and increased risk of accidents. It is recommended to limit alcohol consumption to moderate levels (up to one drink per day for women, up to two drinks per day for men).",
  "Practice good posture":
    "Good posture can help prevent back pain and improve overall physical health. It is important to maintain good posture while sitting, standing, and moving throughout the day.",
};

// Enhanced health tips with smooth animations
function showTipDescription(element) {
  const selectedTip = element.innerText.trim();
  // Remove emoji and extra spaces
  const cleanedTip = selectedTip.replace(/[\u{1F300}-\u{1F9FF}]/gu, "").trim();
  const tipDescription = document.getElementById("tipDescription");
  const description = healthTips[cleanedTip];

  // Remove active class from all tips
  document.querySelectorAll(".tip-item").forEach((tip) => {
    tip.classList.remove("active");
  });

  // Add active class to selected tip
  element.classList.add("active");

  if (description) {
    // Fade out, change content, fade in
    tipDescription.style.opacity = "0";
    setTimeout(() => {
      tipDescription.innerText = description;
      tipDescription.style.opacity = "1";
    }, 150);
  } else {
    tipDescription.style.opacity = "0";
    setTimeout(() => {
      tipDescription.innerText = "Tip description not available.";
      tipDescription.style.opacity = "1";
    }, 150);
  }
}

// Enhanced checkMe with smooth animations and better UX
function checkMe() {
  const sugarLevel = parseFloat(document.getElementById("sugar_level").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const resultElement = document.getElementById("result");
  const button = event?.target;

  // Show loading state
  if (button) {
    button.disabled = true;
    button.innerHTML = '<span class="spinner"></span> Analyzing...';
  }

  // Validation
  if (
    isNaN(sugarLevel) ||
    isNaN(weight) ||
    isNaN(height) ||
    weight <= 0 ||
    height <= 0
  ) {
    setTimeout(() => {
      resultElement.innerHTML = "⚠️ Please enter valid values for all fields.";
      resultElement.className = "show warning";
      if (button) {
        button.disabled = false;
        button.innerHTML = "📊 Check My Health";
      }
    }, 500);
    return;
  }

  // Simulate processing time for better UX
  setTimeout(() => {
    const bmi = (weight * Math.pow(100, 2)) / Math.pow(height, 2);
    const bmiFixed = bmi.toFixed(2);

    let bmiCategory = "";
    let bmiClass = "";
    let bmiEmoji = "";

    if (bmi < 18.5) {
      bmiCategory = "Underweight";
      bmiClass = "warning";
      bmiEmoji = "⚠️";
    } else if (bmi < 24.9) {
      bmiCategory = "Normal weight";
      bmiClass = "success";
      bmiEmoji = "✅";
    } else if (bmi < 29.9) {
      bmiCategory = "Overweight";
      bmiClass = "warning";
      bmiEmoji = "⚠️";
    } else {
      bmiCategory = "Obese";
      bmiClass = "danger";
      bmiEmoji = "🚨";
    }

    let sugarStatus = "";
    let sugarClass = "";
    let sugarEmoji = "";

    if (sugarLevel < 70) {
      sugarStatus = "Low (Hypoglycemia)";
      sugarClass = "danger";
      sugarEmoji = "🚨";
    } else if (sugarLevel >= 70 && sugarLevel <= 99) {
      sugarStatus = "Normal";
      sugarClass = "success";
      sugarEmoji = "✅";
    } else if (sugarLevel >= 100 && sugarLevel <= 125) {
      sugarStatus = "Pre-diabetes";
      sugarClass = "warning";
      sugarEmoji = "⚠️";
    } else if (sugarLevel > 125 && sugarLevel <= 140) {
      sugarStatus = "High (Monitor closely)";
      sugarClass = "warning";
      sugarEmoji = "⚠️";
    } else {
      sugarStatus = "Very High (Diabetes)";
      sugarClass = "danger";
      sugarEmoji = "🚨";
    }

    // Determine overall status class
    const overallClass =
      sugarClass === "danger" || bmiClass === "danger"
        ? "danger"
        : sugarClass === "warning" || bmiClass === "warning"
          ? "warning"
          : "success";

    resultElement.innerHTML = `
        <strong>📊 Your Health Results:</strong><br><br>
        <div class="result-item">
          ${bmiEmoji} <strong>BMI:</strong> ${bmiFixed} - ${bmiCategory}
        </div>
        <div class="result-item">
          ${sugarEmoji} <strong>Sugar Level:</strong> ${sugarLevel} mg/dL - ${sugarStatus}
        </div>
    `;
    resultElement.className = "show " + overallClass;

    // Reset button
    if (button) {
      button.disabled = false;
      button.innerHTML = "📊 Check My Health";
    }

    // Show recommendation
    showHealthRecommendation(overallClass);
  }, 800);
}

// Helper function to show health recommendations
function showHealthRecommendation(status) {
  const recommendations = {
    success:
      "✨ Great job! Your health metrics look good. Keep maintaining a healthy lifestyle!",
    warning:
      "💡 Your health metrics need attention. Consider consulting a healthcare provider for guidance.",
    danger:
      "🚨 Please consult a healthcare professional immediately for proper medical advice.",
  };

  setTimeout(() => {
    showNotification(recommendations[status], status);
  }, 500);
}

function closeWindow() {
  window.close();
}

var hospitals = [
  {
    name: "Ruby Hall Clinic",

    doctors: [
      {
        name: "Dr. Nirmala Castellino",
        speciality: "Cardiologist",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. Parvez K.Grant",
        speciality: "Cardiologist",
        "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)",
      },
      {
        name: "Dr Rashmi Aderao",
        speciality: "Dermatology",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)",
      },
      {
        name: "Dr. Rajendra Patil",
        speciality: "Anesthesia",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)",
      },
      {
        name: "Dr. Murarji Ghadge",
        speciality: "ENT",
        "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)",
      },
      {
        name: "Dr. Sunita Tandulwadkar",
        speciality: "Gynaecology",
        "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)",
      },
      {
        name: "Dr. Nitin Pai",
        speciality: "IVF and Endoscopy",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)",
      },
      {
        name: "Dr. Devashish Desai",
        speciality: "Infectious Diseases",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. A.N. Sadre",
        speciality: "Kidney Transplant",
        "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)",
      },
    ],
  },
  {
    name: "Noble Hospitals",

    doctors: [
      {
        name: "Dr. Sangeeta Chandrashekhar ",
        speciality: "Anesthesiology",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. Vishal Chaudhari",
        speciality: "Bone & Joint",
        "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)",
      },
      {
        name: "Dr.Minish Jain",
        speciality: "Cancer Care",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)",
      },
      {
        name: "Dr. Prasad Shah",
        speciality: "Cardiology",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)",
      },
      {
        name: "Dr. Akshay Raut",
        speciality: "Dental & Maxillofacial Surgery",
        "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)",
      },
      {
        name: "Dr. Nudurat Kamal",
        speciality: "ENT",
        "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)",
      },
      {
        name: "Dr. Pramod Kadam",
        speciality: "Kidney Transplant",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)",
      },
      {
        name: "Dr. Anuja Athale",
        speciality: "Endoscopy",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. Ramesh Dumbre",
        speciality: "Gynaecology",
        "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)",
      },
    ],
  },
  {
    name: "Sancheti Hospital ",

    doctors: [
      {
        name: "Dr. Narendra Vaidya",
        speciality: "Orthopedist",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. Rajeev Joshi",
        speciality: "Orthopaedics Orthopedist",
        "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)",
      },
      {
        name: "Dr. Sudheer Jadhav",
        speciality: "",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)",
      },
      {
        name: "Dr. Sangeeta Chandrashekhar ",
        speciality: "Anesthesiology",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. Vishal Chaudhari",
        speciality: "Bone & Joint",
        "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)",
      },
      {
        name: "Dr.Minish Jain",
        speciality: "Cancer Care",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)",
      },
      {
        name: "Dr. Prasad Shah",
        speciality: "Cardiology",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)",
      },
      {
        name: "Dr. Akshay Raut",
        speciality: "Dental & Maxillofacial Surgery",
        "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)",
      },
      {
        name: "Dr. Nudurat Kamal",
        speciality: "ENT",
        "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)",
      },
      {
        name: "Dr. Pramod Kadam",
        speciality: "Kidney Transplant",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)",
      },
      {
        name: "Dr. Anuja Athale",
        speciality: "Endoscopy",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. Ramesh Dumbre",
        speciality: "Gynaecology",
        "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)",
      },
    ],
  },
  {
    name: "Deenanath Mangeshkar Hospital",

    doctors: [
      {
        name: "Dr. Nirmala Castellino",
        speciality: "Cardiologist",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. Parvez K.Grant",
        speciality: "Cardiologist",
        "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)",
      },
      {
        name: "Dr Rashmi Aderao",
        speciality: "Dermatology",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)",
      },
      {
        name: "Dr. Rajendra Patil",
        speciality: "Anesthesia",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)",
      },
      {
        name: "Dr. Murarji Ghadge",
        speciality: "ENT",
        "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)",
      },
      {
        name: "Dr. Sunita Tandulwadkar",
        speciality: "Gynaecology",
        "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)",
      },
      {
        name: "Dr. Nitin Pai",
        speciality: "IVF and Endoscopy",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)",
      },
      {
        name: "Dr. Devashish Desai",
        speciality: "Infectious Diseases",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. A.N. Sadre",
        speciality: "Kidney Transplant",
        "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)",
      },
    ],
  },
  {
    name: "Sahyadri Super Speciality Hospital",

    doctors: [
      {
        name: "Dr. Narendra Vaidya",
        speciality: "Orthopedist",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. Rajeev Joshi",
        speciality: "Orthopaedics Orthopedist",
        "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)",
      },
      {
        name: "Dr. Sudheer Jadhav",
        speciality: "",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)",
      },
      {
        name: "Dr. Nitin Pai",
        speciality: "IVF and Endoscopy",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)",
      },
      {
        name: "Dr. Devashish Desai",
        speciality: "Infectious Diseases",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. A.N. Sadre",
        speciality: "Kidney Transplant",
        "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)",
      },
      {
        name: "Dr. Parvez K.Grant",
        speciality: "Cardiologist",
        "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)",
      },
      {
        name: "Dr Rashmi Aderao",
        speciality: "Dermatology",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)",
      },
      {
        name: "Dr. Murarji Ghadge",
        speciality: "ENT",
        "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)",
      },
      {
        name: "Dr. Sunita Tandulwadkar",
        speciality: "Gynaecology",
        "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)",
      },
    ],
  },
  {
    name: "Aditya Birla Memorial Hospital ",

    doctors: [
      {
        name: "Dr. Murarji Ghadge",
        speciality: "ENT",
        "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)",
      },
      {
        name: "Dr. Sunita Tandulwadkar",
        speciality: "Gynaecology",
        "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)",
      },
      {
        name: "Dr. Nitin Pai",
        speciality: "IVF and Endoscopy",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)",
      },
      {
        name: "Dr. Devashish Desai",
        speciality: "Infectious Diseases",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. A.N. Sadre",
        speciality: "Kidney Transplant",
        "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)",
      },
      {
        name: "Dr. Narendra Vaidya",
        speciality: "Orthopedist",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. Rajeev Joshi",
        speciality: "Orthopaedics Orthopedist",
        "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)",
      },
      {
        name: "Dr. Sudheer Jadhav",
        speciality: "",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)",
      },
    ],
  },
  {
    name: "KEM Hospital (King Edward Memorial Hospital)",

    doctors: [
      {
        name: "Dr. Nirmala Castellino",
        speciality: "Cardiologist",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. Parvez K.Grant",
        speciality: "Cardiologist",
        "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)",
      },
      {
        name: "Dr Rashmi Aderao",
        speciality: "Dermatology",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)",
      },
      {
        name: "Dr. Rajendra Patil",
        speciality: "Anesthesia",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)",
      },
      {
        name: "Dr. Narendra Vaidya",
        speciality: "Orthopedist",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. Rajeev Joshi",
        speciality: "Orthopaedics Orthopedist",
        "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)",
      },
      {
        name: "Dr. Sudheer Jadhav",
        speciality: "",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)",
      },
    ],
  },
  {
    name: "Columbia Asia Hospital",

    doctors: [
      {
        name: "Dr. Nirmala Castellino",
        speciality: "Cardiologist",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. Parvez K.Grant",
        speciality: "Cardiologist",
        "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)",
      },
      {
        name: "Dr Rashmi Aderao",
        speciality: "Dermatology",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 4 PM)",
      },
      {
        name: "Dr. Rajendra Patil",
        speciality: "Anesthesia",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)",
      },
      {
        name: "Dr. Murarji Ghadge",
        speciality: "ENT",
        "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)",
      },
      {
        name: "Dr. Sunita Tandulwadkar",
        speciality: "Gynaecology",
        "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)",
      },
      {
        name: "Dr. A.N. Sadre",
        speciality: "Kidney Transplant",
        "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)",
      },
    ],
  },
  {
    name: "Jehangir Hospital",

    doctors: [
      {
        name: "Dr. Nirmala Castellino",
        speciality: "Cardiologist",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. Parvez K.Grant",
        speciality: "Cardiologist",
        "OPD Day(OPD Timings)": "Mon to Thu(4 PM - 8 PM)",
      },
      {
        name: "Dr. Murarji Ghadge",
        speciality: "ENT",
        "OPD Day(OPD Timings)": "Mon to Sat(4 PM - 8 PM)",
      },
      {
        name: "Dr. Sunita Tandulwadkar",
        speciality: "Gynaecology",
        "OPD Day(OPD Timings)": "Mon to Thu(9 AM - 1 PM)",
      },
      {
        name: "Dr. Nitin Pai",
        speciality: "IVF and Endoscopy",
        "OPD Day(OPD Timings)": "Mon to Sat(10 AM - 1 PM)",
      },
      {
        name: "Dr. Devashish Desai",
        speciality: "Infectious Diseases",
        "OPD Day(OPD Timings)": "Mon to Sat(9 AM - 5 PM)",
      },
      {
        name: "Dr. A.N. Sadre",
        speciality: "Kidney Transplant",
        "OPD Day(OPD Timings)": "Mon to Sat(11 AM - 1 PM)",
      },
    ],
  },
];
var hospitalsListbox = document.getElementById("hospitals-listbox");
hospitals.forEach(function (hospital) {
  var option = document.createElement("option");
  option.text = hospital.name;
  hospitalsListbox.add(option);
});
// Enhanced hospital info display with smooth animations
function showHospitalInfo() {
  const selectedHospital =
    hospitalsListbox.options[hospitalsListbox.selectedIndex].text;

  const hospitalInfo = document.getElementById("hospital-info");
  const hospitalTitle = document.getElementById("hospital-title");
  const doctorTable = document.getElementById("doctor-table");
  const errorLabel = document.getElementById("error-label");

  // Show loading state
  hospitalInfo.style.opacity = "0.5";
  doctorTable.innerHTML =
    '<tr><td colspan="3" style="text-align: center;">⏳ Loading doctor information...</td></tr>';
  hospitalInfo.style.display = "block";

  // Simulate async loading for better UX
  setTimeout(() => {
    hospitalTitle.innerText = selectedHospital;

    doctorTable.innerHTML = "";
    const selectedHospitalInfo = hospitals.find(function (hospital) {
      return hospital.name === selectedHospital;
    });

    if (selectedHospitalInfo) {
      // Create table headers with emojis
      const headers = [
        "👨‍⚕️ Doctor Name",
        "🏥 Speciality",
        "📅 OPD Day(OPD Timings)",
      ];
      const headerRow = doctorTable.insertRow();
      headers.forEach(function (headerText) {
        const header = document.createElement("th");
        header.innerHTML = headerText;
        headerRow.appendChild(header);
      });

      // Populate table with doctor data with staggered animation
      selectedHospitalInfo.doctors.forEach(function (doctor, index) {
        const row = doctorTable.insertRow();
        row.style.opacity = "0";
        row.style.animation = `fadeIn 0.3s ease forwards ${index * 0.05}s`;
        row.insertCell().innerText = doctor.name;
        row.insertCell().innerText = doctor.speciality || "General";
        row.insertCell().innerText = doctor["OPD Day(OPD Timings)"];
      });

      errorLabel.style.display = "none";
      hospitalInfo.style.opacity = "1";

      showNotification(
        `✅ Loaded ${selectedHospitalInfo.doctors.length} doctors from ${selectedHospital}`,
        "success",
      );
    } else {
      errorLabel.innerText = "❌ Hospital information not found.";
      errorLabel.style.display = "block";
      hospitalInfo.style.opacity = "1";
    }
  }, 600);
}
// Chatbot toggle functionality
const chatbotContainer = document.getElementById("chatbot-container");
const chatbotIcon = document.getElementById("chatbot-icon");

if (chatbotIcon && chatbotContainer) {
  chatbotIcon.addEventListener("click", () => {
    const isVisible = chatbotContainer.style.display === "block";
    chatbotContainer.style.display = isVisible ? "none" : "block";
    chatbotIcon.style.transform = isVisible ? "scale(1)" : "scale(0.9)";
    setTimeout(() => {
      chatbotIcon.style.transform = "scale(1)";
    }, 200);
  });
}

// Dashboard button with smooth transition
const dashboardButton = document.getElementById("dashboardButton");
if (dashboardButton) {
  dashboardButton.addEventListener("click", function () {
    this.disabled = true;
    this.innerHTML = '<span class="spinner"></span> Opening Dashboard...';
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 300);
  });
}

// ============================================
// UTILITY FUNCTIONS FOR MODERN UX
// ============================================

// Global notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotif = document.querySelector(".custom-notification");
  if (existingNotif) {
    existingNotif.remove();
  }

  const notification = document.createElement("div");
  notification.className = `custom-notification ${type}`;
  notification.innerHTML = `
    <span class="notification-message">${message}</span>
    <button class="notification-close" onclick="this.parentElement.remove()">×</button>
  `;

  document.body.appendChild(notification);

  // Trigger animation
  setTimeout(() => notification.classList.add("show"), 10);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Smooth scroll to element
function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Form validation helper
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const inputs = form.querySelectorAll(
    "input[required], select[required], textarea[required]",
  );
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("error");
      isValid = false;

      input.addEventListener(
        "input",
        function () {
          this.classList.remove("error");
        },
        { once: true },
      );
    }
  });

  if (!isValid) {
    showNotification("⚠️ Please fill in all required fields", "warning");
  }

  return isValid;
}

// Add dynamic loading spinner styles
if (!document.getElementById("dynamic-styles")) {
  const style = document.createElement("style");
  style.id = "dynamic-styles";
  style.textContent = `
    /* Spinner animation */
    .spinner {
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
      margin-right: 8px;
      vertical-align: middle;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Custom notification styles */
    .custom-notification {
      position: fixed;
      top: 20px;
      right: 20px;
      background: white;
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      gap: 12px;
      z-index: 10000;
      min-width: 300px;
      max-width: 500px;
      transform: translateX(400px);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-left: 4px solid #2563eb;
    }
    
    .custom-notification.show {
      transform: translateX(0);
      opacity: 1;
    }
    
    .custom-notification.success {
      border-left-color: #10b981;
      background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    }
    
    .custom-notification.warning {
      border-left-color: #f59e0b;
      background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
    }
    
    .custom-notification.danger {
      border-left-color: #ef4444;
      background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
    }
    
    .notification-message {
      flex: 1;
      font-size: 14px;
      color: #1f2937;
      line-height: 1.5;
    }
    
    .notification-close {
      background: none;
      border: none;
      font-size: 24px;
      color: #6b7280;
      cursor: pointer;
      padding: 0;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      transition: all 0.2s;
    }
    
    .notification-close:hover {
      background: rgba(0, 0, 0, 0.05);
      color: #1f2937;
    }
    
    /* Smooth transitions for form inputs */
    input, select, textarea {
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    
    input.error, select.error, textarea.error {
      border-color: #ef4444 !important;
      animation: shake 0.4s;
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
    
    /* Enhance tip items */
    .tip-item {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      position: relative;
    }
    
    .tip-item.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      transform: translateX(8px);
    }
    
    .tip-item.active::before {
      content: '▶';
      position: absolute;
      left: -20px;
      animation: pulse 1s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    /* Smooth opacity transitions */
    #tipDescription {
      transition: opacity 0.3s ease;
    }
    
    /* Result item styling */
    .result-item {
      padding: 12px;
      margin: 8px 0;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      border-left: 3px solid rgba(255, 255, 255, 0.3);
    }
    
    /* Responsive notification */
    @media (max-width: 640px) {
      .custom-notification {
        top: 10px;
        right: 10px;
        left: 10px;
        min-width: auto;
        max-width: none;
      }
    }
  `;
  document.head.appendChild(style);
}

// Initialize smooth scroll for all anchor links
document.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = link.getAttribute("href");
      if (target !== "#") {
        e.preventDefault();
        smoothScrollTo(target.substring(1));
      }
    });
  });

  // Add fade-in animation to page elements
  const animatedElements = document.querySelectorAll(
    ".card, .service-card, .form-group",
  );
  animatedElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.animation = `fadeIn 0.6s ease forwards ${index * 0.1}s`;
  });
});
