import styled from "styled-components";

export const Main = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 752px;
  padding: 80px 20px 80px 60px;
  background-color: ${(props) => props.theme.colors.purple};
  @media screen and (max-width: 1024px) {
    min-height: 669px;
    padding: 100px 42px 90px;
  }
  @media screen and (max-width: 899px) {
    padding: 60px 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  column-gap: 14.6vw;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    column-gap: 90px;
  }
  @media screen and (max-width: 899px) {
    flex-direction: column-reverse;
    row-gap: 60px;
  }
`;

export const Body = styled.div`
  max-width: 630px;
  flex: 1;
  display: grid;
  row-gap: 32px;
  margin-top: 20px;
  grid-auto-rows: min-content;
  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
  @media screen and (max-width: 899px) {
    max-width: 480px;
    margin: auto;
  }
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.condensed};
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 59px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.roboto};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
`;

export const Img = styled.div`
  width: 300px;
  height: 100%;
  background-image: url("images/platform.png");
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (max-width: 1024px) {
    width: 240px;
    height: 486px;
    align-self: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 24px;
  margin-top: 30px;
`;

export const Button = styled.a`
  all: unset;
  display: inline-block;
  cursor: pointer;
  width: 120px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AppleButton = styled(Button)`
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='120' height='40' viewBox='0 0 120 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M110.135 7.92969e-06H9.53468C9.16798 7.92969e-06 8.80568 7.92975e-06 8.43995 0.00200793C8.1338 0.00400793 7.83009 0.00981793 7.521 0.0147079C6.84951 0.0226097 6.17961 0.0816842 5.5171 0.191418C4.85552 0.303541 4.21467 0.514924 3.61622 0.818418C3.0185 1.12448 2.47235 1.52218 1.99757 1.99708C1.5203 2.47064 1.12246 3.01802 0.81935 3.61817C0.5154 4.21712 0.304641 4.85895 0.19435 5.52149C0.0830109 6.18319 0.0230984 6.85253 0.01515 7.52349C0.00587 7.83009 0.00489 8.13771 0 8.44435V31.5586C0.00489 31.8691 0.00587 32.1699 0.01515 32.4805C0.0231008 33.1514 0.0830134 33.8207 0.19435 34.4824C0.304336 35.1453 0.515108 35.7875 0.81935 36.3867C1.12233 36.9849 1.52022 37.5301 1.99757 38.001C2.47054 38.478 3.01705 38.876 3.61622 39.1797C4.21467 39.484 4.85545 39.6967 5.5171 39.8105C6.17972 39.9194 6.84956 39.9785 7.521 39.9873C7.83009 39.9941 8.1338 39.998 8.43995 39.998C8.80567 40 9.168 40 9.53468 40H110.135C110.494 40 110.859 40 111.219 39.998C111.523 39.998 111.836 39.9941 112.141 39.9873C112.811 39.9789 113.479 39.9198 114.141 39.8105C114.804 39.6959 115.448 39.4833 116.049 39.1797C116.647 38.8758 117.193 38.4779 117.666 38.001C118.142 37.5282 118.541 36.9835 118.848 36.3867C119.15 35.7871 119.358 35.145 119.467 34.4824C119.578 33.8206 119.64 33.1515 119.652 32.4805C119.656 32.1699 119.656 31.8691 119.656 31.5586C119.664 31.1953 119.664 30.834 119.664 30.4648V9.53614C119.664 9.16993 119.664 8.80665 119.656 8.44435C119.656 8.13771 119.656 7.83009 119.652 7.52345C119.64 6.85243 119.578 6.18324 119.467 5.52145C119.358 4.85929 119.149 4.21751 118.848 3.61813C118.23 2.4152 117.252 1.43603 116.049 0.818328C115.448 0.515575 114.804 0.304248 114.141 0.191328C113.48 0.0811107 112.811 0.0220157 112.141 0.0145679C111.836 0.00968793 111.523 0.00382793 111.219 0.00187793C110.859 -0.00012207 110.494 -0.00012207 110.135 -0.00012207V7.92969e-06Z' fill='%23A6A6A6'/%3E%3Cpath d='M8.44487 39.125C8.14019 39.125 7.84287 39.1211 7.54058 39.1143C6.91436 39.1061 6.2896 39.0516 5.67144 38.9512C5.09503 38.8519 4.53664 38.6673 4.0147 38.4033C3.49754 38.1415 3.02585 37.7983 2.6177 37.3867C2.20364 36.98 1.85891 36.5082 1.59719 35.9902C1.33258 35.4688 1.14945 34.9099 1.05419 34.333C0.951311 33.7131 0.895651 33.0863 0.887687 32.458C0.881347 32.2471 0.873047 31.5449 0.873047 31.5449V8.44434C0.873047 8.44434 0.881887 7.75293 0.887737 7.5498C0.895363 6.92248 0.950699 6.29665 1.05327 5.67773C1.14871 5.09925 1.33197 4.53875 1.59673 4.01563C1.85749 3.49794 2.2003 3.02586 2.61187 2.61768C3.02297 2.20562 3.49617 1.8606 4.01421 1.59521C4.53495 1.33209 5.09228 1.14873 5.66753 1.05127C6.28772 0.949836 6.91465 0.894996 7.54304 0.88721L8.44536 0.875H111.214L112.127 0.8877C112.75 0.895099 113.371 0.94945 113.985 1.05029C114.566 1.14898 115.13 1.33362 115.656 1.59814C116.694 2.13299 117.539 2.97916 118.071 4.01807C118.332 4.53758 118.512 5.09351 118.607 5.66699C118.71 6.29099 118.768 6.92174 118.78 7.5542C118.783 7.8374 118.783 8.1416 118.783 8.44434C118.791 8.81934 118.791 9.17627 118.791 9.53613V30.4648C118.791 30.8281 118.791 31.1826 118.783 31.54C118.783 31.8652 118.783 32.1631 118.779 32.4697C118.768 33.0909 118.711 33.7104 118.608 34.3232C118.515 34.9043 118.333 35.4675 118.068 35.9932C117.805 36.5056 117.462 36.9733 117.053 37.3789C116.644 37.7927 116.172 38.1379 115.653 38.4014C115.128 38.6674 114.566 38.8527 113.985 38.9512C113.367 39.0522 112.742 39.1067 112.116 39.1143C111.823 39.1211 111.517 39.125 111.219 39.125L110.135 39.127L8.44487 39.125Z' fill='white'/%3E%3Cpath d='M24.769 20.3007C24.7797 19.466 25.0014 18.6477 25.4135 17.9217C25.8255 17.1957 26.4145 16.5858 27.1256 16.1486C26.6738 15.5035 26.0779 14.9725 25.385 14.598C24.6922 14.2234 23.9216 14.0156 23.1344 13.991C21.4552 13.8147 19.8272 14.9958 18.9715 14.9958C18.0992 14.9958 16.7817 14.0085 15.363 14.0376C14.4453 14.0673 13.551 14.3341 12.7671 14.8122C11.9832 15.2903 11.3365 15.9632 10.8901 16.7655C8.95607 20.1139 10.3987 25.035 12.2513 27.7416C13.1782 29.0669 14.2615 30.5474 15.6789 30.4949C17.066 30.4374 17.584 29.6104 19.2583 29.6104C20.9171 29.6104 21.4031 30.4949 22.8493 30.4615C24.3377 30.4374 25.2754 29.1303 26.1698 27.7924C26.8358 26.848 27.3483 25.8043 27.6882 24.6999C26.8235 24.3341 26.0856 23.722 25.5665 22.9397C25.0474 22.1574 24.77 21.2396 24.769 20.3007Z' fill='black'/%3E%3Cpath d='M22.0373 12.2109C22.8489 11.2367 23.2487 9.98451 23.1518 8.72028C21.912 8.8505 20.7668 9.44306 19.9443 10.3799C19.5421 10.8376 19.2341 11.37 19.0379 11.9468C18.8416 12.5235 18.761 13.1333 18.8006 13.7413C19.4207 13.7477 20.0342 13.6132 20.5949 13.3482C21.1555 13.0831 21.6487 12.6942 22.0373 12.2109Z' fill='black'/%3E%3Cpath d='M42.3025 27.1396H37.5691L36.4324 30.4961H34.4275L38.9109 18.0781H40.9939L45.4773 30.4961H43.4382L42.3025 27.1396ZM38.0593 25.5908H41.8113L39.9617 20.1435H39.91L38.0593 25.5908Z' fill='black'/%3E%3Cpath d='M55.1599 25.9697C55.1599 28.7832 53.6541 30.5908 51.3816 30.5908C50.806 30.6209 50.2335 30.4883 49.7297 30.2082C49.2259 29.928 48.8112 29.5117 48.533 29.0068H48.49V33.4912H46.6316V21.4423H48.4305V22.9482H48.4646C48.7556 22.4457 49.1773 22.0316 49.6849 21.7497C50.1926 21.4679 50.7671 21.3289 51.3474 21.3476C53.6453 21.3476 55.1599 23.164 55.1599 25.9697ZM53.2498 25.9697C53.2498 24.1367 52.3025 22.9316 50.8572 22.9316C49.4373 22.9316 48.4822 24.1621 48.4822 25.9697C48.4822 27.7939 49.4373 29.0156 50.8572 29.0156C52.3025 29.0156 53.2498 27.8193 53.2498 25.9697Z' fill='black'/%3E%3Cpath d='M65.1248 25.9697C65.1248 28.7832 63.6189 30.5908 61.3465 30.5908C60.7708 30.621 60.1983 30.4883 59.6945 30.2082C59.1907 29.9281 58.776 29.5117 58.4978 29.0068H58.4548V33.4912H56.5964V21.4424H58.3953V22.9483H58.4294C58.7204 22.4458 59.1421 22.0316 59.6498 21.7498C60.1574 21.4679 60.7319 21.329 61.3123 21.3477C63.6101 21.3477 65.1248 23.1641 65.1248 25.9697ZM63.2146 25.9697C63.2146 24.1367 62.2674 22.9317 60.822 22.9317C59.4021 22.9317 58.447 24.1621 58.447 25.9697C58.447 27.794 59.4021 29.0156 60.822 29.0156C62.2674 29.0156 63.2146 27.8194 63.2146 25.9697H63.2146Z' fill='black'/%3E%3Cpath d='M71.7107 27.0361C71.8484 28.2676 73.0447 29.0761 74.6795 29.0761C76.2459 29.0761 77.3728 28.2675 77.3728 27.1572C77.3728 26.1933 76.6931 25.6162 75.0838 25.2207L73.4744 24.833C71.1941 24.2822 70.1355 23.2158 70.1355 21.4853C70.1355 19.3427 72.0027 17.871 74.6541 17.871C77.2781 17.871 79.0769 19.3427 79.1375 21.4853H77.2615C77.1492 20.246 76.1248 19.498 74.6277 19.498C73.1306 19.498 72.1062 20.2548 72.1062 21.3564C72.1062 22.2343 72.7605 22.7509 74.3611 23.1464L75.7292 23.4823C78.2771 24.0849 79.3357 25.1083 79.3357 26.9247C79.3357 29.248 77.4851 30.703 74.5417 30.703C71.7878 30.703 69.9285 29.2821 69.8083 27.036L71.7107 27.0361Z' fill='black'/%3E%3Cpath d='M83.3464 19.2998V21.4424H85.0681V22.9141H83.3464V27.9053C83.3464 28.6807 83.6912 29.042 84.448 29.042C84.6524 29.0384 84.8564 29.0241 85.0593 28.999V30.4619C84.719 30.5255 84.3732 30.5543 84.0271 30.5478C82.1941 30.5478 81.4792 29.8593 81.4792 28.1035V22.9141H80.1628V21.4424H81.4792V19.2998H83.3464Z' fill='black'/%3E%3Cpath d='M86.0652 25.9697C86.0652 23.1211 87.7429 21.3311 90.3591 21.3311C92.9841 21.3311 94.6541 23.1211 94.6541 25.9697C94.6541 28.8262 92.9929 30.6084 90.3591 30.6084C87.7263 30.6084 86.0652 28.8262 86.0652 25.9697ZM92.7605 25.9697C92.7605 24.0156 91.865 22.8623 90.3591 22.8623C88.8533 22.8623 87.9587 24.0244 87.9587 25.9697C87.9587 27.9316 88.8533 29.0762 90.3591 29.0762C91.865 29.0762 92.7605 27.9316 92.7605 25.9697H92.7605Z' fill='black'/%3E%3Cpath d='M96.1863 21.4424H97.9587V22.9834H98.0017C98.1217 22.5021 98.4036 22.0768 98.8002 21.7789C99.1968 21.481 99.6838 21.3287 100.179 21.3476C100.394 21.3469 100.607 21.3702 100.816 21.417V23.1553C100.546 23.0726 100.264 23.0347 99.9812 23.043C99.7112 23.032 99.4421 23.0796 99.1922 23.1825C98.9424 23.2854 98.7178 23.4411 98.5338 23.639C98.3498 23.8369 98.2108 24.0723 98.1264 24.3289C98.042 24.5856 98.0141 24.8575 98.0447 25.126V30.4961H96.1863L96.1863 21.4424Z' fill='black'/%3E%3Cpath d='M109.385 27.8369C109.135 29.4805 107.534 30.6084 105.486 30.6084C102.852 30.6084 101.218 28.8437 101.218 26.0127C101.218 23.1729 102.861 21.3311 105.408 21.3311C107.913 21.3311 109.488 23.0518 109.488 25.7969V26.4336H103.094V26.5459C103.064 26.8791 103.106 27.2148 103.216 27.5306C103.326 27.8464 103.502 28.1352 103.733 28.3778C103.963 28.6203 104.242 28.8111 104.552 28.9374C104.862 29.0637 105.195 29.1226 105.529 29.1103C105.968 29.1515 106.409 29.0498 106.786 28.8203C107.162 28.5909 107.455 28.246 107.62 27.8369L109.385 27.8369ZM103.102 25.1348H107.629C107.645 24.8352 107.6 24.5354 107.495 24.2541C107.391 23.9729 107.229 23.7164 107.02 23.5006C106.812 23.2849 106.561 23.1145 106.284 23.0003C106.006 22.8861 105.708 22.8305 105.408 22.8369C105.105 22.8351 104.805 22.8933 104.525 23.008C104.245 23.1227 103.991 23.2918 103.776 23.5054C103.562 23.7191 103.392 23.973 103.276 24.2527C103.161 24.5323 103.102 24.8321 103.102 25.1348V25.1348Z' fill='black'/%3E%3Cpath d='M37.8262 8.73101C38.2158 8.70305 38.6067 8.76191 38.9709 8.90335C39.335 9.04478 39.6632 9.26526 39.9317 9.54889C40.2003 9.83251 40.4026 10.1722 40.524 10.5435C40.6454 10.9148 40.6829 11.3083 40.6338 11.6959C40.6338 13.6021 39.6035 14.6979 37.8262 14.6979H35.6709V8.73101H37.8262ZM36.5976 13.854H37.7226C38.0011 13.8707 38.2797 13.825 38.5382 13.7204C38.7967 13.6158 39.0287 13.4548 39.2172 13.2493C39.4057 13.0437 39.546 12.7987 39.6278 12.5321C39.7097 12.2655 39.7311 11.9839 39.6904 11.708C39.7281 11.4332 39.7046 11.1534 39.6215 10.8887C39.5383 10.6241 39.3977 10.3811 39.2096 10.1771C39.0216 9.97322 38.7907 9.81341 38.5337 9.70917C38.2766 9.60494 37.9996 9.55885 37.7226 9.57422H36.5976V13.854Z' fill='black'/%3E%3Cpath d='M41.6807 12.4443C41.6524 12.1484 41.6862 11.8499 41.7801 11.5678C41.8739 11.2857 42.0257 11.0264 42.2256 10.8064C42.4256 10.5864 42.6693 10.4107 42.9411 10.2904C43.213 10.1701 43.507 10.108 43.8042 10.108C44.1015 10.108 44.3955 10.1701 44.6673 10.2904C44.9392 10.4107 45.1829 10.5864 45.3828 10.8064C45.5828 11.0264 45.7345 11.2857 45.8284 11.5678C45.9222 11.8499 45.9561 12.1484 45.9278 12.4443C45.9566 12.7406 45.9232 13.0396 45.8296 13.3221C45.736 13.6046 45.5843 13.8644 45.3843 14.0848C45.1843 14.3052 44.9404 14.4814 44.6683 14.6019C44.3962 14.7225 44.1019 14.7847 43.8042 14.7847C43.5066 14.7847 43.2123 14.7225 42.9402 14.6019C42.668 14.4814 42.4241 14.3052 42.2241 14.0848C42.0242 13.8644 41.8725 13.6046 41.7789 13.3221C41.6853 13.0396 41.6519 12.7406 41.6807 12.4443ZM45.0137 12.4443C45.0137 11.4683 44.5752 10.8975 43.8057 10.8975C43.0332 10.8975 42.5987 11.4683 42.5987 12.4444C42.5987 13.4282 43.0333 13.9946 43.8057 13.9946C44.5752 13.9946 45.0137 13.4243 45.0137 12.4443H45.0137Z' fill='black'/%3E%3Cpath d='M51.5732 14.6978H50.6514L49.7207 11.3813H49.6504L48.7236 14.6978H47.8105L46.5693 10.1948H47.4707L48.2773 13.6308H48.3438L49.2695 10.1948H50.1221L51.0479 13.6308H51.1182L51.9209 10.1948H52.8096L51.5732 14.6978Z' fill='black'/%3E%3Cpath d='M53.8535 10.1948H54.709V10.9101H54.7754C54.888 10.6532 55.0781 10.4378 55.3189 10.294C55.5598 10.1502 55.8395 10.0852 56.1191 10.1079C56.3382 10.0914 56.5582 10.1244 56.7628 10.2045C56.9674 10.2846 57.1514 10.4097 57.3011 10.5706C57.4508 10.7314 57.5623 10.9239 57.6275 11.1337C57.6927 11.3435 57.7099 11.5653 57.6777 11.7827V14.6977H56.7891V12.0058C56.7891 11.2822 56.4746 10.9223 55.8174 10.9223C55.6686 10.9154 55.5201 10.9407 55.3821 10.9966C55.244 11.0524 55.1197 11.1374 55.0175 11.2458C54.9154 11.3542 54.8379 11.4834 54.7904 11.6245C54.7429 11.7656 54.7264 11.9154 54.7422 12.0635V14.6977H53.8535L53.8535 10.1948Z' fill='black'/%3E%3Cpath d='M59.0938 8.43701H59.9824V14.6978H59.0938V8.43701Z' fill='black'/%3E%3Cpath d='M61.2178 12.4444C61.1895 12.1484 61.2234 11.8499 61.3172 11.5678C61.4111 11.2857 61.5629 11.0263 61.7628 10.8064C61.9628 10.5864 62.2065 10.4106 62.4784 10.2903C62.7503 10.17 63.0443 10.1079 63.3416 10.1079C63.6389 10.1079 63.9329 10.17 64.2047 10.2903C64.4766 10.4106 64.7203 10.5864 64.9203 10.8064C65.1203 11.0263 65.272 11.2857 65.3659 11.5678C65.4598 11.8499 65.4936 12.1484 65.4653 12.4444C65.4942 12.7406 65.4607 13.0396 65.3671 13.3221C65.2734 13.6046 65.1217 13.8645 64.9217 14.0849C64.7217 14.3053 64.4778 14.4814 64.2057 14.6019C63.9335 14.7225 63.6392 14.7847 63.3416 14.7847C63.0439 14.7847 62.7496 14.7225 62.4775 14.6019C62.2053 14.4814 61.9614 14.3053 61.7614 14.0849C61.5614 13.8645 61.4097 13.6046 61.3161 13.3221C61.2225 13.0396 61.189 12.7406 61.2178 12.4444ZM64.5508 12.4444C64.5508 11.4683 64.1123 10.8975 63.3428 10.8975C62.5703 10.8975 62.1358 11.4683 62.1358 12.4444C62.1358 13.4283 62.5704 13.9947 63.3428 13.9947C64.1123 13.9947 64.5508 13.4244 64.5508 12.4444H64.5508Z' fill='black'/%3E%3Cpath d='M66.4009 13.4243C66.4009 12.6138 67.0044 12.1465 68.0757 12.0801L69.2954 12.0098V11.6211C69.2954 11.1455 68.981 10.877 68.3735 10.877C67.8774 10.877 67.5337 11.0591 67.4351 11.3774H66.5747C66.6655 10.604 67.3931 10.1079 68.4146 10.1079C69.5435 10.1079 70.1802 10.6699 70.1802 11.6211V14.6978H69.3247V14.0649H69.2544C69.1117 14.2919 68.9113 14.477 68.6737 14.6012C68.436 14.7254 68.1697 14.7843 67.9019 14.7719C67.7128 14.7916 67.5218 14.7714 67.341 14.7127C67.1602 14.654 66.9938 14.5581 66.8524 14.4311C66.711 14.3042 66.5977 14.149 66.52 13.9756C66.4422 13.8021 66.4016 13.6144 66.4009 13.4243ZM69.2954 13.0395V12.6631L68.1958 12.7334C67.5757 12.7749 67.2944 12.9858 67.2944 13.3828C67.2944 13.7881 67.646 14.0239 68.1294 14.0239C68.2711 14.0382 68.4142 14.0239 68.5502 13.9819C68.6862 13.9398 68.8123 13.8707 68.9211 13.7789C69.0299 13.6871 69.1191 13.5743 69.1834 13.4473C69.2477 13.3202 69.2858 13.1816 69.2954 13.0395Z' fill='black'/%3E%3Cpath d='M71.3481 12.4444C71.3481 11.0215 72.0796 10.1201 73.2173 10.1201C73.4987 10.1072 73.778 10.1746 74.0225 10.3145C74.267 10.4544 74.4667 10.661 74.5981 10.9101H74.6646V8.43701H75.5532V14.6978H74.7017V13.9863H74.6314C74.4897 14.2338 74.2831 14.4378 74.0339 14.5763C73.7846 14.7148 73.5022 14.7825 73.2173 14.772C72.0718 14.772 71.3481 13.8706 71.3481 12.4444ZM72.2661 12.4444C72.2661 13.3994 72.7163 13.9741 73.4693 13.9741C74.2183 13.9741 74.6812 13.3911 74.6812 12.4483C74.6812 11.5098 74.2134 10.9185 73.4693 10.9185C72.7212 10.9185 72.2661 11.4971 72.2661 12.4444H72.2661Z' fill='black'/%3E%3Cpath d='M79.23 12.4443C79.2017 12.1484 79.2356 11.8499 79.3294 11.5678C79.4232 11.2857 79.575 11.0264 79.7749 10.8064C79.9749 10.5864 80.2186 10.4107 80.4904 10.2904C80.7623 10.1701 81.0563 10.108 81.3536 10.108C81.6508 10.108 81.9448 10.1701 82.2167 10.2904C82.4885 10.4107 82.7322 10.5864 82.9322 10.8064C83.1321 11.0264 83.2839 11.2857 83.3777 11.5678C83.4715 11.8499 83.5054 12.1484 83.4771 12.4443C83.5059 12.7406 83.4725 13.0396 83.3789 13.3221C83.2853 13.6046 83.1336 13.8644 82.9336 14.0848C82.7336 14.3052 82.4897 14.4814 82.2176 14.6019C81.9455 14.7225 81.6512 14.7847 81.3536 14.7847C81.0559 14.7847 80.7616 14.7225 80.4895 14.6019C80.2173 14.4814 79.9735 14.3052 79.7735 14.0848C79.5735 13.8644 79.4218 13.6046 79.3282 13.3221C79.2346 13.0396 79.2012 12.7406 79.23 12.4443ZM82.563 12.4443C82.563 11.4683 82.1245 10.8975 81.355 10.8975C80.5826 10.8975 80.148 11.4683 80.148 12.4444C80.148 13.4282 80.5826 13.9946 81.355 13.9946C82.1245 13.9946 82.563 13.4243 82.563 12.4443Z' fill='black'/%3E%3Cpath d='M84.6694 10.1948H85.5249V10.9101H85.5913C85.704 10.6532 85.894 10.4378 86.1348 10.294C86.3757 10.1502 86.6555 10.0852 86.9351 10.1079C87.1542 10.0914 87.3742 10.1244 87.5788 10.2045C87.7834 10.2846 87.9673 10.4097 88.117 10.5706C88.2667 10.7314 88.3783 10.9239 88.4435 11.1337C88.5087 11.3435 88.5258 11.5653 88.4937 11.7827V14.6977H87.605V12.0058C87.605 11.2822 87.2905 10.9223 86.6333 10.9223C86.4846 10.9154 86.336 10.9407 86.198 10.9966C86.0599 11.0524 85.9356 11.1374 85.8335 11.2458C85.7313 11.3542 85.6539 11.4834 85.6063 11.6245C85.5588 11.7656 85.5423 11.9154 85.5581 12.0635V14.6977H84.6694V10.1948Z' fill='black'/%3E%3Cpath d='M93.5151 9.07373V10.2153H94.4907V10.9639H93.5151V13.2793C93.5151 13.751 93.7095 13.9575 94.1519 13.9575C94.2651 13.9572 94.3783 13.9503 94.4907 13.937V14.6772C94.3311 14.7058 94.1694 14.721 94.0073 14.7226C93.019 14.7226 92.6255 14.375 92.6255 13.5068V10.9638H91.9106V10.2153H92.6255V9.07373H93.5151Z' fill='black'/%3E%3Cpath d='M95.7046 8.43701H96.5854V10.9185H96.6558C96.7739 10.6591 96.9691 10.4425 97.2148 10.2982C97.4605 10.1539 97.7447 10.0888 98.0288 10.1118C98.2467 10.1 98.4646 10.1364 98.6669 10.2184C98.8692 10.3004 99.0508 10.4261 99.199 10.5864C99.3471 10.7468 99.458 10.9378 99.5238 11.146C99.5896 11.3541 99.6086 11.5742 99.5795 11.7905V14.6978H98.69V12.0098C98.69 11.2905 98.355 10.9263 97.7271 10.9263C97.5743 10.9137 97.4207 10.9347 97.2769 10.9878C97.1332 11.0408 97.0027 11.1247 96.8947 11.2334C96.7867 11.3421 96.7038 11.4732 96.6517 11.6173C96.5997 11.7614 96.5797 11.9152 96.5933 12.0679V14.6977H95.7046L95.7046 8.43701Z' fill='black'/%3E%3Cpath d='M104.761 13.4819C104.64 13.8935 104.379 14.2495 104.022 14.4876C103.665 14.7258 103.236 14.8309 102.81 14.7847C102.513 14.7925 102.218 14.7357 101.946 14.6182C101.673 14.5006 101.43 14.3252 101.232 14.1041C101.034 13.8829 100.887 13.6214 100.8 13.3376C100.713 13.0537 100.689 12.7544 100.73 12.4605C100.69 12.1656 100.715 11.8656 100.801 11.581C100.888 11.2963 101.034 11.0335 101.231 10.8105C101.428 10.5874 101.671 10.4092 101.942 10.288C102.214 10.1668 102.509 10.1054 102.806 10.1079C104.059 10.1079 104.815 10.9639 104.815 12.3779V12.688H101.635V12.7378C101.621 12.9031 101.642 13.0694 101.696 13.2261C101.75 13.3829 101.837 13.5266 101.949 13.6481C102.062 13.7695 102.199 13.866 102.352 13.9314C102.504 13.9968 102.669 14.0297 102.834 14.0278C103.047 14.0533 103.262 14.0151 103.453 13.9178C103.644 13.8206 103.801 13.6689 103.906 13.4819L104.761 13.4819ZM101.635 12.0308H103.91C103.921 11.8796 103.9 11.7278 103.849 11.5851C103.798 11.4424 103.718 11.3119 103.614 11.2021C103.509 11.0922 103.383 11.0054 103.243 10.9472C103.103 10.8891 102.953 10.8608 102.801 10.8643C102.647 10.8623 102.495 10.8912 102.353 10.9491C102.21 11.0071 102.081 11.0929 101.972 11.2017C101.864 11.3104 101.778 11.4397 101.72 11.5821C101.662 11.7245 101.633 11.8771 101.635 12.0308H101.635Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='119.664' height='40' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
`;

export const GoogleButton = styled(Button)`
  background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='120pt' height='40pt' viewBox='0 0 120 40' version='1.1'%3E%3Cdefs%3E%3ClinearGradient id='linear0' gradientUnits='userSpaceOnUse' x1='21.8' y1='33.29' x2='5.017' y2='16.508' gradientTransform='matrix(0.888889,0,0,-0.99965,0,41.992303)'%3E%3Cstop offset='0' style='stop-color:rgb(0%25,62.745098%25,100%25);stop-opacity:1;'/%3E%3Cstop offset='0.007' style='stop-color:rgb(0%25,63.137255%25,100%25);stop-opacity:1;'/%3E%3Cstop offset='0.26' style='stop-color:rgb(0%25,74.509804%25,100%25);stop-opacity:1;'/%3E%3Cstop offset='0.512' style='stop-color:rgb(0%25,82.352941%25,100%25);stop-opacity:1;'/%3E%3Cstop offset='0.76' style='stop-color:rgb(0%25,87.45098%25,100%25);stop-opacity:1;'/%3E%3Cstop offset='1' style='stop-color:rgb(0%25,89.019608%25,100%25);stop-opacity:1;'/%3E%3C/linearGradient%3E%3ClinearGradient id='linear1' gradientUnits='userSpaceOnUse' x1='33.834' y1='21.999' x2='9.637' y2='21.999' gradientTransform='matrix(0.888889,0,0,-0.99965,0,41.992303)'%3E%3Cstop offset='0' style='stop-color:rgb(100%25,87.843137%25,0%25);stop-opacity:1;'/%3E%3Cstop offset='0.409' style='stop-color:rgb(100%25,74.117647%25,0%25);stop-opacity:1;'/%3E%3Cstop offset='0.775' style='stop-color:rgb(100%25,64.705882%25,0%25);stop-opacity:1;'/%3E%3Cstop offset='1' style='stop-color:rgb(100%25,61.176471%25,0%25);stop-opacity:1;'/%3E%3C/linearGradient%3E%3ClinearGradient id='linear2' gradientUnits='userSpaceOnUse' x1='24.827' y1='19.704' x2='2.069' y2='-3.054' gradientTransform='matrix(0.888889,0,0,-0.99965,0,41.992303)'%3E%3Cstop offset='0' style='stop-color:rgb(100%25,22.745098%25,26.666667%25);stop-opacity:1;'/%3E%3Cstop offset='1' style='stop-color:rgb(76.470588%25,6.666667%25,38.431373%25);stop-opacity:1;'/%3E%3C/linearGradient%3E%3ClinearGradient id='linear3' gradientUnits='userSpaceOnUse' x1='7.297' y1='41.824' x2='17.46' y2='31.661' gradientTransform='matrix(0.888889,0,0,-0.99965,0,41.992303)'%3E%3Cstop offset='0' style='stop-color:rgb(19.607843%25,62.745098%25,44.313725%25);stop-opacity:1;'/%3E%3Cstop offset='0.069' style='stop-color:rgb(17.647059%25,65.490196%25,44.313725%25);stop-opacity:1;'/%3E%3Cstop offset='0.476' style='stop-color:rgb(8.235294%25,81.176471%25,45.490196%25);stop-opacity:1;'/%3E%3Cstop offset='0.801' style='stop-color:rgb(2.352941%25,90.588235%25,45.882353%25);stop-opacity:1;'/%3E%3Cstop offset='1' style='stop-color:rgb(0%25,94.117647%25,46.27451%25);stop-opacity:1;'/%3E%3C/linearGradient%3E%3Cfilter id='alpha' filterUnits='objectBoundingBox' x='0%25' y='0%25' width='100%25' height='100%25'%3E%3CfeColorMatrix type='matrix' in='SourceGraphic' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/%3E%3C/filter%3E%3Cmask id='mask0'%3E%3Cg filter='url(%23alpha)'%3E%3Crect x='0' y='0' width='120' height='40' style='fill:rgb(0%25,0%25,0%25);fill-opacity:0.2;stroke:none;'/%3E%3C/g%3E%3C/mask%3E%3CclipPath id='clip1'%3E%3Crect x='0' y='0' width='120' height='40'/%3E%3C/clipPath%3E%3Cg id='surface5' clip-path='url(%23clip1)'%3E%3Cpath style=' stroke:none;fill-rule:nonzero;fill:rgb(0%25,0%25,0%25);fill-opacity:1;' d='M 24 24.097656 L 11.109375 32.296875 C 10.398438 32.796875 9.777344 32.695312 9.332031 32.296875 L 9.246094 32.394531 L 9.332031 32.496094 C 9.777344 32.894531 10.398438 32.996094 11.109375 32.496094 Z M 24 24.097656 '/%3E%3C/g%3E%3Cmask id='mask1'%3E%3Cg filter='url(%23alpha)'%3E%3Crect x='0' y='0' width='120' height='40' style='fill:rgb(0%25,0%25,0%25);fill-opacity:0.121569;stroke:none;'/%3E%3C/g%3E%3C/mask%3E%3CclipPath id='clip2'%3E%3Crect x='0' y='0' width='120' height='40'/%3E%3C/clipPath%3E%3Cg id='surface8' clip-path='url(%23clip2)'%3E%3Cpath style=' stroke:none;fill-rule:nonzero;fill:rgb(0%25,0%25,0%25);fill-opacity:1;' d='M 9.246094 32.296875 C 8.976562 31.996094 8.890625 31.496094 8.890625 30.894531 L 8.890625 30.996094 C 8.890625 31.597656 9.066406 32.097656 9.332031 32.394531 L 9.332031 32.296875 Z M 28.445312 21.300781 L 24 24.097656 L 24.089844 24.199219 L 28.445312 21.398438 C 29.066406 21 29.332031 20.5 29.332031 20 C 29.332031 20.5 28.976562 20.898438 28.445312 21.300781 Z M 28.445312 21.300781 '/%3E%3C/g%3E%3Cmask id='mask2'%3E%3Cg filter='url(%23alpha)'%3E%3Crect x='0' y='0' width='120' height='40' style='fill:rgb(0%25,0%25,0%25);fill-opacity:0.25098;stroke:none;'/%3E%3C/g%3E%3C/mask%3E%3CclipPath id='clip3'%3E%3Crect x='0' y='0' width='120' height='40'/%3E%3C/clipPath%3E%3Cg id='surface11' clip-path='url(%23clip3)'%3E%3Cpath style=' stroke:none;fill-rule:nonzero;fill:rgb(100%25,100%25,100%25);fill-opacity:1;' d='M 11.109375 7.605469 L 28.445312 18.699219 C 28.976562 19.101562 29.332031 19.5 29.332031 20 C 29.332031 19.5 29.066406 19 28.445312 18.601562 L 11.109375 7.503906 C 9.867188 6.703125 8.890625 7.304688 8.890625 8.902344 L 8.890625 9.003906 C 8.890625 7.503906 9.867188 6.804688 11.109375 7.605469 Z M 11.109375 7.605469 '/%3E%3C/g%3E%3C/defs%3E%3Cg id='surface1'%3E%3Cpath style=' stroke:none;fill-rule:nonzero;fill:rgb(0%25,0%25,0%25);fill-opacity:1;' d='M 115.554688 39.992188 L 4.445312 39.992188 C 1.957031 39.992188 0 37.792969 0 34.996094 L 0 5.003906 C 0 2.207031 1.957031 0.0078125 4.445312 0.0078125 L 115.554688 0.0078125 C 118.042969 0.0078125 120 2.207031 120 5.003906 L 120 34.996094 C 120 37.792969 118.042969 39.992188 115.554688 39.992188 Z M 115.554688 39.992188 '/%3E%3Cpath style=' stroke:none;fill-rule:nonzero;fill:rgb(65.098039%25,65.098039%25,65.098039%25);fill-opacity:1;' d='M 115.554688 0.808594 C 117.601562 0.808594 119.289062 2.707031 119.289062 5.003906 L 119.289062 34.996094 C 119.289062 37.292969 117.601562 39.191406 115.554688 39.191406 L 4.445312 39.191406 C 2.398438 39.191406 0.710938 37.292969 0.710938 34.996094 L 0.710938 5.003906 C 0.710938 2.707031 2.398438 0.808594 4.445312 0.808594 Z M 115.554688 0.0078125 L 4.445312 0.0078125 C 1.957031 0.0078125 0 2.304688 0 5.003906 L 0 34.996094 C 0 37.792969 1.957031 39.992188 4.445312 39.992188 L 115.554688 39.992188 C 118.042969 39.992188 120 37.792969 120 34.996094 L 120 5.003906 C 120 2.304688 118.042969 0.0078125 115.554688 0.0078125 Z M 115.554688 0.0078125 '/%3E%3Cpath style='fill-rule:nonzero;fill:rgb(100%25,100%25,100%25);fill-opacity:1;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%25,100%25,100%25);stroke-opacity:1;stroke-miterlimit:10;' d='M 47.399414 10.199696 C 47.399414 11.000758 47.20166 11.700221 46.700684 12.200396 C 46.098633 12.798262 45.399902 13.099148 44.499023 13.099148 C 43.598145 13.099148 42.899414 12.798262 42.301758 12.200396 C 41.699707 11.598623 41.400879 10.89916 41.400879 10.000408 C 41.400879 9.101656 41.699707 8.398285 42.301758 7.800419 C 42.899414 7.198646 43.598145 6.901667 44.499023 6.901667 C 44.898926 6.901667 45.298828 6.999358 45.69873 7.198646 C 46.098633 7.401842 46.401855 7.601131 46.599609 7.89811 L 46.098633 8.398285 C 45.69873 7.89811 45.202148 7.698821 44.499023 7.698821 C 43.901367 7.698821 43.299316 7.89811 42.899414 8.398285 C 42.398438 8.800769 42.200684 9.398635 42.200684 10.098098 C 42.200684 10.801469 42.398438 11.399335 42.899414 11.801819 C 43.400391 12.200396 43.901367 12.501283 44.499023 12.501283 C 45.202148 12.501283 45.69873 12.298087 46.199707 11.801819 C 46.498535 11.500933 46.700684 11.098448 46.700684 10.598273 L 44.499023 10.598273 L 44.499023 9.801119 L 47.399414 9.801119 Z M 52.000488 7.698821 L 49.297852 7.698821 L 49.297852 9.601831 L 51.79834 9.601831 L 51.79834 10.301294 L 49.297852 10.301294 L 49.297852 12.200396 L 52.000488 12.200396 L 52.000488 13.001458 L 48.498047 13.001458 L 48.498047 6.999358 L 52.000488 6.999358 Z M 55.300781 13.001458 L 54.500977 13.001458 L 54.500977 7.698821 L 52.800293 7.698821 L 52.800293 6.999358 L 57.001465 6.999358 L 57.001465 7.698821 L 55.300781 7.698821 Z M 59.901855 13.001458 L 59.901855 6.999358 L 60.70166 6.999358 L 60.70166 13.001458 Z M 64.098633 13.001458 L 63.298828 13.001458 L 63.298828 7.698821 L 61.598145 7.698821 L 61.598145 6.999358 L 65.698242 6.999358 L 65.698242 7.698821 L 64.001953 7.698821 L 64.001953 13.001458 Z M 73.599609 12.200396 C 73.001953 12.798262 72.298828 13.099148 71.397949 13.099148 C 70.501465 13.099148 69.79834 12.798262 69.200684 12.200396 C 68.598633 11.598623 68.299805 10.89916 68.299805 10.000408 C 68.299805 9.101656 68.598633 8.398285 69.200684 7.800419 C 69.79834 7.198646 70.501465 6.901667 71.397949 6.901667 C 72.298828 6.901667 73.001953 7.198646 73.599609 7.800419 C 74.20166 8.398285 74.500488 9.101656 74.500488 10.000408 C 74.500488 10.89916 74.20166 11.598623 73.599609 12.200396 Z M 69.79834 11.700221 C 70.198242 12.098798 70.800293 12.399685 71.397949 12.399685 C 72 12.399685 72.602051 12.200396 73.001953 11.700221 C 73.401855 11.301644 73.700684 10.699871 73.700684 10.000408 C 73.700684 9.300944 73.498535 8.699171 73.001953 8.300594 C 72.602051 7.89811 72 7.601131 71.397949 7.601131 C 70.800293 7.601131 70.198242 7.800419 69.79834 8.300594 C 69.398438 8.699171 69.099609 9.300944 69.099609 10.000408 C 69.099609 10.699871 69.301758 11.301644 69.79834 11.700221 Z M 75.599121 13.001458 L 75.599121 6.999358 L 76.5 6.999358 L 79.400391 11.700221 L 79.400391 6.999358 L 80.200195 6.999358 L 80.200195 13.001458 L 79.400391 13.001458 L 76.297852 8.101306 L 76.297852 13.001458 Z M 75.599121 13.001458 ' transform='matrix(0.888889,0,0,0.99965,0,0.00699755)'/%3E%3Cpath style=' stroke:none;fill-rule:nonzero;fill:rgb(100%25,100%25,100%25);fill-opacity:1;' d='M 60.535156 21.800781 C 58.398438 21.800781 56.710938 23.597656 56.710938 26.097656 C 56.710938 28.496094 58.398438 30.394531 60.535156 30.394531 C 62.667969 30.394531 64.355469 28.597656 64.355469 26.097656 C 64.355469 23.5 62.667969 21.800781 60.535156 21.800781 Z M 60.535156 28.597656 C 59.378906 28.597656 58.398438 27.496094 58.398438 25.996094 C 58.398438 24.5 59.378906 23.398438 60.535156 23.398438 C 61.6875 23.398438 62.667969 24.398438 62.667969 25.996094 C 62.667969 27.496094 61.6875 28.597656 60.535156 28.597656 Z M 52.265625 21.800781 C 50.132812 21.800781 48.445312 23.597656 48.445312 26.097656 C 48.445312 28.496094 50.132812 30.394531 52.265625 30.394531 C 54.398438 30.394531 56.089844 28.597656 56.089844 26.097656 C 56.089844 23.5 54.398438 21.800781 52.265625 21.800781 Z M 52.265625 28.597656 C 51.109375 28.597656 50.132812 27.496094 50.132812 25.996094 C 50.132812 24.5 51.109375 23.398438 52.265625 23.398438 C 53.421875 23.398438 54.398438 24.398438 54.398438 25.996094 C 54.398438 27.496094 53.421875 28.597656 52.265625 28.597656 Z M 42.398438 23.097656 L 42.398438 24.898438 L 46.222656 24.898438 C 46.132812 25.898438 45.777344 26.699219 45.332031 27.199219 C 44.800781 27.796875 43.910156 28.496094 42.398438 28.496094 C 40 28.496094 38.222656 26.398438 38.222656 23.699219 C 38.222656 21 40.089844 18.898438 42.398438 18.898438 C 43.644531 18.898438 44.621094 19.5 45.332031 20.199219 L 46.488281 18.898438 C 45.511719 17.902344 44.265625 17.101562 42.488281 17.101562 C 39.289062 17.101562 36.535156 20.101562 36.535156 23.699219 C 36.535156 27.296875 39.289062 30.296875 42.488281 30.296875 C 44.265625 30.296875 45.511719 29.695312 46.578125 28.398438 C 47.644531 27.199219 48 25.5 48 24.199219 C 48 23.796875 48 23.398438 47.910156 23.097656 Z M 82.753906 24.5 C 82.398438 23.5 81.511719 21.800781 79.554688 21.800781 C 77.601562 21.800781 76 23.5 76 26.097656 C 76 28.496094 77.601562 30.394531 79.734375 30.394531 C 81.421875 30.394531 82.488281 29.195312 82.84375 28.496094 L 81.601562 27.496094 C 81.15625 28.195312 80.621094 28.695312 79.734375 28.695312 C 78.84375 28.695312 78.3125 28.296875 77.867188 27.398438 L 82.933594 25 Z M 77.601562 25.898438 C 77.601562 24.296875 78.753906 23.398438 79.554688 23.398438 C 80.179688 23.398438 80.800781 23.796875 80.976562 24.296875 Z M 73.421875 29.996094 L 75.109375 29.996094 L 75.109375 17.5 L 73.421875 17.5 Z M 70.753906 22.699219 C 70.3125 22.199219 69.601562 21.699219 68.710938 21.699219 C 66.84375 21.699219 65.066406 23.597656 65.066406 25.996094 C 65.066406 28.398438 66.753906 30.195312 68.710938 30.195312 C 69.601562 30.195312 70.3125 29.695312 70.667969 29.195312 L 70.753906 29.195312 L 70.753906 29.796875 C 70.753906 31.394531 69.957031 32.296875 68.710938 32.296875 C 67.734375 32.296875 67.023438 31.496094 66.84375 30.796875 L 65.421875 31.496094 C 65.867188 32.59375 66.933594 33.996094 68.800781 33.996094 C 70.753906 33.996094 72.355469 32.695312 72.355469 29.597656 L 72.355469 22 L 70.753906 22 Z M 68.800781 28.597656 C 67.644531 28.597656 66.667969 27.496094 66.667969 25.996094 C 66.667969 24.5 67.644531 23.398438 68.800781 23.398438 C 69.957031 23.398438 70.84375 24.5 70.84375 25.996094 C 70.84375 27.496094 69.957031 28.597656 68.800781 28.597656 Z M 90.488281 17.5 L 86.488281 17.5 L 86.488281 29.996094 L 88.179688 29.996094 L 88.179688 25.296875 L 90.488281 25.296875 C 92.355469 25.296875 94.132812 23.796875 94.132812 21.398438 C 94.132812 19 92.355469 17.5 90.488281 17.5 Z M 90.578125 23.5 L 88.179688 23.5 L 88.179688 19.199219 L 90.578125 19.199219 C 91.820312 19.199219 92.535156 20.398438 92.535156 21.300781 C 92.445312 22.398438 91.734375 23.5 90.578125 23.5 Z M 100.800781 21.699219 C 99.554688 21.699219 98.3125 22.300781 97.867188 23.597656 L 99.378906 24.296875 C 99.734375 23.597656 100.265625 23.398438 100.890625 23.398438 C 101.777344 23.398438 102.578125 24 102.667969 25 L 102.667969 25.097656 C 102.398438 24.898438 101.6875 24.597656 100.976562 24.597656 C 99.378906 24.597656 97.777344 25.597656 97.777344 27.398438 C 97.777344 29.097656 99.109375 30.195312 100.535156 30.195312 C 101.6875 30.195312 102.222656 29.597656 102.667969 28.996094 L 102.753906 28.996094 L 102.753906 29.996094 L 104.355469 29.996094 L 104.355469 25.199219 C 104.179688 23 102.667969 21.699219 100.800781 21.699219 Z M 100.621094 28.597656 C 100.089844 28.597656 99.289062 28.296875 99.289062 27.496094 C 99.289062 26.496094 100.265625 26.199219 101.066406 26.199219 C 101.777344 26.199219 102.132812 26.398438 102.578125 26.597656 C 102.398438 27.796875 101.511719 28.597656 100.621094 28.597656 Z M 109.957031 22 L 108.089844 27.398438 L 108 27.398438 L 106.042969 22 L 104.265625 22 L 107.199219 29.597656 L 105.511719 33.796875 L 107.199219 33.796875 L 111.734375 22 Z M 95.023438 29.996094 L 96.710938 29.996094 L 96.710938 17.5 L 95.023438 17.5 Z M 95.023438 29.996094 '/%3E%3Cpath style=' stroke:none;fill-rule:nonzero;fill:url(%23linear0);' d='M 9.246094 7.503906 C 8.976562 7.804688 8.890625 8.304688 8.890625 8.902344 L 8.890625 30.996094 C 8.890625 31.597656 9.066406 32.097656 9.332031 32.394531 L 9.421875 32.496094 L 20.445312 20.101562 L 20.445312 19.898438 Z M 9.246094 7.503906 '/%3E%3Cpath style=' stroke:none;fill-rule:nonzero;fill:url(%23linear1);' d='M 24 24.296875 L 20.355469 20.199219 L 20.355469 19.898438 L 24 15.800781 L 24.089844 15.902344 L 28.445312 18.699219 C 29.6875 19.5 29.6875 20.800781 28.445312 21.597656 Z M 24 24.296875 '/%3E%3Cpath style=' stroke:none;fill-rule:nonzero;fill:url(%23linear2);' d='M 24.089844 24.199219 L 20.355469 20 L 9.246094 32.496094 C 9.6875 32.996094 10.3125 32.996094 11.109375 32.59375 Z M 24.089844 24.199219 '/%3E%3Cpath style=' stroke:none;fill-rule:nonzero;fill:url(%23linear3);' d='M 24.089844 15.800781 L 11.109375 7.503906 C 10.3125 7.003906 9.6875 7.105469 9.246094 7.605469 L 20.355469 20 Z M 24.089844 15.800781 '/%3E%3Cuse xlink:href='%23surface5' mask='url(%23mask0)'/%3E%3Cuse xlink:href='%23surface8' mask='url(%23mask1)'/%3E%3Cuse xlink:href='%23surface11' mask='url(%23mask2)'/%3E%3C/g%3E%3C/svg%3E");
`;
