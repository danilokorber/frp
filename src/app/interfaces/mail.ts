export interface Thread {
  date?: Date;
  from?: Address;
  hasAttachments?: boolean;
  id?: string;
  size?: number;
  subject?: string;
  unseen?: boolean;
}

export interface Address {
  address?: string;
  name?: string;
}

export interface Message {
  id?: string;
  uid?: number;
  emailId?: string;
  threadId?: string;
  date?: Date;
  draft?: boolean;
  unseen?: boolean;
  flagged?: boolean;
  size?: number;
  subject?: string;
  from?: Address;
  replyTo?: Address;
  sender?: Address;
  to?: Address[];
  cc?: Address[];
  bcc?: Address[];
  messageId?: string;
  inReplyTo?: string;
  labels?: string[];
  attachments?: Attachment[];
  text?: TextInfo;
}

export interface Attachment {
  id?: string;
  contentType?: string;
  encodedSize?: number;
  embedded?: boolean;
  inline?: boolean;
  contentId?: string;
}

export interface MessageText {
  plain?: string;
  html?: string;
}

export interface TextInfo {
  id?: string;
  encodedSize?: EncodedSize;
}

export interface EncodedSize {
  plain?: number;
  html?: number;
}
