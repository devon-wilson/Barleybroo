import React from "react";
import config from "react-global-configuration";
import "./rate-beer.css";
import Carousel from "react-elastic-carousel";

const apiUrl = "https://api.punkapi.com/v2/beers";

export class ratebeer extends React.Component {
  constructor(props) {
    super(props);
    //this.handleReview = this.handleReview.bind(this);
    this.review = React.createRef("review");
    this.rate = React.createRef("rate");
    this.beerName = React.createRef("ber");
    this.beerId = React.createRef("bid");
    this.state = {
      images: [],
      data: [],
      // data2: {
      //   beer_id: "",
      //   beer_name: "",
      //   content: "",
      //   rating: "",
      // },
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.review !== nextProps.review) {
      return false;
    }
    if (this.state.rate !== nextState.rate) {
      return false;
    }
    return true;
  }

  /*async getAPI() {
    await fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
  }*/

  // fixed infinite loop
  componentDidMount() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  //This needs work
  // handleSubmit = (event) => {
  //   console.log("made it here");
  //   console.log(event);

  //   fetch("http://api.barleybroo.com/review/create", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + localStorage.getItem("barleybrooKey"),
  //     },
  //     body: JSON.stringify(this.state.data2),
  //   }).then(function (response) {
  //     console.log(response);
  //     return response.json();
  //   });
  //   event.preventDefault();
  // };

  handleReview(event) {
    event.preventDefault();
    console.log("made it here");
    console.log(event);
    const inputs = event.target.getElementsByTagName("input");
    let obj = {
      beer_id: inputs.bid.value,
      beer_name: inputs.ber.value,
      content: inputs.review.value,
      rating: inputs.rate.value,
    };

    fetch("http://api.barleybroo.com/review/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("barleybrooKey"),
      },
      body: JSON.stringify(obj),
    }).then(function (response) {
      console.log(response);
      window.location.href = config.get("host") + "/my-map";
      //return response.json();
      console.log(inputs.review.value);
    });

    // this.setState({
    //   data2: {
    //     content: inputs.review.value,
    //     rate: inputs.rate.value,
    //     beer_name: inputs.name.value,
    //     beer_id: "23",
    //   },
    // });
    //console.log(this.state.data2);
    localStorage.setItem("rev", inputs.review.value);
    localStorage.setItem("rat", inputs.rate.value);
    localStorage.setItem("ber", inputs.ber.value);
    localStorage.setItem("bid", inputs.bid.value);
  }

  render() {
    const form = document.getElementById("form");
    const { images } = this.state;
    if (form) form.addEventListener("submit", this.handleReview);

    //    this.getAPI();
    return (
      <div class="container">
        <div class="Lhalf">
          <h1>BEER</h1>
          <div class="leftside">
            {this.state.data.map(
              (obj) => this.state.images.push(obj.image_url)
              /* <li class="elements"> */
              /* {obj.name} : {obj.id} */
              /* <br></br> */
              /* <img src={obj.image_url} id="beerimg" alt="alternative"></img> */
              /* document.getElementById("beerimg").src = objURL} */
              /* </li> */
            )}
          </div>
          <div>
            <Carousel>
              {images.map((item) => (
                <img src={item}></img>
              ))}
            </Carousel>
          </div>
        </div>
        <div class="Rhalf">
          <form id="form">
            <h1>Write Review</h1>
            <div class="review" id="review">
              <label for="txt">
                <br></br>
              </label>
              <input
                type="textbox"
                class="formControl"
                id="txt"
                name="review"
                ref={this.review}
                required
              ></input>
            </div>
            <h1>Rating</h1>
            <div class="rating">
              <label for="txt">
                <br></br>
              </label>
              <input
                //value={this.state.rate}
                type="text"
                class="formControl"
                id="rate"
                height="250"
                name="rate"
                ref={this.rate}
                required
              ></input>
            </div>
            <h1>Beer Name</h1>
            <div class="ber">
              <label for="txt">
                <br></br>
              </label>
              <input
                // value={this.state.rate}
                type="text"
                class="formControl"
                id="ber"
                height="250"
                name="ber"
                ref={this.ber}
                required
              ></input>
            </div>
            <h1>Beer ID(number)</h1>
            <div class="bid">
              <label for="txt">
                <br></br>
              </label>
              <input
                // value={this.state.rate}
                type="text"
                class="formControl"
                id="bid"
                height="250"
                name="bid"
                ref={this.bid}
                required
              ></input>
            </div>
            <input type="submit" value="submit" class="btn" id="btn"></input>
          </form>
          <div class="results">
            <h1>You're Last Review and Rating</h1>
            <div>Review: {localStorage.getItem("rev")}</div>
            <div>Rating: {localStorage.getItem("rat")}</div>
            <div>Name: {localStorage.getItem("ber")}</div>
            <div>ID: {localStorage.getItem("bid")}</div>
          </div>
        </div>
      </div>
    );
  }
}
