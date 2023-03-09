///////////////  Dynamic JSX Element Generation ////////////////////////
let data = [{title:"Test1", data:"1234567"}, {title:"Test1", data:"1234567"}, {title:"Test>

function DataComponent(props){
        return(
                <div style={{display: 'flex'}}>
                        <h3>{props.title}:</h3>
                        <h3>{props.data}</h3>
                </div>
        )
}

function App1(){
        const dataJSXElements = data.map(element => {
                return <DataComponent title={element.title} data={element.data}/>
        })

        return (
                <div>
                        {dataJSXElements}
                </div>
        )
}
///////////////  Dynamic JSX Element Generation ////////////////////////
