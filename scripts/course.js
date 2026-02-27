const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 340,
        title: 'Web Backend Development',
        credits: 3,
        certificate: 'Web Development',
        description: '',
        technology: [
            
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 341,
        title: 'Web Services',
        credits: 3,
        certificate: 'Web Development',
        description: '',
        technology: [
            
        ],
        completed: false
    },
    {
        subject: 'ITM',
        number: 111,
        title: 'Introduction to Databases',
        credits: 3,
        certificate: 'Web Development',
        description: '',
        technology: [
            
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 330,
        title: 'Web Frontend Development II',
        credits: 3,
        certificate: 'Web Development',
        description: '',
        technology: [
            
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 430,
        title: 'Web Full-Stack Development',
        credits: 3,
        certificate: 'Web Development',
        description: '',
        technology: [
            
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 212,
        title: 'Programming with Data Structures',
        credits: 2,
        certificate: 'Software Development',
        description: '',
        technology: [
            
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 270,
        title: 'Software Testing',
        credits: 3,
        certificate: 'Software Development',
        description: '',
        technology: [
            
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 300,
        title: 'Professional Readiness',
        credits: 1,
        certificate: 'Software Development',
        description: '',
        technology: [
            
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 310,
        title: 'Applied Programming',
        credits: 3,
        certificate: 'Software Development',
        description: '',
        technology: [
            
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 325,
        title: '.NET Software Development',
        credits: 3,
        certificate: 'Software Development',
        description: '',
        technology: [
            
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 370,
        title: 'Software Engineering Principles',
        credits: 2,
        certificate: 'Software Development',
        description: '',
        technology: [
            
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 499,
        title: 'Senior Project',
        credits: 3,
        certificate: 'N/A',
        description: '',
        technology: [
            
        ],
        completed: false
    }

]

const all = document.querySelector("#all");
const cse = document.querySelector("#cse");
const wdd = document.querySelector("#wdd");
const web_computer = document.querySelector("#web_computer");
const web = document.querySelector("#web");
const software = document.querySelector("#software");
const result = document.querySelector("#result");
const totalcredits = document.querySelector("#totalcredits");
const courseDetails = document.querySelector("#course-details");
let credits = 0;
displayCourses(courses.sort((a,b) => a.number - b.number));

function displayCourses(filteredList){
    result.innerHTML = '';
    credits = 0;
    filteredList.forEach(item => {
        credits += item.credits;
        let button = document.createElement("div");
        if (item.completed == true){
            button.innerHTML = '&#10004;' + item.subject + " " + item.number;  
            button.classList.add('done'); 
        }
        else{
            button.textContent = item.subject + " " + item.number;
        }
        button.addEventListener('click', () => {
            displayCourseDetails(item);
        });
        button.classList.add('button');
        result.appendChild(button);

        
    });
    // result.innerHTML = toInsert;
    totalcredits.textContent = credits;
}

all.addEventListener("click", ()=>{
    displayCourses(courses.sort((a,b) => a.number - b.number));
})

cse.addEventListener("click", ()=>{
    displayCourses(courses.filter(item => item.subject == "CSE"));
})

wdd.addEventListener("click", ()=>{
    sortedList = courses.filter(item => item.subject == "WDD");
    displayCourses(sortedList);
})

web_computer.addEventListener("click", ()=>{
    sortedList = courses.filter(item => item.certificate == "Web and Computer Programming");
    displayCourses(sortedList);
})

web.addEventListener("click", ()=>{
    sortedList = courses.filter(item => item.certificate == "Web Development");
    displayCourses(sortedList);
})

software.addEventListener("click", ()=>{
    sortedList = courses.filter(item => item.certificate == "Software Development");
    displayCourses(sortedList);
})



function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();
  
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}