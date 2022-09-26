import styled from 'styled-components'

type Props = {
    colorBorder:string;
}

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height:100vh;
    background-color: transparent;
    background-color: #4747bb;


    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:30px;
        width: 70%;
        min-height:450px ;
        background-color:#282090;
        border-radius: 20px;
    
        .block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: 80%;
        height:100px;

            &:hover{
                background-color: #1753a9;
                border-radius: 20px;
                border:solid white 1px;                        
            }

            label{
                font-size: 1.5em;
                letter-spacing: 5px;
            }
            input{
                width:70%;
                height:30px;
                outline: none;
                text-align: center;
                border: transparent 3px solid;
            }

            
            
        }

        .block:nth-child(2) input{
            border: ${(Props) => Props.colorBorder} 3px solid;
        }
        .block:nth-child(3) input{
            border: ${(Props) => Props.colorBorder} 3px solid;
        }
        

        button{
            width:80px;
            background-color: tomato;
            border-bottom: solid 4px black;
            border-right:solid 4px black;
            border-top: solid 4px #3c3a3a;
            border-left:solid 4px #3c3a3a;
        }
        button:hover{
            border-bottom: solid 4px #3c3a3a;
            border-right:solid 4px #3c3a3a;
            border-top: solid 4px black;
            border-left:solid 4px black;
        }
    }



`;






