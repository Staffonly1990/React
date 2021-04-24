import classes from './messag_list.module.css'
import { Friends } from './friends/friends'
import { Messages } from './messages/messages'
import { Route } from 'react-router'


let FriendsName = [
	{ name: 'Vic', age: 18 },
	{ name: 'Pet', age: 40 },
	{ name: 'Serg', age: 25 }
]

const Messag_list = (props) => {
	return (
		<div className={classes.messag_list}>

			<Friends friends={FriendsName} />
			
			<Route path='/messages/Vic' component={Messages} />
		</div>
	)
}

export { Messag_list, }