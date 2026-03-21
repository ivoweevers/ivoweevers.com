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
