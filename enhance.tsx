import React from 'react';

interface RequiredProps {
    needsThis: string;
}


export default function enhance<P>(InnerComponent: React.ComponentType<P>) {
    interface State {
        counter: number;
    }
    class EnhancedComponent extends React.Component<P & RequiredProps, State> {

        static defaultProps = {
            needsThis: 'default value',
        }

        render() {
            return <InnerComponent />;
        }
    }

    return EnhancedComponent;
}






