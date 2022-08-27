import { useEffect, useState } from "react";

// export const Message = () => {
//     useEffect(() => {
//       console.log('Message component mounted!');
    
//       return () => {
//         console.log('Message component unmounted!');
//       }
//     }, [])
    
//   return (
//     <>
//         <h3 className="text-bg-info">Disculpe, Usuario ya existe!!!</h3>
//     </>
//   )
// }

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0})

    useEffect(() => {
      
        // const onMouseMove = ({event}) => {
        //     console.log('event');
        // }

        const onMouseMove = ({x,y}) => {
            setCoords({x,y})
        }        

        window.addEventListener("mousemove",onMouseMove)
    
      return () => {
        window.removeEventListener("mousemove",onMouseMove)
      }
    }, [])
    
  return (
    <>
        {/* <h3 className="text-bg-info">Disculpe, Usuario ya existe!!!</h3> */}

        <h6 className="text-bg-info">
            {JSON.stringify(coords)}
        </h6>
    </>
  )
}