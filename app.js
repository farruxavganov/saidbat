const bars = document.querySelector(".navbar__bars");
const close = document.querySelector(".navbar__close");
const saidbar = document.querySelector(".saidbar");

bars.addEventListener("click", function () {
	let data = saidbar.classList;
	if(data.contains("show")){
		data.remove("show");
	}else {
		data.add("show");
	}
})

close.addEventListener("click", function () {
	saidbar.classList.remove("show");
})