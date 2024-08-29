import { type KeyPressEvent } from '../constants/key-press-event-map';

export function readKeyMapDataFromDom(): KeyPressEvent {
	const keyMapStore = document.querySelectorAll("[datatype='keymap-store']");
	const nodes: Element[] = [];
	keyMapStore.forEach((el) => nodes.push(el));
	return nodes.map((self) => JSON.parse(self.innerHTML)).reduce((p, c) => Object.assign(p, c), {});
}
