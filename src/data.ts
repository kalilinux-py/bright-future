/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  StatItem,
  ChoiceCard,
  FacilityItem,
  ProgramItem,
  AcademicCard,
  AchievementItem,
  TestimonialItem,
  TimelineItem,
  FacultyMember,
  GalleryItem,
  FAQItem
} from './types';

export const SCHOOL_STATS: StatItem[] = [
  { id: 'stat-1', value: '1500+', label: 'Active Students' },
  { id: 'stat-2', value: '50+', label: 'Qualified Educators' },
  { id: 'stat-3', value: '15+', label: 'Years of Legacy' },
  { id: 'stat-4', value: '100%', label: 'CBSE Board Success' }
];

export const WHY_CHOOSE_US: ChoiceCard[] = [
  {
    id: 'wc-1',
    title: 'Smart Classrooms',
    description: 'Equipped with heavy-duty interactive touch panels, projector networks, and specialized digital courseware to make learning highly visual.',
    iconName: 'Laptop'
  },
  {
    id: 'wc-2',
    title: 'Experienced Faculty',
    description: 'Our mentors are post-graduates in their fields with specialized teacher-training degrees and regular CBSE training updates.',
    iconName: 'Award'
  },
  {
    id: 'wc-3',
    title: 'Sports & Activities',
    description: 'Professional coaches for soccer, basketball, swimming, cricket, karate, and a state-level indoor wooden badminton court.',
    iconName: 'Flame'
  },
  {
    id: 'wc-4',
    title: 'Safe Campus',
    description: '24/7 high-definition CCTV monitor coverage, fire safety systems, automated GPS-based transport tracking, and strict visitor control.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'wc-5',
    title: 'Digital Learning',
    description: 'High-speed computer laboratories, dynamic coding courses for junior wings, and an online school management portal for progress reports.',
    iconName: 'Cpu'
  }
];

export const SCHOOL_FACILITIES: FacilityItem[] = [
  {
    id: 'fac-1',
    title: 'Interactive Smart Classrooms',
    description: 'Every classroom is optimized with smart interactive digital boards, climate-comfort ventilators, and ergonomic dual desks designed to maintain healthy lumbar posture.',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800',
    iconName: 'MonitorPlay',
    category: 'Academics'
  },
  {
    id: 'fac-2',
    title: 'Advanced Science Laboratory',
    description: 'Integrated lab setups for Physics, Chemistry, and Biology complying perfectly with CBSE standards, maintaining strict safety eye-wash and gas lines.',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    iconName: 'Beaker',
    category: 'Laboratories'
  },
  {
    id: 'fac-3',
    title: 'Modern Computer Terminal',
    description: 'Over 40 high-speed systems with visual block-based and Python programming frameworks, isolated testing environments, and protected high-speed optical fiber internet.',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
    iconName: 'Cpu',
    category: 'Laboratories'
  },
  {
    id: 'fac-4',
    title: 'E-Library & Reading Hall',
    description: 'Equipped with more than 8,000 reference books, national educational periodicals, specialized encyclopedias, and high-quality study partitions for focused reviews.',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
    iconName: 'BookOpen',
    category: 'Academics'
  },
  {
    id: 'fac-5',
    title: 'Lush Green Sports Ground',
    description: 'A standard multi-sport turf with specialized tracks, professional basketball court, cricket practice nets, and dedicated physical instructors guiding daily fitness.',
    imageUrl: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=800',
    iconName: 'Dribbble',
    category: 'Co-Curricular'
  },
  {
    id: 'fac-6',
    title: 'Smart Bus Transport',
    description: 'A dedicated fleet of school buses operating across Lucknow with verified drivers, female conductors, CCTV on-board feeds, first-aid, and GPS trackers.',
    imageUrl: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800',
    iconName: 'Bus',
    category: 'Services'
  },
  {
    id: 'fac-7',
    title: 'CCTV Security Guard Nets',
    description: '24/7 surveillance with over 120 cameras spanning perimeters, lobbies, and classrooms, backed by an alarm dispatch room and professionally trained guard details.',
    imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
    iconName: 'Shield',
    category: 'Services'
  },
  {
    id: 'fac-8',
    title: 'Medical Care Unit',
    description: 'Equipped with essential emergency life support, isolated diagnostic beds, oxygen facilities, and a qualified full-time pediatric nurse for first aid.',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    iconName: 'HeartPulse',
    category: 'Services'
  }
];

export const ACADEMIC_PROGRAMS: ProgramItem[] = [
  {
    id: 'prog-1',
    title: 'Pre-Primary Wing',
    classes: 'Nursery to Kindergarten (KG-2)',
    description: 'Focus is completely on playway learning, sensory training development, and linguistic foundations. Montessori tools inspire fine motor and social capabilities.',
    curriculum: 'Activity & Playway Based Curriculum (with theme-based phonics, soft motor training, and creative play)'
  },
  {
    id: 'prog-2',
    title: 'Primary Wing',
    classes: 'Class I to Class V',
    description: 'Building fundamental mastery over Hindi, English, Mathematics, General Science, and Computer ethics. Activity sheets promote cognitive self-reliance.',
    curriculum: 'NCRT Guidelines with Specialized Creative Worksheets, Math labs, and Environmental studies'
  },
  {
    id: 'prog-3',
    title: 'Middle School Wing',
    classes: 'Class VI to Class VIII',
    description: 'Transitioning into core subject streams: Physics, Chemistry, Biology, History, Geography, and Language electives (Sanskrit/French). Introduces basic robotics.',
    curriculum: 'Integrated Interdisciplinary Curriculum with early pre-vocational skill training modules'
  },
  {
    id: 'prog-4',
    title: 'Secondary Wing',
    classes: 'Class IX to Class X',
    description: 'Rigorous preparation towards board exams with regular evaluations, digital test analysis, and standard laboratory practical exposures to strengthen core theories.',
    curriculum: 'Strictly aligned with CBSE Board Curriculum, NCERT foundations, and internal board preview tests'
  },
  {
    id: 'prog-5',
    title: 'Senior Secondary Wing',
    classes: 'Class XI to Class XII',
    description: 'Specialized streams offering: Science (PCM/PCB with Computer/Hindi), Commerce (with Mathematics/Applied Math), and Humanities. Focused career guidance classes.',
    curriculum: 'CBSE Senior School Curriculum with dedicated preparatory tracks for JEE, NEET, and CUET examinations'
  }
];

export const ACADEMIC_PERFORMANCE: AcademicCard[] = [
  { id: 'perf-1', title: '100% Board Pass Rate', description: 'With more than 65% of our candidates securing above 90% cumulative averages in senior secondary boards.', metric: 'CBSE XII Results' },
  { id: 'perf-2', title: 'State-Level Scholar Wins', description: 'Outstanding performances in National Science Olympiad, NTSE scholarships, and state level debate forums.', metric: 'Prestige Records' },
  { id: 'perf-3', title: 'Elite Career Placements', description: 'Over 85 candidates from the previous batch secured admissions in top IITs, NITs, AIIMS, and national Delhi University colleges.', metric: 'Higher Admissions' }
];

export const BOARD_TOPPERS: AchievementItem[] = [
  {
    id: 'top-1',
    name: 'Priyanshu Sharma',
    achievement: 'CBSE Class XII (Science Stream School Topper)',
    metric: '98.6%',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'top-2',
    name: 'Ananya Verma',
    achievement: 'CBSE Class XII (Commerce Stream School Topper)',
    metric: '98.4%',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'top-3',
    name: 'Ayush K. Srivastava',
    achievement: 'CBSE Class X (District Level High Merit)',
    metric: '99.2%',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    parentName: 'Mrs. Ritu Rastogi',
    childClass: 'Mother of Aarav (Class IX)',
    comment: 'The academic environment here is truly premium and highly structured. The principal takes active interest in daily teaching. My son has showing extraordinary growth in mathematics and critical writing.',
    rating: 5
  },
  {
    id: 'test-2',
    parentName: 'Dr. Sandeep Jaiswal',
    childClass: 'Father of Divya (Class IV) & Vivaan (Class K.G.)',
    comment: 'We were particularly concerned about security when moving from Delhi to Lucknow. Bright Future Public School provides amazing transport updates and exceptional CCTV discipline. Teachers are extremely warm and professional.',
    rating: 5
  },
  {
    id: 'test-3',
    parentName: 'Mr. Vivek Chhabra',
    childClass: 'Father of Shreya (Class XII Board Graduate)',
    comment: 'Thanks to the dedicated JEE foundation modules handled after normal school hours, my daughter cleared CBSE with 97.2% and secured an IIT JEE Advance ranking. Splendid management and extremely trustworthy mentors.',
    rating: 5
  }
];

export const SCHOOL_TIMELINE: TimelineItem[] = [
  { id: 'tl-1', year: '2011', title: 'The Foundation stone', description: 'Established Bright Future Public School at Gomti Nagar Extension with 120 nursery students and a building wing.' },
  { id: 'tl-2', year: '2015', title: 'CBSE High-School Affiliation', description: 'Granted full secondary curriculum recognition, setting up our central physics and chemistry laboratories.' },
  { id: 'tl-3', year: '2018', title: 'Senior Secondary Recognition', description: 'Inauguration of the air-conditioned Senior Auditorium and establishment of PCM/PCB & Commerce streams under CBSE code guidance.' },
  { id: 'tl-4', year: '2022', title: 'Digital Transformation Era', description: 'Upgraded all 32 classrooms with interactive multi-touch displays, robust fiber channels, and AI computer learning kits.' },
  { id: 'tl-5', year: '2026', title: '15 Years of Educational Legacy', description: 'Ranked among top private CBSE day boarding schools in Lucknow, managing 1500+ pupils and specialized track preparations.' }
];

export const SCHOOL_FACULTY: FacultyMember[] = [
  {
    id: 'fac-m-1',
    name: 'Dr. Shailja Srivastav',
    designation: 'Principal & Senior Director',
    qualification: 'M.Sc. Physics (Gold Medalist), Ph.D. in Educational Administration',
    experience: '24+ Years of academic leadership across leading North Indian schools.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'fac-m-2',
    name: 'Mr. Amit Mishra',
    designation: 'Vice-Principal & Head of Physics',
    qualification: 'M.Sc. Physics, B.Ed. (CBSE Master Trainer)',
    experience: '16+ Years mentoring Senior Secondary batches with brilliant pass rates.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'fac-m-3',
    name: 'Mrs. Sunita Rao',
    designation: 'Senior Faculty (English Specialist)',
    qualification: 'M.A. English Literature (Central University), B.Ed.',
    experience: '12+ Years guiding debate forums and advanced English literature curriculums.',
    imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'fac-m-4',
    name: 'Mr. Raghavendra Shukla',
    designation: 'Head of ICT & Computer Engineering',
    qualification: 'M.Tech CSE, UGC NET certified educator',
    experience: '10+ Years setting up interactive coding tracks, Python frameworks, and smart class controls.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'gal-1',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    title: 'Computer Coding Workshop',
    category: 'classroom',
    date: 'April 2026'
  },
  {
    id: 'gal-2',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    title: 'Annual Science Fair - Working Prototypes',
    category: 'exhibition',
    date: 'February 2026'
  },
  {
    id: 'gal-3',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    title: 'Inter-School Folk Dance Assembly',
    category: 'cultural',
    date: 'November 2025'
  },
  {
    id: 'gal-4',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
    title: 'Flag Hoisting Celebration at lawns',
    category: 'celebration',
    date: 'August 15, 2025'
  },
  {
    id: 'gal-5',
    imageUrl: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800',
    title: 'Literary Drama & English Elocution Meet',
    category: 'annual',
    date: 'December 2025'
  },
  {
    id: 'gal-6',
    imageUrl: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=800',
    title: '100m Athletics Gold Win Track Event',
    category: 'sports',
    date: 'October 2025'
  },
  {
    id: 'gal-7',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    title: 'Early Montessori Creative Sensory Sessions',
    category: 'classroom',
    date: 'May 2026'
  },
  {
    id: 'gal-8',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
    title: 'Secondary Physics Laboratory Work',
    category: 'exhibition',
    date: 'March 2026'
  }
];

export const SCHOOL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the procedure for securing fresh admission in 2026-27?',
    answer: 'Admissions require submitting the official Inquiry form (online or via reception). This is followed by a prompt school visit, document validation, age verification interaction, and securing the admission seat via registration fee submission.',
    category: 'admissions'
  },
  {
    id: 'faq-2',
    question: 'Is Bright Future Public School affiliated with CBSE?',
    answer: 'Yes, our school is fully affiliated with the Central Board of Secondary Education (CBSE), New Delhi, for both Secondary (Class X) and Senior Secondary (Class XII) school levels.',
    category: 'general'
  },
  {
    id: 'faq-3',
    question: 'What are the school timings for different wings?',
    answer: 'Primary Wings operate from 8:00 AM to 1:30 PM. Secondary and Senior Secondary Wings classes range from 8:00 AM to 2:30 PM. All wings operate Monday to Friday, with partial sports training on Saturday mornings.',
    category: 'academics'
  },
  {
    id: 'faq-4',
    question: 'Does the school provide comprehensive transport networks in Lucknow?',
    answer: 'Yes, we manage a secure GPS-tracked daily transport bus fleet spanning Gomti Nagar, Gomti Nagar Extension, Indira Nagar, Hazratganj, Aliganj, Jankipuram, and South City sectors.',
    category: 'general'
  },
  {
    id: 'faq-5',
    question: 'How matches fee payments structure, and are installments allowed?',
    answer: 'The structural school fee is divided quarterly (every 3 months) to ease parent budgets. Payments can be securely executed via credit cards, net banking, or direct check drops through the Parent login portal.',
    category: 'fees'
  }
];

export const ADMISSIONS_DOCUMENTS_REQUIRED = [
  'Self-Attested photocopy of student birth certificate (issued by municipal authority).',
  'Original school transfer certificate (T.C.) countersigned by competent educational authority (Class I onwards).',
  'Report cards/Academic progress cards of the previous academic year.',
  'Recent passport size color photographs (3 of Student, 2 of each Parent/Guardian).',
  'Photocopy of student Aadhaar card and Address proof (Passport, electricity bill, or registration deed).',
  'Category certificate (SC/ST/OBC/EWS) if applicable.'
];
