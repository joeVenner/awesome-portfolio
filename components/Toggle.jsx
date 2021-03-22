import React, { Component, useEffect } from 'react';
import usePersistentState from './../hooks/PersistentState';
import { Moon, Sun } from './../icons'
import cx  from 'classnames';

const Theme = () => {
    const [isLight, setisLight] = usePersistentState('theme', true); // default to dark mode

    useEffect(() => {
        isLight ?
            document.documentElement.classList.remove('other'):
            document.documentElement.classList.add('other') 
            
    });

    return (
        <div>
            <main>
                <input id='toggle' name='toggle' type='checkbox' checked={isLight} onChange={event => setisLight(event.target.checked)} />
                <label htmlFor='toggle' className={cx('switch',  isLight ? 'spin' :'' )} id='switch'>
                    {isLight ? <Sun />:<Moon />}
                    
                </label>
          
            </main>
        </div>
    )
}

class Toggle extends Component {
    render() {
        return (
            <Theme />
        );
    }
}

export default Toggle;
