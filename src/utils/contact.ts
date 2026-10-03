import { SITE_CONFIG } from '../data/site';

export interface ChapterContactDraft {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  membershipId?: string;
}

export function buildChapterContactMailto(draft: ChapterContactDraft): string {
  const body = [
    `Name: ${draft.name.trim()}`,
    `Email: ${draft.email.trim()}`,
    ...(draft.phone?.trim() ? [`Phone: ${draft.phone.trim()}`] : []),
    ...(draft.membershipId?.trim() ? [`IEEE Membership ID: ${draft.membershipId.trim()}`] : []),
    '',
    'Message:',
    draft.message.trim(),
  ].join('\n');
  const subject = `IEEE CASS SBC Inquiry: ${draft.subject.trim() || 'General Inquiry'}`;

  return `mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
