import React from "react";
import { FixedSizeList } from "react-window";
import faker from "faker";

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));

export default function App() {
  const renderRow = ({ index, style }) => (
    <div
      style={{
        ...style,
        ...{ display: "flex", width: "400px", textAlign: "center" }
      }}
    >
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p style={{ padding: "20px", color: "red" }}>
        Name: {bigList[index].name}
      </p>
      <p style={{ padding: "20px" }}>Email: {bigList[index].email}</p>
    </div>
  );

  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
}
