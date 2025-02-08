import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import Colors from '../../constants/Colors';

const GraphPage = () => {
  const barData = [
    { value: 100, label: 'MAR', frontColor: '#1dd2c1' },  
    { value: 220, frontColor: '#13c2f3' },  
    { value: 330, label: 'APR', frontColor: '#1dd2c1' },
    { value: 200, frontColor: '#13c2f3' },
    { value: 30, label: 'MAY', frontColor: '#1dd2c1' },
    { value: 280, frontColor: '#13c2f3' },
    { value: 180, label: 'JUN', frontColor: '#1dd2c1' },
    { value: 100, frontColor: '#13c2f3' },
    { value: 120, label: 'JUL', frontColor: '#1dd2c1' },
    { value: 380, frontColor: '#13c2f3' },
    { value: 220, label: 'AUG', frontColor: '#1dd2c1' },
    { value: 150, frontColor: '#13c2f3' },
  ];

  const renderTitle = () => (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Analysis</Text>
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendCircle, { backgroundColor: '#1dd2c1' }]} />
          <Text style={styles.legendText}>Income</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendCircle, { backgroundColor: '#13c2f3' }]} />
          <Text style={styles.legendText}>Expenses</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderTitle()}
      <BarChart
  data={barData}
  barWidth={10}
  spacing={30}
  roundedTop
  roundedBottom
  hideRules
  xAxisThickness={0}
  yAxisThickness={0}
  yAxisTextStyle={styles.yAxisText}
  noOfSections={4}
  maxValue={380}
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: Colors.black,  
    padding: 20,
    paddingBottom:50,
    alignItems: 'center',
    

  },
  titleContainer: {
    marginVertical: 30,
    alignItems: 'center',
  },
  titleText: {
    color: '#1e90ff',  
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  legendCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    color: 'lightgray',
    fontSize: 14,
  },
  yAxisText: {
    color: '#b0c4de',  
  },
});

export default GraphPage;
