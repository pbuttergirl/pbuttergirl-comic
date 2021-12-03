export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

type EventParams = Gtag.ControlParams & Gtag.EventParams & Gtag.CustomParams;

type GAEvent = {
  action: Gtag.EventNames | string;
} & EventParams;

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({
  action,
  event_category,
  event_label,
  value,
}: GAEvent) => {
  window.gtag('event', action, {
    event_category,
    event_label,
    value,
  });
};
