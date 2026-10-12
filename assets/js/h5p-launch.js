(() => {
  const launchSelector = "[data-h5p-launch]";

  const launchTour = (button) => {
    const targetId = button.getAttribute("aria-controls");
    const source = button.dataset.h5pSrc;
    const target = targetId ? document.getElementById(targetId) : null;
    const stage = target?.closest("[data-h5p-stage]");

    if (!target || !source) return;

    let iframe = target.querySelector("iframe[data-h5p-player]");

    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.dataset.h5pPlayer = "";
      iframe.className = "portfolio-h5p-frame";
      iframe.src = source;
      iframe.title = "Interactive virtual campus tour";
      iframe.loading = "lazy";
      iframe.allow = "fullscreen";
      iframe.allowFullscreen = true;
      iframe.tabIndex = 0;

      target.setAttribute("aria-busy", "true");
      iframe.addEventListener(
        "load",
        () => {
          target.removeAttribute("aria-busy");
        },
        { once: true }
      );
      target.appendChild(iframe);
    }

    target.hidden = false;
    stage?.classList.add("is-loaded");
    button.setAttribute("aria-expanded", "true");
    button.textContent = "Interactive tour loaded";
    button.disabled = true;
    window.requestAnimationFrame(() => iframe.focus());
  };

  const initializeLaunchButtons = () => {
    document.querySelectorAll(launchSelector).forEach((button) => {
      if (!button.hasAttribute("aria-expanded")) button.setAttribute("aria-expanded", "false");
      button.addEventListener("click", () => launchTour(button));
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeLaunchButtons, { once: true });
  } else {
    initializeLaunchButtons();
  }
})();
