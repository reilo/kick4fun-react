import React, { PropTypes } from 'react';
import Round from './Round';

export const ScheduleMode = Object.freeze({
  "all": "all", "current": "current", "first": "first", "last": "last"
});

export const ChangeMode = Object.freeze({
  "readOnly": "readOnly", "modify": "modify"
});

export const DisplayMode = Object.freeze({
  "default": "default", "showDetails": "showDetails"
});

const Schedule = ({ tournament, mode, count, change, display }) => {
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
          change={change}
          display={display} />
      )}
    </div>
  );
};

Schedule.propTypes = {
  tournament: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  count: PropTypes.number,
  change: PropTypes.string,
  display: PropTypes.string
};

export default Schedule;