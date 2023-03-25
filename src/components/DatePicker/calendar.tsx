import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Box, Grid, GridItem, Button } from '@chakra-ui/react';
import { format } from 'date-fns';

interface Props {
  onClose: () => void;
}

const Calendar: React.FC<Props> = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const availableDays: number[] = [1, 3, 5]; // Monday, Wednesday, Friday
  const availableTimes: Record<number, string[]> = {
    1: ['09:00', '10:00', '11:00'],
    3: ['13:00', '14:00', '15:00'],
    5: ['17:00', '18:00', '19:00'],
  };

  const handleDateChange = async (date: Date | null) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const time = event.currentTarget.value;
    setSelectedTime(time);
  };

  const isDayAvailable = (date: Date) => {
    const dayOfWeek = date.getDay();
    return availableDays.includes(dayOfWeek);
  };

  const isTimeAvailable = (time: string) => {
    if (!selectedDate) return false;
    const dayOfWeek = selectedDate.getDay();
    return availableTimes[dayOfWeek].includes(time);
  };

  const isDateTimeAvailable = (date: Date, time: string) => {
    return isDayAvailable(date) && isTimeAvailable(time);
  };

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime) return;
    const formattedDate = format(selectedDate, 'dd/MM/yyyy');
    const message = `Agendamento confirmado para ${formattedDate} às ${selectedTime}`;
    console.log(message);
    onClose();
  };

  return (
    <Box p={4}>
      <DateTimePicker
        onChange={handleDateChange}
        value={selectedDate}
        format="dd/MM/yyyy"
        disableClock={true}
      />
      <Box mt={4}>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {availableTimes[selectedDate?.getDay() || 0].map((time) => (
            <GridItem key={time}>
              <Button
                onClick={handleTimeChange}
                value={time}
                isDisabled={!isTimeAvailable(time)}
                size="md"
                w="100%"
                colorScheme={time === selectedTime ? 'blue' : 'gray'}
              >
                {time}
              </Button>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box mt={4}>
        <Button onClick={handleSubmit} isDisabled={!selectedDate || !selectedTime}>
          Confirmar agendamento
        </Button>
      </Box>
    </Box>
  );
};

export default Calendar;

