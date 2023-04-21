
import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);

const contentEl = document.querySelector('.content');
const universityList = document.createElement('ol');

universityList.textContent = `List of universities in ${data[0].country} ( alpha two code : "${data[0].alpha_two_code}" )`;
contentEl.appendChild(universityList);
/* 
data.forEach(({ name, web_page, domain }) => {
	const itemOl = document.createElement('li');

	const universityName = document.createElement('span');
	universityName.style.color = 'fuchsia';
	universityName.textContent = name;

	const universityLink = document.createElement('a');
	universityLink.style.textDecoration = 'none';
	universityLink.textContent = 'Site';
	universityLink.href = web_page;
	universityLink.target = 'blank_';
	universityLink.insertAdjacentHTML('afterbegin', ' &#8658; ');
	universityLink.insertAdjacentHTML('beforeend', ' &#8660; ');

	const spanUniversityDomen = document.createElement('span');
	spanUniversityDomen.textContent = domain;
	spanUniversityDomen.insertAdjacentHTML('afterbegin', ' Internet search by name &#8658; ');

	itemOl.appendChild(universityName);
	itemOl.appendChild(universityLink);
	itemOl.appendChild(spanUniversityDomen);

	universityList.appendChild(itemOl);

	// ЭТО НЕ УДОБНО .... Теперь я знаю лучше способ , спасибо! )
});
 */

data.forEach(({ name, web_page, domain }) => {
	const itemOl = `
		<li><span class="university__name">${name}</span> &#8658; <a href="${web_page}">Site</a> &#8660; Internet search by name &#8658; <span class="domen__name">${domain}</span></li>
	`;
	universityList.insertAdjacentHTML('beforeend', itemOl);
	// universityList.appendChild(itemOl); Не могу понять а почему так не срабатывает??
});