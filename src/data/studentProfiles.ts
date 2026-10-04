import { ChapterMember } from '../types';

// Profile text follows the supplied About and Experience screenshots.
export const STUDENT_PROFILES: Record<string, NonNullable<ChapterMember['profile']>> = {
  'student-shivam': {
    introduction: 'Ph.D. Research Scholar · Analog and mixed-signal IC design',
    about: [
      'Shivam is a Ph.D. research scholar at IIT Jammu, specializing in analog and VLSI circuit design. His research focuses on low-power biomedical integrated circuits and mixed-signal systems.',
      'His work covers the full IC design flow: circuit design and simulation, layout, verification, and tapeout. He works on energy-efficient, reliable circuits for biomedical and healthcare applications, including analog-to-digital converters.',
      'He previously worked as a Project Engineer at IIT Kanpur and holds an M.E. in Power Systems. His tools include Cadence Virtuoso, Spectre, HSPICE, Calibre, Genus, Innovus, MATLAB, and Simulink, with experience in CMOS technologies including 180 nm.'
    ],
    interests: ['Analog & mixed-signal ICs', 'Low-power circuits', 'Biomedical ICs', 'ADCs', 'CMOS layout & tapeout'],
    experience: [
      { role: 'Research Scholar', organization: 'Indian Institute of Technology Jammu', dates: 'August 2023 – Present' },
      { role: 'Project Engineer — DST Project', organization: 'Indian Institute of Technology Kanpur', dates: 'January 2023 – July 2023' },
      { role: 'Subject Matter Expert · Part-time', organization: 'Chegg India', dates: 'October 2021 – January 2023' }
    ]
  },
  'student-sachin': {
    introduction: 'Ph.D. Research Scholar · Electrical Engineering · VLSI',
    about: ['Sachin is a Ph.D. researcher in Electrical Engineering at IIT Jammu, focused on VLSI and analog and mixed-signal circuit design. His background includes an M.E. in Power Systems and work related to electric vehicle infrastructure.'],
    interests: ['VLSI', 'Analog & mixed-signal design', 'Electric vehicle infrastructure', 'Power systems'],
    experience: [
      { role: 'Ph.D. Research Scholar', organization: 'Indian Institute of Technology Jammu', dates: 'January 2024 – Present' },
      { role: 'Junior Research Fellow', organization: 'IC-ResQ Lab, IIT Jammu', dates: 'September 2023 – January 2024' },
      { role: 'Postgraduate Research Scholar', organization: 'Panjab University, Chandigarh', dates: 'July 2019 – September 2021' },
      { role: 'Internship Trainee', organization: 'Central Glass & Ceramic Research Institute', dates: 'May 2017 – June 2017' }
    ]
  },
  'student-sandeep': {
    introduction: 'Ph.D. Research Scholar · Visvesvaraya Ph.D. Scheme',
    about: ['Sandeep is pursuing a Ph.D. under the Visvesvaraya Ph.D. Scheme, researching the design and applications of in-memory computing to improve computational efficiency and performance.'],
    interests: ['In-memory computing', 'Circuit design', 'Computational efficiency'],
    experience: [
      { role: 'Research Scholar', organization: 'IC-ResQ Lab, IIT Jammu', dates: 'January 2024 – Present' },
      { role: 'Junior Research Fellow', organization: 'Indian Institute of Technology Jammu', dates: 'October 2023 – January 2024' },
      { role: 'Project Trainee', organization: 'Semiconductor Laboratory (SCL), Mohali', dates: 'January 2023 – January 2024', description: 'Fabrication and characterization of optical gratings for Quantum Well Infrared Photodetectors.' }
    ]
  },
  'student-ubair': {
    introduction: 'Ph.D. Research Scholar · Hardware security · Visvesvaraya Fellow',
    about: ['Ubair is a Ph.D. researcher in Electrical Engineering at IIT Jammu working on hardware security. His research spans physically unclonable functions (PUFs), true random number generators (TRNGs), side-channel analysis, and machine learning.', 'He develops secure, lightweight, and reliable hardware architectures that withstand modern attack vectors. He is an IEEE Graduate Student Member and a Visvesvaraya Fellow associated with IC-ResQ Lab.'],
    interests: ['Hardware security', 'PUFs & TRNGs', 'Side-channel analysis', 'Machine learning', 'FPGA'],
    experience: [
      { role: 'Research Scholar', organization: 'IC-ResQ Lab, IIT Jammu', dates: 'August 2024 – Present', description: 'Research in hardware security, PUFs, FPGAs, and side-channel analysis.' },
      { role: 'Junior Research Fellow', organization: 'IC-ResQ Lab, IIT Jammu', dates: 'April 2024 – Present' },
      { role: 'Project Associate', organization: 'Sant Longowal Institute of Engineering and Technology (SLIET)', dates: 'May 2023 – April 2024' }
    ]
  },
  'student-sourabh': {
    introduction: 'Ph.D. Research Scholar · Analog and mixed-signal IC design',
    about: ['Sourabh is pursuing his Ph.D. at IIT Jammu, with a focus on analog and mixed-signal IC design and VLSI. His technical background includes Cadence Virtuoso and industry experience in electrical control and protection devices.'],
    interests: ['Analog & mixed-signal IC design', 'VLSI', 'Cadence Virtuoso'],
    experience: [
      { role: 'Junior Research Fellow', organization: 'Indian Institute of Technology Jammu', dates: 'September 2025 – December 2025' },
      { role: 'Quality Assurance Engineer', organization: 'Novatek Electro India Pvt. Ltd.', dates: 'July 2021 – October 2022', description: 'Worked with electrical control and protection devices. Joined as a Sales and Marketing Engineer and was promoted to Quality Assurance Engineer in the production unit.' }
    ]
  }
};
