import { useForm } from "../hooks/useForm"

export const CustomHookForm = () => {

const { formState, onInputChange } = useForm( 
  {
    username: '',
    email: '',
    password: '',
  } );

const {username,email,password} = formState;

  return (
    <>
        <h1>Form with Custom Hook</h1>

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

        <input 
        type="password" 
        className="form-control mt-2" 
        placeholder="Password" 
        name="password" 
        value={password} 
        onChange={ onInputChange }
        />
    </>
  )
}
