let render_Dom

let all_db = {
	post_list: [
		{ text: 'Text 1', like: 6 },
		{ text: 'Text 2', like: 0 },
		{ text: 'Text 3', like: 8 },
		{ text: 'Text 4', like: 4 }],

	defoul_text: 'Your post',

	friends_list: [
		{ id: 1, name: 'Vic', age: 18 },
		{ id: 2, name: 'Pet', age: 40 },
		{ id: 3, name: 'Serg', age: 25 }
	],
	bd_mes: [
		{ id: 'f', 'name': 'Vic', 'text': 'Мое второй ответ Vic', push: 1, time: 1.5 },
		{ id: 'a', 'name': 'Vic', 'text': 'Первое сообщение от Vic', push: 0, time: 0 },
		{ id: 'h', 'name': 'Vic', 'text': 'Мое четвертый ответ Vic', push: 1, time: 9 },
		{ id: 'd', 'name': 'Vic', 'text': 'четветрое сообщение от Vic', push: 0, time: 7 },
		{ id: 'e', 'name': 'Vic', 'text': 'Мое первый  ответ Vic', push: 1, time: 1 },
		{ id: 'b', 'name': 'Vic', 'text': 'второе сообщение от Vic', push: 0, time: 2 },
		{ id: 'g', 'name': 'Vic', 'text': 'Мое третий ответ Vic', push: 1, time: 6 },
		{ id: 'c', 'name': 'Vic', 'text': 'третье сообщение от Vic', push: 0, time: 5 },
		{ id: 'i', 'name': 'Pet', 'text': 'Какой-то текст от Pet', push: 0 },
		{ id: 'j', 'name': 'Serg', 'text': 'Первое сообщение от Serg', push: 0, time: 1.5 },
		{ id: 'k', 'name': 'Serg', 'text': 'Второе от Serg', push: 0, time: 5 },
		{ id: 'l', 'name': 'Serg', 'text': 'Мое ответ Serg', push: 1, time: 2 }
	]
}


let all_function = {
	AddMess_exp: (name) => {
		all_db.bd_mes.push({id:'0',name:name,text:all_db.defoul_text,push:1,time:10})
		render_Dom()
	},
	AddPost: () => {
		all_db.post_list.push({ text: all_db.defoul_text, like: 0 })
		all_db.defoul_text = ''
		render_Dom()
	},
	NewTextPost: (text) => {
		all_db.defoul_text = text
		render_Dom()
	},
	getAllObj: () => {
		return all_db
	}
	,
	Render: (observer) => {
		render_Dom = observer
	},
	NamefriendPost: (name) => {
		return all_db.bd_mes.filter(post => post.name == name)
	},
	SortMess: (db_mess) => {
		let help_db
		let trig = 1
		while (trig == 1) {
			let tic = -1
			trig = 0
			for (let i of db_mess) {
				tic += 1
				if (tic == 0) {
					db_mess[0] = i
				}
				else {
					if (i.time < db_mess[tic - 1].time) {
						help_db = db_mess[tic - 1]
						db_mess[tic - 1] = i
						db_mess[tic] = help_db
						trig = 1
					}
					else {
						db_mess[tic] = i
					}
				}
			}
		}
		return db_mess
	}
}



let dispatch = (action, anyObj) => {
	switch (action) {
		case 'AddPost': all_function.AddPost()

		case 'NewTextPost': all_function.NewTextPost(anyObj)
			break;

		case 'setAllObj': return all_function.getAllObj()

		case 'SortMess': return all_function.SortMess(anyObj)

		case 'NamefriendPost': return all_function.NamefriendPost(anyObj)
		case 'Render': all_function.Render(anyObj)
			break;
		case 'AddMess_exp': all_function.AddMess_exp(anyObj)
			break;

		default: console.log('err')
			break;
	}
}


export { dispatch }


