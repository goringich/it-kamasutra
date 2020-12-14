import Message from "../../messages/Message"
import s from "../../Dialogs.module.css"

const SMS = (props) => {
    let MessageElements = props.sms.map( m => <Message id={m.id} message={m.message} name={m.name} photo={m.photo} />)
    
    return(
        <div className={s.messages}>
            {MessageElements}
        </div>
    )
}

export default SMS
