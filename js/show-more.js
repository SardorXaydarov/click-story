


const parentcontainer = document.querySelector('.show-more-text')

parentcontainer.addEventListener('click', event=>{
    const current = event.target;
    const isReadMoreBtn = current.className.includes('.more');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.show-more-text');


    currentText.classlist.toggle('.show-more-text--show');
})