const FormComponent = (props) => {
    const { type, name, values, handleChange, errors, placeholder } = props;
    return (
        <div data-mdb-input-init className="form-outline mb-4">
            <input
                type={type}
                name={name}
                value={values[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="form-control form-control-lg"
            />
            {errors[name] &&
                <label className="form-label" htmlFor="form3Example1cg">
                    {errors[name]}
                </label>
            }
        </div>
    )
}

export { FormComponent }