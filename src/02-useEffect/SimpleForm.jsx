import { useEffect, useState } from "react"

export const SimpleForm = () => {

  const [simpleForm, setSimpleForm] = useState({
    username: "strite",
    email: "stride@gmail.com",
  })

  const {username,email} = simpleForm;

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setSimpleForm({
      ...simpleForm, 
      [ name ]: value
    })
  }

  //** This useEffect only is triggered one time, just when the component is mounted */
  useEffect((simpleForm) => {
    console.log('simpleForm changed');
  },[])

  //** This useEffect only is triggered when the username variable changed */
  useEffect(() => {
    console.log('username changed');
  }, [username])
 
  //** This useEffect only is triggered when the email variable changed */
  useEffect(() => {
    console.log('email changed');
  }, [email])
  

  return (
    <>
        <h1>Simple Form</h1>

        <br />

        <input 
        type="text" 
        className="form-control" 
        placeholder="Username" 
        name="username" 
        value={username}
        onChange={ onInputChange } 
        />

        <input 
        type="email" 
        className="form-control mt-2" 
        placeholder="email@domain.com" 
        name="email" 
        value={email} 
        onChange={ onInputChange }
        />
    </>
  )
}
