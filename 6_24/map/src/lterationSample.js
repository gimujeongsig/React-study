import { useState } from "react";
const IterationSample = () => {
    const [names, setNames] = useState([
        {}{}{}{}
    ]);
    
    const nameList = names.map(name => <li>{name}</li>)
    console.log(nameList);
    return (
        <ul>{nameList}</ul>
    );
};
export default IterationSample;