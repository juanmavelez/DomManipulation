/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = 'https://randomfox.ca/floof/';

const father = document.getElementById('image');
const addButton = document.querySelector('button');

async function createImageNode() {
  const container = document.createElement('div');
  container.className = 'p-4';

  const pictures = await window.fetch(url);
  const picturesJson = await pictures.json();

  const img = document.createElement('img');
  img.src = picturesJson.image;
  img.className = 'mx-auto';
  img.width = '320';

  container.appendChild(img);
  return container;
}

const addImage = () => {
  const newImage = createImageNode();
  newImage.then((arg) => father.append(arg));
};

addButton.addEventListener('click', addImage);
father.append(await createImageNode());
