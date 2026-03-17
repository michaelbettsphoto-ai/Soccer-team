/* ============================================================
   YMCA Youth Soccer — app.js
   Shared JS: nav toggle, drill filters, accordions, tip tabs
   ============================================================ */

(function () {
  'use strict';

  /* ── Utility: highlight active nav link ─────────────────── */
  function setActiveNav() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ── Mobile hamburger toggle ─────────────────────────────── */
  function initHamburger() {
    var btn    = document.getElementById('nav-hamburger');
    var mobile = document.getElementById('nav-mobile');
    if (!btn || !mobile) return;

    btn.addEventListener('click', function () {
      var open = mobile.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !mobile.contains(e.target)) {
        mobile.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Drill Filter (drills.html) ──────────────────────────── */
  function initDrillFilter() {
    var pills = document.querySelectorAll('.filter-pill');
    var cards = document.querySelectorAll('.drill-card');
    if (!pills.length || !cards.length) return;

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        // Update active pill
        pills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');

        var filter = pill.dataset.filter;

        cards.forEach(function (card) {
          if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ── Accordion (drills.html) ─────────────────────────────── */
  function initAccordions() {
    var toggles = document.querySelectorAll('.accordion-toggle');
    if (!toggles.length) return;

    toggles.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var panelId = btn.getAttribute('aria-controls');
        var panel   = document.getElementById(panelId);
        if (!panel) return;

        var isOpen = panel.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
        btn.querySelector('.toggle-label').textContent = isOpen ? 'Hide' : 'See How';

        // Rotate chevron
        var chevron = btn.querySelector('.chevron');
        if (chevron) {
          chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      });
    });
  }

  /* ── Tip Category Tabs (tips.html) ───────────────────────── */
  function initTipTabs() {
    var tabs     = document.querySelectorAll('.tab-btn');
    var sections = document.querySelectorAll('.tip-section');
    if (!tabs.length || !sections.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        var target = tab.dataset.tab;
        sections.forEach(function (sec) {
          if (sec.id === target) {
            sec.classList.remove('hidden');
          } else {
            sec.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ── Parent Note Toggles (tips.html) ─────────────────────── */
  function initParentToggles() {
    var toggles = document.querySelectorAll('.parent-toggle');
    if (!toggles.length) return;

    toggles.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var panelId = btn.getAttribute('aria-controls');
        var panel   = document.getElementById(panelId);
        if (!panel) return;

        var isOpen = panel.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
        btn.querySelector('.pn-label').textContent = isOpen ? 'Hide Parent Note ▲' : 'Parent Note ▼';
      });
    });
  }

  /* ── Init all on DOM ready ───────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    initHamburger();
    initDrillFilter();
    initAccordions();
    initTipTabs();
    initParentToggles();
  });

}());
