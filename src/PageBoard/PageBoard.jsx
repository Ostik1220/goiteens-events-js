import { BoardContainer } from "./PageBoard.styled";
import { Events } from "../Events/Events.jsx";

export const PageBoard = ({events}) => {
  return (
    <BoardContainer>
      {events.map((event) => (
        <Events
          key={event.id}
          name={event.name}
          start={event.time.start}
          end={event.time.end}
          location={event.location}
          speaker={event.speaker}
          type={event.type}
        />
      ))}
    </BoardContainer>
  );
};