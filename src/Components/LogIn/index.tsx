import { useEffect, useState } from "react";
import * as C from "./logInStyle";

interface IUser {
    name:string;
    email:string;
}


export const LogIn: React.FC = (  ) => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userEmailConfirm, setUserEmailConfirm] = useState("");
    const [validColor, setValidColor] = useState("transparent");
    const [valid, setValid] = useState(false);

    useEffect(() => {
        if(userEmail !== userEmailConfirm ){
            setValidColor("red")
            setValid(false);
        }
        else if((userEmail === userEmailConfirm) && 
        (userEmail !== "" && userEmailConfirm !== "") && 
        (userName.length >= 4) ){
            setValid(true);
        }
        else if((userEmail === userEmailConfirm) && 
        (userEmail !== "" && userEmailConfirm !== "")){
            setValidColor("green")
            setValid(true);
        }
        else if(userEmail === "" && userEmailConfirm === "" ) {
            setValidColor("transparent");
            setValid(false);
        }else{
            setValidColor("transparent");
            setValid(false);
        }        

        console.log(userName.length)

    },[userEmail, userEmailConfirm,userName])

    const user:IUser = {
        name:userName,
        email:userEmail,
    }

    const handleUserData = () => {
        if(valid === true){
            alert("Email valido")
        }else{
            alert("Email invalido") 
        }
        // console.log(user);

}

    return(
        <C.Container colorBorder={validColor}>
            <div className="form">   
                <div className="block">
                    <label>Name</label>
                    <input type="text" 
                        value={userName}
                        onChange={ (e) => setUserName(e.target.value) } />
                </div>
                <div className="block">
                    <label>Email</label>
                    <input type="email" 
                    value={userEmail}
                    onChange={ (e) => setUserEmail(e.target.value) } />
                </div>
                <div className="block">
                    <label>Confirm o seu Email</label>
                    <input type="email" 
                    value={userEmailConfirm}
                    onChange={ (e) => setUserEmailConfirm(e.target.value) } />
                </div>
                
                <button onClick={ handleUserData }>Enviar</button>
            </div>
        </C.Container>
    )
};