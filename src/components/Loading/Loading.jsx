import styles from './Loading.module.css'
import LoadingIcon from '../../assets/images/loading.jpg';

const Loading = () => {
  return (
    <main className={styles.container}>
      <img src={LoadingIcon} alt='beautifulhouseplants' />
    </main>
  )
}

export default Loading