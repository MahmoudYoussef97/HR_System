import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { BarChart, Bar, Cell } from "recharts";
import { AreaChart, Area } from "recharts";
import { PieChart, Pie, Sector } from "recharts";
import { RadialBarChart, RadialBar } from "recharts";
import { Editor } from "@tinymce/tinymce-react";

import { getEmployees } from "../../services/employeeServices";
import "./Body.css";

class Body extends Component {
  state = {
    activeIndex: 0,
    suggestion: "",
    report: ""
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };

  handleEditorChange = e => {
    console.log("Content was updated:", e.target.getContent());
    this.setState({ suggestion: e.target.getContent() });
  };

  handleSuggestion = () => {
    // adding suggestion to the table in database ...
    console.log(this.state.suggestion);
    window.location = "/profile";
  };

  handleReport = () => {
    // adding report to the table in database ...
    console.log(this.state.report);
    window.location = "/profile";
  };

  render() {
    const { data, bodyInfo, user } = this.props;
    const graphData = [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
      }
    ];
    const areaData = [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
      }
    ];

    const pieData = [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 }
    ];

    const renderActiveShape = props => {
      const RADIAN = Math.PI / 180;
      const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
      } = props;
      const sin = Math.sin(-RADIAN * midAngle);
      const cos = Math.cos(-RADIAN * midAngle);
      const sx = cx + (outerRadius + 10) * cos;
      const sy = cy + (outerRadius + 10) * sin;
      const mx = cx + (outerRadius + 30) * cos;
      const my = cy + (outerRadius + 30) * sin;
      const ex = mx + (cos >= 0 ? 1 : -1) * 22;
      const ey = my;
      const textAnchor = cos >= 0 ? "start" : "end";

      return (
        <g>
          <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
            {payload.name}
          </text>
          <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
          />
          <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill={fill}
          />
          <path
            d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
            stroke={fill}
            fill="none"
          />
          <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
          <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            textAnchor={textAnchor}
            fill="#999"
          >{`PV ${value}`}</text>
          <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            dy={18}
            textAnchor={textAnchor}
            fill="#999"
          >
            {`(Rate ${(percent * 100).toFixed(2)}%)`}
          </text>
        </g>
      );
    };

    const radialData = [
      {
        name: "18-24",
        uv: 31.47,
        pv: 2400,
        fill: "#8884d8"
      },
      {
        name: "25-29",
        uv: 26.69,
        pv: 4567,
        fill: "#83a6ed"
      },
      {
        name: "30-34",
        uv: 15.69,
        pv: 1398,
        fill: "#8dd1e1"
      },
      {
        name: "35-39",
        uv: 8.22,
        pv: 9800,
        fill: "#82ca9d"
      },
      {
        name: "40-49",
        uv: 8.63,
        pv: 3908,
        fill: "#a4de6c"
      },
      {
        name: "50+",
        uv: 2.63,
        pv: 4800,
        fill: "#d0ed57"
      },
      {
        name: "unknow",
        uv: 6.67,
        pv: 4800,
        fill: "#ffc658"
      }
    ];

    const style = {
      top: 0,
      left: 350,
      lineHeight: "24px"
    };
    return (
      <React.Fragment>
        <div className="body-section">
          <div className="section-title pl-4">
            <h1 className="text-center pt-5 pb-4">
              {bodyInfo.section} Section
            </h1>
          </div>
          {user.role === "IT" && (
            <Link to="/AddPeople" className="btn btn-warning add-button">
              Add {bodyInfo.section}
            </Link>
          )}
          {bodyInfo.section === "Employee" && (
            <div className="table-area pt-4">
              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    {user.role == "IT" && <th scope="col">Update</th> && (
                      <th scope="col">Delete</th>
                    )}
                    {user.role == "Manager" && <th scope="col">Tasks</th>}
                  </tr>
                </thead>
                <tbody>
                  {data.map(
                    item =>
                      item.role === this.props.bodyInfo.section && (
                        <tr key={item._id}>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          {user.role === "IT" && (
                            <td>
                              <Link to={`/Update/${item.name}`}>
                                <button
                                  onClick={() => this.props.handleUpdate(item)}
                                  className="btn btn-info btn-sm"
                                >
                                  Update
                                </button>
                              </Link>
                            </td>
                          )}
                          {user.role === "IT" && (
                            <td>
                              <button
                                onClick={() =>
                                  this.props.handleDelete(item.email)
                                }
                                className="btn btn-danger btn-sm"
                              >
                                Delete
                              </button>
                            </td>
                          )}
                          {user.role === "Manager" && (
                            <td>
                              <Link to={`/Tasks/${item._id}`}>
                                <button
                                  onClick={() => this.props.handleUpdate(item)}
                                  className="btn btn-info btn-sm"
                                >
                                  Show Tasks
                                </button>
                              </Link>
                            </td>
                          )}
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          )}
          {bodyInfo.section === "Analysis" && (
            <React.Fragment>
              <div className="row">
                <div className="col-md-1" />

                <div className="chart-card col-md-5">
                  <LineChart
                    width={450}
                    height={300}
                    data={graphData}
                    margin={{
                      top: 20,
                      right: 50,
                      left: 5,
                      bottom: 5
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="white" />
                    <XAxis dataKey="name" stroke="#87ceeb" />
                    <YAxis stroke="#87ceeb" />
                    <Tooltip stroke="orange" />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </div>
                <div className="col-md-1" />
                <div className="chart-card col-md-5">
                  <BarChart
                    width={450}
                    height={300}
                    data={graphData}
                    margin={{
                      top: 20,
                      right: 50,
                      left: 5,
                      bottom: 5
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#87ceeb" />
                    <YAxis stroke="#87ceeb" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                  </BarChart>
                </div>
                <div className="col-md-1" />

                <div className="chart-card col-md-5">
                  <AreaChart
                    width={450}
                    height={300}
                    data={areaData}
                    margin={{
                      top: 20,
                      right: 50,
                      left: 5,
                      bottom: 5
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#87ceeb" />
                    <YAxis stroke="#87ceeb" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Area
                      type="monotone"
                      dataKey="pv"
                      stackId="1"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                    />
                    <Area
                      type="monotone"
                      dataKey="amt"
                      stackId="1"
                      stroke="#ffc658"
                      fill="#ffc658"
                    />
                  </AreaChart>
                </div>
                <div className="col-md-1" />

                <div className="chart-card col-md-5">
                  <PieChart width={450} height={300}>
                    <Pie
                      activeIndex={this.state.activeIndex}
                      activeShape={renderActiveShape}
                      data={pieData}
                      cx={200}
                      cy={150}
                      innerRadius={70}
                      outerRadius={90}
                      fill="#87ceeb"
                      dataKey="value"
                      onMouseEnter={this.onPieEnter}
                      margin={{
                        top: 0,
                        right: 50,
                        left: 5,
                        bottom: 5
                      }}
                    />
                  </PieChart>
                </div>
              </div>
            </React.Fragment>
          )}
          {(bodyInfo.section === "Suggestions" ||
            bodyInfo.section === "Reports") && (
            <div className="editor-wrapp">
              <Editor
                apiKey="bc8az5almbmb94wtkrbq5l3kou0mii7epft1u038gmc1v5nh"
                initialValue="<p>Start Writing ... </p>"
                init={{
                  plugins: "link image code",
                  toolbar:
                    "undo redo | bold italic | alignleft aligncenter alignright | code"
                }}
                onChange={this.handleEditorChange}
              />
            </div>
          )}
          {bodyInfo.section === "Suggestions" && (
            <button
              onClick={this.handleSuggestion}
              className="btn btn-info mt-3"
            >
              Send Suggestion
            </button>
          )}
          {bodyInfo.section === "Reports" && (
            <button onClick={this.handleReport} className="btn btn-info mt-3">
              Send Report
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
