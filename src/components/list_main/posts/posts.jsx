import classes from './posts.module.css'
import { Post } from './post/post'
import React from 'react'

let Text_INPUT = React.createRef()



function Posts(props) {
	let AddPost = ()=>{
		props.dispatch('AddPost','')
	}
	
	const new_text=()=>{
		let text = Text_INPUT.current.value
		props.dispatch('NewTextPost',text)
	}


	return (
		<div className='myPosts'>
			<div className='myPosts__head'>
				Мои посты
          </div>
			<div className='myPosts__form'>
				<textarea onChange={new_text} name="post" ref={Text_INPUT} value={props.dispatch('setAllObj','').defoul_text} />
				<button onClick={AddPost}>Отправить</button>
			</div>
			<Post posts={props.dispatch('setAllObj','').post_list} />
		</div>)
}

export { Posts, }