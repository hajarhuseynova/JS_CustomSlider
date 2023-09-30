var models = [
  {
    name: "Victoria Secret",
    image: "images/image1.jpg",
    link: "../Slider/images/image1.jpg",
  },
  {
    name: "Chanel",
    image: "images/image2.webp",
    link: "../Slider/images/image2.jpg",
  },
  {
    name: "Prada",
    image: "images/image3.jpg",
    link: "../Slider/images/image3.jpg",
  },
  {
    name: "Dolce Gabbana",
    image: "images/image4.jpg",
    link: "../Slider/images/image4.jpg",
  },
];
var settings = {
  duration: "2000",
  random: true,
};
let index = 0;
const slideCount = models.length;
var interval;

const leftIcon = document.querySelector(".fa-arrow-left");
const rightIcon = document.querySelector(".fa-arrow-right");
const arrows = document.querySelectorAll(".arrow");
init(settings);
rightIcon.addEventListener("click", () => {
  index++;
  showSlide(index);
  console.log(index);
});

leftIcon.addEventListener("click", () => {
  index--;
  showSlide(index);
});

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slideCount - 1;
  }
  if (i >= slideCount) {
    index = 0;
  }
  let imgElement = document.querySelector(".card-img-top");
  imgElement.setAttribute("src", models[index].image);

  let cardTitle = document.querySelector(".card-title");
  cardTitle.textContent = models[index].name;

  let imgLink = document.querySelector(".card-link");
  imgLink.setAttribute("href", models[index].link);
}

function init(settings) {
  var prev;
  interval = setInterval(function () {
    if (settings.random == true) {
      do {
        index = Math.floor(Math.random() * slideCount);
      } while (index == prev);
      prev = index;
      //randomly increase
    } else {
      //onebyone increase
      if (slideCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}
arrows.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

arrows.forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});
