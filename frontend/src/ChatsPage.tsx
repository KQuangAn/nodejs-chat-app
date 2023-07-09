import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = () => {
  const chatProps = useMultiChatLogic(
    "5a54aadf-1fe2-4810-b8eb-1237c7223991",
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100vh" }} />
    </div>
  );
};
export default ChatsPage;
