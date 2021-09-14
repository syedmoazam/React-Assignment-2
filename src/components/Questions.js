import { HelloWorld, HelloWorldObject, Data, List, Complex } from "./helloworld";
import Package from "./package";
import Link1 from "./cards";
function Question1(){
    return(
        <>
            <h2 id="Q1">Question 1</h2>
            <HelloWorld/>
            <HelloWorldObject/>
            <Data/>
            <List/>
            <Complex/>
            <h2 id="Q2">Question 2</h2>
            <Package/>
            <h2 id="Q3">Question 3</h2>
            <Link1/>
        </>
    )
}

export default Question1;