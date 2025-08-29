export interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: 'IT/Tech' | 'Science' | 'General';
  imageUrl: string;
  date: string;
  author?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}
