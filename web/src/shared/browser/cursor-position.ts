export const cursor = ($e: MouseEvent) => {
	const cursor = document.getElementById('cursor');
	const cursorForeground = document.getElementById('cursor-foreground');

	if (!cursor || !cursorForeground) throw new Error("can't get cursor div element");

	const { clientX, clientY } = $e;
	const cursorSize = 20;
	const cursorForegroundSize = 12;
	const cxPos = clientX - cursorSize / 2;
	const cyPos = clientY - cursorSize / 2;
	const cxfPos = clientX - cursorForegroundSize / 2;
	const cyfPos = clientY - cursorForegroundSize / 2;
	cursor.style.display = `block`;
	cursor.style.top = `${cyPos}px`;
	cursor.style.left = `${cxPos}px`;
	cursor.style.zIndex = '-9999';

	cursorForeground.style.display = `block`;
	cursorForeground.style.top = `${cyfPos}px`;
	cursorForeground.style.left = `${cxfPos}px`;
	cursorForeground.style.zIndex = '-999';
};
