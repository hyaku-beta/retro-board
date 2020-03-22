import React from 'react';
import { PostGroup } from 'retro-board-common';
import styled from 'styled-components';
import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';

interface GroupProps {
  group: PostGroup;
}

const Group: React.FC<GroupProps> = ({ group, children }) => {
  return (
    <Droppable droppableId={'group#' + group.id}>
      {(
        dropProvided: DroppableProvided,
        dropSnapshot: DroppableStateSnapshot
      ) => (
        <GroupContainer
          ref={dropProvided.innerRef}
          {...dropProvided.droppableProps}
          draggingOver={dropSnapshot.isDraggingOver}
        >
          {group.label}
          <div>{children}</div>
        </GroupContainer>
      )}
    </Droppable>
  );
};

const GroupContainer = styled.div<{ draggingOver: boolean }>`
  padding: 20px;
  border: 2px dashed lightgray;
  border-radius: 10px;
  margin: 20px 0;
  background-color: ${props => (props.draggingOver ? 'red' : 'unset')};
`;

export default Group;