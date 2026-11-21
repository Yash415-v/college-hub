// Alias loader: Loads script.js if app.js is referenced
(function() {
  const s = document.createElement("script");
  s.src = "script.js";
  document.head.appendChild(s);
})();
