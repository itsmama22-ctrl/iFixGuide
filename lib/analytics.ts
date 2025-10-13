// Google Analytics helper functions
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track events
interface EventParams {
  action: string
  category: string
  label?: string
  value?: number
}

export const event = ({ action, category, label, value }: EventParams) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track Core Web Vitals
export const reportWebVitals = ({ id, name, label, value }: any) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', name, {
      event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      event_label: id,
      non_interaction: true,
    })
  }
}

// Track newsletter signups
export const trackNewsletterSignup = (email: string) => {
  event({
    action: 'newsletter_signup',
    category: 'Engagement',
    label: 'Newsletter',
  })
}

// Track contact form submissions
export const trackContactForm = () => {
  event({
    action: 'contact_form_submit',
    category: 'Engagement',
    label: 'Contact',
  })
}

// Track outbound links
export const trackOutboundLink = (url: string) => {
  event({
    action: 'click',
    category: 'Outbound Link',
    label: url,
  })
}

// Track search
export const trackSearch = (searchTerm: string) => {
  event({
    action: 'search',
    category: 'Search',
    label: searchTerm,
  })
}

// Track article reading time
export const trackReadingTime = (articleTitle: string, timeInSeconds: number) => {
  event({
    action: 'reading_time',
    category: 'Engagement',
    label: articleTitle,
    value: timeInSeconds,
  })
}

