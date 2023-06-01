import * as React from "react";

export const generateValidationRules = (validators) => {
  return validators.reduce((rules, validator) => {
    switch (validator.type) {
      case "required":
        rules.required = validator.message;
        break;
      case "max-length":
        rules.maxLength = {
          value: validator.maxLength,
          message: validator.message
        };
        break;
      case "pattern":
        rules.pattern = {
          value: new RegExp(validator.pattern),
          message: validator.message
        };
        break;
      default:
        break;
    }
    return rules;
  }, {});
};

export const renderInput = ({ field, register }) => {
  const inputType = {
    text: (
      <input
        type="text"
        name={field.name}
        autoFocus={field.autoFocus}
        defaultValue={field.defaultValue}
        {...register(field.name, field.validationRules)} // Register with validation rules
      />
    ),
    "text-area": (
      <textarea
        name={field.name}
        rows={field.rows}
        defaultValue={field.defaultValue}
        {...register(field.name, field.validationRules)} // Register with validation rules
      ></textarea>
    ),
    "card-radio-group": (
      <div>
        {field?.options?.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name={field.name}
              value={option.value}
              defaultChecked={option.value === field.defaultValue}
              {...register(field.name, field.validationRules)} // Register with validation rules
            />
            {option.label}
          </label>
        ))}
      </div>
    )
  };

  return inputType[field.type] || null;
};
