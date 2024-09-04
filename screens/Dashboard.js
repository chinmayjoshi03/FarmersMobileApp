import * as React from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function Dashboard() {
  const screenWidth = Dimensions.get('window').width;

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`, // Green color for the line
        strokeWidth: 2, // Line thickness
      },
    ],
  };

  return (
    <ScrollView>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 10 }}>Sales Line Chart</Text>
        <LineChart
          data={salesData}
          width={screenWidth}
          height={220}
          chartConfig={{
            backgroundColor: 'transparent', // No background color
            backgroundGradientFrom: 'transparent', // No gradient from
            backgroundGradientTo: 'transparent', // No gradient to
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`, // Green color for the line
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black color for labels
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#228B22', // Green color for the dots
            },
            propsForBackgroundLines: {
              stroke: 'transparent', // Remove background grid lines
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </ScrollView>
  );
}
