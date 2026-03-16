import type { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "My book", href: "/pocket-winners" },
  { label: "My story", href: "/my-story" },
  { label: "Work with me", href: "/#work-with-me", isAnchor: true },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "#contact", isAnchor: true },
];

export const mobileNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "My book", href: "/pocket-winners" },
  { label: "My story", href: "/my-story" },
  { label: "Work with me", href: "/#work-with-me", isAnchor: true },
  { label: "Articles", href: "/articles" },
];

export const footerNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "My story", href: "/my-story" },
  { label: "My book", href: "/pocket-winners" },
  { label: "Work with me", href: "/#work-with-me", isAnchor: true },
  { label: "Articles", href: "/articles" },
  { label: "Privacy", href: "/privacy" },
];
