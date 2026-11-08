// ====== EDIT THESE TWO LINES ======
var CONTACT_EMAIL = 'support@example.com';          // <- put your real support email here
var APP_URL = 'https://standycord.vercel.app';      // where the "Open StandyCord" buttons go
// ==================================
document.querySelectorAll('[data-email]').forEach(function (a) {
  a.textContent = CONTACT_EMAIL;
  if (a.tagName === 'A') a.href = 'mailto:' + CONTACT_EMAIL;
});
document.querySelectorAll('[data-app]').forEach(function (a) { a.href = APP_URL; });
// reveal-on-scroll
var els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 });
  els.forEach(function (el) { io.observe(el); });
} else els.forEach(function (el) { el.classList.add('in'); });
var y = document.getElementById('yr'); if (y) y.textContent = new Date().getFullYear();
// open the FAQ entry that the URL points at (e.g. /support#servers)
function openHash() { var t = location.hash && document.querySelector(location.hash); if (t && t.tagName === 'DETAILS') { t.open = true; t.scrollIntoView(); } }
window.addEventListener('hashchange', openHash); openHash();
