import React from "react";
import SingleChat from "./SingleChat";

const data = [
  {
    image:
      "https://tse2.mm.bing.net/th/id/OIP.VWwq2xtthMXiOFa4IuqAwwHaHa?pid=Api&P=0&h=220",
    name: "Rohail",
    message: "Salam, How are you?",
    day: "today",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg?w=2000",
    name: "Adeel",
    message: "i am done",
    day: "yesterday",
  },
  {
    image:
      "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg",
    name: "Farhan",
    message: "whatsapp, any plan toady",
    day: "1 minute ago",
  },
  {
    image:
      "https://tse2.mm.bing.net/th/id/OIP.RKrPgszyZzEt38bVz8yeTQHaHa?pid=Api&P=0&h=220",
    name: "Faizan",
    message: "meet me at park",
    day: "today",
  },
];
const ChatGUI = () => {
  return (
    <>
      {data.map((items, index) => {
        return (
          <SingleChat
            {...items}
            // image={items.image}
            // name={items.name}
            // message={items.message}
            // day={items.day}
          />
        );
      })}
    </>
  );
};

export default ChatGUI;
