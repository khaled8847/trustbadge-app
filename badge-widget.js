(function() {
  const BADGE_CONFIG = {
    secure:   { icon: '🔒', text: 'Secure Checkout', sub: 'SSL Encrypted' },
    returns:  { icon: '↩️', text: 'Free Returns',    sub: '30-Day Policy' },
    shipping: { icon: '🚚', text: 'Fast Shipping',   sub: 'Tracked Delivery' },
    support:  { icon: '💬', text: '24/7 Support',    sub: 'Always Here' },
    genuine:  { icon: '✅', text: '100% Genuine',    sub: 'Verified Products' },
    payment:  { icon: '💳', text: 'Safe Payment',    sub: 'Multiple Options' }
  };

  const shop = window.Shopify ? Shopify.shop : window.location.hostname;

  fetch(`https://your-app.railway.app/api/settings?shop=${shop}`)
    .then(r => r.json())
    .then(settings => { if (settings.enabled) injectBadges(settings); })
    .catch(() => injectBadges({ badges: ['secure','returns','shipping','support'], style: 'minimal', color: '#2d6a4f' }));

  function injectBadges(settings) {
    const style = document.createElement('style');
    style.textContent = `.tb-wrap{display:flex;flex-wrap:wrap;gap:10px;margin:16px 0;font-family:-apple-system,sans-serif}.tb-badge{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:8px;background:#f8f8f8;border:1px solid #e5e5e5;flex:1;min-width:120px}.tb-icon{font-size:20px}.tb-text{font-size:12px;font-weight:600;color:#111;line-height:1.2}.tb-sub{font-size:11px;color:#888}`;
    document.head.appendChild(style);
    const wrap = document.createElement('div');
    wrap.className = 'tb-wrap';
    settings.badges.forEach(key => {
      const b = BADGE_CONFIG[key];
      if (!b) return;
      const el = document.createElement('div');
      el.className = 'tb-badge';
      el.innerHTML = `<span class="tb-icon">${b.icon}</span><div><div class="tb-text">${b.text}</div><div class="tb-sub">${b.sub}</div></div>`;
      wrap.appendChild(el);
    });
    const target = document.querySelector('.product-form__buttons') || document.querySelector('form[action*="/cart/add"]');
    if (target) target.insertAdjacentElement('afterend', wrap);
  }
})();
