const h1 = document.getElementById('h1-restaurant-name'),
      banner = document.getElementById('banner'),
      button = document.getElementById('book-oreder-list-link'),
      container = document.getElementById('container'),
      h2 = document.getElementById('h2-restaurant'),
      hours = document.getElementById('hours')

      

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
        container.style.scale = '.7';
    }
    for(let i = 0; i < hours.length; i++){
       document.addEventListener('click', () => {
        console.log(i)
       }) 
    }

    // if(scrollPosition > 600){
    //     for(let i = 0; i < hours.length; i++){
    //         [i].style.translate = 0;
    //         [i].style.scale = 1;
    //         [i].style.opacity = 1;
    //     }
    // }else {
    //     hours.style.translate = '-120px 0';
    //     hours.style.scale = '0.1';
    //     hours.style.opacity = 0;
    // }
};

document.addEventListener('scroll', onScroll);

function openMenuOptions(e, foodName) {
    let i,
    tabContent = document.getElementsByClassName('tab-content'),
    tabLinks = document.getElementsByClassName('tab-links');
    console.log(tabLinks)
    for(i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = 'none';
    }
    document.getElementById(foodName).style.display = 'block';
    // e.currentTarget.className += 'active';
}
