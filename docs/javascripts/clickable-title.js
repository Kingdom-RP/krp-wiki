// Makes the header site name (Kingdom RP) clickable — links to home like the logo.
document$.subscribe(function () {
  var logo = document.querySelector(".md-header__button.md-logo");
  var title = document.querySelector(".md-header__title .md-header__topic");
  if (!logo || !title || title.dataset.homeLink) return;
  var href = logo.getAttribute("href");
  if (!href) return;
  title.dataset.homeLink = "1";
  title.style.cursor = "pointer";
  title.addEventListener("click", function () {
    window.location.href = href;
  });
});
