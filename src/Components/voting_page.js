import React, { Component } from 'react'
import {
  MDBCard,
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import axios from "axios";
import swal from "sweetalert";
import { Doughnut } from "react-chartjs-2";


class candidate_email extends React.Component {

  state = { redirect: "" };
  onSubmithandler = (e) => {
    e.preventDefault()
    // console.log(e.target.name.value, "e")
    const name = e.target.name.value
    const email = e.target.email.value
    const vote = e.target.vote.value
    e.target.reset()
    

    axios
      .post("http://localhost:3050/candidate_register", {
        name: name,
        email: email,
        vote: vote
      })
      .then(data => {
        console.log("hello anand", data);
        if (data.data.result) {
          swal("Thank's for voting", "", "success")
          this.getState()
        } else {
          swal("This candidate already voted", "", "error", {
            
          })
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  state = {
    dataDoughnut: {
      labels: ["Yes", "No"],
      datasets: [
        {
          data: [0, 0],
          backgroundColor: ["#46BFBD", "#F7464A"],
          hoverBackgroundColor: [
            "#5AD3D1",
            "#FF5A5E"
          ]
        }
      ]
    }
  }

  componentDidMount() {
    this.getState()
  }

  getState = () => {
    axios.get("http://localhost:3050/result")
    .then((data) => {
      // console.log(data, "data");
      this.setState( {
        dataDoughnut: {
          labels: ["Yes", "No"],
          datasets: [
            {
              data: [data.data.Yes, data.data.No],
              backgroundColor: ["#46BFBD", "#F7464A"],
              hoverBackgroundColor: [
                "#5AD3D1",
                "#FF5A5E"
              ]
            }
          ]
        }
      }
      )
    })
  }

  render() {
    return (
      <div>
      <br></br>
      <div className="OuterContainer">
        {this.state.redirect}
          <div className="InnerContainer">
              <h1 className="heading">Please Vote</h1>
              <form onSubmit = {this.onSubmithandler}>
                <div><input placeholder="Candidate Name" name="name" className="candidateName" type="text" required /></div>            
                <div><input type="email" name="email" id="email" placeholder="Candidate Email" className="candidateName mt-20" required/></div>
                <br></br>
                <MDBCard className="mdbcard">
                  Should lockdown be open?
                  <select className="browser-default custom-select" name="vote" required>
                  <option value="" disabled selected>Select your option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </MDBCard>
                <button className="button mt-20" type="submit">Submit</button>
              </form>
              <br></br>
              <MDBCard >
                  <h3 className="mt-5">Voting chart</h3>
                  <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
                </MDBCard>
          </div>    
        </div>
        </div>
    )
  }
}

export default candidate_email