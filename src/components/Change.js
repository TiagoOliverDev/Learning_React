const Change = () => {

    const handleChange = (e) => {
        console.log(e.target.value);
    }
    
    return (
        <div>
            <input name="firstName" onChange={handleChange} />
        </div>
    )
}

export default Change