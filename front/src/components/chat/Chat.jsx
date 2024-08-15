import PropTypes from "prop-types";
import { CgUserlane } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";

const jsonData =
  "You Are My Enemy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, soluta consequuntur! ";

const Chat = ({ client = false, message = jsonData }) => {
  return (
    <div
      className={`flex ${
        client
          ? "bg-gray-600 flex-row-reverse rounded-tr-2xl  rounded-l-2xl"
          : "bg-gray-900 rounded-tl-2xl rounded-r-2xl"
      } text-white items-center p-2 m-5 max-w-full gap-5`}
    >
      <span className="p-4 mt-auto rounded-full bg-gray-800 ">
        {client ? (
          <FaRegUser className="w-3 h-3" />
        ) : (
          <CgUserlane className="w-3 h-3" />
        )}
      </span>
      <p className="p-2">{client ? message.slice(0, 50) : message}</p>
    </div>
  );
};

Chat.propTypes = {
  client: PropTypes.bool,
  message: PropTypes.string,
};
export default Chat;
