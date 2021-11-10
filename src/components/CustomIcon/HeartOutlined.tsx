import Icon from "@ant-design/icons";

const Svg = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.28 3.26539C13.528 2.51314 12.531 2.05578 11.4702 1.97649C10.4095 1.8972 9.35555 2.20123 8.50003 2.8333C7.59879 2.16296 6.47703 1.859 5.36064 1.98262C4.24426 2.10624 3.21618 2.64827 2.48343 3.49955C1.75068 4.35083 1.3677 5.44813 1.4116 6.57048C1.4555 7.69283 1.92303 8.75686 2.72003 9.5483L7.99712 14.8254C8.06296 14.8918 8.14131 14.9445 8.22762 14.9804C8.31394 15.0164 8.40652 15.0349 8.50003 15.0349C8.59354 15.0349 8.68612 15.0164 8.77244 14.9804C8.85876 14.9445 8.9371 14.8918 9.00295 14.8254L14.28 9.5483C14.6927 9.13586 15.0201 8.64613 15.2435 8.1071C15.4669 7.56808 15.5819 6.99032 15.5819 6.40684C15.5819 5.82337 15.4669 5.24561 15.2435 4.70659C15.0201 4.16756 14.6927 3.67783 14.28 3.26539ZM13.2813 8.54955L8.50003 13.3237L3.71878 8.54955C3.29745 8.12646 3.01043 7.58838 2.89374 7.00279C2.77704 6.41721 2.83587 5.8102 3.06283 5.25792C3.2898 4.70564 3.67479 4.23268 4.16953 3.89837C4.66426 3.56406 5.2467 3.38328 5.84378 3.37872C6.64145 3.38067 7.40573 3.69912 7.96878 4.26414C8.03463 4.33053 8.11297 4.38322 8.19929 4.41918C8.28561 4.45515 8.37819 4.47366 8.4717 4.47366C8.56521 4.47366 8.65779 4.45515 8.74411 4.41918C8.83042 4.38322 8.90877 4.33053 8.97462 4.26414C9.55426 3.76184 10.3031 3.49853 11.0695 3.52749C11.836 3.55644 12.5628 3.87551 13.1029 4.4201C13.643 4.9647 13.956 5.69415 13.9786 6.46081C14.0012 7.22748 13.7317 7.97409 13.2246 8.54955H13.2813Z"
      fill="url(#paint0_linear_240:2)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_240:2"
        x1="1.4082"
        y1="1.95563"
        x2="14.4454"
        y2="16.0837"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1389FF" />
        <stop offset="1" stopColor="#1DB4E7" />
      </linearGradient>
    </defs>
  </svg>
);

export function HeartOutlined(props: any) {
  return <Icon component={Svg} {...props} />;
}
