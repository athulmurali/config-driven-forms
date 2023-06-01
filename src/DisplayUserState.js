// ConfigDrivenForm component
export const DisplayStateData = ({ userState }) => {
  const formattedJson = JSON.stringify(userState, null, 4);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <pre
        style={{
          background: "black ",
          display: "flex",
          color: "skyblue",
          width: "400px",
          text: "center"
        }}
      >
        <code>{formattedJson}</code>
      </pre>
    </div>
  );
};
