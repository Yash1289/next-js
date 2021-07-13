import Header from "./header.component"

const Layout = (props) => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout