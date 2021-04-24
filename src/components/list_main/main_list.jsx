import classes from './main_list.module.css';
import {Posts} from './posts/posts'

function Main_list() {
  return (
    <div className={classes.main_list} >
      <div className={classes.main_list__head} >
        <img src='http://doshkolnik39.ru/modules_cwrk/import/files_output/images/items/mb000004012_1.jpg' >
        </img>
      </div>
      <div className={classes.main_list__profil}>
        <img src='https://krot.info/uploads/posts/2019-11/1574551559_jeskizy-tatu-geometrija-30.jpg' >
        </img>
        <div className='main_list__date'>
          <div className='main_list__name'>
            Мерлин М.
            </div>
          <div className='main_list__list'>
            <ul>
              <li className={`${classes.list} ${classes.active}`} >Дата рождения: --.--.-- </li>
              <li className={classes.list} >Город: ----- </li>
              <li className={classes.list} >Мой сайт: ----- </li>
            </ul>
          </div>
        </div>
      </div>
      <Posts/>
    </div>
  )
}

export { Main_list, }