import { FooterLinksColumns } from 'additional'

export const links: FooterLinksColumns[] = [
  {
    id: 1,
    title: 'Policy',
    column: [
      { route: 'Privacy Policy', path: '/privacy-policy' },
      { route: 'Terms of Service', path: '/terms-of-service' },
      { route: 'Consumer Rights', path: '/consumer-rights' }
    ]
  },
  {
    id: 2,
    title: 'Support',
    column: [
      { route: 'Forum', path: '/forum' },
      { route: 'Contact Us', path: '/contact-us' },
      { route: 'Common questions', path: '/common-questions' }
    ]
  },
  {
    id: 3,
    title: 'Networks',
    column: [
      { route: 'Twitter', path: '/twitter/ecommerce' },
      { route: 'Facebook', path: '/facebook/ecommerce' },
      { route: 'Instagram', path: '/instagram/ecommerce' }
    ]
  }
]
