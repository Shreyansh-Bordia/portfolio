const roles = ["Full Stack Developer",
    "Bug Bounty Hunter",
    "Leader",
    "Machine Learning Enthusiast",
    "Artist (Paintings, Sketchings)",
    "Graphic Designer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100; // Typing speed (ms per character)
const deletingSpeed = 30; // Deleting speed
const delayBeforeDeleting = 600; // Delay before deleting the text
const rolesElement = document.getElementById("roles");

function typeRole() {
if (charIndex < roles[index].length) {
  rolesElement.textContent += roles[index][charIndex];
  charIndex++;
  setTimeout(typeRole, typingSpeed); // Continue typing
} else {
  // Pause before deleting
  setTimeout(deleteRole, delayBeforeDeleting);
}
}

function deleteRole() {
if (charIndex > 0) {
  rolesElement.textContent = rolesElement.textContent.slice(0, -1);
  charIndex--;
  setTimeout(deleteRole, deletingSpeed); // Continue deleting
} else {
  // Move to the next role and start typing again
  index = (index + 1) % roles.length;
  setTimeout(typeRole, typingSpeed);
}
}

typeRole(); // Start the typing effect

const carousel = document.getElementById("projects-carousel");
const cards = document.querySelectorAll(".project-card");
let currentIndex = 0;

function updateCarousel() {
  cards.forEach((card) => card.classList.remove("active")); // Remove the 'active' class from all cards
  cards[currentIndex].classList.add("active"); // Add the 'active' class to the current card
  const cardWidth = cards[0].offsetWidth + 100; // Card width plus margin   // Calculate the scroll position to center the active card
  const offset = (carousel.offsetWidth - cardWidth) / 2;
  const translateX = -(currentIndex * cardWidth - offset); // Apply the scroll effect
  carousel.style.transform = `translateX(${translateX}px)`;
  currentIndex = (currentIndex + 1) % cards.length; // Infinite loop    // Update the index to the next card
}
updateCarousel(); // Initialize the carousel
setInterval(updateCarousel, 2000); // Scroll automatically every 2 seconds

//For the Experience Section
const carousel1 = document.getElementById("exp-carousel");
const cards1 = document.querySelectorAll(".exp-card");
let currentIndex1 = 0;

function updateCarousel1() {
  cards1.forEach((card) => card.classList.remove("active"));
  cards1[currentIndex1].classList.add("active");
  const cardWidth = cards1[0].offsetWidth + 100;
  const offset = (carousel1.offsetWidth - cardWidth) / 2;
  const translateX = -(currentIndex1 * cardWidth - offset);
  carousel1.style.transform = `translateX(${translateX}px)`;
  currentIndex1 = (currentIndex1 + 1) % cards1.length;
}
updateCarousel1();
setInterval(updateCarousel1, 3000);

//For the Extra Curricular Experience Section
const carousel2 = document.getElementById("extra-carousel");
const cards2 = document.querySelectorAll(".extra-card");
let currentIndex2 = 0;

function updateCarousel2() {
  cards2.forEach((card) => card.classList.remove("active"));
  cards2[currentIndex2].classList.add("active");
  const cardWidth = cards2[0].offsetWidth + 100;
  const offset = (carousel2.offsetWidth - cardWidth) / 2;
  const translateX = -(currentIndex2 * cardWidth - offset);
  carousel2.style.transform = `translateX(${translateX}px)`;
  currentIndex2 = (currentIndex2 + 1) % cards2.length;
}
updateCarousel2();
setInterval(updateCarousel2, 2000);

function copyToClipboard(content) {
  navigator.clipboard.writeText(content).then(() => {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 3000);
  });
}

phoneButton.addEventListener('click', () => {
  notification.innerHTML = 'Phone Number copied to clipboard!';
});

emailButton.addEventListener('click', () => {
  notification.innerHTML = 'Email address copied to clipboard!';
});

// Object to store project details
const projectDetails = {
  project1: {
    title: "Food Ordering Mobile Application - BMSCE Food Adda",
    description: `
       <p><strong>Tech Stack:</strong> XML, Kotlin, Firebase<br><br>
        <strong>Objective:</strong> Developed a real-time Food Ordering Application to improve the efficiency of the ordering process for BMS College students, aiming to minimize wait times and streamline operations.<br><br>
        <strong>Achievements:</strong><br>
        1. Successfully cut down wait times, leading to a more efficient and swift food ordering experience for students.<br>
        2. Saw a significant increase in user adoption, reflecting the app's strong appeal and effectiveness in meeting the needs of the student community.<br>
        3. Improved user experience through advanced real-time ordering features, resulting in greater satisfaction and enhanced engagement with the app.<br>
        <br><strong>Github Links: </strong><br>
        <a href="https://github.com/Shreyansh-Bordia/BMSCE-Food-Adda">Customer Application Repository</a><br>
        <a href="https://github.com/Shreyansh-Bordia/BMSCE-Food-Adda-Admin">Vendor/Admin Application Repository</a><br></p>
      `
  },
  project2: {
    title: "Intrusion Detection System",
    description: `
        <p><strong>Tech Stack:</strong> PCA, Random Forest, HTML, CSS, JavaScript, Twilio API<br>
        <br><strong>Objective:</strong> Developed an Intrusion Detection System to enhance network security by accurately identifying and alerting on potential intrusions.<br>
        <br><strong>Achievements:</strong><br>
        1. Achieved an impressive accuracy of around 98.7% using machine learning algorithms such as PCA and Random Forest on the NSL KDD dataset, ensuring high reliability in threat detection.<br>
        2. Implemented a comprehensive simulation of the model using HTML, CSS, and JavaScript, providing a user-friendly interface for monitoring and analysis.<br>
        3. Integrated Twilio API to enable real-time message alerts when an intrusion is detected, improving responsiveness and security management.<br>
        <br><strong>Github Links:</strong><br>
        <a href="https://github.com/Shreyansh-Bordia/Intrusion-Detection-System">Intrusion Detection System Repository</a><br></p>
    `
  },
  project3: {
    title: "Text Summarizer - IUCEE Mini Course",
    description: `
        <p><strong>Tech Stack:</strong> NLP, NLTK<br>
        <br><strong>Objective:</strong> Developed a Text Summarizer utilizing advanced NLP techniques to condense lengthy texts and provide concise summaries.<br>
        <br><strong>Achievements:</strong><br>
        1. Successfully reduced text length by up to 60%, significantly improving the efficiency and readability of lengthy documents.<br>
        2. Leveraged NLTK for comprehensive text preprocessing and analysis, ensuring high-quality and accurate summaries.<br>
        3. Designed an intuitive interface for generating concise summaries, enhancing user efficiency and streamlining information retrieval.<br>
        </p>
    `
  },
  project4: {
    title: "Beauty E-Commerce Website",
    description: `
        <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript<br>
        <br><strong>Objective:</strong> Developed a basic Beauty E-Commerce Website as part of my third-semester college curriculum, showcasing beauty products and simulating the ordering process.<br>
        <br><strong>Achievements:</strong><br>
        1. Created a user-friendly interface displaying images of various beauty products, providing a visual and engaging shopping experience.<br>
        2. Implemented a mock order placement system where users can place orders, leading to a confirmation page to simulate the completion of the transaction.<br>
        3. Utilized basic HTML, CSS, and JavaScript to develop the site, focusing on front-end design and user interaction without database integration.<br>
        </p>
    `
  },
  exp1: {
    title: "Interim Intern at Qualcomm, India (6 months internship, ongoing)",
    description: `
        <p><strong>Tech Stack:</strong> ASP.NET MVC, Vue.js, Nuxt, Angular, .NET Framework, SQL Server<br> 
        <br><strong>Objective:</strong> Contributing to various projects as a Full Stack Developer during my internship, enhancing my skills and gaining industry exposure.<br> 
        <br><strong>Achievements:</strong><br> 
        1. Actively working on full stack development projects, gaining hands-on experience in both front-end and back-end development.<br> 
        2. Strengthened my understanding of ASP.NET MVC, .NET Framework, and C#, while also learning modern front-end technologies like Angular, Vue.js, and Nuxt.<br> 
        3. Collaborating with a professional team to deliver functional and efficient solutions, enhancing my problem-solving and teamwork abilities.<br> 
        4. Aiming to achieve a comprehensive knowledge of diverse frameworks and tools by the conclusion of my internship.<br> </p>
    `
  },
  exp2: {
    title: "Summer Intern at Siemens Technology and Services Pvt. Ltd.",
    description: `
      <p><strong>Tech Stack:</strong> HTML, CSS, Javascript, Flask, Fast API, Tensorflow, Keras<br> 
      <br><strong>Objective:</strong> Applied advanced machine learning techniques and API integration to develop robust applications, gaining valuable hands-on experience in real-world scenarios.<br> 
      <br><strong>Achievements:</strong><br> 
      1. Developed and integrated a high-precision machine learning model with 98% accuracy into a real-time image prediction and inspection website.<br> 
      2. Utilized TensorFlow for model creation and employed Numpy and Pandas for effective data manipulation and analysis.<br> 
      3. Gained hands-on experience in implementing APIs using FastAPI, enhancing the website's functionality and performance.<br> 
      4. Executed AI-driven social media marketing strategies, leading to a significant increase in engagement and return on investment (ROI).<br> 
      5. Demonstrated the ability to develop impactful marketing solutions while applying advanced machine learning techniques and building robust applications.<br> </p>
    `
  },
  exp3: {
    title: "Amazon ML Summer School",
    description: `
        <p><strong>Skills Acquired:</strong> Machine Learning, Python (Programming Language), Statistics<br> 
        <br><strong>Objective:</strong> Gained foundational and advanced knowledge in Machine Learning, working closely with Amazon's top ML scientists and mastering skills essential for ML roles and projects.<br> 
        <br><strong>Achievements:</strong><br> 
        1. Selected from a competitive pool of over 61,000 applicants, standing out among the 2,000 participants.<br> 
        2. Learned directly from Amazon's leading ML scientists, gaining insights into cutting-edge ML practices.<br> 
        3. Successfully completed an intensive program designed to build expertise in Machine Learning, Python, and Statistics.<br> 
        4. Developed and polished skills in implementing advanced ML concepts, preparing for real-world applications and diverse projects.<br> 
        <br><strong>Certificate:</strong><br>
        <a href="https://drive.google.com/file/d/118JVcLcPObnmcDanYS8Us4X99GO9Vuoj/view?usp=sharing">View the Certificate</a><br> </p>
    `
  },
  exp4: {
    title: "Ethical Hacking - Haxsploit",
    description: `
        <p><strong>Tech Stack:</strong> Linux, NMap, Metasploit, Port Scanner, Wireshark<br> 
        <br><strong>Objective:</strong> Gained comprehensive training in ethical hacking, focusing on cybersecurity and the responsible use of technology.<br> 
        <br><strong>Achievements:</strong><br> 
        1. Completed advanced training in ethical hacking, honing skills in identifying and mitigating security vulnerabilities.<br> 
        2. Successfully solved challenging Capture the Flag (CTF) assignments, identifying 8 out of 10 and 9 out of 10 flags across various difficulty levels.<br> 
        3. Demonstrated practical expertise in using tools like NMap, Metasploit, and Wireshark for cybersecurity operations.<br> 
        4. Offered an internship role in ethical hacking, affirming my capabilities and potential in the field, although I had to decline due to time constraints.<br> 
        5. Equipped with valuable insights and a solid foundation to further pursue my passion for cybersecurity and ethical hacking.<br> </p>
    `
  },
  exp5: {
    title: "Java Master Course - Udemy",
    description: `
        <p><strong>Skills Acquired:</strong> Core Java Programming, Oracle Java Certification Preparation, Industry Best Practices, Java Development for Spring Framework and Android, Proficiency in Java 8, Java 11, and Java 17, JavaFX<br> 
        <br><strong>Objective:</strong> Completed an intensive course to gain in-depth knowledge of Java, focusing on core concepts, advanced features, and software development skills.<br> 
        <br><strong>Achievements:</strong><br> 
        1. Gained a robust understanding of Java's core principles, enabling confidence in handling complex software development projects.<br> 
        2. Mastered object-oriented programming and GUI development with JavaFX, expanding my ability to create dynamic and interactive applications.<br> 
        3. Acquired a deep understanding of the differences between various versions of Java, enhancing versatility in development.<br> 
        4. Developed sophisticated applications through comprehensive training, furthering my programming expertise.<br> 
        <br><strong>Certificate:</strong><br>
        <a href="http://ude.my/UC-079cbc5a-90ed-46e2-bb72-ed9bd34c44ec/">View the Certificate</a><br> </p>
    `
  },
  exp6: {
    title: "C# and .NET Framework Training - LinkedIn Learning",
    description: `
        <p><strong>Skills Acquired:</strong> C# Programming, .NET Framework Development, Object-Oriented Programming, Application Development<br> 
        <br><strong>Objective:</strong> Completed an in-depth certification program to gain mastery in C# programming and the .NET Framework, equipping myself with essential skills for building robust applications.<br> 
        <br><strong>Achievements:</strong><br> 
        1. Mastered core concepts of C# programming, including syntax, object-oriented principles, and efficient coding practices.<br> 
        2. Gained a thorough understanding of the .NET Framework and its powerful features for developing scalable and maintainable applications.<br> 
        3. Acquired hands-on experience in designing, coding, and debugging applications, preparing for real-world software development scenarios.<br> 
        4. Developed a solid foundation to confidently tackle advanced frameworks and technologies built on the .NET platform.<br> 
        5. Successfully demonstrated proficiency through LinkedIn Learning's rigorous certification program, showcasing my dedication and skill growth.<br> </p>
    `
  },
  extra1: {
    title: "Student Head of Social Media and PR Cell",
    description: `
        <p><strong>Skills Acquired:</strong> Leadership, Strategic Communication, Digital Branding, Community Engagement<br> <br>
        <strong>Objective:</strong> Representing the authoritative voice of B.M.S. College of Engineering, fostering a transparent and empowering digital presence, and uniting the college community through impactful communication.<br> 
        <br><strong>Achievements:</strong><br> 
        1. Headed the Social Media and PR Cell, directly collaborating with esteemed faculty heads, trustees, and administrative leaders.<br> 
        2. Led impactful initiatives to shape a dynamic digital presence for the college, ensuring bold, accurate, and engaging communication.<br> 
        3. Strategically managed the cell's activities to amplify the institution's image and inspire students and society alike.<br> 
        4. Fostered a sense of unity across the college community through effective communication strategies.<br> 
        <br><strong>Details:</strong><br>
        <a href="https://bmsce.ac.in/home/Student-Representatives">Learn more about the team</a><br> </p>
    `
  },
  extra2: {
    title: "Student Placement Coordinator",
    description: `
      <p><strong>Skills Acquired:</strong> Leadership, Communication, Coordination, Management<br> 
      <br><strong>Objective:</strong> Played a pivotal role in coordinating the recruitment processes of leading companies, enhancing leadership and interpersonal skills.<br> 
      <br><strong>Achievements:</strong><br> 
      1. Coordinated recruitment processes for 40+ companies, including prominent organizations like VISA, Thales, DISH Network, and KPMG.<br> 
      2. Gained invaluable leadership and management experience through rigorous and detail-oriented coordination efforts.<br> 
      3. Enhanced communication skills by liaising between students and employers, ensuring smooth recruitment procedures.<br> 
      4. Improved organizational and problem-solving skills, contributing effectively to the campus placement ecosystem.<br> </p>
    `
  },
  extra3: {
    title: "Club President for 2 Clubs (Augment.AI, BMSCE and Teamcodelocked, BMSCE)",
    description: `
        <p><strong>Skills Acquired:</strong> Leadership, Team Management, Innovation, Project Coordination<br> 
        <br><strong>Objective:</strong> Led two prominent tech clubs to foster innovation, inspire teamwork, and coordinate impactful projects within the college tech community.<br> 
        <br><strong>Achievements:</strong><br> 
        1. Served as President of Augment.AI, guiding the club in advancing collective knowledge and skills in artificial intelligence.<br> 
        2. Coordinated multiple tech-related activities and events as Club Coordinator of Team Codelocked.<br> 
        3. Strategized and oversaw initiatives that fostered innovation, project execution, and collaborative problem-solving.<br> 
        4. Significantly contributed to the tech ecosystem at BMSCE, leaving a lasting impact on the community.<br> </p>
    `
  },
  extra4: {
    title: "Campus Ambassador for DELL, Casio, HackerEarth, IIT Clubs (IIT-B, IIT-H), The Bachchao Project",
    description: `
        <p><strong>Skills Acquired:</strong> Networking, Event Organization, Leadership, Strategic Communication<br> 
        <br><strong>Objective:</strong> Represented and promoted the missions of several renowned organizations within the college community, building strong professional networks.<br> 
        <br><strong>Achievements:</strong><br> 
        1. Acted as Campus Ambassador for esteemed institutions, including Dell, CASIO, HackerEarth, The Bachchao Project, Internshala, Abhyuday (IIT Bombay), Saarang (IIT Madras), UpGrad, and The Bachchao Project.<br> 
        2. Organized impactful events and workshops to raise awareness of various initiatives, fostering active student engagement.<br> 
        3. Enhanced networking skills by collaborating with a diverse range of professionals and peers.<br> 
        4. Played a key role in promoting these organizations' objectives, driving their influence within the academic community.<br> </p>
    `
  }
};

// Function to open the modal with dynamic content
function openModal(projectKey) {
  const project = projectDetails[projectKey];
  document.getElementById("modal-title").innerHTML = `<strong>${project.title}</strong>`;
  document.getElementById("modal-body").innerHTML = project.description;
  document.getElementById("overlay").classList.add("active");
  document.getElementById("modal").classList.add("active");
}

// Function to close the modal
function closeModal() {
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("modal").classList.remove("active");
}
