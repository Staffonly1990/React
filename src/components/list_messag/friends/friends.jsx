import { NavLink } from 'react-router-dom'
import classes from './friends.module.css'


const Friends = (props) => {
	return (

		<div className={classes.friends} >
			<ul>
				{
					props.friends.map(
						friend => (
							<li><NavLink activeClassName={classes.active} to={`/messages/${friend.name}`}>{friend.name}</NavLink></li>
						))
				}
			</ul>
		</div>




	)
}

export { Friends, }