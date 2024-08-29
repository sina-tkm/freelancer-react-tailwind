import { ThreeDots } from "react-loader-spinner";

function Loading({ width = "75", height = "40" }) {
  return (
    <div>
      <ThreeDots
        width={width}
        height={height}
        color='rgb(var(--color-primary-900))'
        radius={9}
        wrapperStyle={{
          display: "flex",
          justifycontent: "center",
        }}
        visible={true}
      />
    </div>
  );
}

export default Loading;
