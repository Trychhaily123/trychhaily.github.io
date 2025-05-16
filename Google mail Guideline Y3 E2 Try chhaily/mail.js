// Sections Data
const sections = [
  {
    title: "1. Open Gmail Settings",
    content:
      "Open Gmail (https://mail.google.com/). Click the gear icon (⚙) in the top right. Select 'See all settings'.",
    image: "first step.png",
  },
  {
    title: "2. Add Another Email Address",
    content:
      "Go to the 'Accounts and Import' tab. In the 'Send mail as' section, click 'Add another email address'. Enter the name and email address you want to send from. Choose whether to treat it as an alias (leave it checked in most cases). Click 'Next Step'.",
    image: "add another email.png",
  },
  {
    title: "3. Configure SMTP Server",
    content:
      "Enter the SMTP server settings for the email you're adding:\n\nGmail SMTP (if using another Gmail account):\n- SMTP Server: smtp.gmail.com\n- Port: 587 (TLS) or 465 (SSL)\n- Username: Your full email address\n- Password: Your email password or App Password (if 2-Step Verification is enabled)\n\nClick 'Add Account'.",
    image: "confirm 2 verify.png",
  },
  {
    title: "4. Verify Ownership",
    content:
      "A verification email will be sent to the added email. Open the email and click the confirmation link OR enter the verification code in Gmail settings.",
    image: "confirm2.png",
  },
  {
    title: "5. Start Sending Emails from the New Address",
    content:
      "When composing an email, click the 'From' field and select the added email address.",
    image: "final.png",
  },
  {
    title: "Enjoy your conversation !!",
    content:
      "Highlight",
    image: "Gif.gif",
  },
];

// Get container
const container = document.getElementById("sections-container");

// Populate sections dynamically
sections.forEach((section, index) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.classList.add("section");

  sectionDiv.innerHTML = `
              <h2>${section.title}</h2>
              <p>${section.content}</p>
              <img src="${section.image}" alt="${section.title}">
          `;

  // Apply animation delay
  sectionDiv.style.animationDelay = `${index * 0.1}s`;

  container.appendChild(sectionDiv);
});
