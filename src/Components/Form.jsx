import React from "react";
export default class from extends React.Component {
  state = {
    title: "JavaScript",
    textarea: "Js Awesome from state",
    library: "React",
    isAwesome: true,
  };
  handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.type === "textarea") {
      this.setState({
        textarea: e.target.value,
      });
    } else if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log(e.target.type);
    }
  };
  submitHandler = (e) => {
    const { title, textarea, library, isAwesome } = this.state;
    e.preventDefault();
    console.log(title, textarea, library, isAwesome);
  };

  render() {
    const { title, textarea, library, isAwesome } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter the text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <p>{title}</p>
          <textarea
            name="text"
            value={textarea}
            onChange={this.handleChange}
          ></textarea>
          <br /> <br />
          <select value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}
