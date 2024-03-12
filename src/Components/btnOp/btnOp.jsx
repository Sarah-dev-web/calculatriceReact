import "./btnOp.css"
function BtnOp(props){
    return (
        <div style={{ backgroundColor: props.bgcl}} className="btnCalc">{props.op}</div>

    )
}
export default BtnOp