// Example: array of experiences
export type Experience = {
  role: string;
  org: string;
  period: Period;
  loc: string;
  exp: string[];
  skills: string[];
}

type Period = {
  start: string;
  end: string;
}

const experiences: Experience[] = [
  {
    role: 'SDE 1',
    org: 'AbeBooks, an Amazon company',
    period: {
      start: '14/07/2025',
      end: 'present'
    },
    loc: 'Victoria, BC, Canada',
    exp: [
      'Developing and maintaining large scale web application'
    ],
    skills: [ 'java', 'react', 'aws' ]
  },
  {
    role: 'LLM Prompt Engineer',
    org: 'Scale AI',
    period: {
      start: '01/01/2024',
      end: '01/06/2025'
    },
    loc: 'Remote - United States',
    exp: [
      'Worked on several projects on training large language model for software development.',
      'Mainly designing challenging problems to fail and improve the LLM'
    ],
    skills: [ 'C++', 'C', 'java', 'python', 'web dev'],
  },
  {
    role: 'Software Engineer Intern',
    org: 'Euler Motors',
    period: {
      start: '01/01/2023',
      end: '01/07/2023'
    },
    loc: 'New Delhi, India',
    exp: [
      'Worked on large embedded C code base. Cleaned up build warning and created hooks for misra c compliance check',
      'Developed CAN-TP (ISO 15765-2) protocol to enable larger data communication between ECUs on CAN bus',
      'Developed a firmware upgrade system that works over CAN bus',
      'Designed SQL query to sync two databases with different recoring frequencies'
    ],
    skills: [ 'C', 'C++', 'Python', 'SQL', 'ThreadX RTOS' ]
  },
  {
    role: 'Teaching Assitant',
    org: 'Dhirubhai Ambani Institute of Information and Communication Technology',
    loc: 'Gandhinagar, India',
    period: {
      start: '01/04/2022',
      end: '01/07/2022'
    },
    exp: [
      'Conducted lab session for DSA class for topics like queue, stack and trees',
      'Grading student assignments'
    ],
    skills: [ 'C', 'C++', 'DSA' ]
  },
  {
    role: 'Summer Research Intern',
    org: 'Dhirubhai Ambani Institute of Information and Communication Technology',
    loc: 'Gandhinagar, India',
    period: {
      start: '01/04/2022',
      end: '01/07/2022'
    },
    exp: [
      'Developed a mathematical Image-Denoising Framework in python with OpenCV, NumPy and SciPy'
    ],
    skills: [ 'Python' ]
  }
]

export default experiences;