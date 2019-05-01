// components/About.js

import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStage: 1,
      movies: [
        {
          name: 'Batman',
          year: 1999,
          id: 1
        },
        {
          name: 'Superman',
          year: 2006,
          id: 2
        },
        {
          name: 'Rocky Horror Picture Show',
          year: 1978,
          id: 3
        }
      ]

    }
  }

  gotoStage(stageID) {
    this.setState({
      ...this.state,
      currentStage: stageID
    })
  }

  render() {

    const navigation = 
      <React.Fragment>
        <button onClick = {() => this.gotoStage(1)}>Go to stage 1</button>
        <button onClick = {() => this.gotoStage(2)}>Go to stage 2</button>
      </React.Fragment>

    if (this.props.match.params.stage === "screen1") {
      return (
        <React.Fragment>
          <h1>Displaying screen 1</h1>
          <img src="https://suttons.s3.amazonaws.com/p/FLSTIT31691_3.jpg"/>
          {navigation}
        </React.Fragment>
      )
    }

    if (this.props.match.params.stage === "screen2") {
      return (
        <React.Fragment>
          <h1>Displaying screen 2</h1>
          <img src="https://www.futurity.org/wp/wp-content/uploads/2018/04/pink-flowers-against-green_1600.jpg"/>
          {navigation}
        </React.Fragment>
      )
    }

    // let selectedMovie = this.state.movies.filter((movie) => {
    //   return movie.id === +this.props.match.params.id
    // })

    // const sectionHeader = <React.Fragment><h3>About</h3><p>Welcome to the about section</p></React.Fragment>

    // if (selectedMovie.length === 0) {
    //   return (
    //     <div>
    //       {sectionHeader}

    //       <h1>Not found</h1>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       {sectionHeader}

    //       <p>Your chosen movie is '{selectedMovie[0].name}'</p>

    //       {this.props.match.params.year && <React.Fragment>Movie was made the year {selectedMovie[0].year}</React.Fragment>}
    //     </div>
    //   )
    // }
  }
}

export default About;