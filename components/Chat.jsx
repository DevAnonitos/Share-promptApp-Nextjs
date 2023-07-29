import Widget from 'rasa-webchat';

const Chat = () => {
    return (
        <Widget
            initPayload={"/greet"}
            socketUrl={"http://localhost:5005"}
            socketPath={"/socket.io/"}
            customData={{"language": "en"}}
            title={"BotChat"}
            inputTextFieldHint={"Enter to chat with bot..."}
        />
    );
};

export default Chat;
