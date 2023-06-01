export const formFields = [
  {
    name: "displayName",
    label: "displayName",
    type: "text",
    autoFocus: true,
    validators: [
      {
        type: "required",
        message: "validation.required"
      },
      {
        type: "max-length",
        maxLength: 255,
        message: "validation.maxLength"
      },
      {
        type: "pattern",
        pattern: "^([A-z][A-z]*)$",
        message: "This field should be only alphabets ",
        disabled: true
      }
    ]
  },
  {
    name: "displayNumber",
    label: "displayNumber",
    type: "text",
    autoFocus: true,
    validators: [
      {
        type: "required",
        message: "validation.required"
      },
      {
        type: "max-length",
        maxLength: 255,
        message: "validation.maxLength"
      },
      {
        type: "pattern",
        pattern: "^(0|[1-9][0-9]*)$",
        message: "This field should be a number",
        disabled: true
      }
    ]
  },
  {
    name: "description",
    label: "description",
    type: "text-area",
    optional: true,
    rows: 2,
    validators: [
      {
        type: "max-length",
        maxLength: 400,
        message: "validation.maxLength"
      }
    ]
  },
  {
    name: "accessToken",
    label: "accessToken",
    type: "text",
    autoFocus: false,
    defaultValue: "accessToken-default",
    tooltip: {
      text:
        "To get an access token, create an application in Oracle Cloud Infrastructure, and generate an access token.",
      link: {
        label: "Learn more",
        href:
          "https://docs.oracle.com/pls/topic/lookup?ctx=en/cloud/paas/process-automation&id=PRADM-GUID-82BCB285-4E96-43E0-B780-368DAFEF7C4E",
        openNewWindow: true
      }
    },
    validators: [
      {
        type: "required",
        message: "validation.required"
      }
    ]
  },
  {
    name: "shapeSelector",
    label: "shapeSelector",
    defaultValue: "DEVELOPMENT",
    type: "card-radio-group",
    tooltip: {
      text:
        "Select a shape according to the lifecycle stage of your instance. Use production for production instances, and development for development, testing and staging instances."
    },
    columns: 2,
    options: [
      {
        label: "opaInstances.shapeDevelopment",
        value: "DEVELOPMENT"
      },
      {
        label: "opaInstances.shapeProduction",
        value: "PRODUCTION"
      }
    ],
    validators: [
      {
        type: "required",
        message: "validation.chooseOption"
      }
    ]
  },
  {
    name: "meteringModel",
    label: "meteringModel",
    type: "card-radio-group",
    tooltip: {
      text:
        "Defines how Oracle tracks what you consume. This selection determines how you pay for this service."
    },
    columns: 2,
    options: [
      {
        label: "opaInstances.meteringModelExecutionPack",
        value: "EXECUTION_PACK",
        description: "opaInstances.meteringModelExecutionPackHint"
      },
      {
        label: "opaInstances.meteringModelUsers",
        value: "USERS",
        description: "Active users per hour."
      }
    ],
    validators: [
      {
        type: "required",
        message: "validation.chooseOption"
      }
    ]
  }
];
