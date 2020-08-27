const Data = (e) => {

	const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
	const days = ["Sábado","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];


	let day = days[e.getDay()];
	let date = e.getDate();
	let month = months[e.getMonth()];
	let year = e.getFullYear()
	return `${day} ${date}/${month}/${year}`
}

export default Data;