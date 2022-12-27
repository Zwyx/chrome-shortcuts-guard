window.addEventListener(
	"keydown",
	(e) => {
		if (e.ctrlKey) {
			e.stopPropagation();
		}
	},
	true,
);
