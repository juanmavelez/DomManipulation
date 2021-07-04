/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = 'http://platzi-avo.vercel.app';

const formatPrice = (price) => {
  return new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

async function fetchData() {
  const res = await window.fetch(`${baseUrl}/api/avo`);
  const resJson = await res.json();
  const allItems = [];
  console.log(resJson);

  resJson.data.forEach((item) => {
    const container = document.createElement('div');
    const img = document.createElement('img');
    img.src = `${baseUrl}${item.image}`;

    const title = document.createElement('h2');
    title.textContent = item.name;
    title.className = 'text-xl text-red-600';

    const price = document.createElement('div');
    price.textContent = formatPrice(item.price);

    container.append(img, title, price);
    allItems.push(container);
  });

  document.body.append(...allItems);
}

fetchData();
