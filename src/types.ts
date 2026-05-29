/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'about' | 'academics' | 'facilities' | 'gallery' | 'admissions' | 'contact';

export interface StatItem {
  value: string;
  label: string;
  id: string;
}

export interface ChoiceCard {
  title: string;
  description: string;
  iconName: string;
  id: string;
}

export interface FacilityItem {
  title: string;
  description: string;
  imageUrl: string;
  id: string;
  iconName: string;
  category?: string;
}

export interface ProgramItem {
  title: string;
  classes: string;
  description: string;
  curriculum: string;
  id: string;
}

export interface AcademicCard {
  title: string;
  description: string;
  metric: string;
  id: string;
}

export interface AchievementItem {
  name: string;
  achievement: string;
  metric: string;
  year: string;
  imageUrl: string;
  id: string;
}

export interface TestimonialItem {
  parentName: string;
  childClass: string;
  comment: string;
  rating: number;
  id: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  id: string;
}

export interface FacultyMember {
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  imageUrl: string;
  id: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: 'all' | 'annual' | 'sports' | 'classroom' | 'exhibition' | 'cultural' | 'celebration';
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'admissions' | 'academics' | 'fees';
}

export interface InquiryFormData {
  studentName: string;
  parentName: string;
  className: string;
  phoneNumber: string;
  email: string;
  message: string;
}
