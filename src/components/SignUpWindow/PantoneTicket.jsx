export default function PantoneTicket() {
  return (
    <PanetoneWrapper>
      <ColorDiv
        style={{
          background: hsvaToHex(hsva),
        }}
      ></ColorDiv>
      <WhiteDiv>
        <p>Lucky Color</p>
        <p>{hex}</p>
        <p>{colorName}</p>
      </WhiteDiv>
    </PanetoneWrapper>
  );
}
