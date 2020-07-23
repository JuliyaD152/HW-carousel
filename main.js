/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */


let pointer = null;

function createMainDiv() {
    divMain = document.createElement('div');
	divMain.className = "$carousel";
	divMain.setAttribute("id", "carousel")
	document.body.append(divMain);
	divCarousel = document.querySelector("#carousel");
 }

function slideCreate(n) {
	slidesList = document.createElement('ul');
	slidesList.setAttribute('class', 'slides');
	divCarousel.append(slidesList);

	for (let i = 0; i < n; i++) {
		let slidesLi = document.createElement('li');
		let aLi = document.createElement('a');

		if (i === 0) {
			slidesLi.setAttribute("class", "slides__item active");
		} else {
			slidesLi.setAttribute('class', "slides__item") ;
		}

		slidesList.append(slidesLi);
		aLi.setAttribute('href', '#');
		slidesLi.append(aLi);
	}
}

function createIndicators(n) {
	let indicatorDiv = document.createElement("div");
	indicatorDiv.className = 'indicators';
	divCarousel.append(indicatorDiv);

	for (let i = 0; i < n; i++) {
		let indicatorSpan = document.createElement('span');
		document.querySelector(".indicators").append(indicatorSpan);
		
		if (i === 0) {
			indicatorSpan.className = "indicators__item active";
		} else {
			indicatorSpan.className = "indicators__item";
		}
		
		indicatorSpan.setAttribute('data-slide-to', i);
	}
}

function createControls() {
	let controlDiv = document.createElement('div');
	controlDiv.className = "controls";
	divCarousel.append(controlDiv);

	for (let i = 0; i < 3; i++) {
		let allControlDiv = document.createElement('div');
		let innerTag = document.createElement('i');
		
		controlDiv.append(allControlDiv);
		allControlDiv.append(innerTag);

		switch (i) {
			case 0:
				allControlDiv.setAttribute("class", "controls__item controls__prev");
				innerTag.setAttribute('class', 'fas fa-chevron-left');
				break;
			case 1:
				allControlDiv.setAttribute("class", "controls__item controls__next");
				innerTag.setAttribute('class', 'fas fa-chevron-right');
				break;
			case 2:
				allControlDiv.setAttribute("class", "controls__item controls__pause");
				innerTag.setAttribute('class', 'fas fa-play');
				break;

		}
	}
}

function createStyle() {
	let mainStyle = document.createElement('style');
	divCarousel.append(mainStyle);

	let createInnerStyle = `
		.slides {
			position: relative;
	}
		.slides__item{
			background-color: orchid;
			margin-top: 10px;
			width: 250px;
		}
		
		.controls {
			position: relative;
	}
		.indicators {
			display: flex;	
}

		.indicators__item{
			background-color: indigo ;
			margin-left: 20px;
			width: 25px;
			height:10px;
}
}
   `
	mainStyle.innerHTML = createInnerStyle;
}

function handler(event) {
	const target = event.target;
	
	if (target.classList.contains('indicators__item')) {
		target.style.backgroundColor = "red";

		if (pointer !== null) pointer.style.backgroundColor = "";
		pointer = target;
		console.log(pointer);
	}
}

function addClick() {
	let parent = document.querySelector("div.indicators");
	parent.addEventListener("click", handler);
}

function createCarousel(slidesCount = 5 ) {
	createMainDiv()
	slideCreate(slidesCount);
	createIndicators(slidesCount);
	createControls();
	createStyle();
	addClick();
}
createCarousel(4);
