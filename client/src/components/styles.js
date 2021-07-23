
// top level of component styling object holds overall styling, nested objects hold styling for specific elements within
const Welcome = {

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "18vh 22vw 10vh 22vw",
    width: "50vw",
    backgroundColor: "#FFCB47",
    padding: "10vh 3vw 5vh 3vw",
    borderRadius: "20em"
    ,

    H1: {
        fontSize: "4rem",
        backgroundColor: "#56949F",
        padding: "5rem",
        borderRadius: "10rem",
        color: "white",
        textShadow: "2px 2px #4A5043"
    }

    ,

    H2: {
        fontSize: "2rem",
        color: "white",
        textShadow: "1px 1px #4A5043",
        backgroundColor: "#6FAE81",
        padding: "1rem",
        borderRadius: "10rem",
        textAlign: "center",
    }


}


const ChatHead = {

}

const ChatMess = {
    display: "inline-flex",
    flexDirection: "column"
}


//exporting object containing all styles
export const styles = {
    Welcome: Welcome,
    ChatMess: ChatMess,
}
