const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadImage = (entry) => {
  const container = entry.target;
  const img = container.querySelector('img');
  const url = img.dataset.src;

  img.src = url;
  obserserver.unobserve(container);
};

const obserserver = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
  obserserver.observe(image);
};
