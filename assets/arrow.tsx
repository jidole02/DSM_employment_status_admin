interface Props {
  isShow: boolean;
}

export default function Arrow({ isShow }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="14"
      viewBox="0 0 12 14"
      style={
        isShow
          ? {
              transform: "rotate(90deg)",
            }
          : {}
      }
    >
      <path
        id="다각형_1"
        data-name="다각형 1"
        d="M6.136,1.481a1,1,0,0,1,1.728,0L13.123,10.5a1,1,0,0,1-.864,1.5H1.741a1,1,0,0,1-.864-1.5Z"
        transform="translate(12) rotate(90)"
        fill={isShow ? "#4d63ef" : "#282937"}
      />
    </svg>
  );
}
