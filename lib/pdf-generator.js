import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = (
  title,
  subject,
  classLevel,
  questions,
  totalMarks
) => {
  // Create a temporary div to render the quiz
  const tempDiv = document.createElement("div");
  tempDiv.className = "pdf-container";
  tempDiv.style.width = "210mm";
  tempDiv.style.padding = "10mm";
  tempDiv.style.backgroundColor = "white";
  tempDiv.style.position = "absolute";
  tempDiv.style.left = "-9999px";
  tempDiv.style.fontFamily = "Arial, sans-serif";
  tempDiv.style.fontSize = "12px";
  document.body.appendChild(tempDiv);

  // Create the header
  const header = document.createElement("div");
  header.style.marginBottom = "20px";

  // Logo and title container
  const titleRow = document.createElement("div");
  titleRow.style.display = "flex";
  titleRow.style.flexDirection = "column";
  titleRow.style.alignItems = "center";
  titleRow.style.marginBottom = "15px";

  // Logo and title horizontal row
  const logoTitleContainer = document.createElement("div");
  logoTitleContainer.style.display = "flex";
  logoTitleContainer.style.alignItems = "center";
  logoTitleContainer.style.gap = "10px";
  logoTitleContainer.style.marginBottom = "5px";

  // Logo
  const logo = document.createElement("img");
  logo.src = "/logo.png";
  logo.style.width = "60px";
  logo.style.height = "60px";
  logoTitleContainer.appendChild(logo);

  // Main Title
  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "EMPOWER LEARNING SYSTEM";
  mainTitle.style.fontSize = "20px";
  mainTitle.style.fontWeight = "bold";
  mainTitle.style.textTransform = "uppercase";
  mainTitle.style.margin = "0";
  logoTitleContainer.appendChild(mainTitle);

  titleRow.appendChild(logoTitleContainer);

  // Quiz Title
  const quizTitle = document.createElement("h2");
  quizTitle.textContent = title || "Tri-Review Quiz (Jan-March 2025)";
  quizTitle.style.fontSize = "16px";
  quizTitle.style.fontWeight = "medium";
  quizTitle.style.margin = "0 0 10px 0";
  quizTitle.style.textAlign = "center";
  titleRow.appendChild(quizTitle);

  // Subject and time
  const subjectTimeRow = document.createElement("div");
  subjectTimeRow.style.display = "flex";
  subjectTimeRow.style.justifyContent = "space-between";
  subjectTimeRow.style.width = "100%";
  subjectTimeRow.style.fontSize = "14px";

  const subjectSpan = document.createElement("div");
  const subjectName = getSubjectName(subject);
  subjectSpan.textContent = `Subject: ${subjectName || "Not Selected"}`;

  const timeSpan = document.createElement("div");
  timeSpan.textContent = "Time: 1:30 hr.";

  subjectTimeRow.appendChild(subjectSpan);
  subjectTimeRow.appendChild(timeSpan);
  titleRow.appendChild(subjectTimeRow);

  header.appendChild(titleRow);

  // Marks tables in grid
  const tablesRow = document.createElement("div");
  tablesRow.style.display = "grid";
  tablesRow.style.gridTemplateColumns = "1fr 1fr";
  tablesRow.style.gap = "20px";
  tablesRow.style.marginBottom = "15px";

  // Total marks card
  const totalMarksCard = document.createElement("div");
  totalMarksCard.style.border = "1px solid #e5e7eb";
  totalMarksCard.style.borderRadius = "5px";
  totalMarksCard.style.padding = "8px";

  const totalMarksTable = document.createElement("div");
  totalMarksTable.style.display = "grid";
  totalMarksTable.style.gridTemplateColumns = "1fr 1fr";

  const totalMarksLabel = document.createElement("div");
  totalMarksLabel.textContent = "Total Marks";
  totalMarksLabel.style.borderRight = "1px solid #e5e7eb";
  totalMarksLabel.style.borderBottom = "1px solid #e5e7eb";
  totalMarksLabel.style.padding = "8px";
  totalMarksLabel.style.fontWeight = "medium";

  const totalMarksValue = document.createElement("div");
  totalMarksValue.textContent = totalMarks || "0";
  totalMarksValue.style.borderBottom = "1px solid #e5e7eb";
  totalMarksValue.style.padding = "8px";

  totalMarksTable.appendChild(totalMarksLabel);
  totalMarksTable.appendChild(totalMarksValue);
  totalMarksCard.appendChild(totalMarksTable);

  // Obtained marks card
  const obtainedMarksCard = document.createElement("div");
  obtainedMarksCard.style.border = "1px solid #e5e7eb";
  obtainedMarksCard.style.borderRadius = "5px";
  obtainedMarksCard.style.padding = "8px";

  const obtainedMarksTable = document.createElement("div");
  obtainedMarksTable.style.display = "grid";
  obtainedMarksTable.style.gridTemplateColumns = "1fr 1fr";

  const obtainedMarksLabel = document.createElement("div");
  obtainedMarksLabel.textContent = "Obtained Marks";
  obtainedMarksLabel.style.borderRight = "1px solid #e5e7eb";
  obtainedMarksLabel.style.borderBottom = "1px solid #e5e7eb";
  obtainedMarksLabel.style.padding = "8px";
  obtainedMarksLabel.style.fontWeight = "medium";

  const obtainedMarksValue = document.createElement("div");
  obtainedMarksValue.textContent = "";
  obtainedMarksValue.style.borderBottom = "1px solid #e5e7eb";
  obtainedMarksValue.style.padding = "8px";

  obtainedMarksTable.appendChild(obtainedMarksLabel);
  obtainedMarksTable.appendChild(obtainedMarksValue);
  obtainedMarksCard.appendChild(obtainedMarksTable);

  tablesRow.appendChild(totalMarksCard);
  tablesRow.appendChild(obtainedMarksCard);
  header.appendChild(tablesRow);

  // Student information fields
  const studentInfo = document.createElement("div");
  studentInfo.style.marginBottom = "15px";

  // Helper function to create field
  const createField = (labelText, defaultValue) => {
    const field = document.createElement("div");
    field.style.marginBottom = "10px";

    const label = document.createElement("div");
    label.textContent = labelText;
    label.style.fontWeight = "medium";
    label.style.marginBottom = "2px";

    const line = document.createElement("div");
    line.style.borderBottom = "1px solid #d1d5db";
    line.style.height = "1.5em";
    if (defaultValue) {
      line.textContent = defaultValue;
    }

    field.appendChild(label);
    field.appendChild(line);
    return field;
  };

  studentInfo.appendChild(createField("Name:"));
  studentInfo.appendChild(createField("Father's name:"));
  studentInfo.appendChild(createField("Class: Level-1"));
  studentInfo.appendChild(createField("Campus:"));
  studentInfo.appendChild(createField("Day & Date:"));

  // Office use section
  const officeUse = document.createElement("div");
  officeUse.style.marginBottom = "15px";

  const officeUseLabel = document.createElement("div");
  officeUseLabel.textContent = "For office use only";
  officeUseLabel.style.fontWeight = "medium";
  officeUseLabel.style.marginBottom = "8px";
  officeUse.appendChild(officeUseLabel);

  const checkedBy = document.createElement("div");
  checkedBy.style.marginBottom = "5px";

  const checkedBySpan = document.createElement("span");
  checkedBySpan.textContent = "Checked by: ";
  checkedBySpan.style.fontWeight = "medium";

  const checkedByLine = document.createElement("span");
  checkedByLine.style.display = "inline-block";
  checkedByLine.style.width = "200px";
  checkedByLine.style.borderBottom = "1px solid #d1d5db";
  checkedByLine.innerHTML = "&nbsp;";

  checkedBy.appendChild(checkedBySpan);
  checkedBy.appendChild(checkedByLine);
  officeUse.appendChild(checkedBy);

  const recheckedBy = document.createElement("div");

  const recheckedBySpan = document.createElement("span");
  recheckedBySpan.textContent = "Rechecked by: ";
  recheckedBySpan.style.fontWeight = "medium";

  const recheckedByLine = document.createElement("span");
  recheckedByLine.style.display = "inline-block";
  recheckedByLine.style.width = "200px";
  recheckedByLine.style.borderBottom = "1px solid #d1d5db";
  recheckedByLine.innerHTML = "&nbsp;";

  recheckedBy.appendChild(recheckedBySpan);
  recheckedBy.appendChild(recheckedByLine);
  officeUse.appendChild(recheckedBy);

  studentInfo.appendChild(officeUse);
  header.appendChild(studentInfo);

  // Divider
  const divider = document.createElement("hr");
  divider.style.border = "none";
  divider.style.borderTop = "1px solid #d1d5db";
  divider.style.margin = "15px 0";
  header.appendChild(divider);

  // Instructions section
  const instructionsSection = document.createElement("div");
  instructionsSection.style.marginBottom = "15px";

  const instructionsTitle = document.createElement("h3");
  instructionsTitle.textContent = "INSTRUCTIONS";
  instructionsTitle.style.fontWeight = "bold";
  instructionsTitle.style.textTransform = "uppercase";
  instructionsTitle.style.marginBottom = "8px";
  instructionsSection.appendChild(instructionsTitle);

  const instructionsList = document.createElement("ul");
  instructionsList.style.paddingLeft = "20px";
  instructionsList.style.margin = "0";
  instructionsList.style.listStyleType = "disc";

  const instructions = [
    "Answer all questions.",
    "Use a black or dark blue pen.",
    "Write your name, centre number and candidate number in the boxes at the top of the page.",
    "Write your answer to each question in the space provided.",
    "Do not use an erasable pen or correction fluid.",
    "Do not write on any bar codes.",
    "You may use an HB pencil for any diagrams, graphs or rough working.",
    "You must complete the quiz and turn it in within the allotted time.",
    "Read each question carefully before answering to ensure you understand what is being asked.",
    "Misinterpreted questions due to rushing may lead to incorrect answers.",
  ];

  instructions.forEach((instruction) => {
    const li = document.createElement("li");
    li.textContent = instruction;
    li.style.fontSize = "12px";
    li.style.marginBottom = "2px";
    instructionsList.appendChild(li);
  });

  instructionsSection.appendChild(instructionsList);
  header.appendChild(instructionsSection);

  // Information section
  const informationSection = document.createElement("div");
  informationSection.style.marginBottom = "15px";

  const informationTitle = document.createElement("h3");
  informationTitle.textContent = "INFORMATION";
  informationTitle.style.fontWeight = "bold";
  informationTitle.style.textTransform = "uppercase";
  informationTitle.style.marginBottom = "8px";
  informationSection.appendChild(informationTitle);

  const informationList = document.createElement("ul");
  informationList.style.paddingLeft = "20px";
  informationList.style.margin = "0";
  informationList.style.listStyleType = "disc";

  const information = [
    `The total mark for this paper is ${totalMarks || 50}.`,
    "The number of marks for each question or part question is shown in brackets [ ].",
    "Once the quiz begins, you must finish and submit it no later than the given deadline.",
    "If you finish early, review your answers before submitting.",
  ];

  information.forEach((info) => {
    const li = document.createElement("li");
    li.textContent = info;
    li.style.fontSize = "12px";
    li.style.marginBottom = "2px";
    informationList.appendChild(li);
  });

  informationSection.appendChild(informationList);
  header.appendChild(informationSection);

  // Final reminder section
  const reminderSection = document.createElement("div");
  reminderSection.style.marginBottom = "15px";

  const reminderTitle = document.createElement("h3");
  reminderTitle.textContent = "FINAL REMINDER:";
  reminderTitle.style.fontWeight = "bold";
  reminderTitle.style.textTransform = "uppercase";
  reminderTitle.style.marginBottom = "8px";
  reminderSection.appendChild(reminderTitle);

  const reminderList = document.createElement("ul");
  reminderList.style.paddingLeft = "20px";
  reminderList.style.margin = "0";
  reminderList.style.listStyleType = "disc";

  const reminderLi = document.createElement("li");
  reminderLi.textContent =
    "Stay focused, watch the time, and ensure your quiz is submitted before time runs out.";
  reminderLi.style.fontSize = "12px";
  reminderList.appendChild(reminderLi);

  reminderSection.appendChild(reminderList);
  header.appendChild(reminderSection);

  tempDiv.appendChild(header);

  // Create the questions
  const questionsContainer = document.createElement("div");
  questionsContainer.style.fontSize = "14px";
  questionsContainer.style.marginTop = "20px";

  questions.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.style.marginBottom = "20px";

    // Question header
    const questionHeader = document.createElement("div");
    questionHeader.style.marginBottom = "10px";

    const questionText = document.createElement("span");
    questionText.innerHTML = `<strong>Question No ${index + 1}:</strong> ${
      question.statement
    }`;

    const marksSpan = document.createElement("span");
    marksSpan.style.float = "right";
    marksSpan.textContent = `[${question.marks} ${
      question.marks === 1 ? "mark" : "marks"
    }]`;

    questionHeader.appendChild(questionText);
    questionHeader.appendChild(marksSpan);
    questionDiv.appendChild(questionHeader);

    // Question image if exists
    if (question.image) {
      const imageContainer = document.createElement("div");
      imageContainer.style.textAlign = "center";
      imageContainer.style.margin = "10px 0";

      const image = document.createElement("img");
      image.src = question.image;
      image.style.maxWidth = "100%";
      image.style.maxHeight = "200px";

      imageContainer.appendChild(image);
      questionDiv.appendChild(imageContainer);
    }

    // Question type specific rendering
    if (question.type === "mcq") {
      const optionsDiv = document.createElement("div");
      optionsDiv.style.marginLeft = "20px";
      optionsDiv.style.marginTop = "10px";

      question.options.forEach((option, optIndex) => {
        const optionElement = document.createElement("div");
        optionElement.style.marginBottom = "5px";
        optionElement.textContent = `${String.fromCharCode(97 + optIndex)}) ${
          option.text
        }`;
        optionsDiv.appendChild(optionElement);
      });

      questionDiv.appendChild(optionsDiv);
    } else if (question.type === "short" || question.type === "long") {
      const answerSpace = document.createElement("div");
      answerSpace.style.marginTop = "10px";

      // Create dotted lines for answers
      const lines = question.type === "short" ? 3 : 10;
      for (let i = 0; i < lines; i++) {
        const line = document.createElement("div");
        line.style.borderBottom = "1px dotted #aaa";
        line.style.height = "20px";
        line.style.marginBottom = "5px";
        answerSpace.appendChild(line);
      }

      questionDiv.appendChild(answerSpace);
    }

    questionsContainer.appendChild(questionDiv);
  });

  tempDiv.appendChild(questionsContainer);

  // Generate PDF
  html2canvas(tempDiv, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: "#ffffff",
    allowTaint: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = 0;
    const imgY = 0;

    pdf.addImage(
      imgData,
      "PNG",
      imgX,
      imgY,
      imgWidth * ratio,
      imgHeight * ratio
    );
    pdf.save(`${title.replace(/\s+/g, "_")}.pdf`);

    // Clean up
    document.body.removeChild(tempDiv);
  });
};

function getSubjectName(subjectCode) {
  const subjects = {
    math: "Mathematics",
    physics: "Physics",
    chemistry: "Chemistry",
    biology: "Biology",
    english: "English",
    history: "History",
    geography: "Geography",
    cs: "Computer Science",
  };

  return subjects[subjectCode] || "";
}

function getClassName(classCode) {
  const classes = {
    "level-1": "Level-1",
    "level-2": "Level-2",
    "level-3": "Level-3",
    "level-4": "Level-4",
    "level-5": "Level-5",
    "grade-6": "Grade 6",
    "grade-7": "Grade 7",
    "grade-8": "Grade 8",
    "grade-9": "Grade 9",
    "grade-10": "Grade 10",
    "grade-11": "Grade 11",
    "grade-12": "Grade 12",
  };

  return classes[classCode] || "Level-1";
}
