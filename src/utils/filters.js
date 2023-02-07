export function formatDate(value) {
	const date = new Date(value);
	const year = date.getFullYear();
	let month = date.getMonth() + 1;
	month = month > 9 ? month : `0${month}`;
	let day = date.getDate();
	day = day > 9 ? day : `0${day}`;
	let hours = date.getHours();
	hours = hours > 9 ? hours : `0${hours}`;
	const minutes = date.getMinutes();
	return `${year}-${month}-${day} ${hours}:${minutes}`;
}
