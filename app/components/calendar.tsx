import { MultiDateSelectionCalendar, DefaultTheme } from 'react-native-easy-calendar'
import frenchLocale from 'dayjs/locale/fr';
import React from 'react';

export default function Calendar(props) {
    const [selectedDates, setSelectedDates] = React.useState<string[]>(['']); // Also possible

    props.func(selectedDates);

    const setMaxNumberOfSelectedDates = React.useCallback((_selectedDates: string[]) => {
        const MAX_DATES = 3
        if (_selectedDates.length <= MAX_DATES) {
            setSelectedDates(_selectedDates)
        }
    }, [])

    return (
        <MultiDateSelectionCalendar
            initVisibleDate={'2023-01-01'}
            allowYearView={true}
            showExtraDates={true}
            testID={'my-calendar-component'}
            locale={frenchLocale}
            theme={DefaultTheme}
            onSelectDates={setMaxNumberOfSelectedDates}
            selectedDates={selectedDates}
        />
    );

}