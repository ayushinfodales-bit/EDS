export default function decorate(block) {
  // block is the div EDS gives you automatically
  // grab the rows from the table you made in da.live
  const name = block.querySelector('div:nth-child(1)').textContent.trim();
  const role = block.querySelector('div:nth-child(2)').textContent.trim();

  // now rewrite the DOM however you want
  block.innerHTML = `
    <div class="author-card-inner">
      <div class="author-avatar">${name.charAt(0)}</div>
      <h2 class="author-name">${name}</h2>
      <p class="author-role">${role}</p>
    </div>
  `;
}