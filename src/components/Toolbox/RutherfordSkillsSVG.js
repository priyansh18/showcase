import React, { useRef, useState } from 'react';

import * as Styles from '../styles-in-js/theme';
import { SkillsSVG, SkillsSVGBox } from './RutherfordSkillsSVG.styles';

let colorIndex = 0;

const RutherfordSkillsSVG = () => {
  const [on, setOn] = useState(false);
  const bulbRef = useRef();
  const lightsRef1 = useRef();
  const lightsRef2 = useRef();
  const lightsRef3 = useRef();
  const lightsRef4 = useRef();
  const lightsRef5 = useRef();
  const lightsRef6 = useRef();
  const lightsRef7 = useRef();
  const lightsRef8 = useRef();
  const lightsRef9 = useRef();
  const lightsRef10 = useRef();

  const changeColor = () => {
    setOn(!on);
    const colors = [
      Styles.green,
      Styles.red,
      Styles.yellow,
      Styles.twitterBlue,
      Styles.darkgreen,
      Styles.codeblocks_input_border,
    ];

    if (on) {
      colorIndex++;
      colorIndex = colorIndex % 6;
      const choice = colors[colorIndex];
      lightsRef1.current.style.fill = choice;
      lightsRef2.current.style.fill = choice;
      lightsRef3.current.style.fill = choice;
      lightsRef4.current.style.fill = choice;
      lightsRef5.current.style.fill = choice;
      lightsRef6.current.style.fill = choice;
      lightsRef7.current.style.fill = choice;
      lightsRef8.current.style.fill = choice;
      lightsRef9.current.style.fill = choice;
      lightsRef10.current.style.fill = choice;
    } else {
      lightsRef1.current.style.fill = Styles.mapPurple;
      lightsRef2.current.style.fill = Styles.mapPurple;
      lightsRef3.current.style.fill = Styles.mapPurple;
      lightsRef4.current.style.fill = Styles.mapPurple;
      lightsRef5.current.style.fill = Styles.mapPurple;
      lightsRef6.current.style.fill = Styles.mapPurple;
      lightsRef7.current.style.fill = Styles.mapPurple;
      lightsRef8.current.style.fill = Styles.mapPurple;
      lightsRef9.current.style.fill = Styles.mapPurple;
      lightsRef10.current.style.fill = Styles.mapPurple;
    }
  };

  return (
    <SkillsSVGBox>
      <SkillsSVG
        width="1000"
        height="1000"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="skillssvg">
          <g id="bubbles">
            <path
              id="Vector"
              d="M136.464 266.714C142.002 266.714 146.492 262.236 146.492 256.712C146.492 251.189 142.002 246.711 136.464 246.711C130.925 246.711 126.435 251.189 126.435 256.712C126.435 262.236 130.925 266.714 136.464 266.714Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_2"
              d="M147.439 454.341C152.978 454.341 157.468 449.863 157.468 444.339C157.468 438.816 152.978 434.338 147.439 434.338C141.9 434.338 137.41 438.816 137.41 444.339C137.41 449.863 141.9 454.341 147.439 454.341Z"
              fill="#E9FA66"
            />
            <path
              id="Vector_3"
              d="M554.87 59.5983C560.409 59.5983 564.899 55.1204 564.899 49.5967C564.899 44.073 560.409 39.5952 554.87 39.5952C549.332 39.5952 544.842 44.073 544.842 49.5967C544.842 55.1204 549.332 59.5983 554.87 59.5983Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_4"
              d="M344.64 197.422C350.179 197.422 354.669 192.944 354.669 187.42C354.669 181.897 350.179 177.419 344.64 177.419C339.101 177.419 334.611 181.897 334.611 187.42C334.611 192.944 339.101 197.422 344.64 197.422Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_5"
              d="M535.693 1000C541.231 1000 545.721 995.522 545.721 989.999C545.721 984.475 541.231 979.997 535.693 979.997C530.154 979.997 525.664 984.475 525.664 989.999C525.664 995.522 530.154 1000 535.693 1000Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_6"
              d="M943.143 852.277C948.682 852.277 953.172 847.8 953.172 842.276C953.172 836.752 948.682 832.274 943.143 832.274C937.604 832.274 933.114 836.752 933.114 842.276C933.114 847.8 937.604 852.277 943.143 852.277Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_7"
              d="M720.59 133.878C726.129 133.878 730.619 129.4 730.619 123.877C730.619 118.353 726.129 113.875 720.59 113.875C715.052 113.875 710.562 118.353 710.562 123.877C710.562 129.4 715.052 133.878 720.59 133.878Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_8"
              d="M218.51 832.246C224.049 832.246 228.539 827.768 228.539 822.244C228.539 816.721 224.049 812.243 218.51 812.243C212.971 812.243 208.481 816.721 208.481 822.244C208.481 827.768 212.971 832.246 218.51 832.246Z"
              fill="#E10098"
            />
            <path
              id="Vector_9"
              d="M859.292 288.063C864.831 288.063 869.321 283.585 869.321 278.062C869.321 272.538 864.831 268.06 859.292 268.06C853.754 268.06 849.264 272.538 849.264 278.062C849.264 283.585 853.754 288.063 859.292 288.063Z"
              fill="#E10098"
            />
            <path
              id="Vector_10"
              d="M989.971 573.255C995.51 573.255 1000 568.777 1000 563.253C1000 557.73 995.51 553.252 989.971 553.252C984.432 553.252 979.942 557.73 979.942 563.253C979.942 568.777 984.432 573.255 989.971 573.255Z"
              fill="#E89090"
            />
          </g>
          <path
            id="base"
            d="M881.361 978.616C881.361 978.808 881.353 979.005 881.337 979.197H103.045C103.029 979.005 103.021 978.808 103.021 978.616C103.021 903.617 274.393 920.748 489.325 920.748C824.046 920.748 881.337 920.748 881.361 978.616Z"
            fill="#232529"
            fill-opacity="0.22"
          />
          <path
            id="Polygon2"
            d="M775.564 147.105C779.958 152.988 777.897 161.302 771.412 163.851L658.966 208.048C650.825 211.249 642.205 203.287 644.368 194.564L680.614 48.3468C682.777 39.6239 693.847 37.6977 699.365 45.0845L775.564 147.105Z"
            fill="#E89090"
          />
          <path
            id="Polygon3"
            d="M783.096 843.076C787.491 848.96 785.43 857.274 778.944 859.823L666.499 904.02C658.357 907.22 649.737 899.259 651.9 890.536L688.147 744.319C690.309 735.596 701.38 733.669 706.897 741.056L783.096 843.076Z"
            fill="#FD7162"
          />
          <g id="tilt" filter="url(#filter0_d)">
            <path
              d="M682.952 116.198C693.943 111.019 702.956 116.67 703.083 128.82L709.832 775.436C709.959 787.586 701.152 801.633 690.161 806.812L413.269 937.284C402.277 942.463 393.264 936.812 393.138 924.663L386.388 278.046C386.261 265.897 395.069 251.849 406.06 246.67L682.952 116.198Z"
              fill="#24272D"
              fill-opacity="0.7"
            />
          </g>
          <g
            id="bulb-with-shadow"
            ref={bulbRef}
            onClick={changeColor}
            style={{ cursor: 'pointer' }}
          >
            <g id="bulblights">
              <path
                ref={lightsRef1}
                id="Vector_11"
                d="M47.4163 736.017L43.9325 724.254C43.8514 723.98 43.8715 723.682 43.9882 723.424C44.1049 723.167 44.3088 722.972 44.5549 722.882C44.801 722.792 45.0693 722.814 45.3006 722.944C45.532 723.074 45.7075 723.3 45.7885 723.574L49.2723 735.337C49.3534 735.611 49.3334 735.909 49.2166 736.166C49.0999 736.424 48.8961 736.619 48.6499 736.709C48.4038 736.799 48.1356 736.777 47.9042 736.647C47.6729 736.517 47.4974 736.291 47.4163 736.017Z"
                fill={Styles.green}
              />
              <path
                ref={lightsRef2}
                id="Vector_12"
                d="M51.5801 737.752L46.3544 720.107C46.2733 719.833 46.2933 719.535 46.4101 719.277C46.5268 719.02 46.7306 718.825 46.9768 718.735C47.2229 718.645 47.4911 718.667 47.7225 718.797C47.9538 718.927 48.1293 719.153 48.2104 719.427L53.4362 737.072C53.5172 737.346 53.4972 737.644 53.3804 737.901C53.2637 738.158 53.0599 738.354 52.8137 738.444C52.5676 738.534 52.2994 738.512 52.068 738.382C51.8367 738.252 51.6612 738.025 51.5801 737.752Z"
                fill={Styles.green}
              />
              <path
                ref={lightsRef3}
                id="Vector_13"
                d="M55.9892 736.138L59.9562 734.685C64.7498 732.929 71.0006 737.066 75.3492 739.642C81.4762 743.274 88.424 743.819 95.5961 741.192C101.897 738.885 107.119 733.893 110.115 727.311C113.112 720.73 113.639 713.095 111.581 706.082C109.524 699.069 105.049 693.249 99.1387 689.899C93.2282 686.548 86.3641 685.94 80.0513 688.209C80.0071 688.225 79.963 688.241 79.9189 688.257C73.003 690.79 67.3262 696.09 64.4622 702.882C62.3947 707.785 59.5736 715.266 54.7305 717.04L50.7634 718.493"
                fill={Styles.green}
              />
            </g>
            <g id="lightway">
              <path
                id="Vector_14"
                d="M101.526 679.347C101.452 679.097 101.462 678.826 101.554 678.585L105.886 667.175C105.936 667.044 106.008 666.924 106.1 666.824C106.191 666.724 106.299 666.644 106.418 666.59C106.537 666.537 106.664 666.509 106.793 666.51C106.921 666.511 107.048 666.54 107.166 666.596C107.285 666.652 107.392 666.732 107.482 666.834C107.572 666.936 107.643 667.056 107.692 667.188C107.74 667.321 107.764 667.462 107.763 667.605C107.762 667.748 107.736 667.889 107.686 668.02L103.354 679.43C103.277 679.634 103.145 679.806 102.977 679.925C102.809 680.043 102.613 680.102 102.414 680.093C102.215 680.084 102.024 680.007 101.865 679.874C101.706 679.741 101.588 679.557 101.526 679.347L101.526 679.347Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_15"
                d="M118.898 703.322C118.817 703.048 118.837 702.75 118.954 702.492C119.07 702.235 119.274 702.04 119.52 701.95L135.388 696.139C135.635 696.049 135.903 696.071 136.134 696.201C136.365 696.331 136.541 696.557 136.622 696.831C136.703 697.105 136.683 697.403 136.566 697.66C136.45 697.917 136.246 698.113 136 698.203L120.132 704.013C119.885 704.104 119.617 704.081 119.386 703.952C119.155 703.822 118.979 703.595 118.898 703.322Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_16"
                d="M117.304 732.61C117.241 732.4 117.238 732.174 117.295 731.962C117.351 731.75 117.464 731.562 117.619 731.423C117.774 731.285 117.964 731.202 118.162 731.186C118.361 731.171 118.559 731.223 118.73 731.335L128.311 737.65C128.534 737.797 128.695 738.036 128.759 738.315C128.823 738.594 128.785 738.89 128.653 739.138C128.52 739.386 128.305 739.565 128.055 739.636C127.804 739.708 127.538 739.666 127.315 739.519L117.733 733.205C117.53 733.071 117.377 732.86 117.304 732.61Z"
                fill="#E6E6E6"
              />
            </g>
            <path
              id="Vector_17"
              d="M42.0356 724.801L45.5971 736.826C44.4649 737.241 43.231 737.138 42.1668 736.541C41.1026 735.944 40.2952 734.902 39.9224 733.643L39.1726 731.111C38.7997 729.852 38.8919 728.48 39.4288 727.296C39.9658 726.113 40.9035 725.215 42.0356 724.801L42.0356 724.801Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_18"
              d="M52.4491 727.654C52.4089 727.518 52.3932 727.375 52.4027 727.233C52.4123 727.091 52.447 726.952 52.5048 726.825C52.5626 726.697 52.6424 726.584 52.7396 726.491C52.8368 726.398 52.9496 726.327 53.0715 726.282L74.2287 718.535C74.4749 718.445 74.7431 718.467 74.9744 718.597C75.2058 718.726 75.3813 718.953 75.4623 719.227C75.5434 719.5 75.5233 719.798 75.4066 720.056C75.2899 720.313 75.086 720.508 74.8399 720.598L53.6826 728.346C53.5608 728.391 53.4322 728.408 53.3042 728.397C53.1763 728.387 53.0515 728.348 52.9369 728.284C52.8224 728.22 52.7203 728.131 52.6366 728.023C52.5529 727.915 52.4892 727.789 52.4491 727.654Z"
              fill="white"
            />
            <path
              id="Vector_19"
              d="M73.6042 719.907C72.6167 716.573 74.117 711.486 74.1813 711.271C74.2219 711.135 74.286 711.01 74.3701 710.902C74.4541 710.795 74.5564 710.706 74.6711 710.642C74.7859 710.579 74.9108 710.54 75.0388 710.53C75.1668 710.52 75.2953 710.538 75.4171 710.583C75.5388 710.628 75.6514 710.7 75.7483 710.793C75.8453 710.887 75.9247 711 75.9821 711.128C76.0396 711.255 76.0738 711.394 76.0829 711.537C76.0921 711.679 76.0759 711.822 76.0354 711.957C75.6548 713.233 74.8091 717.029 75.4602 719.227C76.1113 721.426 78.8195 723.919 79.8081 724.695C79.913 724.777 80.0024 724.881 80.071 725.002C80.1397 725.122 80.1863 725.257 80.2083 725.397C80.2303 725.538 80.2271 725.682 80.199 725.821C80.1709 725.96 80.1185 726.092 80.0446 726.209C79.9708 726.325 79.877 726.425 79.7686 726.501C79.6602 726.577 79.5393 726.629 79.4129 726.654C79.2865 726.678 79.157 726.675 79.0318 726.643C78.9066 726.612 78.7881 726.554 78.6832 726.472C78.5166 726.341 74.5916 723.241 73.6042 719.907Z"
              fill="white"
            />
            <text
              id="js"
              transform="translate(70.9253 698.367) scale(1.03033 0.983075)"
              fill="black"
              font-family="Gloria Hallelujah"
              font-size="18"
              letter-spacing="0em"
            >
              <tspan x="9.67254" y="25.9048" style={{ pointerEvents: 'none' }}>
                JS
              </tspan>
            </text>
            <g id="lightshadow2" filter="url(#filter1_f)">
              <path
                d="M695.075 520.199C661.57 521.988 650.011 477.933 679.473 460.734L848.457 362.085C867.325 351.07 890.719 360.777 895.199 381.48L914.367 470.082C918.611 489.697 903.559 509.066 883.228 510.152L695.075 520.199Z"
                fill={Styles.green}
                fill-opacity="0.32"
                ref={lightsRef4}
              />
            </g>
            <g id="lightshadow1" filter="url(#filter2_f)">
              <path
                d="M175.093 705.916C151.338 710.015 141.448 677.658 163.043 666.494L566.23 458.065C577.275 452.355 590.523 457.127 594.98 468.42L646.275 598.411C651.211 610.92 643.032 625.155 629.575 627.478L175.093 705.916Z"
                fill={Styles.green}
                fill-opacity="0.32"
                ref={lightsRef5}
              />
            </g>
          </g>
          <g id="CSS">
            <text
              id="&#60; StyledComponents /&#62;"
              fill="#E10098"
              fill-opacity="0.5"
              font-family="Gloria Hallelujah"
              font-size="24"
              letter-spacing="0em"
            >
              <tspan x="331.806" y="835.412">
                &#60; Styled-Components /&#62;
              </tspan>
            </text>
            <text
              id="&#60; SaSS /&#62;"
              fill="#E10098"
              fill-opacity="0.5"
              font-family="Gloria Hallelujah"
              font-size="24"
              letter-spacing="0em"
            >
              <tspan x="331.806" y="798.758">
                &#60; SaSS /&#62;
              </tspan>
            </text>
          </g>
          <g id="JS extra">
            <text
              id="d3"
              fill="#FD7162"
              fill-opacity="0.5"
              font-family="Gloria Hallelujah"
              font-size="24"
              letter-spacing="0em"
            >
              <tspan x="70.2924" y="495.167">
                &#60; d3.js /&#62;
              </tspan>
            </text>
            <text
              id="Phaser"
              fill="#FD7162"
              fill-opacity="0.5"
              font-family="Gloria Hallelujah"
              font-size="24"
              letter-spacing="0em"
            >
              <tspan x="64.601" y="535.019">
                &#60; Phaser v3 /&#62;
              </tspan>
            </text>
          </g>
          <g id="ML">
            <text
              id="&#60; Numpy /&#62;"
              fill="#FFD200"
              fill-opacity="0.5"
              font-family="Gloria Hallelujah"
              font-size="24"
              letter-spacing="0em"
            >
              <tspan x="796.052" y="181.934">
                &#60; Numpy /&#62;
              </tspan>
            </text>
            <text
              id="&#60; Matplotlib /&#62;"
              fill="#FFD200"
              fill-opacity="0.5"
              font-family="Gloria Hallelujah"
              font-size="24"
              letter-spacing="0em"
            >
              <tspan x="795.692" y="250.136">
                &#60; Matplotlib /&#62;
              </tspan>
            </text>
            <text
              id="&#60; Pandas /&#62;"
              fill="#FFD200"
              fill-opacity="0.5"
              font-family="Gloria Hallelujah"
              font-size="24"
              letter-spacing="0em"
            >
              <tspan x="795.707" y="215.108">
                &#60; Pandas /&#62;
              </tspan>
            </text>
          </g>
          <g id="Node">
            <text
              id="&#60; Nodejs /&#62;"
              fill="#3CC2AF"
              fill-opacity="0.5"
              font-family="Gloria Hallelujah"
              font-size="24"
              letter-spacing="0em"
            >
              <tspan x="404.457" y="269.852">
                &#60; Nodejs /&#62;
              </tspan>
            </text>
            <text
              id="&#60; Express /&#62;"
              fill="#3CC2AF"
              fill-opacity="0.5"
              font-family="Gloria Hallelujah"
              font-size="24"
              letter-spacing="0em"
            >
              <tspan x="398.876" y="309.154">
                &#60; Express /&#62;
              </tspan>
            </text>
          </g>
          <g id="DB">
            <text
              id="&#60; Sequelize /&#62;"
              fill="#00CFFD"
              fill-opacity="0.5"
              font-family="Gloria Hallelujah"
              font-size="24"
              letter-spacing="0em"
            >
              <tspan x="783.713" y="670.514">
                &#60; Sequelize /&#62;
              </tspan>
            </text>
            <text
              id="&#60; Postgresql /&#62;"
              fill="#00CFFD"
              fill-opacity="0.5"
              font-family="Gloria Hallelujah"
              font-size="24"
              letter-spacing="0em"
            >
              <tspan x="784.141" y="631.716">
                &#60; Postgresql /&#62;
              </tspan>
            </text>
            <text
              id="&#60; MongoDB /&#62;"
              fill="#00CFFD"
              fill-opacity="0.5"
              font-family="Gloria Hallelujah"
              font-size="24"
              letter-spacing="0em"
            >
              <tspan x="782.547" y="710.336">
                &#60; MongoDB /&#62;
              </tspan>
            </text>
            <text
              id="&#60; Mongoose /&#62;"
              fill="#00CFFD"
              fill-opacity="0.5"
              font-family="Gloria Hallelujah"
              font-size="24"
              letter-spacing="0em"
            >
              <tspan x="782.005" y="750.149">
                &#60; Mongoose /&#62;
              </tspan>
            </text>
          </g>
          <g id="rotatecircles">
            <g id="circle 3">
              <mask id="path-40-inside-1" fill="white">
                <path d="M553 632.197C529.864 632.197 507.445 624.175 489.561 609.498C471.677 594.821 459.435 574.397 454.922 551.706C450.408 529.015 453.902 505.461 464.808 485.057C475.714 464.654 493.357 448.663 514.732 439.809C536.106 430.956 559.889 429.787 582.029 436.503C604.168 443.219 623.293 457.404 636.147 476.64C649 495.877 654.786 518.975 652.518 541.999C650.251 565.023 640.07 586.548 623.711 602.908C614.446 612.223 603.426 619.608 591.289 624.635C579.151 629.663 566.137 632.233 553 632.197V632.197ZM553 432.848C498.219 432.848 453.651 477.416 453.651 532.197C453.651 586.978 498.219 631.545 553 631.545C607.781 631.545 652.348 586.978 652.348 532.197C652.348 477.416 607.781 432.848 553 432.848Z" />
              </mask>
              <path
                d="M553 632.197C529.864 632.197 507.445 624.175 489.561 609.498C471.677 594.821 459.435 574.397 454.922 551.706C450.408 529.015 453.902 505.461 464.808 485.057C475.714 464.654 493.357 448.663 514.732 439.809C536.106 430.956 559.889 429.787 582.029 436.503C604.168 443.219 623.293 457.404 636.147 476.64C649 495.877 654.786 518.975 652.518 541.999C650.251 565.023 640.07 586.548 623.711 602.908C614.446 612.223 603.426 619.608 591.289 624.635C579.151 629.663 566.137 632.233 553 632.197V632.197ZM553 432.848C498.219 432.848 453.651 477.416 453.651 532.197C453.651 586.978 498.219 631.545 553 631.545C607.781 631.545 652.348 586.978 652.348 532.197C652.348 477.416 607.781 432.848 553 432.848Z"
                fill="#F2F6FF"
                stroke="#ADADAD"
                stroke-width="4"
                mask="url(#path-40-inside-1)"
              />
            </g>
            <path
              id="Vector_20"
              d="M569.881 593.632C575.404 593.632 579.881 589.155 579.881 583.632C579.881 578.109 575.404 573.632 569.881 573.632C564.358 573.632 559.881 578.109 559.881 583.632C559.881 589.155 564.358 593.632 569.881 593.632Z"
              fill="url(#paint0_linear)"
            />
            <path
              id="Vector_21"
              d="M469.703 597.032C475.226 597.032 479.703 592.555 479.703 587.032C479.703 581.509 475.226 577.032 469.703 577.032C464.18 577.032 459.703 581.509 459.703 587.032C459.703 592.555 464.18 597.032 469.703 597.032Z"
              fill="#00CFFD"
              fill-opacity="0.93"
            />
            <g id="circle 2">
              <mask id="path-43-inside-2" fill="white">
                <path d="M553 608.394C535.648 608.394 518.833 602.378 505.42 591.37C492.007 580.362 482.826 565.044 479.441 548.026C476.056 531.008 478.677 513.342 486.856 498.04C495.036 482.737 508.268 470.744 524.299 464.104C540.33 457.463 558.167 456.587 574.771 461.624C591.376 466.661 605.72 477.299 615.36 491.727C625 506.154 629.339 523.478 627.639 540.746C625.938 558.014 618.302 574.158 606.033 586.427C599.085 593.414 590.82 598.952 581.717 602.723C572.614 606.494 562.853 608.421 553 608.394ZM553 458.883C511.914 458.883 478.488 492.308 478.488 533.394C478.488 574.48 511.914 607.906 553 607.906C594.086 607.906 627.511 574.48 627.511 533.394C627.511 492.308 594.086 458.883 553 458.883Z" />
              </mask>
              <path
                d="M553 608.394C535.648 608.394 518.833 602.378 505.42 591.37C492.007 580.362 482.826 565.044 479.441 548.026C476.056 531.008 478.677 513.342 486.856 498.04C495.036 482.737 508.268 470.744 524.299 464.104C540.33 457.463 558.167 456.587 574.771 461.624C591.376 466.661 605.72 477.299 615.36 491.727C625 506.154 629.339 523.478 627.639 540.746C625.938 558.014 618.302 574.158 606.033 586.427C599.085 593.414 590.82 598.952 581.717 602.723C572.614 606.494 562.853 608.421 553 608.394ZM553 458.883C511.914 458.883 478.488 492.308 478.488 533.394C478.488 574.48 511.914 607.906 553 607.906C594.086 607.906 627.511 574.48 627.511 533.394C627.511 492.308 594.086 458.883 553 458.883Z"
                fill="#F2F6FF"
                stroke="#ADADAD"
                stroke-width="4"
                mask="url(#path-43-inside-2)"
              />
            </g>
            <text
              id="React"
              transform="translate(437 520.222)"
              fill={Styles.green}
              font-family="Roboto"
              font-size="21.7075"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="0" y="19.9196" ref={lightsRef6}>
                React{' '}
              </tspan>
              <tspan x="0" y="44.9196" ref={lightsRef7}>
                (Redux)
              </tspan>
            </text>
            <g id="circle 1">
              <mask id="path-45-inside-3" fill="white">
                <path d="M553 584.592C541.432 584.592 530.222 580.581 521.28 573.242C512.338 565.904 506.218 555.692 503.961 544.346C501.704 533.001 503.451 521.224 508.904 511.022C514.357 500.82 523.179 492.825 533.866 488.398C544.553 483.971 556.445 483.387 567.514 486.745C578.584 490.103 588.147 497.195 594.573 506.813C601 516.432 603.893 527.981 602.759 539.493C601.625 551.005 596.535 561.767 588.355 569.947C583.723 574.604 578.213 578.297 572.144 580.811C566.076 583.324 559.569 584.61 553 584.592V584.592ZM553 484.917C525.609 484.917 503.326 507.201 503.326 534.592C503.326 561.982 525.609 584.266 553 584.266C580.39 584.266 602.674 561.982 602.674 534.592C602.674 507.201 580.39 484.917 553 484.917Z" />
              </mask>
              <path
                d="M553 584.592C541.432 584.592 530.222 580.581 521.28 573.242C512.338 565.904 506.218 555.692 503.961 544.346C501.704 533.001 503.451 521.224 508.904 511.022C514.357 500.82 523.179 492.825 533.866 488.398C544.553 483.971 556.445 483.387 567.514 486.745C578.584 490.103 588.147 497.195 594.573 506.813C601 516.432 603.893 527.981 602.759 539.493C601.625 551.005 596.535 561.767 588.355 569.947C583.723 574.604 578.213 578.297 572.144 580.811C566.076 583.324 559.569 584.61 553 584.592V584.592ZM553 484.917C525.609 484.917 503.326 507.201 503.326 534.592C503.326 561.982 525.609 584.266 553 584.266C580.39 584.266 602.674 561.982 602.674 534.592C602.674 507.201 580.39 484.917 553 484.917Z"
                fill="#F2F6FF"
                stroke="#ADADAD"
                stroke-width="4"
                mask="url(#path-45-inside-3)"
              />
            </g>
            <text
              id="Graphql"
              transform="translate(578.16 494.7)"
              fill={Styles.green}
              font-family="Roboto"
              font-size="21.7075"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="0" y="19.9196" ref={lightsRef8}>
                Graphql
              </tspan>
            </text>
            <text
              id="Apollo"
              transform="translate(552.23 592.814)"
              fill={Styles.green}
              font-family="Roboto"
              font-size="21.7075"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="0" y="19.9196" ref={lightsRef9}>
                Apollo
              </tspan>
            </text>
            <text
              id="Gatsby"
              transform="translate(466.89 442.818)"
              fill={Styles.green}
              font-family="Roboto"
              font-size="21.7075"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="0" y="19.9196" ref={lightsRef10}>
                Gatsby
              </tspan>
            </text>
            <path
              id="Vector_22"
              d="M479.06 441.068C484.582 441.068 489.06 436.591 489.06 431.068C489.06 425.546 484.582 421.068 479.06 421.068C473.537 421.068 469.06 425.546 469.06 431.068C469.06 436.591 473.537 441.068 479.06 441.068Z"
              fill="#A634FF"
            />
            <path
              id="Vector_23"
              d="M606.187 493.509C611.709 493.509 616.187 489.032 616.187 483.509C616.187 477.986 611.709 473.509 606.187 473.509C600.664 473.509 596.187 477.986 596.187 483.509C596.187 489.032 600.664 493.509 606.187 493.509Z"
              fill="#E10098"
            />
            <g id="circle 4">
              <mask id="path-51-inside-4" fill="white">
                <path d="M553 656C524.08 655.999 496.056 645.972 473.701 627.626C451.346 609.279 436.044 583.749 430.402 555.386C424.76 527.022 429.128 497.58 442.76 472.075C456.393 446.571 478.447 426.582 505.165 415.515C531.883 404.448 561.612 402.988 589.286 411.383C616.96 419.777 640.867 437.508 656.934 461.554C673 485.599 680.232 514.472 677.398 543.252C674.563 572.032 661.837 598.939 641.388 619.388C629.808 631.032 616.033 640.263 600.861 646.547C585.689 652.832 569.422 656.044 553 656ZM553 406.814C484.523 406.814 428.814 462.523 428.814 530.999C428.814 599.476 484.523 655.185 553 655.185C621.476 655.185 677.185 599.476 677.185 530.999C677.185 462.523 621.476 406.814 553 406.814Z" />
              </mask>
              <path
                d="M553 656C524.08 655.999 496.056 645.972 473.701 627.626C451.346 609.279 436.044 583.749 430.402 555.386C424.76 527.022 429.128 497.58 442.76 472.075C456.393 446.571 478.447 426.582 505.165 415.515C531.883 404.448 561.612 402.988 589.286 411.383C616.96 419.777 640.867 437.508 656.934 461.554C673 485.599 680.232 514.472 677.398 543.252C674.563 572.032 661.837 598.939 641.388 619.388C629.808 631.032 616.033 640.263 600.861 646.547C585.689 652.832 569.422 656.044 553 656ZM553 406.814C484.523 406.814 428.814 462.523 428.814 530.999C428.814 599.476 484.523 655.185 553 655.185C621.476 655.185 677.185 599.476 677.185 530.999C677.185 462.523 621.476 406.814 553 406.814Z"
                fill="#F2F6FF"
                stroke="#ADADAD"
                stroke-width="4"
                mask="url(#path-51-inside-4)"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="382.387"
            y="114.277"
            width="331.447"
            height="832.929"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_f"
            x="617.37"
            y="312.276"
            width="342.932"
            height="253.192"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="22.6077"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="filter2_f"
            x="102.254"
            y="406.803"
            width="594.313"
            height="348.311"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="24.4209"
              result="effect1_foregroundBlur"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="555.749"
            y1="511.632"
            x2="574.028"
            y2="512.567"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00CFFD" />
            <stop offset="1" stop-color="#E9FA66" />
          </linearGradient>
        </defs>
      </SkillsSVG>
    </SkillsSVGBox>
  );
};

export default RutherfordSkillsSVG;
