import Search from '../Search/Search'
import styles from './BasePage.module.scss'

import bg from './assets/bg.png'

const BasePage = () => {
  return (
    <div className={styles.basePage} style={{ backgroundImage: `url(${bg})` }}>
      <Search />
    </div>
  )
}
export default BasePage
