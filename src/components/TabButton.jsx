

// eslint-disable-next-line react/prop-types
export default function TabButton({children,onSelect}) {
    console.log("Inside TabButton")
    return (
        <li>
            <button onClick={onSelect}>{children}
            </button>
        </li>
    )
}