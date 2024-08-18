

// eslint-disable-next-line react/prop-types
export default function TabButton({children,isSelected,...remaining}) {
    console.log("Inside TabButton")
    return (
        <li>
            <button  className={isSelected ? "active" : undefined} {...remaining}>{children}
            </button>
        </li>
    )
}