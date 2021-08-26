Highcharts.chart("hcContainer", {
  data: {
    googleAPIKey: "AIzaSyCMZ7e8ujOnA5hVanuXSFOP5bJf9b6jBgg",
    googleSpreadsheetKey: "11gJ3QuXf4_34uDomERHdO3FQNLZ2_6_t8dY_SZKaESo",
    googleSpreadsheetRange: "Sheet1",
  },
  chart: {
    type: "column",
  },

  title: {
    text: "Rocket Successes and Failures",
  },

  xAxis: {
    tickInterval: 1,
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: "Number of Launches",
    },
    reversedStacks: false,
  },

  credits: {
    enabled: true,
    href: false,
    text: "CSIS Aerospace Security | Gunter's Space Page, SpaceX, United Launch Alliance",
  },

  plotOptions: {
    column: {
      stacking: "normal",
    },
  },

  tooltip: {
    shared: true,
    useHTML: true,
    formatter: function () {
      let string = "";

      for (i = 0; i < this.points.length; i += 2) {
        string +=
          "<tr>" +
          "<td><b>" +
          this.points[i].series.userOptions.stack +
          "</b></td>" +
          "<td>" +
          this.points[i].y +
          "</td>" +
          "<td>" +
          this.points[i + 1].y +
          "</td>" +
          "</tr>";
      }

      return (
        '<span style="font-size: 14px;"><b>' +
        this.x +
        "</b></span>" +
        "<br>" +
        "<table>" +
        "<tr>" +
        "<th></th>" +
        "<th> Success </th>" +
        "<th> Failure </th>" +
        "</tr>" +
        string +
        "</table>"
      );
    },
  },

  legend: {
    labelFormatter: function () {
      if (this.name === "Delta IV Failure/Partial Failure") {
        let name = this.name.split("");
        let updateName = name.slice(9, 13);
        finalName = updateName.join("") + "ed Launches";
        return finalName;
      } else {
        return this.name.replace(/success/gi, "");
      }
    },
  },

  series: [
    {
      color: "#196C95",
      stack: "Delta IV",
    },
    {
      color: "#B5BDC1",
      id: "Failure",
      stack: "Delta IV",
      legendIndex: 1,
    },
    {
      color: "#5DB6D0",
      stack: "Delta IV Heavy",
    },
    {
      linkedTo: "Failure",
      color: "#B5BDC1",
      stack: "Delta IV Heavy",
      showInLegend: false,
    },
    {
      color: "#F9BC65",
      stack: "Atlas V",
    },
    {
      linkedTo: "Failure",
      stack: "Atlas V",
      color: "#B5BDC1",
      showInLegend: false,
    },
    {
      color: "#4F9793",
      stack: "Falcon 9",
    },
    {
      linkedTo: "Failure",
      color: "#B5BDC1",
      stack: "Falcon 9",
      showInLegend: false,
    },
    {
      color: "#3E7A82",
      stack: "Falcon 9 Heavy",
    },
    {
      linkedTo: "Failure",
      color: "#B5BDC1",
      stack: "Falcon 9 Heavy",
      showInLegend: false,
    },
  ],
});
