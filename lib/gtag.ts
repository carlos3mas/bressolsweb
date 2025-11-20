// Google Analytics tracking functions

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Log specific events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const eventParams: Record<string, string | number | boolean> = {
      event_category: category,
      event_label: label,
    }
    
    if (value !== undefined) {
      eventParams.value = value
    }
    
    window.gtag('event', action, eventParams)
  }
}

// Declare gtag types for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, string | number | boolean>
    ) => void
  }
}

