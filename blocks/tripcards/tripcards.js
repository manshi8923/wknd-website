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
}


const paragraph = document.querySelector('.recent-articles p');
const para=document.querySelector('.all-articles-container p');
// Create a new span element
const span = document.createElement('span');
const p=document.createElement('span');
para.classList.add('banner-content-button');
// Add the 'underline-recent' class to the span
 span.classList.add('underline-half');
p.classList.add('underline-half');
// Set the text content of the span to "Recent"
span.textContent = 'Recent';
p.textContent='All';
// Replace "Recent" in the paragraph with the span element
paragraph.innerHTML = paragraph.innerHTML.replace('Recent', span.outerHTML);
para.innerHTML=para.innerHTML.replace("All",p.outerHTML);