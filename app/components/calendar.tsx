// import { MultiDateSelectionCalendar, DefaultTheme } from 'react-native-easy-calendar'
// import frenchLocale from 'dayjs/locale/fr';
// import React from 'react';

// export default function Calendar() {


//     const [selectedDates, setSelectedDates] = React.useState<string[]>(['2020-01-01']); // Also possible


//     const setMaxNumberOfSelectedDates = React.useCallback((_selectedDates: string[]) => {
//         const MAX_DATES = 3
//         if (_selectedDates.length <= MAX_DATES) {
//             setSelectedDates(_selectedDates)
//         }
//     }, [])

//     return (
//         <MultiDateSelectionCalendar
//             disabledDates={['2020-01-01', '2020-03-04']}
//             initVisibleDate={'2020-02-10'}
//             minDate={'2020-01-10'}
//             maxDate={'2020-04-10'}
//             allowYearView={true}
//             showExtraDates={false}
//             testID={'my-calendar-component'}
//             locale={frenchLocale}
//             theme={DefaultTheme}
//             onSelectDates={setMaxNumberOfSelectedDates}
//             selectedDates={selectedDates}
//         />
//     );

// }