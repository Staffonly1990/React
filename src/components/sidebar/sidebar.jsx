import { NavLink } from 'react-router-dom';
import classes from './sidebar.module.css' ;

function Sidebar() {
	return (
		<div className={classes.sidebar}>
			<ul>
				<li><NavLink activeClassName={classes.active} to='/main' >Main</NavLink></li>
				<li><NavLink activeClassName={classes.active} to='/messages' >Messages</NavLink></li>
				<li><NavLink activeClassName={classes.active} to='/news' >News</NavLink></li>
				<li><NavLink activeClassName={classes.active} to='/music' >Music</NavLink></li>
				<li><NavLink activeClassName={classes.active} to='/settings' >Settings</NavLink></li>
				<li><NavLink activeClassName={classes.active} to='/friends' >Friends</NavLink></li>
			</ul>
		</div>
	)
}

export {Sidebar,}