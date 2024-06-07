import { Button, Icon } from "./styles";

type Props = 
{
    icon:string
}

export default function SocialButton({icon}:Props)
{
 return(<Button><Icon src={icon} /></Button>) 
 
}