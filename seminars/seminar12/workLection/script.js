const videoEL = document.querySelector('.video'); // Тег самого видео элемента <video>
const playBtnEl = document.querySelector('.fa-circle-play'); // Иконка play 
const pauseBtnEl = document.querySelector('.fa-circle-pause'); // Иконка pause
const volumeEl = document.querySelector('.volume'); // Тег ползунка регулировки громкости <input>
const timingEl = document.querySelector('.timing'); // Тег ползунка перемотки видео <input>
const currentTimeEl = document.querySelector('.current__time'); // Тег <span> для отображения текущего времени видео

playBtnEl.addEventListener('click', () => {
	videoEL.play();
});
pauseBtnEl.addEventListener('click', () => {
	videoEL.pause();
});
volumeEl.addEventListener('input', () => {
	videoEL.volume = volumeEl.value; // Присваиваем значение поля ввода <input> с типом ползунок , свойству видео эелемента volume. Именно по этому важно в теге html с ползунком для звука указывать правильные значения атрибутов min,max и step, такие значения совпадают со значеними свойств видео элемента по умолчанию.
});
videoEL.addEventListener('timeupdate', () => {
	const minutes = Math.floor(videoEL.currentTime / 60);
	const seconds = Math.floor(videoEL.currentTime % 60);

	currentTimeEl.innerText = `${String(minutes).padStart(2, '0')}: ${String(seconds).padStart(2, '0')}`;
});
timingEl.addEventListener('input', () => {
	videoEL.currentTime = timingEl.value / 100 * videoEL.duration;
});

videoEL.addEventListener('timeupdate', () => {
	timingEl.value = videoEL.currentTime / 100 * videoEL.duration;
});
