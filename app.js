gsap.to(".strip", {
	height: "100%",
	opacity: 1,
	duration: 1.5,
	delay: .5,
	ease: "expo.out",
	stagger: {
		ease: "none",
		amount: 1.5,
	}
})
gsap.from("h1, h2, h3, h4", {
	opacity: 0,
	duration: 1,
	delay: 1,
	stagger: {
		amount: 1.5,
	}
});