import React from 'react'
import Constants from './Constants';

import './growl.css'

export const Growl = ({ active, message, onDismissed }) => (
  <div className={`growl${active ? " active" : ""}`}>
    {message}
    <div onClick={onDismissed} className="growl-close" />
  </div>
)

export function useGrowl() {
    // state of the growl
    const [growlActive, setGrowlActive] = React.useState(false)
    React.useEffect(
      () => {
        if(growlActive){
          let growlTimer = setTimeout(() => setGrowlActive(false), Constants.DELAY * 1000);    
          return () => {
            clearTimeout(growlTimer);
          };
        }
      },
      [growlActive]
    );
    return [
        // the first arg is the state
        growlActive, 

        // the second arg is a fn that allows you to safely set its state
        (active) => {
            setGrowlActive(active)
        },
    ]
}