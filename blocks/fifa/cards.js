export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  
  const cardsHTML = [...rows].map(row => {
    const cols = row.querySelectorAll(':scope > div');
    const title = cols[0].textContent.trim();
    const description = cols[1].textContent.trim();
    return `
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">${title}</h3>
          <p class="card-description">${description}</p>
          <button class="card-btn">Read More</button>
        </div>
      </div>
    `;
  }).join('');

  block.innerHTML = `
    <div class="cards-inner">
      <h2 class="cards-heading">Latest FIFA News</h2>
      <div class="cards-grid">${cardsHTML}</div>
    </div>
  `;
}