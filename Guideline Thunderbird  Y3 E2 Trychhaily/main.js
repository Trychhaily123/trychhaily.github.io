// Sections Data
const sections = [
  {
    title: "1. Download and Install Thunderbird",
    content:
      "Visit the official Mozilla Thunderbird website and download the latest version. Follow the installation instructions to set up the application on your device.",
    image: "first.jpg",
  },
  {
    title: "2. Setting up Email in Mozilla Thunderbird Automatically",
    content:
      "This method is best for setting up a Gmail account or one from other popular email providers. Start by opening Mozilla Thunderbird. If this is the first time you open it after installation, the Set Up Your Existing Email Address page will pop up.On the setup page, enter your name, full email address, and password. Then, press Continue.",
    image: "1.webp",
  },
  {
    title: "3. Automatic Server Detection",
    content:
      "Thunderbird will automatically look up and fill in the email provider’s outgoing and incoming mail server details. It will also give you the option to choose either IMAP or POP as the incoming mail protocol. After making your choice, hit the Done button.",
    image: "serversetting.webp",
  },
  {
    title: "4. Account Successfully Configured",
    content:
      "The page below will show up once you’ve successfully configured an email account on Thunderbird. Click Finish to view your mailbox and start using Thunderbird.",
    image: "Account Successfully Configured.webp",
  },
  {
    title: "5. Adding a New Email Account",
    content:
      "To add a new account, click on your email address on the left pane and click Email in the Set Up Another Account section. Then, follow the same steps as before.",
    image: "new account.webp",
  },
  {
    title: "6. Setting up Email in Mozilla Thunderbird Manually",
    content:
      "Manual setup is recommended for users who want to set up a custom email or whose email provider is not listed in Thunderbird’s automatic configuration database.To manually set up a mail account, open Thunderbird and click the hamburger menu button at the top right. Then, click New -> Existing Mail Account.",
    image: "Thunderbird-manually.webp",
  },
  {
    title: "7. Entering Manual Configuration Details",
    content:
      "Once the settings page appears, fill in your name, full email address, and password. After that, click Configure manually.",
    image: "Thunderbird-configure-manually.webp",
  },
  {
    title: "8. Configuring Incoming Mail Server",
    content:
      "Edit the server names, ports, and security settings. Choose IMAP and enter imap.hostinger.com as the hostname, and set the incoming port to 993.",
    image: "Thunderbird-manual-configuration-IMAP-1.webp",
  },
  {
    title: "9. Setting Security for Incoming Mail",
    content:
      "Click on the Connection security drop-down menu and select SSL/TLS. Use Normal password for authentication.",
    image: "Thunderbird-manual-setup-connection.webp",
  },
  {
    title: "10. Configuring Outgoing Mail Server",
    content:
      "Fill in the Hostname and Port fields of your outgoing server. Use smtp.hostinger.com as the outgoing server (SMTP) hostname and 465 as the outgoing port.",
    image: "465.webp",
  },
  {
    title: "11. Setting Security for Outgoing Mail",
    content:
      "Choose SSL/TLS as the Connection security method. Use Normal password for authentication.",
    image: "security.webp",
  },
  {
    title: "12. Testing and Completing Manual Setup",
    content:
      "Click the Re-test button to verify your settings. If valid, press Done and wait for Thunderbird to finalize the setup. Click Finish to view your mailbox.",
    image: "Thunderbird-quick-response.webp",
  },
  {
    title: "Thunderbird Setup Complete!",
    content:
      "Congratulations! Your Thunderbird email account is now ready to use. You can send and receive emails, organize messages, and explore additional features.",
    image: "final.webp",
    success: true,
  },
];

// Get container
const container = document.getElementById("sections-container");

// Populate sections dynamically
sections.forEach((section, index) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.classList.add("section");

  // Add success class if it's the last step
  if (section.success) {
    sectionDiv.classList.add("success");
  }

  sectionDiv.innerHTML = `
          <h2>${section.title}</h2>
          <p>${section.content}</p>
          <img src="${section.image}" alt="${section.title}">
      `;

  // Apply animation delay
  sectionDiv.style.animationDelay = `${index * 0.1}s`;

  container.appendChild(sectionDiv);
});
