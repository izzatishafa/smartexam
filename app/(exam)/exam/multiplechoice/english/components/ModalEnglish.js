import { Modal, Typography } from "antd";
const { Title, Text } = Typography;

export default function ModalEnglish({ open, close }) {
  return (
    <Modal
      width={600}
      title={
        <Title
          level={5}
          style={{
            color: "#2F2F2F",
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
            margin: 2,
          }}
        >
          Petunjuk Pengerjaan
        </Title>
      }
      open={open}
      onCancel={close}
      footer={null}
    >
      <div>
        <ol>
          <li>
            <Text>Baca soal dengan teliti.</Text>
          </li>
          <li>
            <Text>Pantau waktu di pojok atas.</Text>
          </li>
          <li>
            <Text>Jawab semua soal dengan teliti.</Text>
          </li>
          <li>
            <Text>Periksa ulang sebelum submit.</Text>
          </li>
          <li>
            <Text>Baca soal dengan teliti.</Text>
          </li>
        </ol>
        <Text
          style={{
            marginLeft: "20px",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Semoga sukses! 💡
        </Text>
      </div>
    </Modal>
  );
}
