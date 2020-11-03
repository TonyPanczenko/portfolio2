// jscs:disable validateLineBreaks
// jscs:disable validateQuoteMarks
// jscs:disable disallowMultipleLineBreaks
// jscs:disable requirePaddingNewLinesBeforeLineComments
// jscs:disable requireTrailingComma
// jscs:disable disallowQuotedKeysInObjects
// jscs:disable requireShorthandArrowFunctions
/* jshint esversion: 8 */

document.addEventListener("DOMContentLoaded", () => {

  const gallery = document.querySelector("ul.gallery");
  const projectSummaries = document.querySelectorAll("div.project-summary");

  // gallery.addEventListener("focus", (event) => {
  //   if (event.target.classList.contains("gallery-item")) {
  //     const item = event.target;
  //     const projectSummary = item.querySelector("div.project-summary");
  //
  //     projectSummary.style.opacity = "0.9";
  //   }
  // });

  document.addEventListener("click", (event) => {
    projectSummaries.forEach(el => el.style.opacity = null);
    const previewLinks = document.querySelectorAll("a.preview-link");
    previewLinks.forEach(el => el.parentNode.removeChild(el));

    if (event.target.classList.contains("gallery-item")) {
      const item = event.target;
      const projectSummary = item.querySelector("div.project-summary");
      projectSummary.style.opacity = "0.9";

      const previewLink = document.createElement("A");
      previewLink.innerHTML = "Preview";
      previewLink.classList.add("preview-link");
      item.parentNode.appendChild(previewLink);
    }
  });

  gallery.addEventListener("click", (event) => {
    if (event.target.classList.contains("preview-link")) {
      const projectURL = event.target.parentNode.children[0]
        .getAttribute("data-link");

      window.location.href = projectURL;
    }
  });
});
