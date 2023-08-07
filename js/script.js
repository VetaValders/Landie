"use strict"
/*
const iconMenu = document.querySelector(".icon-menu");
if (iconMenu) {
	const menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle("menu-open");
		menuBody.classList.toggle("menu-open");
	});
}
*/

document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
		document.body.classList.toggle('_lock')
	}
}