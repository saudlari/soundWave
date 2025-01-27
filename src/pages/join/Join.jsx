import styles from './Join.css'
import './header'
import './footer'

function Join () {
  
    return (
<main className={styles.joinContainer}>
<section>
    <h1>
        Join the <span className={styles.spanJoin}>fun.</span>
    </h1>
    </section>
    
  <div className={styles.formLogin}>
    <label for="username"><b>Name:</b></label>
    <input type="text" name="uname" required></input>

    <label for="email"><b>Email:</b></label>
    <input type="email" name="email" required></input>

    <label for="psw"><b>Password:</b></label>
    <input type="password" name="psw" required></input>

    <button type="submit"><b>Join Now</b></button>
    
  </div>




</main>
    )
};

export default Join;