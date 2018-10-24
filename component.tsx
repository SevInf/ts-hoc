import React from 'react';
import enhance from './enhance';

interface MyProps {
    myProp: string;
}
class MyComponent extends React.Component<MyProps> {}

const SuperComponent = enhance(MyComponent);

<SuperComponent myProp={"a"} needsThis="val" />
