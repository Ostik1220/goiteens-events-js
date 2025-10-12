import { EventContainer } from "./Events.styled";
import { FaHourglassStart } from "react-icons/fa"
import { FaHourglassEnd } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { MdMergeType } from "react-icons/md";

export const Events = ({ name, start, end, location, speaker, type }) => {
  return (
    <EventContainer><h3>{name}</h3>
    <div>    <FaHourglassStart/><p>Start: {start}</p> </div>
    <div>    <FaHourglassEnd/><p>End: {end}</p> </div>
    <div>    <IoLocationOutline/><p>Location: {location}</p> </div>
    <div>    <IoPersonCircle/><p>Speaker: {speaker}</p> </div>
    <div>  <MdMergeType/><p>Type: {type}</p> </div>
    </EventContainer>
  );
};