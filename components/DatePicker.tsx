import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { days } from '../data/dummyTasks';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(18);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {days.map((item, index) => {
        const isSelected = selectedDate === item.date;

        return (
          <TouchableOpacity
            key={index}
            style={styles.dateItemWrapper}
            onPress={() => setSelectedDate(item.date)}
            activeOpacity={0.8}
          >
            {/* Day background */}
            <View
              style={[
                styles.dayContainer,
                isSelected ? styles.selectedDayContainer : styles.defaultDayContainer,
              ]}
            >
              <Text
                style={[
                  styles.dayText,
                  isSelected ? styles.selectedDayText : styles.defaultDayText,
                ]}
              >
                {item.day}
              </Text>
            </View>
            {/* Date background */}
            <View
              style={[
                styles.dateContainer,
                isSelected ? styles.selectedDateContainer : styles.defaultDateContainer,
              ]}
            >
              <Text
                style={[
                  styles.dateText,
                  isSelected ? styles.selectedDateText : styles.defaultDateText,
                ]}
              >
                {item.date}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  dateItemWrapper: {
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    borderRadius: 20,
    overflow: 'hidden',
  },
  // Day backgrounds
  dayContainer: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 6,
    alignItems: 'center',
  },
  defaultDayContainer: {
    backgroundColor: '#e3e1e1', // light blue for day (default)
  },
  selectedDayContainer: {
    backgroundColor: '#3D3BBF', // strong blue for day (selected)
  },
  // Date backgrounds
  dateContainer: {
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 8,
    alignItems: 'center',
  },
  defaultDateContainer: {
    backgroundColor: '#c9c9c9', // light gray for date (default)
  },
  selectedDateContainer: {
    backgroundColor: '#232285', // dark blue for date (selected)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  // Text styles
  dayText: {
    fontSize: 13,
    fontWeight: '500',
  },
  defaultDayText: {
    color: 'black',
  },
  selectedDayText: {
    color: '#fff',
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 2,
  },
  defaultDateText: {
    color: '#333',
  },
  selectedDateText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default DatePicker;
