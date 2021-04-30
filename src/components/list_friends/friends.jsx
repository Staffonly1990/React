import classes from './friends.module.css'

function Friends(props) {
	return (
		<div>
			{
				props.dispatch('setAllObj','').friends_list.map(name=><p>{name.name}</p>)
			}
		</div>
	)
}

export { Friends, }