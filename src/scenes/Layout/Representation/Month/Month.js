import React from 'react';
import PropTypes from 'prop-types';
import './month.css';
import { Grid, Header } from 'semantic-ui-react';
import dateService from '../../../../services/dates/dateService';
// import MonthHeader from './MonthHeader/MonthHeader.js';
// import ViewHeader from '../ViewHeader/ViewHeader'
import DayRows from './DayRows/DayRows.js';


const Month = ({ displayMonth, displayYear, incrementDisplayMonth, decrementDisplayMonth }) => (
  <div className="month-view-wrapper">


    {/* <MonthHeader displayMonth={displayMonth} incrementDisplayMonth={incrementDisplayMonth}
        decrementDisplayMonth={decrementDisplayMonth} displayYear={displayYear}
        dateService={dateService} /> */}

    <Grid columns={7} celled>

      <Grid.Row>
        {generateWeekdayColumns()}
      </Grid.Row>
      <DayRows displayMonth={displayMonth} displayYear={displayYear} dateService={dateService} />

    </Grid>

  </div>
);

// Generates the columns, named Mon, Tue etc.
function generateWeekdayColumns() {
  return dateService.dayStrRepArr.map((dayName, i) => {
    return (
      <Grid.Column key={i}>
        <Header size="medium" className="day-name">{dayName}</Header>
      </Grid.Column>
    );
  });
}

const propTypes = {
  displayYear: PropTypes.number.isRequired,
  displayMonth: PropTypes.number.isRequired,
  incrementDisplayMonth: PropTypes.func.isRequired,
  decrementDisplayMonth: PropTypes.func.isRequired,
};

const defaultProps = {

};

Month.propTypes = propTypes;

Month.defaultProps = defaultProps;

export default Month;
