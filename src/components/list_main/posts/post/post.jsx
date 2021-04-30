import classes from './post.module.css';

function Post(props) {
	return (

		<div>
			{
				props.posts.map(post =>
					<div className={classes.myPosts__post}>
						{post.text}
						<p> лайков = {post.like} </p>
					</div>)
			}

		</div>
	)
}

export { Post, };