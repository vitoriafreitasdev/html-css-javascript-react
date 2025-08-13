import { FaSpinner } from "react-icons/fa"
import classes from "./Loader.module.css"
const Louder = () => {
  return (
    <>
        <FaSpinner className={classes.loader}/>
    </>
  )
}

export default Louder