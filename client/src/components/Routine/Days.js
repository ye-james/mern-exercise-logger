import React from 'react'
import { Accordion } from 'semantic-ui-react';
import Exercises from './Exercises'

const Days = ({days}) => {

    const panels = days.map((day,idx) => ({key:`day-${idx}`,title:day.name,content: {content: <Exercises exercises={day.exercises} dayIdx={idx} exclusive={false}/>}}))
  
    return <Accordion defaultActiveIndex={0} panels={panels} exclusive={false} styled/>
  }

export default Days;