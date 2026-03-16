export interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

export interface ArticleMeta {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}
