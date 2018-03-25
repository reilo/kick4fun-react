import React, { PropTypes } from 'react';
import Round from './Round';

export const ScheduleMode = Object.freeze({
  "all": "all", "current": "current", "first": "first", "last": "last"
});

const Schedule = ({ tournament, mode, count, editMode, showDetails }) => {
  const today = (new Date()).toISOString().split('T')[0];
  return (
    <div>
      {tournament.rounds && tournament.rounds.map((round, index) =>
        (
          mode == ScheduleMode.all ||
          mode == ScheduleMode.first && index < count ||
          mode == ScheduleMode.last && index > tournament.rounds.length - count - 1 ||
          (
            mode == ScheduleMode.current && (
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
          showDetails={showDetails} />
      )}
    </div>
  );
};

Schedule.propTypes = {
  tournament: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  count: PropTypes.number,
  editMode: PropTypes.bool,
  showDetails: PropTypes.bool
};

export default Schedule;