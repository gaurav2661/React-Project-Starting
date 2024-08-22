// eslint-disable-next-line react/prop-types
export default function Tabs({ children,buttons,ButtonsContainer = "menu" }) {
    // const ButtonsContainer = buttonsContainer;
    return(
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}