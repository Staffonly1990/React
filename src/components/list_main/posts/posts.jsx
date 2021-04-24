import classes from './posts.module.css'
import {Post} from './post/post'

function Posts() {
	return (
		<div className='myPosts'>
			<div className='myPosts__head'>
				Мои посты
          </div>
			<form className='myPosts__form'>
				<input type="text" name="post"></input>
				<button>Отправить</button>
			</form>
			<Post masseg='Text 1' like = '6' />
			<Post masseg='Text 2' like = '0'/>
		</div>)
}

export {Posts,}