// var symptoms = [
//   "Missed period",
//   "Tender, swollen breasts",
//   "Nausea with or without vomiting",
//   "Light Spotting",
//   "Pain during intercourse",
//   "Abnormal or heavy menstrual flow",
//   "Pain, especially excessive menstrual cramps that may be felt in the abdomen or lower back",
//   "Painful bowel movements during menstrual periods",
//   "Painful urination during menstrual periods",
//   "Had vaginal sex without protection **confirm with pregnancy test",
//   "Irregular periods",
//   "Vaginal dryness",
//   "Infertility",
//   "Hot flashes",
//   "Chills",
//   "Night sweats",
//   "Headache",
//   "Vision changes",
//   "Extra facial hair",
//   "Fatigue",
//   "Sleep problems",
//   "Insomnia or feeling very sleepiness",
//   "Trouble falling asleep (insomnia)",
//   "Mood changes",
//   "Mood swings",
//   "Moodiness",
//   "Depressed mood",
//   "Tension or anxiety",
//   "Crying spells",
//   "Anger or irritability",
//   "Trouble concentrating",
//   "Social withdrawal",
//   "Lack of interest in activities once enjoyed",
//   "Increased appetite",
//   "Appetite changes and food cravings",
//   "Weight gain and slowed metabolism",
//   "Weight gain, especially around the belly (abdomen)",
//   "Thinning hair and dry skin",
//   "Male-pattern baldness or thinning hair",
//   "Hair loss",
//   "Changes in breast size",
//   "Loss of breast fullness",
//   "Milky fluid, or discharge, from breasts",
//   "Above 40 years of age",
//   "Ovaries that are large or have many cysts",
//   "Excess body hair, including the chest, stomach, and back (hirsutism)",
//   "Acne or oily skin",
//   "Infertility",
//   "Small pieces of excess skin on the neck or armpits (skin tags)",
//   "Dark or thick skin patches on the back of the neck, in the armpits, and under the breasts",

// ]

$("#yesPreg").click(function () {
  $("#root").text(
    "You are likely pregnant. Please confirm with a pregnancy test and a doctor."
  );
  $("#div1").empty();
  $("#div1").append(
    "<a href='learnMore.html'><button class='button'>Learn More</button></a>"
  );
});

$("#yesMeno").click(function () {
  $("#root").text("You might have menopause. Confirm with a doctor.");
  $("#div1").empty();
  $("#div1").append(
    "<a href='learnMore.html'><button class='button'>Learn More</button></a>"
  );
});

$("#yesPCOS").click(function () {
  $("#root").text(
    "You might have Polycystic Ovary Syndrome. Please check with a doctor."
  );
  $("#div1").empty();
  $("#div1").append(
    "<a href='learnMore.html'><button class='button'>Learn More</button></a>"
  );
});

$("#yesPDD").click(function () {
  $("#root").text(
    "You might have Premenstrual Dysphoric Disorder. Please check with a doctor."
  );
  $("#div1").empty();
  $("#div1").append(
    "<a href='learnMore.html'><button class='button'>Learn More</button></a>"
  );
});

$("#yesPS").click(function () {
  $("#root").text(
    "You might have Premenstrual Syndrome. Please check with a doctor."
  );
  $("#div1").empty();
  $("#div1").append(
    "<a href='learnMore.html'><button class='button'>Learn More</button></a>"
  );
});

$("#yesAmeno").click(function () {
  $("#root").text("You might have Amenorrhea. Please check with a doctor.");
  $("#div1").empty();
  $("#div1").append(
    "<a href='learnMore.html'><button class='button'>Learn More</button></a>"
  );
});

$("#yesEnd").click(function () {
  $("#root").text("You might have Endometriosis. Please check with a doctor.");
  $("#div1").empty();
  $("#div1").append(
    "<a href='learnMore.html'><button class='button'>Learn More</button></a>"
  );
});
$("#failure").click(function () {
  $("#root").text(
    "Symptoms unclear. Please consult a doctor for more information."
  );
  $("#div1").empty();
  $("#div1").append(
    "<a href='learnMore.html'><button class='button'>Learn More</button></a>"
  );
});
