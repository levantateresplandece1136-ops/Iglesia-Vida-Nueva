export interface ScheduleItem {
  id: string;
  icon: string;
  title: string;
  time: string;
  description: string;
}

export interface MinistryItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  verse?: string;
  readTime: string;
}
