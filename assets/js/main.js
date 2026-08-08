/* Our Savior Lutheran — interactions: mobile drawer, submenus, accordion, form */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;

    /* ---- Mobile drawer ---- */
    var burger = document.querySelector('.hamburger');
    var drawer = document.querySelector('.drawer');
    var overlay = document.querySelector('.drawer-overlay');
    var closeBtn = document.querySelector('.drawer-close');

    function openDrawer() {
      if (!drawer) return;
      drawer.classList.add('is-open');
      overlay && overlay.classList.add('is-open');
      burger && burger.classList.add('is-open');
      burger && burger.setAttribute('aria-expanded', 'true');
      body.style.overflow = 'hidden';
    }
    function closeDrawer() {
      if (!drawer) return;
      drawer.classList.remove('is-open');
      overlay && overlay.classList.remove('is-open');
      burger && burger.classList.remove('is-open');
      burger && burger.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
    }
    if (burger) {
      burger.addEventListener('click', function () {
        drawer && drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
      });
    }
    overlay && overlay.addEventListener('click', closeDrawer);
    closeBtn && closeBtn.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });
    // Close after tapping a real link in the drawer
    document.querySelectorAll('.drawer a[href]:not(.m-toggle)').forEach(function (a) {
      a.addEventListener('click', function () {
        if (a.getAttribute('href') && a.getAttribute('href').charAt(0) !== '#') return closeDrawer();
        closeDrawer();
      });
    });

    /* ---- Mobile submenu toggles ---- */
    document.querySelectorAll('.m-toggle').forEach(function (t) {
      t.addEventListener('click', function () {
        var sub = t.parentElement.querySelector('.m-sub');
        t.classList.toggle('is-open');
        if (sub) sub.classList.toggle('is-open');
      });
    });

    /* ---- Accordion ---- */
    document.querySelectorAll('.acc-head').forEach(function (h) {
      h.addEventListener('click', function () {
        var item = h.closest('.acc-item');
        var bodyEl = item.querySelector('.acc-body');
        var open = item.classList.contains('is-open');
        if (open) {
          item.classList.remove('is-open');
          bodyEl.style.maxHeight = null;
          h.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('is-open');
          bodyEl.style.maxHeight = bodyEl.scrollHeight + 'px';
          h.setAttribute('aria-expanded', 'true');
        }
      });
    });

    /* ---- Header shadow on scroll ---- */
    var header = document.querySelector('.site-header');
    if (header) {
      var onScroll = function () {
        if (window.scrollY > 8) header.style.boxShadow = '0 6px 24px rgba(28,31,94,.10)';
        else header.style.boxShadow = 'none';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    /* ---- Contact form -> opens email (works without a backend) ---- */
    var form = document.querySelector('form[data-mailto]');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var to = form.getAttribute('data-mailto');
        var name = (form.querySelector('[name=name]') || {}).value || '';
        var email = (form.querySelector('[name=email]') || {}).value || '';
        var msg = (form.querySelector('[name=message]') || {}).value || '';
        var subject = encodeURIComponent('Website message from ' + name);
        var bodyTxt = encodeURIComponent(msg + '\n\n— ' + name + (email ? ' (' + email + ')' : ''));
        window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + bodyTxt;
      });
    }

    /* ---- Footer year ---- */
    var y = document.querySelector('[data-year]');
    if (y) y.textContent = new Date().getFullYear();
  });
})();
