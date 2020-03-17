import React from 'react'
import PropTypes from 'prop-types'
import styles from './SimComponent.scss'
import {PersonEmoji,condition} from '../../VizHelpers';


export default (props) => {

const numPersons = props.numPersons;
const maxPerRow = Math.floor(Math.sqrt(numPersons));
const cellWidth = 16;
const d_0 = 0.9;

const testPrint = (world) => {
  // console.log(props);
  let emojis = [];
  // [...Array(numPersons).keys()].forEach(i => {
  //   const drawLot = Math.random()
  //   let state = ""
  //   if (drawLot > 0.4) state = condition(0)
  //   else if (drawLot > 0.1) state = condition(1)
  //   else state = condition(2)
  //   emojis.push(Person(state,"population",Math.floor(i/maxPerRow)/maxPerRow*props.width,(i%maxPerRow)/maxPerRow*props.width))
  // })
  const worldWidth = props.width*d_0;

  world.People.forEach((col,x) => {
    col.forEach((person,y) => {
      const drawLot = Math.random()
      // console.log(person);
      let state = "";
      if (person.infected) {
        if (drawLot > 0.8) state = condition(2);
        else if (drawLot > 0.2) state = condition(1);
        else state = condition(1);
      } else {
        state = condition(0);
      }
      emojis.push(Person(state,"population",x/maxPerRow*worldWidth,y/maxPerRow*worldWidth));
    })
  })

  return emojis;
  // 🛌🛏🤢💀🤒
}

const Person = (state,location,x,y) => {
  // console.log(x,y);
  
  return <g key={x*numPersons+y} className="person">
    {/* <rect width="10" height="110" style="fill:rgb(0,0,0);stroke-width:1;stroke:rgb(0,0,0)" /> */}
    <rect width={cellWidth} height={cellWidth} x={x} y={y} fill="none"/>
    <text
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="black"
      fontSize={cellWidth}
      x={x+cellWidth/2}
      y={y+cellWidth*1.2/2}
    >
      {PersonEmoji(state)}
    </text>
  </g>
}

return (
  <svg className="SimComponent" width={props.width} height={props.height}>
    <g>
      {testPrint(props.worldState)}
    </g>
  </svg>
);
}
// SimComponent.propTypes = {}

// SimComponent.defaultProps = {}


