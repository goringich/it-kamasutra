import DialogItem from "../DialogItem"

const Friends = (props) => {
    let DialogsElements = props.dialogs.map( d => <DialogItem id={d.id} name={d.name} photo={d.photo} />)

    return(
        <div>
            {DialogsElements}
        </div>
    )
}

export default Friends
