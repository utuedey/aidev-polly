export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface Poll {
  id: string;
  title: string;
  description?: string;
  options: PollOption[];
  createdBy: string;
  createdAt: Date;
  expiresAt?: Date;
  isPublic: boolean;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface Vote {
  userId: string;
  pollId: string;
  optionId: string;
  votedAt: Date;
}