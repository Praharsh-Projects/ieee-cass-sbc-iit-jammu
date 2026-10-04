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
        style={{
          width: `${(member.portrait?.scale ?? 1) * 100}%`,
          transform: `translate(-${member.portrait?.focalPoint.x ?? 50}%, -${member.portrait?.focalPoint.y ?? 50}%)`
        }}
      />
    ) : <span className="text-3xl font-bold text-[#003366]">{member.avatarInitials}</span>}
  </div>
);
