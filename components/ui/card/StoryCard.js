"use client";
import React, { useState } from "react";
import { Typography, Card, Space } from "antd";

const { Title, Text } = Typography;

export default function StoryCard() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  return (
    <Card
      style={{
        width: "100%",
        userSelect: "none",
      }}
      onCopy={handleCopy}
    >
      <Title level={4} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
        5. Simak bacaan teks berikut untuk menjawab soal nomor 5-10 !
      </Title>
      <Space style={{ paddingLeft: "30px" }} direction="vertical">
        <div
          style={{
            height: "200px",
            maxWidth: "1300px",
            overflow: "scroll",
            margin: "0px 50px 20px 0px",
            fontSize: "15px"
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna
            lorem, fringilla mollis viverra a, mattis non nunc. Integer id
            sagittis mauris, id tincidunt erat. Vestibulum mattis ipsum eu
            consectetur mollis. Maecenas hendrerit ex laoreet pharetra auctor.
            Vivamus odio urna, ullamcorper vitae orci vel, sagittis posuere
            risus. Cras non nisi sapien. Suspendisse consequat eros eget ligula
            tincidunt rutrum. Quisque lectus mi, mattis vitae tincidunt quis,
            consequat ut enim. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Aliquam erat volutpat.
            Donec posuere ullamcorper leo, nec semper elit pharetra laoreet.
          </p>
          <p>
            Donec aliquam, tellus in pharetra vulputate, odio urna pretium est,
            et fringilla nisl turpis ac nunc. Cras bibendum magna vel laoreet
            sollicitudin. Aliquam lobortis justo ante, rhoncus imperdiet dui
            luctus vel. Etiam mattis urna id ante aliquam, at vulputate metus
            malesuada. Maecenas non massa nec enim blandit congue. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Sed in augue augue.
          </p>
          <p>
            Sed lobortis molestie nisl, id tempor nibh malesuada a. Integer sit
            amet dapibus elit, sed tincidunt orci. Fusce placerat placerat diam
            sit amet pellentesque. Proin semper arcu felis, pulvinar pretium
            turpis cursus et. Nulla sagittis interdum orci, eget sollicitudin
            quam auctor eget. Donec posuere urna id vestibulum eleifend.
            Praesent id suscipit arcu. Ut tincidunt vestibulum lorem, vitae
            auctor arcu blandit ut. Donec sed arcu tellus.
          </p>
        </div>
        <Typography>
          <Text style={{ fontSize: "17px" }}>
            Dari soal tersebut manakah yang blablabla ?
          </Text>
        </Typography>
        <div style={{ maxWidth: "500px" }}>
          <ol
            style={{
              color: "#000",
              listStyleType: "none",
              paddingLeft: "0px",
              fontSize: "15px",
            }}
          >
            {["A", "B", "C", "D"].map((choice, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(choice)}
                style={{
                  color: "#1B3042",
                  backgroundColor:
                    selectedOption === choice ? "#D6E4FF" : "#E9F0FC",
                  padding: "8px 15px",
                  borderRadius: "15px",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  border:
                    selectedOption === choice ? "2px solid #0A01FF" : "none",
                }}
              >
                <span
                  style={{
                    backgroundColor: "white",
                    color: "#0A01FF",
                    padding: "5px 10px",
                    borderRadius: "100%",
                    marginRight: "15px",
                  }}
                >
                  {choice}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontFamily: ["ABeeZee", "sans-serif"],
                    fontWeight: "semibold",
                  }}
                >
                  Ini adalah contoh pilihan ganda dari quiz
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Space>
    </Card>
  );
}
