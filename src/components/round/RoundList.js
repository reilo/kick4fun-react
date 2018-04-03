import React, { PropTypes } from 'react';
import Round from './Round';

export const ListMode = Object.freeze({
  "all": "all", "current": "current", "first": "first", "last": "last"
});

const RoundList = ({ tournament, mode, count, editMode, showDetails, highlighting }) => {
  const today = (new Date()).toISOString().split('T')[0];
  return (
    <div>
      {tournament.rounds && tournament.rounds.map((round, index) =>
        (
          mode == ListMode.all ||
          mode == ListMode.first && index < count ||
          mode == ListMode.last && index > tournament.rounds.length - count - 1 ||
          (
            mode == ListMode.current && (
              index > tournament.rounds.length - count - 1 ||
              round.endDate &&
              (
                index < tournament.rounds.length - 1 &&
                tournament.rounds[index + 1].endDate >= today ||
                round.endDate >= today
              )
            ) &&
            count-- > 0
          )
        ) &&
        <Round
          key={index}
          tournament={tournament}
          roundId={index}
          editMode={editMode}
          showDetails={showDetails}
          highlighting={highlighting} />
      )}
    </div>
  );
};

RoundList.propTypes = {
  tournament: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  count: PropTypes.number,
  editMode: PropTypes.bool,
  showDetails: PropTypes.bool,
  highlighting: PropTypes.array
};

export default RoundList;