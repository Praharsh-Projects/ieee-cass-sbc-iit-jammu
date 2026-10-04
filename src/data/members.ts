import { ChapterMember } from '../types';
import { STUDENT_PROFILES } from './studentProfiles';

export const FACULTY_ADVISOR: ChapterMember = {
  id: 'faculty-ambika',
  name: 'Dr. Ambika Prasad Shah',
  position: 'Faculty Advisor',
  email: 'ambika.shah@iitjammu.ac.in',
  roleType: 'Faculty',
  avatarInitials: 'AS',
  photoUrl: '/images/dr-ambika-prasad-shah.jpg',
  department: 'Assistant Professor · Electrical Engineering',
  term: '2024 – Present',
  isCurrent: true,
  bio: 'Faculty Advisor, IEEE CASS Student Branch Chapter',
  portrait: { objectPosition: '50% 32%', scale: 1.08 },
  profile: {
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

export const FACULTY_COUNSELLOR: ChapterMember = {
  id: 'faculty-anup',
  name: 'Dr. Anup Shukla',
  position: 'Faculty Counsellor',
  roleType: 'Faculty',
  avatarInitials: 'AS',
  photoUrl: '/images/dr-anup-shukla.jpg',
  department: 'Associate Professor · Electrical Engineering',
  email: 'anup.shukla@iitjammu.ac.in',
  term: '2024 – Present',
  isCurrent: true,
  bio: 'Faculty Counsellor, Department of Electrical Engineering',
  portrait: { objectPosition: '50% 8%', scale: 1.1, translateY: '7%' },
  profile: {
    introduction: 'Associate Professor · Department of Electrical Engineering · Faculty Counsellor, 2024–Present',
    highlights: [
      { label: 'Professional service', detail: 'Senior Member of IEEE; member of the IEEE Power & Energy Society and Industry Applications Society; IEEE Young Professionals.' },
      { label: 'Career', detail: 'Senior Project Engineer, Department of Electrical Engineering, IIT Kanpur (June–December 2016).' },
      { label: 'Research appointment', detail: 'Postdoctoral appointment in Electrical Engineering and Computer Science Engineering at Howard University, USA (January–August 2017).' },
      { label: 'Visiting faculty', detail: 'Loughborough University (October 2023–April 2024).' },
      { label: 'Recognition', detail: 'POSOCO Power System Award (2017) and Dr. P. S. Nigam Power Sector Award (2013).' }
    ]
  }
};

export const FACULTY_MEMBERS = [FACULTY_COUNSELLOR, FACULTY_ADVISOR];

const currentTerm = 'Current Leadership';

export const CURRENT_STUDENT_OFFICERS: ChapterMember[] = [
  {
    id: 'student-shivam',
    profile: STUDENT_PROFILES['student-shivam'],
    portrait: { objectPosition: '50% 42%', scale: 1.04 },
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
    profile: STUDENT_PROFILES['student-sachin'],
    portrait: { objectPosition: '50% 26%', scale: 1.65, translateY: '15%' },
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
    profile: STUDENT_PROFILES['student-sandeep'],
    portrait: { objectPosition: '50% 35%' },
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
    profile: STUDENT_PROFILES['student-ubair'],
    portrait: { objectPosition: '50% 32%' },
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
    profile: STUDENT_PROFILES['student-sourabh'],
    portrait: { objectPosition: '50% 32%', scale: 1.12 },
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

export const CURRENT_STUDENT_SUPPORT: ChapterMember[] = [
  {
    id: 'support-harshith',
    portrait: { objectPosition: '50% 36%' },
    name: 'Pulla Harshith',
    position: 'Student Support',
    roleType: 'Core Student Leadership',
    avatarInitials: 'PH',
    photoUrl: '/images/student-support-harshith.jpg',
    department: 'M.Tech · VLSI Design · 1st Year',
    email: '2026pvl0149@iitjammu.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/harshith-p-b02602280',
    term: 'Current student support',
    isCurrent: true
  },
  {
    id: 'support-yashaswi',
    portrait: { objectPosition: '50% 30%' },
    name: 'Nalamwar Yashaswi',
    position: 'Student Support',
    roleType: 'Core Student Leadership',
    avatarInitials: 'NY',
    photoUrl: '/images/student-support-yashaswi.jpg',
    department: 'M.Tech · VLSI Design · 1st Year',
    email: '2026pvl0147@iitjammu.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/nalamwar-yashaswi-8130b92b7',
    term: 'Current student support',
    isCurrent: true
  },
  {
    id: 'support-rajan',
    portrait: { objectPosition: '50% 30%' },
    name: 'Rajan Thakur',
    position: 'Student Support',
    roleType: 'Core Student Leadership',
    avatarInitials: 'RT',
    photoUrl: '/images/student-support-rajan.jpg',
    department: 'M.Tech · VLSI Design · 1st Year',
    email: '2026PVL0150@iitjammu.ac.in',
    term: 'Current student support',
    isCurrent: true
  },
  {
    id: 'support-pavan',
    portrait: { objectPosition: '50% 35%' },
    name: 'Pavan Mandal',
    position: 'Student Support',
    roleType: 'Core Student Leadership',
    avatarInitials: 'PM',
    photoUrl: '/images/student-support-pavan.jpg',
    department: 'M.Tech · VLSI Design · 1st Year',
    email: '2026PVL0148@iitjammu.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/pavan-mandal-7a7ba53b1',
    term: 'Current student support',
    isCurrent: true
  },
  {
    id: 'support-vipin',
    portrait: { objectPosition: '50% 30%' },
    name: 'Vipin Kumar Patel',
    position: 'Student Support',
    roleType: 'Core Student Leadership',
    avatarInitials: 'VP',
    photoUrl: '/images/student-support-vipin.jpg',
    department: 'M.Tech · VLSI Design · 1st Year',
    email: '2026PVL0156@iitjammu.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/vipin-kumar-patel-90b786213',
    term: 'Current student support',
    isCurrent: true
  },
  {
    id: 'support-lakshit',
    portrait: { objectPosition: '50% 32%' },
    name: 'Lakshit Jain',
    position: 'Student Support',
    roleType: 'Core Student Leadership',
    avatarInitials: 'LJ',
    photoUrl: '/images/student-support-lakshit.jpg',
    department: 'M.Tech · VLSI Design · 1st Year',
    email: '2026PVL0146@iitjammu.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/lakshit-jain-a8382a201',
    term: 'Current student support',
    isCurrent: true
  }
];

export const PAST_CHAPTER_LEADERS: ChapterMember[] = [
  {
    id: 'past-aryan',
    portrait: { objectPosition: '50% 50%' },
    name: 'Aryan Kannaujiya',
    position: 'Chairperson',
    roleType: 'Core Student Leadership',
    avatarInitials: 'AK',
    photoUrl: '/images/past-aryan-kannaujiya.jpg',
    department: 'Ph.D. Scholar · VLSI Design · Electrical Engineering',
    term: 'Past IEEE Student Branch Chapter Leaders',
    isCurrent: false
  },
  {
    id: 'past-pankaj',
    portrait: { objectPosition: '50% 50%' },
    name: 'Pankaj Lodhi',
    position: 'Vice-Chairperson',
    roleType: 'Core Student Leadership',
    avatarInitials: 'PL',
    photoUrl: '/images/past-pankaj-lodhi.jpg',
    department: 'Ph.D. Scholar · VLSI Design · Electrical Engineering',
    term: 'Past IEEE Student Branch Chapter Leaders',
    isCurrent: false
  },
  {
    id: 'past-abhay-kumar',
    portrait: { objectPosition: '50% 50%' },
    name: 'Abhay Kumar',
    position: 'Secretary',
    roleType: 'Core Student Leadership',
    avatarInitials: 'AK',
    photoUrl: '/images/past-abhay-kumar.jpg',
    department: 'M.Tech · VLSI Design · Electrical Engineering',
    term: 'Past IEEE Student Branch Chapter Leaders',
    isCurrent: false
  },
  {
    id: 'past-susmitha',
    portrait: { objectPosition: '50% 50%' },
    name: 'Susmitha Ghanta',
    position: 'Treasurer',
    roleType: 'Core Student Leadership',
    avatarInitials: 'SG',
    photoUrl: '/images/past-susmitha-ghanta.jpg',
    department: 'M.Tech · VLSI Design · Electrical Engineering',
    term: 'Past IEEE Student Branch Chapter Leaders',
    isCurrent: false
  },
  {
    id: 'past-teedha',
    portrait: { objectPosition: '50% 50%' },
    name: 'Teedha Hemanth Kumar',
    position: 'Webmaster',
    roleType: 'Core Student Leadership',
    avatarInitials: 'TH',
    photoUrl: '/images/past-teedha-hemanth-kumar.jpg',
    department: 'M.Tech · VLSI Design · Electrical Engineering',
    term: 'Past IEEE Student Branch Chapter Leaders',
    isCurrent: false
  }
];

export const PREVIOUS_OFFICERS: ChapterMember[] = [...PAST_CHAPTER_LEADERS];

export const ALL_MEMBERS: ChapterMember[] = [
  ...FACULTY_MEMBERS,
  ...CURRENT_STUDENT_OFFICERS,
  ...CURRENT_STUDENT_SUPPORT,
  ...PREVIOUS_OFFICERS
];
