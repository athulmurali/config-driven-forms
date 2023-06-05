import React from "react";
import { DevTool } from "@hookform/devtools";

import { useForm } from "react-hook-form";
import { connect, Provider } from "react-redux";
import { store } from "./reduxStore";
import { formFields } from "./inputConfig";
import { updateUser } from "./reduxStore";
import { renderInput, generateValidationRules } from "./InputRegistry"; // Import the renderInput function
import { DisplayStateData } from "./DisplayUserState";
import styles from "./styles";

const ConfigDrivenForm = ({ user, updateUser }) => {
  const [renderCount, setRenderCount] = React.useState(0);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    updateUser(data);
  };

  // Increment the render count on each render
  React.useEffect(() => {
    setRenderCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <>
      <h2>Render Count: {renderCount}</h2>
      <DevTool placement="top-right" control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {formFields.map((field) => {
          const validationRules = generateValidationRules(field.validators);
          field.validationRules = validationRules;
          const FieldToRender = () => renderInput({ field, register });

          return (
            <div key={field.name} style={styles.form}>
              <field>
                <label htmlFor={field.name} style={{ marginRight: "1rem" }}>
                  {field.label}
                </label>
                <FieldToRender />
                {errors[field.name] && (
                  <span role="alert" style={styles.error}>
                    {errors[field.name].message}
                  </span>
                )}
              </field>
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
      <DisplayStateData userState={user} />
    </>
  );
};

// Connect ConfigDrivenForm to Redux store
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (data) => dispatch(updateUser(data)),
});

const ConnectedConfigDrivenForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigDrivenForm);

// App component
const App = () => {
  return (
    <Provider store={store}>
      <ConnectedConfigDrivenForm />
    </Provider>
  );
};

export default App;
