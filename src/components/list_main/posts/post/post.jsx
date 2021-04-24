import classes from './post.module.css';

function Post(props) {
	return (

		<div className={classes.myPosts__post}>
			{props.masseg}
			<p>лайков = {props.like}</p>
		</div>)
}

export {Post,};