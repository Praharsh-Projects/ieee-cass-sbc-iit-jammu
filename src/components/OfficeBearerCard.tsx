import React from 'react';
import { MemberCard } from './MemberCard';
import { ChapterMember } from '../types';

interface OfficeBearerCardProps {
  bearer: ChapterMember;
  isFaculty?: boolean;
}

export const OfficeBearerCard: React.FC<OfficeBearerCardProps> = ({ bearer, isFaculty }) => {
  return <MemberCard member={bearer} isFaculty={isFaculty} />;
};
