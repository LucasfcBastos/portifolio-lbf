import TextColor from '../TextColor'

import './PrintDisplay.css'

function PrintDisplay({ type, frase }) {
    return (
        <div className='print'>
            <p>
                <TextColor text={type} color="#00ff00" />
                <TextColor text="(" color="#ffff00" />
                <TextColor text="&quot;" color="#00ff00" />
                {frase}
                <TextColor text="&quot;" color="#00ff00" />
                <TextColor text=")" color="#ffff00" />
            </p>
        </div>
    )
}

export default PrintDisplay