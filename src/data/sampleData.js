// Sample CV data for demo purposes
export const SAMPLE_CV_DATA = {
  personalDetails: {
    firstName: 'Michael',
    lastName: 'Scott',
    email: 'mgscott_dm@gmail.com',
    phone: '(123)-435-7890',
    linkedin: 'https://www.linkedin.com/in/mgscott~/',
    github: 'https://github.com/michaelscott',
  },
  workExperience: [
    {
      id: 'work-1',
      company: 'Dunder Mifflin Paper Company',
      position: 'Junior Salesman',
      startDate: 'December 2021',
      endDate: 'Present',
      location: 'Scranton, PA',
      description: `Identify and cultivate new sales clients through multiple mediums (phone, email, inbound website leads, and more)
Responsible for achieving weekly targets such as 100 call quantity, activities/tasks, call quality, and sales skills
Maintain a high level of detail managing all aspects of sales activities within Salesforce`,
    },
    {
      id: 'work-2',
      company: 'Michael Scott Paper Company (Acquired)',
      position: 'Founder and President',
      startDate: 'August 2021',
      endDate: 'December 2021',
      location: 'Scranton, PA',
      description: `Acqui-hired by Dunder Mifflin
Founded a paper supplier serving the greater Scranton area
Managed and mentored team of two sales representatives to grow customer base to over 10 medium-sized businesses`,
    },
    {
      id: 'work-3',
      company: 'ShoeLaLa',
      position: 'Marketing Intern',
      startDate: 'June 2019',
      endDate: 'September 2019',
      location: 'Scranton, PA',
      description: `Assisted in development of creative ad campaigns for 12 summer shoe styles
Maintained tracking report of all public relations activity
Performed monthly analysis of marketing and sales data using Excel
Analyzed competitor marketing deals for reporting to marketing team`,
    },
  ],
  education: [
    {
      id: 'edu-1',
      institute: 'Scranton College',
      degree: 'B.S. Communications',
      startDate: 'September 2018',
      endDate: 'Present',
      location: 'Scranton, PA',
      grade: '3.84',
    },
    {
      id: 'edu-2',
      institute: 'Scranton High School',
      degree: 'High School Diploma',
      startDate: 'September 2014',
      endDate: 'June 2018',
      location: 'Scranton, PA',
      grade: '3.9',
    },
  ],
  skills: {
    languages: [
      { id: 'lang-1', name: 'JavaScript' },
      { id: 'lang-2', name: 'Python' },
      { id: 'lang-3', name: 'C++' },
      { id: 'lang-4', name: 'Java' },
      { id: 'lang-5', name: 'SQL' },
    ],
    frameworksAndTools: [
      { id: 'tool-1', name: 'React' },
      { id: 'tool-2', name: 'Node.js' },
      { id: 'tool-3', name: 'Salesforce CRM' },
      { id: 'tool-4', name: 'Microsoft Office' },
      { id: 'tool-5', name: 'Figma' },
      { id: 'tool-6', name: 'Adobe Illustrator' },
    ],
  },
};

// Empty state for reset
export const EMPTY_CV_DATA = {
  personalDetails: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
  },
  workExperience: [],
  education: [],
  skills: {
    languages: [],
    frameworksAndTools: [],
  },
};

