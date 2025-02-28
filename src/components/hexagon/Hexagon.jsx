import './Hexagon.css'

function Hexagon({text}) {
    return (
        <>
            <div className='box'></div>
            <div class="id">
                <div class="container">
                    <div class="hexa left"></div>
                    <div class="hexa right"></div>
                    <div class="hexagon">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default Hexagon