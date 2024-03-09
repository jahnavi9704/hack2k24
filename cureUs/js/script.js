let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
// script.js
// script.js

// Object containing keywords related to illnesses and their corresponding illnesses
const illnessKeywords = {
  cold: "Common Cold",
  flu: "Influenza",
  headache: "Headache",
  fever: "Fever",
  cough: "Cough",
  soreThroat: "Sore Throat",
  fatigue: "Fatigue",
  bodyAches: "Body Aches",
  shortnessOfBreath: "Shortness of Breath",
  nausea: "Nausea",
  diarrhea: "Diarrhea",
  chills: "Chills",
  runnyNose: "Runny Nose",
  musclePain: "Muscle Pain",
  lossOfTaste: "Loss of Taste",
  lossOfSmell: "Loss of Smell",
  chestPain: "Chest Pain",
  difficultyBreathing: "Difficulty Breathing",
  pinkEye: "Pink Eye (Conjunctivitis)",
  skinRash: "Skin Rash",
  swollenLymphNodes: "Swollen Lymph Nodes",
  confusion: "Confusion",
  abdominalPain: "Abdominal Pain",
  vomiting: "Vomiting",
  dizziness: "Dizziness",
  sneezing: "Sneezing",
  jointPain: "Joint Pain",
  dehydration: "Dehydration",
  excessiveThirst: "Excessive Thirst",
  dryCough: "Dry Cough",
  hoarseness: "Hoarseness",
  chestTightness: "Chest Tightness",
  wheezing: "Wheezing",
  difficultySwallowing: "Difficulty Swallowing",
  swollenJoints: "Swollen Joints",
  swollenGlands: "Swollen Glands",
  hives: "Hives",
  difficultySleeping: "Difficulty Sleeping",
  excessiveSweating: "Excessive Sweating",
  backPain: "Back Pain",
  abdominalBloating: "Abdominal Bloating",
  constipation: "Constipation",
  diarrhea: "Diarrhea",
  hairLoss: "Hair Loss",
  frequentUrination: "Frequent Urination",
  bleedingGums: "Bleeding Gums",
  nosebleeds: "Nosebleeds",
  memoryLoss: "Memory Loss",
  moodSwings: "Mood Swings",
  irritability: "Irritability",
  weightLoss: "Unexplained Weight Loss",
  weightGain: "Unexplained Weight Gain",
  coughingUpBlood: "Coughing Up Blood",
  nightSweats: "Night Sweats",
  numbness: "Numbness",
  tinglingSensation: "Tingling Sensation",
  difficultyConcentrating: "Difficulty Concentrating",
  excessiveGas: "Excessive Gas",
  bruising: "Easy Bruising",
  chestPressure: "Chest Pressure",
  swollenFeet: "Swollen Feet",
  blurredVision: "Blurred Vision",
  ringingInEars: "Ringing in Ears",
  difficultyBalancing: "Difficulty Balancing",
  metallicTasteInMouth: "Metallic Taste in Mouth",
  toothache: "Toothache",
  sinusPressure: "Sinus Pressure",
  hearingLoss: "Hearing Loss",
  coughingUpPhlegm: "Coughing Up Phlegm",
  lossOfAppetite: "Loss of Appetite",
  darkUrine: "Dark Urine",
  yellowingOfSkin: "Yellowing of Skin",
  sensitivityToLight: "Sensitivity to Light",
  difficultySpeaking: "Difficulty Speaking",
};

// Function to identify illness based on user input
function identifyIllness(userInput) {
  userInput = userInput.toLowerCase();
  for (const [keyword, illness] of Object.entries(illnessKeywords)) {
    if (userInput.includes(keyword)) {
      return illness;
    }
  }
  return "No matching illness found";
}

// Function to handle the chat button click
function startChat() {
  const userInput = prompt("Enter your symptoms:");
  const illness = identifyIllness(userInput);

  if (illness !== "No matching illness found") {
    alert("You may have: " + illness);
  } else {
    alert("No specific illness detected based on your input.");
  }
}

// Optionally, you can call this function directly if needed
// startChat();
