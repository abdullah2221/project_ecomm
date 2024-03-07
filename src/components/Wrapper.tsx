
import { ReactNode } from 'react';
interface Children{
    children:ReactNode;
}
const Wrapper = ({children}:Children) => {
  return (
    <>
    <div className="max-w-[90%] mx-auto">


        {
            children
        }
    </div>
    
    
    
    </>
  )
}

export default Wrapper