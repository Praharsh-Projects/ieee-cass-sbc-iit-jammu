import React from 'react';
import { ChapterMember } from '../types';

interface MemberPortraitProps {
  member: ChapterMember;
  className?: string;
}

export const MemberPortrait: React.FC<MemberPortraitProps> = ({ member, className = '' }) => (
  <div className={`member-portrait ${className}`}>
    {member.photoUrl ? (
      <img
        src={member.photoUrl}
        alt={`Portrait of ${member.name}`}
        loading="lazy"
        style={{ objectPosition: member.portrait?.objectPosition ?? '50% 40%', transform: `translateY(${member.portrait?.translateY ?? '0%'}) scale(${member.portrait?.scale ?? 1})` }}
      />
    ) : <span className="text-3xl font-bold text-[#003366]">{member.avatarInitials}</span>}
  </div>
);
