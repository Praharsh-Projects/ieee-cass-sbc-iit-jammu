import { ChapterMember } from '../types';

export const FACULTY_ADVISOR: ChapterMember = {
  id: 'faculty-ambika',
  name: 'Dr. Ambika Prasad Shah',
  position: 'Faculty Advisor',
  roleType: 'Faculty',
  avatarInitials: 'AS',
  photoUrl: '/images/dr-ambika-prasad-shah.jpg',
  department: 'Assistant Professor · Electrical Engineering',
  term: '2024 – Present',
  isCurrent: true,
  bio: 'Faculty Advisor, IEEE CASS Student Branch Chapter',
  facultyProfile: {
    introduction: 'Assistant Professor, Electrical Engineering Department · Faculty Advisor, IEEE CASS SBC',
    highlights: [
      { label: 'Background', detail: 'Ph.D. from IIT Indore; former postdoctoral fellow at TU Vienna, Austria.' },
      { label: 'Recognition', detail: 'Senior Member of IEEE and Fellow of IETE. Recipient of the Young Scientist Award (M.P. Council).' },
      { label: 'Publications', detail: 'Authored 100+ research papers in international journals and conferences.' },
      { label: 'Leadership', detail: 'Organizing Chair, VDAT-2022; Fellowship Chair, VLSID-2022.' },
      { label: 'Memberships', detail: 'ACM, ISTE, ISCA, IEI, and IAENG.' }
    ]
  }
};

export const FACULTY_CO_ADVISOR: ChapterMember = {
  id: 'faculty-anup',
  name: 'Dr. Anup Shukla',
  position: 'Faculty Advisor',
  roleType: 'Faculty',
  avatarInitials: 'AS',
  photoUrl: '/images/dr-anup-shukla.jpg',
  department: 'Associate Professor · Electrical Engineering',
  email: 'anup.shukla@iitjammu.ac.in',
  term: '2024 – Present',
  isCurrent: true,
  bio: 'Faculty Advisor, Department of Electrical Engineering',
  facultyProfile: {
    introduction: 'Associate Professor · Department of Electrical Engineering · Faculty Advisor, 2024–Present',
    highlights: [
      { label: 'Professional service', detail: 'Senior Member of IEEE; member of the IEEE Power & Energy Society and Industry Applications Society; IEEE Young Professionals.' },
      { label: 'Career', detail: 'Senior Project Engineer, Department of Electrical Engineering, IIT Kanpur (June–December 2016).' },
      { label: 'Research appointment', detail: 'Postdoctoral appointment in Electrical Engineering and Computer Science Engineering at Howard University, USA (January–August 2017).' },
      { label: 'Visiting faculty', detail: 'Loughborough University (October 2023–April 2024).' },
      { label: 'Recognition', detail: 'POSOCO Power System Award (2017) and Dr. P. S. Nigam Power Sector Award (2013).' }
    ]
  }
};

const currentTerm = 'Current Leadership';

export const CURRENT_STUDENT_OFFICERS: ChapterMember[] = [
  {
    id: 'student-shivam',
    name: 'Shivam Bhardwaj',
    position: 'Chair',
    roleType: 'Core Student Leadership',
    avatarInitials: 'SB',
    photoUrl: '/images/shivam-bhardwaj.jpg',
    department: 'Ph.D. Scholar · VLSI Design · Electrical Engineering',
    email: '2023ree1031@iitjammu.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/shivambhardwaj-ln',
    term: currentTerm,
    isCurrent: true,
    bio: 'Student researcher in VLSI Design at IIT Jammu.'
  },
  {
    id: 'student-sachin',
    name: 'Sachin Sharma',
    position: 'Vice Chair',
    roleType: 'Core Student Leadership',
    avatarInitials: 'SS',
    photoUrl: '/images/sachin-sharma.png',
    department: 'Ph.D. Scholar · VLSI Design · Electrical Engineering',
    email: '2023ree2021@iitjammu.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/sachin-sharma-ln/',
    term: currentTerm,
    isCurrent: true,
    bio: 'Student researcher in VLSI Design at IIT Jammu.'
  },
  {
    id: 'student-sandeep',
    name: 'Sandeep Kour',
    position: 'Secretary',
    roleType: 'Core Student Leadership',
    avatarInitials: 'SK',
    photoUrl: '/images/sandeep-kour.jpg',
    department: 'Ph.D. Scholar · VLSI Design · Electrical Engineering',
    email: '2023ree2018@iitjammu.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/sandeep-kour-202b1011a',
    term: currentTerm,
    isCurrent: true,
    bio: 'Student researcher in VLSI Design at IIT Jammu.'
  },
  {
    id: 'student-ubair',
    name: 'Ubair Ali',
    position: 'Treasurer',
    roleType: 'Core Student Leadership',
    avatarInitials: 'UA',
    photoUrl: '/images/ubair-ali.jpg',
    department: 'Ph.D. Scholar · VLSI Design · Electrical Engineering',
    email: '2024ree1016@iitjammu.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/ubair-ali-81933b23b/',
    term: currentTerm,
    isCurrent: true,
    bio: 'Student researcher in VLSI Design at IIT Jammu.'
  },
  {
    id: 'student-sourabh',
    name: 'Sourabh Goswami',
    position: 'Webmaster',
    roleType: 'Core Student Leadership',
    avatarInitials: 'SG',
    photoUrl: '/images/sourabh-goswami.jpg',
    department: 'Ph.D. Scholar · VLSI Design · Electrical Engineering',
    email: '2025ree2019@iitjammu.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/sourabh-goswami-1b3085170',
    term: currentTerm,
    isCurrent: true,
    bio: 'Student researcher in VLSI Design at IIT Jammu.'
  }
];

const PREVIOUSLY_LISTED_STUDENT_OFFICERS: ChapterMember[] = [
  {
    id: 'archive-2024-aryan',
    name: 'Aryan Kannaujiya',
    position: 'Chair',
    roleType: 'Core Student Leadership',
    avatarInitials: 'AK',
    department: 'Department of Electrical Engineering, IIT Jammu',
    term: 'Previous Student Executive Board',
    isCurrent: false,
    bio: 'Oversaw chapter initiatives, research seminars, annual planning, and institutional coordination.'
  },
  {
    id: 'archive-2024-shivam',
    name: 'Shivam Bhardwaj',
    position: 'Vice Chair',
    roleType: 'Core Student Leadership',
    avatarInitials: 'SB',
    photoUrl: '/images/shivam-bhardwaj.jpg',
    department: 'Indian Institute of Technology Jammu',
    term: 'Previous Student Executive Board',
    isCurrent: false,
    statusNote: 'Elected at the Annual General Meeting (Pushkar Bhawan)',
    bio: 'Supported chapter administration, workshop coordination, and technical session planning.'
  },
  {
    id: 'archive-2024-susmita',
    name: 'Susmita Ghanta',
    position: 'Secretary',
    roleType: 'Core Student Leadership',
    avatarInitials: 'SG',
    department: 'Indian Institute of Technology Jammu',
    term: 'Previous Student Executive Board',
    isCurrent: false,
    bio: 'Managed chapter correspondence, official activity reporting, IEEE documentation, and member communications.'
  },
  {
    id: 'archive-2024-hemanth',
    name: 'Hemanth Teeda',
    position: 'Webmaster',
    roleType: 'Core Student Leadership',
    avatarInitials: 'HT',
    department: 'Indian Institute of Technology Jammu',
    term: 'Previous Student Executive Board',
    isCurrent: false,
    bio: 'Maintained chapter digital infrastructure, event portal, and online assets.'
  },
  {
    id: 'archive-2024-abhay',
    name: 'Abhay Gupta',
    position: 'Treasurer',
    roleType: 'Core Student Leadership',
    avatarInitials: 'AG',
    department: 'Indian Institute of Technology Jammu',
    term: 'Previous Student Executive Board',
    isCurrent: false,
    bio: 'Managed chapter budgeting and event finances.'
  }
];

export const PAST_CHAPTER_LEADERS: ChapterMember[] = [
  {
    id: 'past-aryan',
    name: 'Aryan Kannaujiya',
    position: 'Chairperson',
    roleType: 'Core Student Leadership',
    avatarInitials: 'AK',
    department: 'Ph.D. Scholar · VLSI Design · Electrical Engineering',
    term: 'Past IEEE Student Branch Chapter Leaders',
    isCurrent: false
  },
  {
    id: 'past-pankaj',
    name: 'Pankaj Lodhi',
    position: 'Vice-Chairperson',
    roleType: 'Core Student Leadership',
    avatarInitials: 'PL',
    department: 'Ph.D. Scholar · VLSI Design · Electrical Engineering',
    term: 'Past IEEE Student Branch Chapter Leaders',
    isCurrent: false
  },
  {
    id: 'past-abhay-kumar',
    name: 'Abhay Kumar',
    position: 'Secretary',
    roleType: 'Core Student Leadership',
    avatarInitials: 'AK',
    department: 'M.Tech · VLSI Design · Electrical Engineering',
    term: 'Past IEEE Student Branch Chapter Leaders',
    isCurrent: false
  },
  {
    id: 'past-susmitha',
    name: 'Susmitha Ghanta',
    position: 'Treasurer',
    roleType: 'Core Student Leadership',
    avatarInitials: 'SG',
    department: 'M.Tech · VLSI Design · Electrical Engineering',
    term: 'Past IEEE Student Branch Chapter Leaders',
    isCurrent: false
  },
  {
    id: 'past-teedha',
    name: 'Teedha Hemanth Kumar',
    position: 'Webmaster',
    roleType: 'Core Student Leadership',
    avatarInitials: 'TH',
    department: 'M.Tech · VLSI Design · Electrical Engineering',
    term: 'Past IEEE Student Branch Chapter Leaders',
    isCurrent: false
  }
];

const FOUNDING_COMMITTEE: ChapterMember = {
  id: 'founding-committee',
  name: 'Founding Student Executive Committee',
  position: 'Inaugural Chapter Formation Body',
  roleType: 'Core Student Leadership',
  avatarInitials: 'FC',
  department: 'Department of Electrical Engineering, IIT Jammu',
  term: '2024 Inaugural Term',
  isCurrent: false,
  bio: 'The inaugural student steering team drafted the chapter constitution, organized the founding AGM on November 19, 2024, and established IEEE CASS chapter SBC11545F at IIT Jammu.'
};

export const PREVIOUS_OFFICERS: ChapterMember[] = [
  ...PREVIOUSLY_LISTED_STUDENT_OFFICERS,
  ...PAST_CHAPTER_LEADERS,
  FOUNDING_COMMITTEE
];

export const ALL_MEMBERS: ChapterMember[] = [
  FACULTY_ADVISOR,
  FACULTY_CO_ADVISOR,
  ...CURRENT_STUDENT_OFFICERS,
  ...PREVIOUS_OFFICERS
];
