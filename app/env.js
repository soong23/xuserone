// API地址
window.routerBase = 'https://occultumvpn.com/'
window.settings = {
  title: 'Occultum',
  description: '高速 安全 可靠',
  assets_path: '/assets',
  theme: {
    color: 'default',
  },
  version: '0.1.1-dev',
  background_url: '/app/assets/images/global-internet.webp',
  logo: '/app/assets/images/occultum-logo.webp',
}

document.addEventListener('DOMContentLoaded', () => {
  // 背景效果
  document.body.style.background = `url(${window.settings.background_url}) no-repeat center center fixed`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.position = 'relative';
  document.body.style.minHeight = '100vh';
  const before = document.createElement('div');
  before.style.position = 'fixed';
  before.style.top = '0';
  before.style.left = '0';
  before.style.width = '100%';
  before.style.height = '100%';
  before.style.background = 'inherit';
  before.style.filter = 'blur(3px) brightness(0.8)';
  before.style.zIndex = '-1';
  document.body.appendChild(before);

  // 为 Logo 添加首页链接和样式
  updateLogo();

  // 监控 DOM 变化
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' || mutation.type === 'subtree') {
        const logoImg = document.querySelector('.text-center img[src*="/app/assets/images/occultum-logo.webp"]') ||
                        document.querySelector('.mb-1em.max-w-100%.max-w-full');
        if (logoImg && (!logoImg.parentElement.href || logoImg.style.maxWidth !== '80%')) {
          updateLogo();
        }
      }
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener('unload', () => observer.disconnect());

  // 更新 Logo 的链接和样式的函数
  function updateLogo() {
    const logoImg = document.querySelector('.text-center img[src*="/app/assets/images/occultum-logo.webp"]') ||
                    document.querySelector('.mb-1em.max-w-100%.max-w-full');
    if (logoImg) {
      const parent = logoImg.parentElement;
      if (parent.tagName === 'A') {
        parent.replaceWith(logoImg);
      }
      const link = document.createElement('a');
      link.href = 'https://shop.occultumvpn.com/';
      link.style.display = 'inline-block';
      logoImg.parentNode.insertBefore(link, logoImg);
      link.appendChild(logoImg);
      logoImg.style.maxWidth = '80%';
      logoImg.style.height = 'auto';
    }
  }
});
