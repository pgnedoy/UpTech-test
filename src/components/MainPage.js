import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { setData, setCurrentSlide} from '../actions/setData'

import slidersData from '../data.json'

class MainPage extends Component {
  timer;
   
  componentDidMount(){
    this.props.setData(slidersData);
    this.setTimer();
  }

  nextIteration = (iterator = i => i + 1) => iterator(this.props.data.currentSlide) % slidersData.slider.length

  setTimer = () => 
    this.timer = setInterval(
      () => this.props.setCurrentSlide(this.nextIteration()),
      10000
    );

  handleClickNext = () => {
    clearTimeout(this.timer)
    this.changeSlide(this.nextIteration());
  }

  handleClickPrev = () => {
    clearTimeout(this.timer)
    const { data, currentSlide } = this.props.data;
    this.changeSlide(
      currentSlide ? this.nextIteration(i => i - 1) : data.length-1
    );
  }

  changeSlide = index => this.props.setCurrentSlide(index)

  pauseSetInterval = () => clearTimeout(this.timer)

  continueSetInterval = () => this.setTimer()

  render() {
    const { data, currentSlide } = this.props.data;
    if (!data.length) return null;
    return (
      <div 
        className="slideshow-container" 
        style={{backgroundImage: `url(${data[currentSlide].hero}`}}
        onMouseEnter={this.pauseSetInterval}
        onMouseLeave={this.continueSetInterval}
      >
        <div className="small-image">
          <img src={data[currentSlide].image} alt="" />
        </div>  
        <div className="text">
          <div>{data[currentSlide].text}</div> 
        </div>   
        <a className="prev" onClick={this.handleClickPrev}>&#10094;</a>
        <a className="next" onClick={this.handleClickNext}>&#10095;</a>
      </div>
    )
  }
}

const mapStateToProps = state => ({ data: state.data })

const matchDispatchToProps = dispatch => 
  bindActionCreators({ setData, setCurrentSlide }, dispatch)

export default (connect(mapStateToProps, matchDispatchToProps)(MainPage));
