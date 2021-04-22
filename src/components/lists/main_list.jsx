function Main_list() {
	return (
		<div className='Content' >
        <div className='Content__head' >
          <img src='http://doshkolnik39.ru/modules_cwrk/import/files_output/images/items/mb000004012_1.jpg' >
          </img>
        </div>
        <div className='Content__profil'>
          <img src='https://krot.info/uploads/posts/2019-11/1574551559_jeskizy-tatu-geometrija-30.jpg' >
          </img>
          <div className='Content__date'>
            <div className='Content__date__name'>
              Мерлин М.
            </div>
            <div className='Content__date__all'>
              <ul>
                <li>Дата рождения: --.--.-- </li>
                <li>Город: ----- </li>
                <li>Мой сайт: ----- </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='MyPosts'>
          <div className='MyPosts__head'>
            Мои посты
          </div>
          <form className='MyPosts__form'>
            <input type="text" name="post"></input>
            <button>Отправить</button>
          </form>
          <div className='MyPosts__post'>
            Какой-то большой текст поста
          </div>
        </div>
      </div>
	)
}

export {Main_list,}