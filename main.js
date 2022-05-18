const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const storyContent = document.querySelector('.story');
const parentContainer = document.querySelector('.container-fluid');

// const startingHeight = document.getElementById('main-content');
// console.log(startingHeight.height());

function randomValueFromArray(array) {
	const random = Math.floor(Math.random() * array.length);
	return array[random];
}

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

randomize.addEventListener('click', result)

function result() {
	let charName = randomValueFromArray(insertX);
	let storySetting = randomValueFromArray(insertY);
	let storyAction = randomValueFromArray(insertZ);
	let newStory = `"It was 94 degrees outside, so ${charName} went for a walk. When they got to ${storySetting}, they stared in horror for a few moments, then ${storyAction}. Bob saw the whole thing, but was not surprised — ${charName} weighs 300 pounds, and it was a hot day."`;

	if(customName.value !== '') {
		newStory = newStory.replace('Bob', `${customName.value}`)
	}

	if(document.getElementById("uk").checked) {
		const weight = Math.round(300 / 14);
		const temperature = Math.round((94 - 32) *.5556);
		newStory = newStory.replace('300 pounds', `${weight} stone`)
		newStory = newStory.replace('94', `${temperature}`)
	}

	storyContent.textContent = newStory;
	storyContent.style.visibility = 'visible';
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		parentContainer.style.marginTop = '7vh';
	}
	else {
		parentContainer.style.marginTop = '20vh';
	}
	parentContainer.style.paddingTop = '0'
}