import Chart from "react-google-charts";

const DoughnutChart = () => {
  // Sample data for the doughnut chart
  const data = [
    ["Loan", "Amount"],
    ["Personal Loan 1", 1000000],
    ["Personal Loan 2", 2100000],
    ["Business Loan 1", 3000000],
  ];

  // Options for the doughnut chart
  const options = {
    pieHole: 0,
    colors: ["#FF6384", "#36A2EB", "#FFCE56"],
    is3D: true,
  };

  return <Chart chartType="PieChart" data={data} options={options} />;
};

export default DoughnutChart;
