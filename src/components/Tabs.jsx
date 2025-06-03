export default function Tabs({children, buttons, ButtonsComponent="menu"}) {
    return (
        <>
            <ButtonsComponent>
                {buttons}
            </ButtonsComponent>
            {children}
        </>
    );
}