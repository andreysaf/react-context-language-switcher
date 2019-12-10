import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    // static contextType = LanguageContext;

    renderButton = color => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(language) => language === 'english' ? 'Submit' : 'Применить'}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render () {
        // this.context is not allowed with multiple contexts 
        // const text = this.context === 'english' ? 'Submit' : 'Применить';
        // return <button className="ui button primary">{text}</button>;
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}


export default Button;