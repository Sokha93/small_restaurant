const h1 = document.getElementById('h1-restaurant-name'),
      banner = document.getElementById('banner'),
      button = document.getElementById('book-oreder-list-link'),
      container = document.getElementById('container'),
      container2 = document.getElementById('container2'),
      h2 = document.getElementById('h2-restaurant')

      

const onScroll = (event) => {

    const scrollPosition = event.target.scrollingElement.scrollTop;

    if(scrollPosition > 150){
        banner.style.backgroundSize = '130%';
        h1.style.opacity = 0;
        h1.style.translate = '0 -10px';
        h1.style.scale = '0.1';
        h2.style.opacity = 0;
        h2.style.translate = '0 -90px';
        h2.style.scale = '0.9';
        button.style.scale = '0.4';
        button.style.opacity = 0;
        button.style.translate = '-10px 60px';
        container.style.scale = 1;
        container.style.opacity = 1;
        container.style.transform = 'translateX(0)';
    }else {
        banner.style.backgroundSize = '180%';
        h1.style.opacity = 1;
        h1.style.translate = 0;
        h1.style.scale = 1;
        h2.style.opacity = 1;
        h2.style.translate = 0;
        h2.style.scale = 1;
        button.style.opacity = 1;
        button.style.translate = 0;
        button.style.scale = 1;
        container.style.opacity = 0;
        container.style.scale = '.8';
        container.style.transform = 'translateX(0)'
    }
    if(scrollPosition > 350){
        container2.style.scale = 1;
        container2.style.opacity = 1;
        container2.style.transform = 'translateX(0)';
    }else {
        container2.style.scale = '0.6';
        container2.style.opacity = 0;
        container2.style.transform = 'translateX(100px)';
    }
};

document.addEventListener('scroll', onScroll);