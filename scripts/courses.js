const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students become more organized, efficient, and powerful computer programmers by learning to write, call, debug, and test functions.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the notion of classes and objects, encapsulation, inheritance, and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focuses on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const coursesContainer = document.querySelector('.certificate');
const allBtn = document.querySelector('#allBtn');
const wddBtn = document.querySelector('#wddBtn');
const cseBtn = document.querySelector('#cseBtn');

// ✅ Create a credit display element
const creditDisplay = document.createElement('p');
creditDisplay.style.textAlign = 'center';
creditDisplay.style.fontWeight = '600';
creditDisplay.style.marginBottom = '1rem';
coursesContainer.parentNode.insertBefore(creditDisplay, coursesContainer);

// ✅ Function to calculate total credits using reduce
function calculateTotalCredits(courseList) {
    return courseList.reduce((total, course) => total + course.credits, 0);
}

// ✅ Function to render courses
function displayCourses(filteredCourses) {
    coursesContainer.innerHTML = ''; // clear existing

    // Display total credits
    const totalCredits = calculateTotalCredits(filteredCourses);
    creditDisplay.textContent = `Total Credits: ${totalCredits}`;

    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card', course.completed ? 'completed' : 'incomplete');

        card.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            <p><strong>Status:</strong> ${course.completed ? '✅ Completed' : '❌ In Progress'}</p>
        `;

        coursesContainer.appendChild(card);
    });
}

// ✅ Initial render - show all
displayCourses(courses);

// ✅ Filter buttons
allBtn.addEventListener('click', () => displayCourses(courses));
wddBtn.addEventListener('click', () => displayCourses(courses.filter(course => course.subject === 'WDD')));
cseBtn.addEventListener('click', () => displayCourses(courses.filter(course => course.subject === 'CSE')));
