/* eslint-disable @typescript-eslint/no-unused-vars */
type UserProps = {
    data: {
        name: string,
        email: string
    }
    uptadeFieldHandler: (key: string, value: string) => void; // quando retorno é nulo, ou n tem retorno
}

const UserForm = ({data, uptadeFieldHandler}: UserProps) => {
  return (
    <div>
        <div className="form-control">
            <label htmlFor="name">Nome:</label>
            <input type="text" name='name' id='name' placeholder='Digite o seu nome' required value={data.name || ""} onChange={(e) => uptadeFieldHandler("name", e.target.value)}/>
        </div>
        <div className="form-control">
            <label htmlFor="email">E-mail:</label>
            <input type="text" name='email' id='email' placeholder='Digite o seu e-mail' required value={data.email || ""} onChange={(e) => uptadeFieldHandler("email", e.target.value)}/>
        </div>
    </div>
  )
}

export default UserForm