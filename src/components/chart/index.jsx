import Chart from "react-apexcharts";

const options = {
  labels: ["Income", "Expense"],
  colors: ["#213EBF", "#FD5E53"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legenr: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#213EBF", "#FD5E53"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

export default function TransactionChartSummary({ income = 100, expense = 500 }) {
  return <Chart options={options} series={[income, expense]} type="pie" width={"100%"} height={"100%"} />;
}

//IF THERE IS AN ERROR LATER GO BACK TO 8:09:00 TO FIX THE INCOME AND EXPENSE LABELS
