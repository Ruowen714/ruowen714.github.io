(() => {
  const routeToSection = new Map([
    ["/teaching-philosophy/", "section-teaching-philosophy"],
    ["/teaching-experience/", "section-teaching-experience"],
    ["/project/", "section-project"],
    ["/teaching-demo/", "section-teaching-demo"],
    ["/research/", "section-research"],
    ["/certificates/", "section-certificates"],
    ["/more-experience/", "section-more-experience"],
    ["/cv/", "section-cv"],
  ]);

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function normalizePath(pathname) {
    return pathname.endsWith("/") ? pathname : `${pathname}/`;
  }

  function initPortfolioNavigation() {
    const navbar = document.querySelector("#navbar");
    const navLinks = [...(navbar?.querySelectorAll("a.nav-link") ?? [])];
    if (!navbar || navLinks.length === 0) return;

    const homeUrl = new URL(navLinks[0].href, window.location.href);
    const homePath = normalizePath(homeUrl.pathname);
    const currentPath = normalizePath(window.location.pathname.replace(/index\.html$/, ""));
    const isHomePage = currentPath === homePath;
    const linkBySection = new Map();

    if (isHomePage) {
      const homeSection = document.querySelector("main .post") ?? document.querySelector(".post");
      if (homeSection) homeSection.id = "section-home";

      const profileImage = document.querySelector(".profile img");
      if (profileImage) profileImage.alt = "Portrait of Ruowen Sun";
    }

    navLinks.forEach((link, index) => {
      const linkUrl = new URL(link.href, window.location.href);
      let sectionId = index === 0 ? "section-home" : null;

      for (const [route, candidateSectionId] of routeToSection) {
        if (normalizePath(linkUrl.pathname).endsWith(route)) {
          sectionId = candidateSectionId;
          break;
        }
      }

      if (!sectionId) return;

      link.href = `${homePath}#${sectionId}`;
      link.dataset.portfolioSection = sectionId;
      link.querySelector(".sr-only")?.remove();
      linkBySection.set(sectionId, link);
    });

    function setActiveLink(sectionId) {
      linkBySection.forEach((link, id) => {
        const isActive = id === sectionId;
        link.parentElement?.classList.toggle("active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    if (!isHomePage) {
      const currentSection = [...routeToSection].find(([route]) => currentPath.endsWith(route))?.[1];
      if (currentSection) setActiveLink(currentSection);
      return;
    }

    const sectionIds = ["section-home", ...routeToSection.values()];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    let animationFrame = null;

    function updateActiveSection() {
      animationFrame = null;
      const navOffset = navbar.getBoundingClientRect().height + 40;
      let activeSection = sections[0]?.id ?? "section-home";

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= navOffset) activeSection = section.id;
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        activeSection = sections.at(-1)?.id ?? activeSection;
      }

      setActiveLink(activeSection);
    }

    function queueActiveSectionUpdate() {
      if (animationFrame === null) animationFrame = window.requestAnimationFrame(updateActiveSection);
    }

    linkBySection.forEach((link, sectionId) => {
      link.addEventListener("click", (event) => {
        const target = document.getElementById(sectionId);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion.matches ? "auto" : "smooth", block: "start" });
        window.history.pushState(null, "", `#${sectionId}`);

        const toggler = navbar.querySelector(".navbar-toggler-main");
        if (toggler?.getAttribute("aria-expanded") === "true") toggler.click();

        setActiveLink(sectionId);

        const focusTarget = target.querySelector("h1, h2, h3") ?? target;
        if (!focusTarget.hasAttribute("tabindex")) focusTarget.setAttribute("tabindex", "-1");
        window.requestAnimationFrame(() => focusTarget.focus({ preventScroll: true }));
      });
    });

    window.addEventListener("scroll", queueActiveSectionUpdate, { passive: true });
    window.addEventListener("resize", queueActiveSectionUpdate);
    window.addEventListener("hashchange", queueActiveSectionUpdate);

    const initialTarget = window.location.hash ? document.querySelector(window.location.hash) : null;
    if (initialTarget) {
      window.requestAnimationFrame(() => {
        initialTarget.scrollIntoView({ behavior: "auto", block: "start" });
        updateActiveSection();
      });
    } else {
      updateActiveSection();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPortfolioNavigation, { once: true });
  } else {
    initPortfolioNavigation();
  }
})();
