// eslint-disable-next-line react/prop-types
export default function Tabs({ children,buttons,ButtonsContainer }) {
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