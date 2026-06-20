export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  const title = rows[0].textContent.trim();
  const subtitle = rows[1].textContent.trim();

  block.innerHTML = `
    <div class="fifa-inner">
      <div class="fifa-badge">⚽</div>
      <h1 class="fifa-title">${title}</h1>
      <p class="fifa-subtitle">${subtitle}</p>
      <a href="${link}" class="fifa-btn">Explore Now</a>
    </div>
  `;
}