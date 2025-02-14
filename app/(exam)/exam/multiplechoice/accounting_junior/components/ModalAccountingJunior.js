import { Modal, Typography } from "antd";
const { Title, Text } = Typography;

export default function ModalAccountingJunior({ open, close }) {
  return (
    <Modal
      width={700}
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
          Petunjuk Pengerjaan Accounting Junior 🧠 :
        </Title>
      }
      open={open}
      onCancel={close}
      footer={null}
    >
      <div>
        <ol style={{ listStyleType: "ordinal" }}>
          <li>
            <Text>
              Simak story yang ada agar dapat menjawab soal dengan baik.
            </Text>
          </li>
          <li>
            <Text>
              Perhatikan soal tersebut digunakan untuk menjawab dari nomor
              berapa sampai dengan berapa.
            </Text>
          </li>
          <div style={{ marginTop: "0.75rem" }}>
            ✨{" "}
            <span style={{ fontSize: "1rem", fontWeight: "bold" }}>Tips:</span>{" "}
            Pastikan untuk fokus pada huruf di tengah dan pilih huruf yang
            paling tepat untuk menyelesaikan urutan! 🚀{" "}
          </div>
          <div
            style={{
              marginTop: "0.75rem",
              fontWeight: "bold",
              fontSize: "1.25rem",
            }}
          >
            Semoga sukses! 💡
          </div>
        </ol>
      </div>
    </Modal>
  );
}
