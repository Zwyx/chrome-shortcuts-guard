window.addEventListener(
	"keydown",
	(e) => {
		// Exception for the GitHub command palette shortcut
		if (
			location.hostname === "github.com" &&
			e.ctrlKey &&
			e.altKey &&
			e.code === "KeyK"
		) {
			return;
		}

		if (e.ctrlKey) {
			e.stopPropagation();
		}
	},
	true,
);
