(() => {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  
    const btn = document.getElementById("ctaButton");
    const out = document.getElementById("ctaResult");
    if (btn && out) {
      btn.addEventListener("click", () => {
        out.textContent = "Nice. Now prompt the agent to customize this site.";
      });
    }
  })();
  