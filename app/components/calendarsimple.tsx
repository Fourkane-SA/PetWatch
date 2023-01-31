import { DateSelectionCalendar, DefaultTheme } from 'react-native-easy-calendar'
import frenchLocale from 'dayjs/locale/fr';
import React from 'react';

export default function Calendar(props) {

 const [selectedDate, setSelectedDate] = React.useState<string>('2020-02-01');
  //const [selectedDate, setSelectedDate] = React.useState<string>('');

  props.func(selectedDate);

  return (
    <DateSelectionCalendar
      initVisibleDate={'2023-01-01'} // defaults to selectedDate
      allowYearView={true}
      showExtraDates={true}
      testID={'my-calendar-component'}
      locale={frenchLocale} // defaults to en-CA
      theme={DefaultTheme}
      onSelectDate={setSelectedDate}
      selectedDate={selectedDate}
    />
  );
};