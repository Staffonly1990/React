import classes from './messages.module.css'
import React from 'react'

let Text_INPUT = React.createRef()

function mess_pos(mess) {
	if (mess.push == 1) {
		return (<p className={classes.text} key={mess.id}> {mess.text} </p>)
	}
	else {
		return (<p key={mess.id}> {mess.text} </p>)
	}
}





const Messages = (props) => {

	const new_text=()=>{
		let text = Text_INPUT.current.value
		props.dispatch('NewTextPost',text)
	}

	let AddMess_exp = ()=>{
		props.dispatch('AddMess_exp',props.name)
	}

	return (
		<div className={classes.messages}>
			{
				props.dispatch('SortMess', props.dispatch('NamefriendPost', props.name)).map(mess => mess_pos(mess))
			}
			<div>
				<div>
					<textarea onChange={new_text} ref={Text_INPUT} value={props.dispatch('setAllObj','').defoul_text}/>
				</div>
				<div>
					<button onClick={AddMess_exp}>Отправить сообщение</button>
				</div>
			</div>
		</div >
	)
}

export { Messages, }