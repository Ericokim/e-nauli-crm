import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { useStateContext } from "../context/ContextProvider";

const SvgComponent = (props) => {
  return (
    <svg
      className="animated"
      id="freepik_stories-no-connection"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      {...props}
    >
      <g
        id="freepik--background-simple--inject-34"
        className="animable"
        style={{
          transformOrigin: "249.307px 244.971px",
          animation: "1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) slideDown",
          animationDelay: "0s",
        }}
      >
        <path
          d="M464.5 113.47q-2.38-4-5-7.9c-23.17-34.35-63.06-57.84-102.3-68.46a231.87 231.87 0 00-52.71-7.69c-116.62-4-163.07 88-201.61 111.67S5 205.33 9 290.32s65.22 165 183.81 170 126.5-48.42 192.71-68.19c43.82-13.08 75-57.26 90.2-98.09 20.78-55.66 19.8-127.93-11.22-180.57z"
          style={{
            transformOrigin: "249.307px 244.971px",
          }}
          id="el7lfqcabh6q6"
          className="animable"
          fill="#90caf9"
        />
        <g id="el46y6b0rnjt9">
          <path
            d="M464.5 113.47q-2.38-4-5-7.9c-23.17-34.35-63.06-57.84-102.3-68.46a231.87 231.87 0 00-52.71-7.69c-116.62-4-163.07 88-201.61 111.67S5 205.33 9 290.32s65.22 165 183.81 170 126.5-48.42 192.71-68.19c43.82-13.08 75-57.26 90.2-98.09 20.78-55.66 19.8-127.93-11.22-180.57z"
            style={{
              transformOrigin: "249.307px 244.971px",
            }}
            className="animable"
            id="elmhux622knx"
            fill="#fff"
            opacity={0.7}
          />
        </g>
      </g>
      <g
        id="freepik--Window--inject-34"
        className="animable"
        style={{
          transformOrigin: "376.71px 168.295px",
          animation: "1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) zoomOut",
          animationDelay: "0s",
        }}
      >
        <path
          style={{
            transformOrigin: "376.925px 167.635px",
          }}
          id="el5jr2lclmyw6"
          className="animable"
          d="M438.56 121.49L438.56 118.2 377.7 118.2 377.7 69.42 375.72 69.42 375.72 118.2 315.29 118.2 315.29 121.49 375.72 121.49 375.72 166.65 315.29 166.65 315.29 169.95 375.72 169.95 375.72 215.11 315.29 215.11 315.29 218.4 375.72 218.4 375.72 265.85 377.7 265.85 377.7 218.4 438.56 218.4 438.56 215.11 377.7 215.11 377.7 169.95 438.56 169.95 438.56 166.65 377.7 166.65 377.7 121.49 438.56 121.49z"
          fill="#263238"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M311.12 65.46v205.67H442.3V65.46zm126.75 198.72H315.55V72.4h122.32z"
          style={{
            transformOrigin: "376.71px 168.295px",
          }}
          id="elea39xoqkvks"
          className="animable"
          fill="#263238"
          stroke="#263238"
          strokeMiterlimit={10}
        />
      </g>
      <g
        id="freepik--Plant--inject-34"
        className="animable"
        style={{
          transformOrigin: "244.571px 356.942px",
          animation: "1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) slideLeft",
          animationDelay: "0s",
        }}
      >
        <path
          d="M254 323.92a.1.1 0 00-.06-.13.1.1 0 00-.13.06 132 132 0 00-6.94 21.75 202 202 0 00-3.87 22.55l-.54 5.7c-.08.95-.19 1.9-.26 2.85l-.15 2.86c-.08 1.91-.2 3.82-.26 5.73l.06 5.73.06 2.86c0 .95.11 1.91.18 2.86.14 1.9.26 3.81.43 5.71.37 3.8.94 7.57 1.52 11.34a.11.11 0 00.1.08.09.09 0 00.1-.1c0-1.91-.09-3.8-.13-5.71s-.22-3.78-.19-5.68 0-3.8-.06-5.69l-.06-2.84v-8.52l.15-5.67.06-2.84c0-.95.11-1.89.16-2.84l.35-5.67a200.9 200.9 0 013.21-22.49 131.72 131.72 0 016.27-21.9z"
          style={{
            transformOrigin: "247.898px 368.827px",
          }}
          id="elpx31pmyqjqb"
          className="animable"
          fill="#263238"
        />
        <path
          d="M254.81 353.6a.1.1 0 00-.06-.12.1.1 0 00-.13.06 132.44 132.44 0 00-6.43 29.24c-.5 5-1.06 9.94-1.13 14.94a127.13 127.13 0 00.53 15 .11.11 0 00.09.08.09.09 0 00.11-.08c.58-5 .93-9.94 1.28-14.9s.4-9.93.72-14.89a148.32 148.32 0 015-29.31z"
          style={{
            transformOrigin: "250.919px 383.138px",
          }}
          id="els0ztp438xlc"
          className="animable"
          fill="#263238"
        />
        <path
          d="M271.27 364.05a.1.1 0 00-.14 0 50.06 50.06 0 00-11 9.59 44.64 44.64 0 00-4.3 6l-.88 1.67-.7 1.74a15.71 15.71 0 00-.6 1.75c-.18.6-.38 1.18-.54 1.78a71 71 0 00-2.27 14.52 84 84 0 00.54 14.62.11.11 0 00.1.08.09.09 0 00.1-.09l1.26-14.47a127.64 127.64 0 011.83-14.27c.13-.59.3-1.15.45-1.73a16 16 0 01.5-1.71l.59-1.67.76-1.58a43.25 43.25 0 013.94-6 49.72 49.72 0 0110.33-10.05.11.11 0 00.03-.18z"
          style={{
            transformOrigin: "261.019px 389.911px",
          }}
          id="el4byeuaoqjql"
          className="animable"
          fill="#263238"
        />
        <path
          d="M263.3 382.64a16.06 16.06 0 00-5 6 35.33 35.33 0 00-2.81 7.37c-.19.63-.35 1.27-.49 1.91l-.45 1.92a34.52 34.52 0 00-.49 3.91c0 1.32-.05 2.63 0 3.94a34.57 34.57 0 00.51 3.91.13.13 0 00.08.08.1.1 0 00.12-.08 35.91 35.91 0 00.7-3.85c.2-1.28.4-2.54.55-3.81s.35-2.52.45-3.79.27-2.54.55-3.78a34.19 34.19 0 012.14-7.3 16.18 16.18 0 014.2-6.27.09.09 0 000-.13.11.11 0 00-.06-.03z"
          style={{
            transformOrigin: "258.713px 397.161px",
          }}
          id="eln7n66j2f7pq"
          className="animable"
          fill="#263238"
        />
        <path
          d="M240.22 397.14c-.54-6.42-1.6-12.79-2.6-19.14s-2.12-12.7-3.28-19-2.46-12.63-3.83-18.91a.1.1 0 10-.19 0c1.1 6.34 2.09 12.69 3 19.05s1.87 12.71 2.68 19.08 1.4 12.77 2.19 19.13l2.35 19.13a.12.12 0 00.1.09.11.11 0 00.11-.1c.07-1.61.07-3.22.11-4.84s-.07-3.22-.09-4.83c-.03-3.23-.31-6.44-.55-9.66z"
          style={{
            transformOrigin: "235.592px 378.264px",
          }}
          id="el0j7609x1fbkv"
          className="animable"
          fill="#263238"
        />
        <path
          d="M236.37 397.05c-.35-2.55-.81-5.08-1.3-7.6l-.9-3.75c-.3-1.25-.58-2.5-.94-3.74a105.84 105.84 0 00-4.92-14.61l-.77-1.77-.85-1.73c-.55-1.16-1.2-2.27-1.83-3.4a28.58 28.58 0 00-4.64-6.14.09.09 0 00-.13 0 .1.1 0 000 .14 28 28 0 014.24 6.29c.56 1.14 1.15 2.26 1.63 3.44l.76 1.75.67 1.79a105.45 105.45 0 014.28 14.61c.58 2.47 1 5 1.45 7.49l.6 3.76c.22 1.25.49 2.5.66 3.76.4 2.51.87 5 1.3 7.53s.85 5 1.39 7.55a.11.11 0 00.09.09.11.11 0 00.11-.1q0-3.85-.18-7.7c-.15-2.56-.46-5.11-.72-7.66z"
          style={{
            transformOrigin: "228.666px 383.396px",
          }}
          id="elv7n4ctebv69"
          className="animable"
          fill="#263238"
        />
        <path
          d="M231.05 397.38c-1.19-3.38-2.57-6.68-4.07-9.91a86.8 86.8 0 00-5.12-9.38.1.1 0 10-.17.1 87.62 87.62 0 014.37 9.68c1.3 3.28 2.48 6.62 3.46 10s1.73 6.83 2.63 10.23 1.71 6.83 2.76 10.27a.1.1 0 00.09.07.11.11 0 00.11-.1 51.83 51.83 0 00-1-10.69 66.72 66.72 0 00-3.06-10.27z"
          style={{
            transformOrigin: "228.39px 398.233px",
          }}
          id="elmldettxahkn"
          className="animable"
          fill="#263238"
        />
        <path
          d="M230.83 408.61a23.15 23.15 0 00-2.83-5.94 24.44 24.44 0 00-4.12-5.11 19.36 19.36 0 00-2.62-2 10.92 10.92 0 00-3-1.34.1.1 0 00-.11.06.1.1 0 000 .13 14.89 14.89 0 014.93 3.83 23.66 23.66 0 013.43 5.2c1 1.84 1.48 3.88 2.33 5.79.37 1 .74 1.95 1.18 2.93a23.09 23.09 0 001.29 3 .11.11 0 00.09.05.09.09 0 00.1-.09 22.57 22.57 0 00-.12-3.29c-.07-1.09-.29-2.16-.55-3.22z"
          style={{
            transformOrigin: "224.821px 404.714px",
          }}
          id="el7s3ioncujyq"
          className="animable"
          fill="#263238"
        />
        <path
          d="M231.23 349.25a18.29 18.29 0 01-13-13.76c-2.43-11.34 5.4-6.48-1.62-24.3s-5.4-21.87-3-27 3.78-3.51 5.94 3.24 10 17.28 13 37-1.32 24.82-1.32 24.82z"
          style={{
            transformOrigin: "222.584px 315.21px",
          }}
          id="el7yxkjyi0r97"
          className="animable"
          fill="#90caf9"
        />
        <path
          d="M252 330.09s-7-2.43-7.29-15.66 5.13-10.53 5.94-27 1.89-28.08 4.86-28.35 10.8 8.1 13.5 26.46-3.51 30.51-8.91 35.91-8.1 8.64-8.1 8.64z"
          style={{
            transformOrigin: "257.181px 294.582px",
          }}
          id="el8od7u2h26ff"
          className="animable"
          fill="#90caf9"
        />
        <path
          d="M227.45 365.18s-1.62-9.72-4.86-14.31-10.26-8.64-14.85-17.54-9.72-13.23-9.45-.54 5.94 19.16 13 23.48 16.16 8.91 16.16 8.91z"
          style={{
            transformOrigin: "212.865px 345.021px",
          }}
          id="eluzkbme7xmz"
          className="animable"
          fill="#90caf9"
        />
        <path
          d="M224.48 381.92s-6.48-12.42-15.93-21.6-17-13.77-14.31-9.18 5.94 4.32 10.53 12.42 3.24 14 9.72 18.63 9.99-.27 9.99-.27z"
          style={{
            transformOrigin: "209.085px 366.76px",
          }}
          id="elzi79luqsx8h"
          className="animable"
          fill="#90caf9"
        />
        <path
          d="M223.67 397.85c-.27-.81-.54-6.75-9.72-11.61s-17.82-3-16.74-.54 6.75 6.48 12.42 8.91 14.04 3.24 14.04 3.24z"
          style={{
            transformOrigin: "210.394px 390.527px",
          }}
          id="elgredvh57cg4"
          className="animable"
          fill="#90caf9"
        />
        <path
          d="M251.47 365.72s-4.05-5.13-1.89-15.93 7-8.1 12.42-13.77 4.32-6.47 9.72-12.41 10.26-9.18 12.42-6.75-1.08 10-4.32 14.31-8.37 6.47-10.82 11.83-1.35 14-7.56 18.09-9.97 4.63-9.97 4.63z"
          style={{
            transformOrigin: "266.893px 340.883px",
          }}
          id="elstkdamw9pkh"
          className="animable"
          fill="#90caf9"
        />
        <path
          d="M265 368.69s9.72-11.07 16.74-19.17 9.72-14.3 10-8.91 2.43 9.72-3.24 16.74-23.5 11.34-23.5 11.34z"
          style={{
            transformOrigin: "278.686px 353.638px",
          }}
          id="el0t5gk63j6d4l"
          className="animable"
          fill="#90caf9"
        />
        <path
          d="M259.84 386.51s-.27-4.32 15.12-14.31 21.87-11.88 20.25-7.83-8.37 8.1-15.66 15.39-19.71 6.75-19.71 6.75z"
          style={{
            transformOrigin: "277.646px 374.448px",
          }}
          id="eli55cdr4ehes"
          className="animable"
          fill="#90caf9"
        />
        <path
          d="M231.87 348.1s-3.61-19.36-7.39-33.13-6.21-22.14-6.21-22.14"
          style={{
            transformOrigin: "225.07px 320.465px",
          }}
          id="eliww6a7urnci"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M251.39 330.29s6.56-21 8.72-33.68-.27-22.14-1.35-27.81"
          style={{
            transformOrigin: "256.183px 299.545px",
          }}
          id="elf3ink6cfv56"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M226.6 364.78a101.76 101.76 0 00-9.95-14.18c-5.94-7-10.53-10.8-13.23-17.54"
          style={{
            transformOrigin: "215.01px 348.92px",
          }}
          id="el2cy8rv1onm4"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M251.47 365.72s2.16-13 7.29-19.71 15.39-17.27 19.44-24"
          style={{
            transformOrigin: "264.835px 343.865px",
          }}
          id="eloox2q1m98w"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M223 397.55s-9.08-5.91-15.56-9.15"
          style={{
            transformOrigin: "215.22px 392.975px",
          }}
          id="el5uf8p6owsqg"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          style={{
            transformOrigin: "243.51px 431.325px",
          }}
          id="elornolqpfeqr"
          className="animable"
          d="M252.89 454.81L234.13 454.81 224.75 407.84 262.27 407.84 252.89 454.81z"
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g
        id="freepik--Floor--inject-34"
        className="animable"
        style={{
          transformOrigin: "260.58px 454.81px",
          animation: "1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) zoomOut",
          animationDelay: "0s",
        }}
      >
        <path
          style={{
            transformOrigin: "277.39px 454.81px",
          }}
          id="el5v650ew10xu"
          className="animable"
          d="M64.8 454.81L489.98 454.81"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          style={{
            transformOrigin: "44.365px 454.81px",
          }}
          id="eldq9kh58v7f"
          className="animable"
          d="M31.18 454.81L57.55 454.81"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
      </g>
      <g
        id="freepik--Device--inject-34"
        className="animable animator-active"
        style={{
          transformOrigin: "123.1px 253.905px",
          animation:
            "1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) zoomOut,1.5s Infinite linear floating",
          animationDelay: "0s,1s",
        }}
      >
        <path
          d="M216.14 167v-31.5h-2.85V95.19a24.85 24.85 0 00-24.85-24.86H54.92a24.86 24.86 0 00-24.86 24.86v317.43a24.86 24.86 0 0024.86 24.86h133.52a24.85 24.85 0 0024.85-24.86V193.85h2.85v-18.61h-2.85V167z"
          style={{
            transformOrigin: "123.1px 253.905px",
          }}
          id="elq16lhuegdi"
          className="animable"
          fill="#707070"
          stroke="#263238"
          strokeLinejoin="round"
        />
        <path
          d="M184.08 434.05H59.27a26.33 26.33 0 01-26.33-26.33V100.09c0-14.55 7.46-26.34 26.33-26.34h124.81c17.31-.23 26.34 11.79 26.34 26.34v307.63a26.33 26.33 0 01-26.34 26.33z"
          style={{
            transformOrigin: "121.68px 253.898px",
          }}
          id="el2e8p7whcp4f"
          className="animable"
          fill="#263238"
          stroke="#263238"
          strokeLinejoin="round"
        />
        <path
          d="M131.34 77.8l-.05.19c-1.46 5.44-4.82 9-8.54 9h-2.14c-3.72 0-7.08-3.52-8.54-9v-.19l-52.08-.18A21.92 21.92 0 0038 99.53l-.07 304.94c0 14.21 11.12 25.73 24.85 25.73h117.84c13.73 0 24.86-11.52 24.86-25.73V97.34a19 19 0 00-18.78-19z"
          style={{
            transformOrigin: "121.705px 253.91px",
          }}
          id="elvvztijw2g4"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M205.46 102.88v-5.54a19 19 0 00-18.78-19l-55.34-.57-.05.19c-1.46 5.44-4.82 9-8.54 9h-2.14c-3.72 0-7.08-3.52-8.54-9v-.19l-52.08-.18A21.92 21.92 0 0038 99.53v3.35z"
          style={{
            transformOrigin: "121.73px 90.2349px",
          }}
          id="elcdm8pfklqvf"
          className="animable"
          fill="#dbdbdb"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M123.5 77.2a2.34 2.34 0 10-2.33 2.34 2.33 2.33 0 002.33-2.34z"
          style={{
            transformOrigin: "121.16px 77.2px",
          }}
          id="elvkphtunjpic"
          className="animable"
          fill="#707070"
        />
        <path
          d="M54.4 83.14c0 2.37-2.65 3.22-2.66 5v.12h2.57v.79h-3.43v-.65c0-2.53 2.65-3 2.65-5.22 0-.81-.27-1.23-.92-1.23s-.92.46-.92 1.15v.69h-.81v-.63c0-1.2.54-2 1.75-2s1.77.84 1.77 1.98z"
          style={{
            transformOrigin: "52.64px 85.105px",
          }}
          id="el629dr3wzzbv"
          className="animable"
          fill="#263238"
        />
        <path
          d="M58.69 83.13v.2a1.57 1.57 0 01-1 1.62 1.55 1.55 0 011 1.62v.6c0 1.2-.56 2-1.77 2s-1.76-.78-1.76-2v-.53H56v.59c0 .7.29 1.13.92 1.13s.91-.42.91-1.21v-.6c0-.78-.32-1.15-1-1.17h-.47v-.78h.51a.94.94 0 00.94-1.08v-.35c0-.81-.28-1.22-.91-1.22s-.92.43-.92 1.14v.4h-.82v-.36c0-1.19.56-2 1.76-2s1.77.81 1.77 2z"
          style={{
            transformOrigin: "56.9295px 85.15px",
          }}
          id="ele8cr9c4fr15"
          className="animable"
          fill="#263238"
        />
        <path
          d="M60.38 83.73v1.08h-.84v-1.08zm0 4.26v1.08h-.84V88z"
          style={{
            transformOrigin: "59.96px 86.4px",
          }}
          id="el806sjo46luh"
          className="animable"
          fill="#263238"
        />
        <path
          d="M62.14 84.43a1.28 1.28 0 011.17-.65c1 0 1.45.74 1.45 1.86v1.53c0 1.2-.57 2-1.76 2s-1.76-.78-1.76-2v-.52h.81v.58c0 .7.3 1.13.92 1.13s.92-.43.92-1.13v-1.52c0-.71-.29-1.13-.92-1.13a.84.84 0 00-.88.84v.17h-.82l.21-4.35h3.09V82h-2.3z"
          style={{
            transformOrigin: "63px 85.205px",
          }}
          id="elgu9p8fi8yre"
          className="animable"
          fill="#263238"
        />
        <path
          d="M69.12 83.12v.15h-.82v-.2c0-.71-.29-1.12-.93-1.12s-1 .42-1 1.26V85a1.26 1.26 0 011.26-.84c1 0 1.46.73 1.46 1.86v1.18c0 1.2-.59 2-1.79 2s-1.8-.78-1.8-2v-4c0-1.24.56-2 1.8-2s1.82.72 1.82 1.92zm-2.7 2.93v1.18c0 .7.29 1.13.93 1.13s.93-.43.93-1.13v-1.18c0-.7-.3-1.13-.93-1.13s-.93.43-.93 1.13z"
          style={{
            transformOrigin: "67.31px 85.2px",
          }}
          id="elqfdgfvxikp"
          className="animable"
          fill="#263238"
        />
        <path
          style={{
            transformOrigin: "153.515px 86.235px",
          }}
          id="elrcf25vuf4a"
          className="animable"
          d="M152.41 83.47H154.62V89H152.41z"
          fill="#263238"
        />
        <path
          style={{
            transformOrigin: "156.465px 85.68px",
          }}
          id="ellx01hcv4u5s"
          className="animable"
          d="M155.36 82.36H157.57000000000002V89H155.36z"
          fill="#263238"
        />
        <path
          style={{
            transformOrigin: "159.415px 85.28px",
          }}
          id="el8hsp9sn4aqg"
          className="animable"
          d="M158.31 81.57H160.52V88.99H158.31z"
          fill="#263238"
        />
        <path
          style={{
            transformOrigin: "162.355px 84.595px",
          }}
          id="elxdo2kkwjky"
          className="animable"
          d="M161.25 80.2H163.46V88.99000000000001H161.25z"
          fill="#263238"
        />
        <path
          d="M190.83 88.84h-13.27v-8.11h13.27zm-12.53-.73h11.79v-6.64H178.3z"
          style={{
            transformOrigin: "184.195px 84.785px",
          }}
          id="elp8fod22hijc"
          className="animable"
          fill="#263238"
        />
        <path
          style={{
            transformOrigin: "182.91px 84.785px",
          }}
          id="elerfgncdx3xa"
          className="animable"
          d="M179.41 82.27H186.41V87.3H179.41z"
          fill="#263238"
        />
        <path
          style={{
            transformOrigin: "191.205px 84.785px",
          }}
          id="elg9ktacp3fk6"
          className="animable"
          d="M190.37 83.83H192.04V85.74H190.37z"
          fill="#263238"
        />
        <path
          d="M172.7 87.08a.48.48 0 01-.26-.07c-2.7-1.61-4.48-.12-4.56-.05a.49.49 0 01-.69 0 .5.5 0 010-.7c.1-.08 2.38-2 5.72 0a.5.5 0 01-.25.92z"
          style={{
            transformOrigin: "170.093px 86.2665px",
          }}
          id="ellmtk4kf0j99"
          className="animable"
          fill="#263238"
        />
        <path
          d="M173.7 85.41a.48.48 0 01-.26-.07c-3.9-2.32-6.53-.07-6.55 0a.5.5 0 01-.66-.74s3.2-2.74 7.72-.06a.49.49 0 01.17.68.48.48 0 01-.42.19z"
          style={{
            transformOrigin: "170.151px 84.3956px",
          }}
          id="elo2gu6w9dnh"
          className="animable"
          fill="#263238"
        />
        <path
          d="M174.6 83.48a.47.47 0 01-.25-.07c-4.94-2.94-8.23-.17-8.37 0a.49.49 0 01-.7 0 .48.48 0 01.05-.69s3.94-3.38 9.53-.06a.5.5 0 01.17.68.49.49 0 01-.43.14z"
          style={{
            transformOrigin: "170.128px 82.3785px",
          }}
          id="elm1vprvo2wth"
          className="animable"
          fill="#263238"
        />
        <path
          d="M171.21 87.91a1.25 1.25 0 11-1.21-1.24 1.24 1.24 0 011.21 1.24z"
          style={{
            transformOrigin: "169.96px 87.9194px",
          }}
          id="el03gchput0jpk"
          className="animable"
          fill="#263238"
        />
        <path
          d="M121.53 217.66c22 .34 40.33 8.68 54.78 25.36a5.08 5.08 0 01-.47 7.33 5 5 0 01-7.15-.66 62.94 62.94 0 00-18.47-14.9 61.21 61.21 0 00-68.4 7.45 92.38 92.38 0 00-7.42 7.39 5.17 5.17 0 01-7.32.66 5.1 5.1 0 01-.36-7.33 71.44 71.44 0 0145.7-24.87c1.44-.19 2.89-.35 4.34-.41s3.18-.02 4.77-.02z"
          style={{
            transformOrigin: "121.495px 234.601px",
          }}
          id="elyjqvi2z3ukl"
          className="animable"
          fill="#263238"
        />
        <path
          d="M123.35 238.05c13.9.36 27 6.29 37.24 18.17a5 5 0 01-.46 7.3 5 5 0 01-7.22-.7 39.62 39.62 0 00-19.8-12.9c-16.11-4.36-30.11-.38-41.81 11.57-.44.45-.84.93-1.25 1.39a5.08 5.08 0 11-7.68-6.65 51.11 51.11 0 0116.38-12.85c7.19-3.57 14.82-5.3 24.6-5.33z"
          style={{
            transformOrigin: "121.52px 251.397px",
          }}
          id="elh0xm1vdy0y"
          className="animable"
          fill="#263238"
        />
        <path
          d="M146.21 272.81a5.08 5.08 0 01-3.25 4.76 5 5 0 01-5.66-1.42 21.34 21.34 0 00-7.76-5.77C121.2 266.84 112 269 105.79 276a4.92 4.92 0 01-5.43 1.63 5.07 5.07 0 01-2.36-8.11 30.52 30.52 0 0147 .08 14.27 14.27 0 011.5 3.09z"
          style={{
            transformOrigin: "121.652px 268.218px",
          }}
          id="el6yz40765myh"
          className="animable"
          fill="#263238"
        />
        <path
          d="M121.52 299.5a10.2 10.2 0 1110.17-10.15 10.14 10.14 0 01-10.17 10.15z"
          style={{
            transformOrigin: "121.49px 289.3px",
          }}
          id="elru87w9d0vp"
          className="animable"
          fill="#263238"
        />
        <path
          d="M121.58 182a72.72 72.72 0 1072.71 72.71A72.8 72.8 0 00121.58 182zm-62.72 72.75A62.68 62.68 0 01164 208.56l-88.61 88.57a62.52 62.52 0 01-16.53-42.38zm62.72 62.72a62.4 62.4 0 01-38.85-13.54l88-88a62.67 62.67 0 01-49.18 101.57z"
          style={{
            transformOrigin: "121.57px 254.72px",
          }}
          id="elygh48m6ijl"
          className="animable"
          fill="#90caf9"
        />
      </g>
      <g
        id="freepik--Sofa--inject-34"
        className="animable"
        style={{
          transformOrigin: "395.846px 369.329px",
          animation: "1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) slideDown",
          animationDelay: "0s",
        }}
      >
        <path
          style={{
            transformOrigin: "422.76px 443.53px",
          }}
          id="elg5r3te3xkva"
          className="animable"
          d="M427.5 454.81L418.02 454.81 415.99 432.25 429.53 432.25 427.5 454.81z"
          fill="#263238"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          style={{
            transformOrigin: "462.24px 443.53px",
          }}
          id="elx3i3xsn3wo"
          className="animable"
          d="M466.98 454.81L457.5 454.81 455.47 432.25 469.01 432.25 466.98 454.81z"
          fill="#263238"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          style={{
            transformOrigin: "367.495px 443.53px",
          }}
          id="elycx7j3lxy8"
          className="animable"
          d="M372.23 454.81L362.75 454.81 360.73 432.25 374.26 432.25 372.23 454.81z"
          fill="#263238"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          style={{
            transformOrigin: "325.195px 443.53px",
          }}
          id="elap3idwn7a7f"
          className="animable"
          d="M329.93 454.81L320.46 454.81 318.43 432.25 331.96 432.25 329.93 454.81z"
          fill="#263238"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M375.17 286.9h98.52s.39 34.25-4.68 58.5-11.28 38.91-11.28 38.91h-93.62s13.89-53.64 11.06-97.41z"
          style={{
            transformOrigin: "418.903px 335.605px",
          }}
          id="el6ifi54ni31n"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M416.06 292.13c-8.64-.68-12.07-2.42-18.53-6-8.41-4.61-10.21-1.54-9.61 3.07s-8.17 35-10 50.3-1.21 23.53-1.21 23.53-5.4 4.61-1.8 6.14a32.28 32.28 0 007.21 2.05h69.66s12.38-63.61 13.58-73.84-4.2-11.25-7.21-9.72-3.6 2.56-7.81 3.07c-9.84 1.27-22.44 2.32-34.28 1.4z"
          style={{
            transformOrigin: "419.602px 327.534px",
          }}
          id="elyc2yxn1p2f"
          className="animable"
          fill="#90caf9"
        />
        <path
          d="M393.63 293.16a16.26 16.26 0 003.69-7.1c-.84-.45-1.61-.82-2.32-1.12a13.69 13.69 0 01-3.26 6.61 14.3 14.3 0 01-4.54 3.65c-.18.91-.38 1.9-.6 3a16.06 16.06 0 007.03-5.04z"
          style={{
            transformOrigin: "391.96px 291.57px",
          }}
          id="elvof717h8ssc"
          className="animable"
          fill="#fff"
        />
        <path
          d="M456 313.06c-4.41 5.18-4.24 9.78-4.08 14.24.16 4.16.3 8.08-3.48 12.53s-7.69 4.92-11.82 5.44c-4.42.54-9 1.11-13.4 6.29s-4.25 9.78-4.08 14.23a28.53 28.53 0 01-.15 5.47h2.52a33.48 33.48 0 00.11-5.56c-.15-4.16-.3-8.09 3.49-12.53s7.68-4.93 11.82-5.44c4.42-.54 9-1.11 13.4-6.29s4.24-9.78 4.08-14.24c-.16-4.16-.3-8.09 3.49-12.53a14 14 0 015.34-4c.17-1 .34-1.92.5-2.83a16.07 16.07 0 00-7.74 5.22z"
          style={{
            transformOrigin: "441.365px 339.55px",
          }}
          id="el017wzzs8xd0v"
          className="animable"
          fill="#fff"
        />
        <path
          d="M385.23 370.14c4.43-.55 9-1.12 13.41-6.3s4.24-9.78 4.08-14.23c-.16-4.16-.3-8.09 3.48-12.53s7.69-4.93 11.82-5.44c4.42-.55 9-1.11 13.4-6.29s4.25-9.79 4.08-14.24c-.15-4.16-.3-8.09 3.49-12.53s7.69-4.93 11.82-5.44 8.26-1 12.34-5.14a4.35 4.35 0 00-2.74-.86 14.82 14.82 0 01-7.92 3.27 19.67 19.67 0 01-2.12.36l-3 .35A16.3 16.3 0 00437.1 297c-4.42 5.19-4.25 9.79-4.08 14.24.15 4.16.3 8.09-3.49 12.54s-7.68 4.92-11.82 5.43c-4.42.55-9 1.11-13.4 6.29s-4.24 9.79-4.08 14.24c.16 4.16.3 8.09-3.48 12.53s-7.69 4.93-11.82 5.44a23.21 23.21 0 00-8.38 2.16 32.7 32.7 0 004 1.12 32.06 32.06 0 014.68-.85z"
          style={{
            transformOrigin: "419.85px 329.064px",
          }}
          id="el3y4bc6unbqh"
          className="animable"
          fill="#fff"
        />
        <path
          d="M379.74 347.75c4.41-5.18 4.24-9.78 4.08-14.23-.15-4.17-.3-8.09 3.49-12.54s7.68-4.92 11.81-5.43c4.42-.55 9-1.12 13.41-6.3s4.24-9.78 4.08-14.23c0-1-.07-1.91-.06-2.86h-.49l-2-.19c0 1.07 0 2.12.05 3.17.16 4.16.3 8.09-3.48 12.53s-7.69 4.93-11.82 5.44c-4.42.55-9 1.11-13.41 6.29s-4.24 9.78-4.07 14.24c.15 4.16.29 8.09-3.49 12.53-.21.25-.42.48-.64.7-.1 1.27-.19 2.47-.26 3.59a18.26 18.26 0 002.8-2.71z"
          style={{
            transformOrigin: "396.805px 321.215px",
          }}
          id="elon9sho41kzl"
          className="animable"
          fill="#fff"
        />
        <path
          d="M416.06 292.13c-8.64-.68-12.07-2.42-18.53-6-8.41-4.61-10.21-1.54-9.61 3.07s-8.17 35-10 50.3-1.21 23.53-1.21 23.53-5.4 4.61-1.8 6.14a32.28 32.28 0 007.21 2.05h69.66s12.38-63.61 13.58-73.84-4.2-11.25-7.21-9.72-3.6 2.56-7.81 3.07c-9.84 1.27-22.44 2.32-34.28 1.4z"
          style={{
            transformOrigin: "419.602px 327.534px",
          }}
          id="elpli46wc53a"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M375.17 286.9h-5.57a4.49 4.49 0 00-4.37 3.45l-6.92 29c-1.28 5.38-5.66 20.88-10.48 23.59a19.79 19.79 0 01-9.69 2.53h-20.88l8.88 90.77h38l10-144.53a5.11 5.11 0 000-1h1.13z"
          style={{
            transformOrigin: "346.265px 361.57px",
          }}
          id="elmhs3l1fus1e"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M322.83 345.46h20.89a19.82 19.82 0 009.69-2.53c4.82-2.71 9.19-18.21 10.48-23.59l6.91-29a4.5 4.5 0 014.37-3.45 4.49 4.49 0 014.48 4.8L369.4 436.23h-38z"
          style={{
            transformOrigin: "351.245px 361.56px",
          }}
          id="elef909j63zer"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          style={{
            transformOrigin: "370.655px 403.385px",
          }}
          id="elwlv43esa0jq"
          className="animable"
          d="M412.04 436.28L414.21 371.26 327.1 370.49 329.28 436.28 412.04 436.28z"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M479.26 286.9h-5.57a4.5 4.5 0 00-4.37 3.45l-6.92 29c-1.28 5.38-5.65 20.88-10.48 23.59a19.76 19.76 0 01-9.69 2.53h-20.88l3.65 90.76h42.82l10.35-144.53a4.39 4.39 0 000-1h1.13z"
          style={{
            transformOrigin: "450.325px 361.565px",
          }}
          id="elq7zriar1ngt"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M426.92 345.46h20.89a19.82 19.82 0 009.69-2.53c4.82-2.71 9.2-18.21 10.48-23.59l6.92-29a4.49 4.49 0 014.36-3.45 4.48 4.48 0 014.48 4.8L473.58 434a2.39 2.39 0 01-2.37 2.21h-40.88z"
          style={{
            transformOrigin: "455.336px 361.55px",
          }}
          id="eltyw8k4ft0i"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M414.21 352L412 436.28h18.29l3.18-84.28a6.54 6.54 0 00-6.55-6.54h-6.16a6.54 6.54 0 00-6.55 6.54z"
          style={{
            transformOrigin: "422.735px 390.87px",
          }}
          id="elqcfj44xa4ip"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M307.94 352l3.14 84.28h18.29L327.19 352a6.54 6.54 0 00-6.54-6.54h-6.16a6.54 6.54 0 00-6.55 6.54z"
          style={{
            transformOrigin: "318.655px 390.87px",
          }}
          id="elkx0732v53h"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          style={{
            transformOrigin: "370.46px 399.23px",
          }}
          id="elcihhzbuo4bc"
          className="animable"
          d="M327.54 399.23L413.38 399.23"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
      </g>
      <g
        id="freepik--Character--inject-34"
        className="animable"
        style={{
          transformOrigin: "325.008px 299.38px",
          animation:
            "1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) zoomOut,1.5s Infinite linear wind",
          animationDelay: "0s,1s",
        }}
      >
        <path
          d="M285.55 287.23s-7.94 44.12-9.68 51.58-6 45.49-6 54.94.74 38 .74 38-3.23 1.49-3.23 2.73 2.49 9.2 2.49 9.2l14.66 5.47s3-7 3.23-9.45-1.74-3.48-1.74-7.71 7.46-53.44 9.7-61.64 8.7-32.81 9.94-35.05 7.46-18.64 7.46-18.64l3.48 1.74s2.23 51.7 3.48 54.93S338 429.2 338 429.2s-2.73 1.24-1 4.23 4.72 9.69 4.72 9.69 2.74-3.73 6-4.47 8.7 2.48 8.7 2.48 3.23-7.46 2.48-10.93-4-9.45-4.22-11.19-7-51.86-7-51.86 1.74-70.1 1.74-74.82a31.49 31.49 0 00-1.74-9.45 117.57 117.57 0 01-32.32 6.22c-17.65.74-27.34-6.46-27.34-6.46z"
          style={{
            transformOrigin: "313.196px 365.895px",
          }}
          id="el9j3rmysfyya"
          className="animable"
          fill="#263238"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M269.91 443.71s-8.21 7.45-9.7 8.45-11.93 5-11.68 7 3 3.23 3 3.23h33.81s.24-1 .74-5.72a18.86 18.86 0 00-1.49-8.95z"
          style={{
            transformOrigin: "267.331px 453.05px",
          }}
          id="el9ry8j3ygd8d"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M285.83 458.76l-37.12 1a6.16 6.16 0 002.8 2.57h33.81s.17-.67.51-3.57z"
          style={{
            transformOrigin: "267.27px 460.545px",
          }}
          id="elnq9unhzfmd"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M341.74 443.12s-.25 6.21-.25 9.45-.49 7-.25 7.7.75 2 .75 2h19.64s.74-2-.25-5.72-2.74-5.71-3.23-9a36.31 36.31 0 00-1.74-6.46s-9.7-7.66-14.67 2.03z"
          style={{
            transformOrigin: "351.535px 450.243px",
          }}
          id="el47b0k1462a4"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M361.89 459.91c-7.47 0-16.77-.24-20.72-.34a3.34 3.34 0 00.07.7c.25.75.75 2 .75 2h19.64a7.22 7.22 0 00.26-2.36z"
          style={{
            transformOrigin: "351.536px 460.92px",
          }}
          id="el4itkpu1t22"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M278.5 193.64s-21.12 19.83-20.2 21.68 6.7 16.86 6.7 16.86 1.66 10 .74 16.31a64.54 64.54 0 00-.56 12.05 25.59 25.59 0 007 6.11c4.08 2.23 7.23 6.12 9.83-.18s1.48-17.61 1.48-17.61 3.51 13.72 4.1 16.14-2 22.24-2 22.24S298.33 298 320 295.56s28.54-10 28.54-10-2.23-24.28-2.23-27.06a54 54 0 00-.37-5.75s7.6 7.79 11.31 7.42 10.19-15.57 8.52-18-7.41-12.25-10.93-19.29a85.73 85.73 0 01-5.28-13.19s-6.12-20.76-8-22.24-22.7-1.25-26.41-2.17a124.1 124.1 0 00-14.83-2c-1.24-.02-17.74 3.87-21.82 10.36z"
          style={{
            transformOrigin: "312.155px 239.6px",
          }}
          id="elle82l6d5xq"
          className="animable"
          fill="#90caf9"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M340.8 221.39c-.1-5.32-.12-9.46-.12-9.46"
          style={{
            transformOrigin: "340.74px 216.66px",
          }}
          id="elgmdtfoqjly7"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M346 252.75a78.12 78.12 0 01-3.7-8.89c-.74-2.21-1.13-10.1-1.34-17.49"
          style={{
            transformOrigin: "343.48px 239.56px",
          }}
          id="elbtqmnsvxu5r"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M272.93 230.8c-1.89-3.3-3.33-5.88-3.51-6.4"
          style={{
            transformOrigin: "271.175px 227.6px",
          }}
          id="el9nzryai96"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M283.51 248.86s-4.74-8-8.72-14.84"
          style={{
            transformOrigin: "279.15px 241.44px",
          }}
          id="elg6kqn95gt1f"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M307.6 185.85a92.16 92.16 0 01.19 19.65"
          style={{
            transformOrigin: "307.912px 195.675px",
          }}
          id="eljav492tpxe8"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M320.07 277.32c2.23.45 4.62.86 7.17 1.19"
          style={{
            transformOrigin: "323.655px 277.915px",
          }}
          id="el19wywmu9k13"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M293.14 265.36s6 6.58 22 10.8"
          style={{
            transformOrigin: "304.14px 270.76px",
          }}
          id="eltufv084v5s"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M309.45 279.44a50.88 50.88 0 0021.87 4.45"
          style={{
            transformOrigin: "320.385px 281.67px",
          }}
          id="elgd2wt3ym0u"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M265.16 163.61s2.22 10.38 2.41 12.61.74 5.19 3.52 9.63 10 14.27 11.49 14.83 7.23-.93 7.23-.93 6.11 12.05 7.78 11.68 5.93-14.09 6.49-19.65a39.64 39.64 0 00.18-8.34l-2.59-9.26s-2.22-13-2.22-13.9 1.29-7.6-5.93-10.38-16.13-3-22.06 3.89-6.3 9.82-6.3 9.82z"
          style={{
            transformOrigin: "284.78px 179.761px",
          }}
          id="elnhq1tnyvh5"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M285 151.94a33.32 33.32 0 01-10 9.82c-6.85 4.45-3.52-.37-3.52-.37s-4.82 3-8.71 5-2.41 2.6-3.89 2-7-16.38 5.39-24 21.43-5.61 21.43-5.61-5.38-2.41-.56-2.41S292 139 292 139s2.59-.74 3.7.74a4.4 4.4 0 001.77 1.17c6 2.54 8.09 8.22 9.22 14.15.74 3.89-2.41 13.16-2.41 13.16l-5.2 2.78a12.88 12.88 0 01-3-4.08 15.94 15.94 0 01-.74-4.63s-3.15 4.07-3.71 1.11l-2-10.56s.56 3-1.29 3-3.34-3.9-3.34-3.9z"
          style={{
            transformOrigin: "281.588px 153.685px",
          }}
          id="el3jwrq7gfihj"
          className="animable"
          fill="#263238"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M298.7 172.32s-.18-6.3 3.53-8.34 6.3.19 5.18 6.12-7.78 8.15-7.78 8.15"
          style={{
            transformOrigin: "303.186px 170.746px",
          }}
          id="elwjregsb50v"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          style={{
            transformOrigin: "294.72px 197.435px",
          }}
          id="elqcp7sochqx"
          className="animable"
          d="M289.81 199.75L299.63 189.93 293.14 204.94 289.81 199.75z"
          fill="#263238"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M285.27 189.82a1.66 1.66 0 01-.51 2.2c-.67.27-1.52-.28-1.9-1.23s-.15-1.94.51-2.21 1.51.29 1.9 1.24z"
          style={{
            transformOrigin: "284.083px 190.3px",
          }}
          id="elhvoai6qj02e"
          className="animable"
          fill="#263238"
        />
        <path
          d="M287.83 172.66c.36 1.18.1 2.3-.57 2.51s-1.53-.58-1.89-1.75-.1-2.29.57-2.5 1.53.57 1.89 1.74z"
          style={{
            transformOrigin: "286.6px 173.045px",
          }}
          id="el8h08mptiy44"
          className="animable"
          fill="#263238"
        />
        <path
          d="M275.66 174.72c.36 1.18.1 2.3-.58 2.51s-1.52-.57-1.88-1.75-.11-2.29.57-2.5 1.52.57 1.89 1.74z"
          style={{
            transformOrigin: "274.429px 175.105px",
          }}
          id="elu7b8o79ertk"
          className="animable"
          fill="#263238"
        />
        <path
          d="M276.1 170.1a7.06 7.06 0 012.59 5.56c0 3.71-.56 9.27-.56 9.27l6.68-.93"
          style={{
            transformOrigin: "280.455px 177.515px",
          }}
          id="elxoroqrayko"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M280.54 167.69s3.34-5.93 8.53-4.82"
          style={{
            transformOrigin: "284.805px 165.211px",
          }}
          id="elftn349lflu8"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M274.61 168.8s-4.07-1.29-6.85.37"
          style={{
            transformOrigin: "271.185px 168.746px",
          }}
          id="ela8k2p6v9a6r"
          className="animable"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M388 216.43s4.08-1.48 5.56-2 3 .37 5.56-.92 5.56-3.9 5.75-2-.75 2.59-2.23 3.52-3.89 2.78-3.89 2.78l-.74 1.85-11.12-.92s.21-1.74 1.11-2.31z"
          style={{
            transformOrigin: "395.892px 215.25px",
          }}
          id="els4md5xucm1q"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M410.35 221.22s5.11-4.05 5.85-5.9-.56-2-1.85-1.3-5.35 4.08-5.35 4.08z"
          style={{
            transformOrigin: "412.708px 217.427px",
          }}
          id="elng379beaikj"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M406.17 222.1s3.8.4 4.18-.88 3.38-9.34 2.89-10.35-1.44-.92-2.49.75a57.18 57.18 0 00-2.9 7.07s-2.54.57-3.18 2.31 1.5 1.1 1.5 1.1z"
          style={{
            transformOrigin: "408.922px 216.215px",
          }}
          id="elveuoqkihu3"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M401.37 223.1s3.53 1.49 4.27.37 5.93-8 5.74-9.08-1.11-1.29-2.59 0a55.84 55.84 0 00-4.82 5.93s-2.6-.18-3.71 1.3 1.11 1.48 1.11 1.48z"
          style={{
            transformOrigin: "405.667px 218.693px",
          }}
          id="eli5l5k89gegr"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M349.67 253.5a23.39 23.39 0 0110.38-14.27c8.89-5.75 20.95-16.13 20.95-16.13s4.08-5.74 7-6.67 12.6 1.85 12.6 1.85 7.79-7.78 8-6.11-3.7 7.6-5.56 9.82-7.6 2.78-8.89 2.78a67 67 0 00-6.86.56c-.74.18-13 16.86-18.53 25s-8 9.63-11.49 9.82-7.23-2.6-8.16-3.89.56-2.76.56-2.76z"
          style={{
            transformOrigin: "378.706px 236.047px",
          }}
          id="elfsjzb4m9m7v"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M233.77 222.82l11.68 25.34a1.86 1.86 0 002 1l9.69-1.79a1.85 1.85 0 001.36-2.52L248 220.12a1.82 1.82 0 00-1.89-1.11l-10.89 1.21a1.84 1.84 0 00-1.45 2.6z"
          style={{
            transformOrigin: "246.119px 234.094px",
          }}
          id="els9k8fzz9b0l"
          className="animable"
          fill="#263238"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          d="M241.44 244.51s-4.19-6.42-4.19-7.86 2.44-4.85 3.87-7.93 1.65-5.14 2.88-4.72 1 1.64.61 3.69a79.85 79.85 0 01-2.66 7.8l.41 2.47a26.4 26.4 0 013.69-5.55c1.85-1.84 3.9-4.92 5.34-4.31s2.05 1 .82 2.47a42.71 42.71 0 00-4.14 5.91 36.87 36.87 0 00-2.79 5.58 42.73 42.73 0 014.37-3.66c2-1.44 4.82-3.52 6-2.7s1.44 1.64.21 2.67-2.35 1.73-4 3.17a60.68 60.68 0 00-4.84 5.45 17.87 17.87 0 014.84-2.66c3.49-1.43 6.68-1.27 6.81-.17s-3.67 2.1-3.67 2.1c-2.72.62-2.85 1.55-2.85 1.55s2.26 4.52 1.85 6c0 0 9.12-1.43 12.61-2.45s8.94 1 10.59 2.65c3.49 3.49 5.13 8.83 3.29 13.35s-1.85 3.08-16.43-1-14.3-5.54-17.86-11.5c-1.29-2.32-4.76-10.35-4.76-10.35z"
          style={{
            transformOrigin: "259.251px 247.047px",
          }}
          id="eltdtxqs55izi"
          className="animable"
          fill="#fff"
          stroke="#263238"
          strokeMiterlimit={10}
        />
        <path
          style={{
            transformOrigin: "253.905px 255.65px",
          }}
          id="elrmyo4ywl8ym"
          className="animable"
          d="M254.06 253.77L253.75 257.53"
          fill="none"
          stroke="#263238"
          strokeMiterlimit={10}
        />
      </g>
      <defs></defs>
    </svg>
  );
};

const NoInternetConnection = ({ children }) => {
  const { currentColor } = useStateContext();

  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState(true);

  // On initization set the isOnline state.
  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  // event listeners to update the state
  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });

  // reload page function
  const refreshPage = () => {
    window.location.reload();
  };

  // if user is online, return the child component else return a custom component
  if (isOnline) {
    return <div>{children}</div>;
  } else {
    return (
      <div
        className={`themeBackground themeText nav-item fixed right-0 bottom-0 top-0 left-0 h-full w-full bg-white/30 backdrop-blur-3xl `}
      >
        <div className="flex flex-col items-center">
          <SvgComponent className={`h-80 w-80 text-[${currentColor}]`} />

          <div className="flex text-gray-700 dark:text-gray-300">
            <h1
              className={`mx-1 duration-200 ease-in hover:scale-105 hover:underline`}
            >
              <h1>No Internet Connection. Please try again later.</h1>
            </h1>
          </div>
        </div>
      </div>
    );
  }
};

export default NoInternetConnection;
