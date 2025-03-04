import './SendEmail.css'

function SendEmail({img, origem, name, url}) {
    return (
        <form>
            <input
                type='text'
                placeholder='Enter your name or company name'
                minLength={2}
                maxLength={150}
                required
            /> <br />
            <input
                type='email'
                placeholder='Enter your e-mail address'
                minLength={6}
                maxLength={320}
                required
            /> <br />
            <textarea
                type='textarea'
                placeholder='Write your mensagem'
                minLength={1}
                maxLength={10000000}
                required
            />
            <div className='button'>
                <input
                    type='submit'
                    value="SEND"
                />
            </div>
        </form>
    )
}
  
export default SendEmail