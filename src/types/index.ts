export interface AcademyConfig {
  name: string;
  marathiName: string;
  tagline: string;
  marathiTagline: string;
  logoText: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  workingHours: string;
  mapUrl: string;
  mapEmbedPlaceholder: boolean;
  primaryLanguage: 'mr' | 'en';
  announcement?: {
    enabled: boolean;
    text: string;
    link?: string;
  };
}

export type CourseCategory = 'police' | 'army' | 'combined' | 'special';
export type TrainingType = 'physical' | 'written' | 'both';

export interface Course {
  id: string;
  slug: string;
  title: string;
  marathiTitle: string;
  category: CourseCategory;
  summary: string;
  trainingTypes: TrainingType;
  duration: string;
  batchTiming: string;
  feeLabel: string;
  admissionStatus: 'Open' | 'Filling Fast' | 'Closed' | 'Upcoming';
  image: string;
  badge?: string;
  details: {
    overview: string;
    eligibility: string[];
    physicalStandards?: {
      running?: string;
      pullUps?: string;
      shotPut?: string;
      chest?: string;
      height?: string;
    };
    writtenSyllabus?: string[];
    batchSchedule: {
      morningGround: string;
      writtenClass: string;
      weeklyTest: string;
    };
  };
  topics: string[];
  faqs: { question: string; answer: string }[];
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  experienceLabel: string;
  photo: string;
  bio: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  confirmed: boolean;
  features: string[];
}

export interface ResultStory {
  id: string;
  studentDisplayName: string;
  category: 'Police Bharti' | 'Army/Agniveer' | 'Other';
  year: string;
  rankOrPost: string;
  story: string;
  image: string;
  verified: boolean;
  consentConfirmed: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ground' | 'Classroom' | 'Hostel' | 'Events' | 'Students';
  image: string;
  alt: string;
  videoUrl?: string;
}

export interface RecruitmentNotice {
  id: string;
  title: string;
  authority: string;
  category: 'Police' | 'Army' | 'Other';
  summary: string;
  publishedDate: string;
  lastCheckedDate: string;
  deadline: string;
  status: 'Active' | 'Upcoming' | 'Expired';
  officialNoticeUrl?: string;
  applicationUrl?: string;
  isDemo: boolean;
}

export interface AdmissionFormData {
  fullName: string;
  mobileNumber: string;
  courseInterest: string;
  preferredBatch: string;
  message?: string;
}
