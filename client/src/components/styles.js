
// top level of component styling object holds overall styling, nested objects hold styling for specific elements within
const Welcome = {

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "15vh 22vw 10vh 22vw",
    width: "50vw",
    padding: "10vh 3vw 5vh 3vw",
    backgroundColor: "#2D7DD2",

    H1: {
        fontSize: "4rem",
        padding: "1rem",
        color: "black",
        margin: ".5rem",
        fontWeight: "bold",
        backgroundColor: "white"
    }

    ,
    

    H2: {
        fontSize: "2rem",
        color: "black",
        padding: "1rem",
        textAlign: "center",
        margin: "1rem",
        backgroundColor: "white",
    }


}




const ChatMess = {
    display: "flex",
    flexDirection: "column",
}


//exporting object containing all styles
export const styles = {
    Welcome: Welcome,
    ChatMess: ChatMess,
}
