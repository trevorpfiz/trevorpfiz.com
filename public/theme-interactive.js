// Non-critical theme functionality - loaded deferred to avoid render blocking
(function() {
  // Get the theme value set by the critical inline script
  let themeValue = window.__themeValue || 'light';
  
  function setPreference() {
    localStorage.setItem("theme", themeValue);
    reflectPreference();
  }
  
  function reflectPreference() {
    document.firstElementChild.setAttribute("data-theme", themeValue);
    document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);
    
    const body = document.body;
    if (body) {
      const computedStyles = window.getComputedStyle(body);
      const bgColor = computedStyles.backgroundColor;
      document.querySelector("meta[name='theme-color']")?.setAttribute("content", bgColor);
    }
  }
  
  function setThemeFeature() {
    // Set on load so screen readers can get the latest value on the button
    reflectPreference();
    
    // Listen for clicks on the theme toggle button
    document.querySelector("#theme-btn")?.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : "light";
      setPreference();
    });
  }
  
  // Initialize theme features when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setThemeFeature);
  } else {
    setThemeFeature();
  }
  
  // Runs on view transitions navigation
  document.addEventListener("astro:after-swap", setThemeFeature);
  
  // Set theme-color value before page transition
  // to avoid navigation bar color flickering in Android dark mode
  document.addEventListener("astro:before-swap", event => {
    const bgColor = document
      .querySelector("meta[name='theme-color']")
      ?.getAttribute("content");
    
    event.newDocument
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  });
  
  // Sync with system changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches: isDark }) => {
      themeValue = isDark ? "dark" : "light";
      setPreference();
    });
})();
