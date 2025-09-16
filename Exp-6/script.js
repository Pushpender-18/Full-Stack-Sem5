const drawingCanvas = document.getElementById('drawing-canvas');

let isDrawing = false;
drawingCanvas.addEventListener('mousedown', () => {
	isDrawing = true;
});
drawingCanvas.addEventListener('mouseup', () => {
	isDrawing = false;
});
drawingCanvas.addEventListener('mousemove', (event) => {
	if (isDrawing) {
		const rect = drawingCanvas.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		plotPoint(x, y);
	}
});

function plotPoint(x, y) {
	const svgns = "http://www.w3.org/2000/svg";
	const circle = document.createElementNS(svgns, 'circle');
	circle.setAttribute('cx', x);
	circle.setAttribute('cy', y);
	circle.setAttribute('r', 4);
	circle.setAttribute('fill', 'black');
	drawingCanvas.appendChild(circle);
}
