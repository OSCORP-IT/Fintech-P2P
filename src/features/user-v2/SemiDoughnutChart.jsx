import { Chart } from "react-google-charts";

const SemiDoughnutChart = () => {
  const chartData = [
    ["Label", "Value"],
    ["Paid", 70],
    ["Unpaid", 30],
  ];

  const chartOptions = {
    pieHole: 0.65, // Set the pieHole to 0.5 for a half-doughnut chart
    // Hide slice labels
    colors: ["#0D5152", "#FF6321"], // Customize the color
    chartArea: { width: "100%", height: "100%" }, // Adjust chart area for better visibility
  };

  return <Chart chartType="PieChart" data={chartData} options={chartOptions} />;
};

export default SemiDoughnutChart;
