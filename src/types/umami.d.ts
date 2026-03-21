/** Umami analytics global (loaded via script in root layout). */
interface UmamiTracker {
  track(
    eventName: string,
    eventData?: Record<string, string | number | boolean>
  ): void;
}

interface Window {
  umami?: UmamiTracker;
}
