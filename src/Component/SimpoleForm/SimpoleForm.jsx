
const SimpoleForm = () => {
    const hendelSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.Email.value)
        console.log(e.target.phone.value)
        console.log('form submit to yellow')
    }

    return (
        <div>
            <form onSubmit={hendelSubmit} >
                <input type="text" name="name" /><br />
                <input type="email" name ="Email" /><br />
                <input type="number" name ="phone" /><br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpoleForm;