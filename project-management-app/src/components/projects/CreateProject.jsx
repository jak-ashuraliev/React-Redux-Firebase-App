import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col m6 offset-m3">
            <form
              onSubmit={this.handleSubmit}
              className="white"
              autoComplete="off"
            >
              <h5 className="grey-text text-darken-2">Create New Project</h5>
              <div className="input-field">
                <label htmlFor="title">Project Title</label>
                <input type="text" id="title" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="content">Project Content</label>
                <textarea
                  className="materialize-textarea"
                  name="content"
                  id="content"
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className="input-field">
                <button className="btn teal lighten-1 z-depth-0">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProject;
