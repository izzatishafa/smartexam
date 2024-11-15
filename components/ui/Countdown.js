// "use client";
// import React from "react";
// import "../../app/globals.css";

// export default function Countdown(){
//     return(
//         <>
//         Countdown Component Goes Here
//         </>
//     )
// }

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Typography, Modal } from "antd";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(3599);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setIsTimeUp(true);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (isTimeUp) {
      Modal.info({
        title: "Waktu Habis",
        content: "Waktu Ujian Sudah Habis",
        onOk: () => router.push("/end"),
      });
    }
  }, [isTimeUp, router]);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <Typography.Text
      style={{ fontSize: "25px", fontWeight: "bold", paddingRight: "30px" }}
    >
      {formatTime(timeLeft)}
    </Typography.Text>
  );
}
