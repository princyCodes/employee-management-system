const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Build the login page with email and password fields.",
        taskDate: "2026-10-02",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Fix the alignment issue in the navigation bar.",
        taskDate: "2026-10-03",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup React Project",
        taskDescription: "Create the React project and install required dependencies.",
        taskDate: "2026-09-28",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect the application to the employee API.",
        taskDate: "2026-09-30",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    firstName: "Ananya",
    email: "employee2@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDescription: "Create a responsive dashboard layout for the application.",
        taskDate: "2026-10-02",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Document the project setup and installation steps.",
        taskDate: "2026-10-04",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Wireframes",
        taskDescription: "Prepare wireframes for the main application screens.",
        taskDate: "2026-09-27",
        category: "Design"
      }
    ]
  },

  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@gmail.com",
    password: "123",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Employee Card",
        taskDescription: "Create a reusable employee card component.",
        taskDate: "2026-10-02",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Task Filter",
        taskDescription: "Add filters for active, completed and failed tasks.",
        taskDate: "2026-10-05",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Dependencies",
        taskDescription: "Update the project dependencies to their latest stable versions.",
        taskDate: "2026-09-25",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Setup",
        taskDescription: "Configure the development database for the project.",
        taskDate: "2026-09-29",
        category: "Backend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Login System",
        taskDescription: "Test login functionality with valid and invalid credentials.",
        taskDate: "2026-10-06",
        category: "Testing"
      }
    ]
  },

  {
    id: 4,
    firstName: "Priya",
    email: "employee4@gmail.com",
    password: "123",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription: "Add search functionality to find employees quickly.",
        taskDate: "2026-10-03",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Login Form",
        taskDescription: "Build and style the login form for employees.",
        taskDate: "2026-09-26",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Git Repository",
        taskDescription: "Initialize the repository and push the initial project files.",
        taskDate: "2026-09-24",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Responsive Layout",
        taskDescription: "Make the dashboard responsive on mobile devices.",
        taskDate: "2026-10-07",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy the application to the production server.",
        taskDate: "2026-09-30",
        category: "Deployment"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Logout Feature",
        taskDescription: "Implement logout functionality for employees.",
        taskDate: "2026-10-08",
        category: "Feature"
      }
    ]
  },

  {
    id: 5,
    firstName: "Neha",
    email: "employee5@gmail.com",
    password: "123",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Task Component",
        taskDescription: "Build a reusable component to display individual tasks.",
        taskDate: "2026-10-02",
        category: "React"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Task Counter",
        taskDescription: "Display the number of active and completed tasks.",
        taskDate: "2026-10-04",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Navbar",
        taskDescription: "Build the main navigation bar for the dashboard.",
        taskDate: "2026-09-25",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Style Dashboard",
        taskDescription: "Apply Tailwind CSS styles to the employee dashboard.",
        taskDate: "2026-09-28",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix API Error",
        taskDescription: "Investigate and fix the error occurring during API requests.",
        taskDate: "2026-09-29",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Task Status",
        taskDescription: "Add status indicators for active, completed and failed tasks.",
        taskDate: "2026-10-09",
        category: "Feature"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Dashboard",
        taskDescription: "Test all dashboard features and identify UI issues.",
        taskDate: "2026-10-10",
        category: "Testing"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employee, admin };
};