import React, { useState } from 'react';

const defaultContextValue = {
    data: {
        visible: false
    },
    set: () => {}
}

const { Provider, Consumer } = React.createContext(defaultContextValue);

const SubOverlayContextProvider = ({ children }) => {
    const setContextValue = (newData) => {
        _setContextValue(contextValue => ({
            data: {
                ...contextValue.data,
                ...newData,
            },
            set: contextValue.set,
        }))
    }

    const [contextValue, _setContextValue] = useState({
        ...defaultContextValue,
        set: setContextValue,
    });


    return(
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export { Consumer as default, SubOverlayContextProvider }