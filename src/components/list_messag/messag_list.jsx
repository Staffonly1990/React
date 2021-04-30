import classes from './messag_list.module.css'
import { Friends } from './friends/friends'
import { Messages } from './messages/messages'
import { Route } from 'react-router'




const Messag_list = (props) => {
	return (
		<div className={classes.messag_list}>

			<Friends dispatch={props.dispatch} />

			<Route path='/messages/:name' render={(prop) => <Messages dispatch={props.dispatch} func={props.func} name={prop.match.params.name}/>} />
		</div>
	)
}



export { Messag_list, }