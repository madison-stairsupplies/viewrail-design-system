import { BsX, BsCheck, BsBugFill } from "react-icons/bs";
import { AiOutlineHome, AiOutlineSearch, AiOutlineMail } from "react-icons/ai";
import { FiDownload, FiLogOut, FiLogIn } from "react-icons/fi";
import { FaTasks } from "react-icons/fa";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowUp,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

// Icon paths
export const icons = {
  xmark: <BsX />,
  checkmark: <BsCheck />,
  home: <AiOutlineHome />,
  search: <AiOutlineSearch />,
  download: <FiDownload />,
  tasklist: <FaTasks />,
  bug: <BsBugFill />,
  arrowdown: <MdKeyboardArrowDown />,
  arrowleft: <MdKeyboardArrowLeft />,
  arrowright: <MdKeyboardArrowRight />,
  arrowup: <MdKeyboardArrowUp />,
  email: <AiOutlineMail />,
  delete: <RiDeleteBin6Line />,
  logout: <FiLogOut />,
  login: <FiLogIn />,
};
