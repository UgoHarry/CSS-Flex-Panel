var activePanel = document.querySelectorAll(`.panel`);
console.log(activePanel);
activePanel.forEach((item) => {item.addEventListener('mouseover', function (){item.classList.add(`panel-open`)});
item.addEventListener(`mouseout`, function(){item.classList.remove(`panel-open`)})
});
