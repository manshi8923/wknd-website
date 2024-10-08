import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
  const cardBodies = document.querySelectorAll('.cards-card-body');
  cardBodies.forEach(cardBody => {
    const secondParagraph = cardBody.querySelector('p:nth-of-type(2)');
    if (secondParagraph) {
      secondParagraph.classList.add('gray-text');
    }
  });

  const heading = document.getElementById('next-adventures');
  const text = heading.textContent;
  const highlightedText = text.replace('Next', '<span class="highlight">Next</span>');
  heading.innerHTML = highlightedText;
}

