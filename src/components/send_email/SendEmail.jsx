import './SendEmail.css'

function SendEmail({img, origem, name, url}) {
    return (
        <form>
            <input
                type='text'
                placeholder='Enter your name'
            /> <br />
            <input
                type='text'
                placeholder='Enter your email'
            /> <br />
            <textarea
                type='textarea'
                placeholder='Write your mensagem'
            />
        </form>
    )
}
  
export default SendEmail