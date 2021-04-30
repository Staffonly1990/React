import { NavLink } from 'react-router-dom'
import classes from './friends.module.css'


const Friends = (props) => {
	return (

		<div className={classes.friends} >
			<ul>
				{
					props.dispatch('setAllObj', '').friends_list.map(
						friend => (
							<li key={friend.id} >
								<NavLink activeClassName={classes.active} to={`/messages/${friend.name}`}>
									{friend.name} ({friend.age})
								</NavLink>
							</li>
						))
				}
			</ul>
		</div>




	)
}

export { Friends, }