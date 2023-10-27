import { useState } from 'react'
import styles from './Search.module.scss'

import wallets from '../../assets/wallets.json'
import Confetti from 'react-confetti'

const Search = () => {
  const [wallet, setWallet] = useState('')
  const [contain, setContain] = useState(undefined)

  const handleClick = () => {
    const contain = wallets.find((w) => w === wallet)
    setContain(contain ? true : false)
  }

  const onChange = (e) => {
    setWallet(e.target.value)
    setContain(undefined)
  }
  return (
    <div className={styles.search}>
      <div className={styles.title}>Check your wallet </div>
      <div className={styles.inputWrapper}>
        <input type='text' placeholder='Enter your wallet' value={wallet} onChange={onChange} />
      </div>
      <button onClick={handleClick}>Check</button>
      <div className={styles.confetti}>
        <Confetti recycle={false} run={contain === true} numberOfPieces={1000} />
      </div>
      {contain === false && <div className={styles.not}>You are not eligible for claim</div>}
      {contain === true && (
        <div className={styles.good}>
          <div className={styles.lucky}>You are lucky!</div>
          <div>
            Go to <a href='https://app.streamflow.finance/'>StreamFlow.finance</a> site to claim your rewards
          </div>
        </div>
      )}
      <div className={styles.footer}>
        Made by <a href='https://twitter.com/gerikov_sol'>gerikov</a>, help me with a retweet.
      </div>
    </div>
  )
}
export default Search
