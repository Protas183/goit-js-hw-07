import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);




const galerryContainer = document.querySelector('.gallery');
const imgCards = createImgCards(galleryItems);

galerryContainer.insertAdjacentHTML("beforeend", imgCards);
function createImgCards(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
                        <a class="gallery__link" href="${original}">
                            <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                            />
                        </a>
                    </div>`;
        })
        .join('');
}

const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`)


galerryContainer.addEventListener('click', onGalerryContaierClick);
function onGalerryContaierClick(e) {
    const isImgCard = e.target.classList.contains('gallery__image'); 
    e.preventDefault();
    if (!isImgCard) {
        return;
    };
    const source = e.target.dataset.source;
    const img = instance.element().querySelector('img');
    img.setAttribute('src', source);
    instance.show();
};

window.addEventListener('keydown', onEscBtn);
function onEscBtn(event) {
  if (event.code === 'Escape') {
      instance.close();
    };
};














// function onPictureClick(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains('gallery__image')) {
//     return;
//   }
//   // console.log(event.target);
//   window.addEventListener('keydown', onEscBtnPress);
//   modalRef.classList.add('is-open');
//   imageRef.src = event.target.dataset.source;
// }

// function onCloseBtnClick() {
//   modalRef.classList.remove('is-open');
//   window.removeEventListener('keydown', onEscBtnPress);
//   imageRef.src = '';
// }

// function onBackdropClick(event) {
//   if (backdropRef === event.target) {
//     onCloseBtnClick();
//   }
// }
