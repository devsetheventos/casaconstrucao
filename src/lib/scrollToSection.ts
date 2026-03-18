const PENDING_SCROLL_KEY = "casaconstrucao:pending-section-scroll";
const DEFAULT_OFFSET = 72;

export function scrollToSection(sectionId: string, offset = DEFAULT_OFFSET) {
  const element = document.getElementById(sectionId);
  if (!element) return false;

  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const targetY = Math.max(elementTop - offset, 0);
  window.scrollTo({ top: targetY, behavior: "smooth" });
  return true;
}

export function setPendingSectionScroll(sectionId: string) {
  window.sessionStorage.setItem(PENDING_SCROLL_KEY, sectionId);
}

export function clearPendingSectionScroll() {
  window.sessionStorage.removeItem(PENDING_SCROLL_KEY);
}

export function runPendingSectionScroll(offset = DEFAULT_OFFSET) {
  const pendingSectionId = window.sessionStorage.getItem(PENDING_SCROLL_KEY);
  if (!pendingSectionId) return;

  clearPendingSectionScroll();

  let attempts = 0;
  const maxAttempts = 18;

  const tryScroll = () => {
    const didScroll = scrollToSection(pendingSectionId, offset);
    if (didScroll || attempts >= maxAttempts) return;
    attempts += 1;
    window.requestAnimationFrame(tryScroll);
  };

  window.requestAnimationFrame(tryScroll);
}
