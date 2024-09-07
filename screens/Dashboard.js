import * as React from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import { LineChart ,  PieChart} from 'react-native-chart-kit';

export default function Dashboard() {
  const screenWidth = Dimensions.get('window').width;

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 25, 35, 50, 75, 99],
        color: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`, // Green color for the line
        strokeWidth: 2, // Line thickness
      },
    ],
  };
  const salesLastMonthData = [
    { name: 'Corn (20kg)', quantity: 20, color: 'rgba(255, 99, 132, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Wheat (30kg)', quantity: 30, color: 'rgba(54, 162, 235, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Carrot (20kg)', quantity: 20, color: 'rgba(255, 206, 86, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Milk (30L)', quantity: 30, color: 'rgba(75, 192, 192, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <ScrollView>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 10 }}>Sales Line Chart</Text>
        
        <LineChart
          data={salesData}
          width={screenWidth}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff', // Purple background color
            backgroundGradientFrom: '#ffffff', // Purple gradient from
            backgroundGradientTo: '#ffffff', // Purple gradient to
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
          <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 10, elevation: 3 }}>
            <Text>Total Sales</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>₹5,00,000</Text>
          </View>
          <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 10, elevation: 3 }}>
            <Text>New Customers</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>100</Text>
          </View>
        </View>
        <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 10 }}>Last Month's Sales Distribution</Text>
        <PieChart
          data={salesLastMonthData}
          width={screenWidth}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="quantity"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute // Shows exact quantity on the pie slices
        />
      </View>
    </ScrollView>
  );
}