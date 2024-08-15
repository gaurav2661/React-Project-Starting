

export default function TabButton(props) {
    function handleClick() {
        console.log("Clicked")
    }
    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    )
}