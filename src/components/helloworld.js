const name = 'Hello World';
const obj = {name: "Hello World Object"};
const data = ['We', 'are', 'United'];
const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] ;
const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs', 'Ionic']}]
function HelloWorld(){
    return (
        <>
            <h3>Task 1</h3>
            <h4 className="mb-4">{name}</h4>
        </>
    )
}

function HelloWorldObject()
{
    return (
        <>
            <h3>Task 2</h3>
            <h4 className="mb-4">{obj.name}</h4>
        </>
    )
}

function Data(){
    return (
        <>
            <h3>Task 3</h3>
            <h5>{data[0]}</h5>
            <h5>{data[1]}</h5>
            <h5 className="mb-4">{data[2]}</h5>
        </>
    )
}

function List(){
    return (
        <>
            <h3>Task 4</h3>
            <h5>{list[0].name}</h5>
            <h5>{list[1].name}</h5>
            <h5 className="mb-4">{list[2].name}</h5>
        </>
    )
}

function Complex(){
    return (
        <>
            <h3>Task 5</h3>
            <h5>Company: {complex[0].company}</h5>
            <p className="fw-bold">Jobs: {complex[0].jobs[0]}, {complex[0].jobs[1]}</p>
            <h5>Company: {complex[1].company}</h5>
            <p className="fw-bold">Jobs: {complex[1].jobs[0]}, {complex[1].jobs[1]}</p>

        </>
    )
}

export {HelloWorld, HelloWorldObject, Data, List, Complex};