import { useEffect } from "react"
import WOW from 'wowjs';

const AnimateTest = () => {
    useEffect(() => {
        const wow = new WOW.WOW();
    // const wow = WOW();
    wow.init();
    },[])
  return (
    // <div>AnimateTest</div>
    <div className="wow bounceIn">
 <h1>Stuff to move</h1>
</div>
  )
}

export default AnimateTest