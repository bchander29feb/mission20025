import { useRef } from "react";
import styles from './style.module.css'

const Useref = () => {

  const username = useRef();
  const userpassword = useRef();

    const handlesubmit = (e) => {
        e.preventDefault();
        // let userValue = username.current.value
        // let userPassword = username.current.value
        // username.current.style.backgroundColor = 'red'
        // username.current.style.color = '#000'
    }

    return (
    
        <>

        <form onSubmit={handlesubmit}>
            <input type="text" name="name" id="username" ref={username} />
                <input type="password" name="password" id="password" ref={userpassword} />
                <button type="submit" className={styles.custombtn} >Button</button>
        </form>

        </>
    )

}

export default Useref;