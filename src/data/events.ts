import { ChapterEvent } from '../types';

export const COMPLETED_EVENTS: ChapterEvent[] = [
  {
    id: 'event-1',
    number: 'EVENT I',
    title: 'Annual General Meeting',
    activityName: 'Annual General Meeting',
    date: 'November 19, 2024',
    isoDate: '2024-11-19',
    year: 2024,
    time: '1:00 pm – 2:00 pm',
    venue: 'Pushkar Bhawan, 11AC2023 Conference hall, IIT Jammu',
    mode: 'In-Person',
    attendance: {
      ieee: 24,
      nonIeee: 15,
      total: 39,
    },
    facultyAdvisor: 'Dr Ambika Prasad Shah',
    studentBody: [
      { position: 'Chair', name: 'Aryan Kannaujiya' },
      { position: 'Vice Chair', name: 'Shivam Bhardwaj' },
      { position: 'Secretary', name: 'Susmita Ghanta' },
      { position: 'Webmaster', name: 'Hemanth Teeda' },
      { position: 'Treasurer', name: 'Abhay Gupta' },
    ],
    about: 'In the Annual General Meeting, the IEEE CASS SBC IIT Jammu elections were held for various posts. Dr Ambika Prasad Shah was chosen as the Faculty Advisor. The student body is as follows.',
    category: 'AGM',
    sourceNote: 'The annual report lists the AGM date as November 19, 2024 even though it appears within the 2025 activity report. Source date preserved exactly.',
    imagePlaceholder: {
      gradient: 'from-sky-50 via-white to-blue-50',
      icon: 'users',
      tag: 'Elections & Governance'
    }
  },
  {
    id: 'event-2',
    number: 'EVENT II',
    title: 'Distinguished Lecture – “Cyber-Secure Biological Systems”',
    activityName: 'Distinguished Lecture – “Cyber-Secure Biological Systems”',
    date: 'December 18, 2025',
    isoDate: '2025-12-18',
    year: 2025,
    time: '08:30 PM – 10:00 PM IST',
    duration: '1 day',
    mode: 'Online',
    attendance: {
      ieee: 40,
      nonIeee: 56,
      total: 96,
    },
    speaker: 'Prof. Rabia Tugce Yazicigil, Associate Professor, ECE, Boston University',
    collaboration: 'IISC Bangalore',
    about: 'The lecture focused on miniaturized ingestible bioelectronic capsules and hybrid microfluidic–bioelectronic platforms.',
    category: 'Distinguished Lecture',
    imagePlaceholder: {
      gradient: 'from-sky-50 via-white to-blue-50',
      icon: 'activity',
      tag: 'Bioelectronics & Security'
    }
  },
  {
    id: 'event-3',
    number: 'EVENT III',
    title: 'Expert Talk - Emerging Reconfigurable Nanotechnologies for Next-Generation Hardware Design',
    activityName: 'Expert Talk - Emerging Reconfigurable Nanotechnologies for Next-Generation Hardware Design',
    date: 'December 18, 2025',
    isoDate: '2025-12-18T20:30',
    year: 2025,
    time: '08:30 PM – 10:00 PM IST',
    duration: '1 days',
    venue: 'Pushkar Bhawan, 11AC2023 Conference hall, IIT Jammu',
    mode: 'In-Person',
    attendance: {
      ieee: 14,
      nonIeee: 15,
      total: 29,
    },
    funding: 'Self-Funding',
    speaker: 'Dr. Syed Farah Naz, Post-Doctoral Fellow (Embedded Systems), Ruhr University Bochum, Germany',
    about: 'The session offered deep insights into reconfigurable nanotechnologies, RFET-based circuit design, beyond-CMOS devices, approximate computing, and exciting opportunities for research and study in Germany.',
    category: 'Expert Talk',
    imagePlaceholder: {
      gradient: 'from-sky-50 via-white to-blue-50',
      icon: 'cpu',
      tag: 'Beyond-CMOS & RFET'
    }
  },
  {
    id: 'event-4',
    number: 'EVENT IV',
    title: 'IEEE CASS Workshop: “Idea to Impact – Translating Research into Ventures”',
    activityName: 'IEEE CASS Workshop: “Idea to Impact – Translating Research into Ventures”',
    date: 'November 10-11, 2025',
    isoDate: '2025-11-10',
    year: 2025,
    time: '10:00 AM – 5:00 PM IST',
    duration: '2 days',
    venue: 'Pushkar Bhawan, 11AC2023 Conference hall, IIT Jammu',
    mode: 'In-Person',
    attendance: {
      ieee: 25,
      nonIeee: 35,
      total: 60,
    },
    funding: 'IEEE CASS Student Activity',
    speaker: 'Mr. Alok Pandey Sir (CEO, AIC IIT DELHI), Dr. Himanshu Agrawal Sir (Manager, AIC IIT DELHI), Mr. Saurabh Suradhaniwar Sir and Mr. Tanuj . Sir (Technical Leads, STMicroelectronics)',
    about: 'The event featured insightful tech talks and interactive hands on sessions, inspiring participants to translate their research ideas into impactful real-world innovations.It emphasizing how mentorship, grants, and ecosystem support empower startups to create real-world impact. conducted immersive STM32 hands-on sessions covering STM32CubeMX, MEMS Studio, and AI/ML Edge applications, guiding participants through real-time MEMS examples.',
    category: 'Workshop',
    imagePlaceholder: {
      gradient: 'from-sky-50 via-white to-blue-50',
      icon: 'layers',
      tag: 'STM32 & Ventures'
    }
  },
  {
    id: 'event-5',
    number: 'EVENT V',
    title: 'IEEE CASS Workshop“Next-gen VLSI Ed-tech: Open Source tools, RISC-V design, SKY130nm open-PDKs, no NDA, no legal, just clone and learn',
    activityName: 'IEEE CASS Workshop“Next-gen VLSI Ed-tech: Open Source tools, RISC-V design, SKY130nm open-PDKs, no NDA, no legal, just clone and learn',
    date: 'Jan 27, 2025',
    isoDate: '2025-01-27',
    year: 2025,
    time: '4:30 PM – 5:00 PM IST',
    venue: 'Pushkar Bhawan, 11AC2023 Conference hall, IIT Jammu',
    mode: 'In-Person',
    attendance: {
      ieee: 14,
      nonIeee: 12,
      total: 26,
    },
    funding: 'Self funding',
    speaker: 'Kunal Ghosh (Director and Co-Founder, VLSI System Design (VSD))',
    about: 'This workshop enables participants to be passionate about open-source VLSI design, RISC-V architectures, and the SKY130nm process node. This session provided valuable insights into cutting-edge semiconductor design methodologies!',
    category: 'Workshop',
    imagePlaceholder: {
      gradient: 'from-sky-50 via-white to-blue-50',
      icon: 'terminal',
      tag: 'RISC-V & SKY130'
    }
  },
  {
    id: 'event-6',
    number: 'EVENT VI',
    title: 'Expert talk on “AI Hardware: Architectures and Design”',
    activityName: 'Expert talk on “AI Hardware: Architectures and Design”',
    date: 'Jan 17, 2025',
    isoDate: '2025-01-17',
    year: 2025,
    time: '3:30 PM – 5:00 PM IST',
    venue: 'Pushkar Bhawan, 11AC2023 Conference hall, IIT Jammu',
    mode: 'In-Person',
    attendance: {
      ieee: 21,
      nonIeee: 18,
      total: 39,
    },
    funding: 'Self funding',
    speaker: 'Prof. Mircea R. Stan, University of Virginia, USA',
    about: 'The expert talk on “AI Hardware: Architectures and Design” aims to provide an in-depth understanding of hardware paradigms that enable efficient artificial intelligence systems. Delivered by Prof. Mircea R. Stan (University of Virginia, USA), the event focuses on architectural innovations, design challenges, and reliability considerations in AI-centric hardware platforms.',
    category: 'Expert Talk',
    imagePlaceholder: {
      gradient: 'from-sky-50 via-white to-blue-50',
      icon: 'sparkles',
      tag: 'AI Accelerators'
    }
  },
];
