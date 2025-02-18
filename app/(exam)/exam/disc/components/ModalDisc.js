import { Flex, Modal, Typography } from "antd";
const { Title, Text } = Typography;

const ModalDisc = ({ open, close }) => {
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
          Petunjuk Pengerjaan DISC 🧠 :
        </Title>
      }
      open={open}
      onCancel={close}
      footer={null}
    >
      <Flex style={{ flexDirection: "column" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            marginBottom: "20px",
          }}
        >
          <li>
            <Text>Pilihlah salah satu opsi yang sesuai dengan Anda</Text>
          </li>
          <li>
            <Text>Jawab sesuai dengan kriteria diri Anda.</Text>
          </li>
          <li>
            <Text>Setiap soal memiliki 4 pertanyaan</Text>
          </li>
        </ul>
        <Text style={{ marginLeft: "20px", fontWeight: "bold" }}>
          Pilihan :
        </Text>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            marginBottom: "20px",
          }}
        >
          <li>
            <Text>
              M (Most): Yang paling sesuai dan paling menggambarkan Anda.
            </Text>
          </li>
          <li>
            <Text>
              L (Least): Yang paling tidak sesuai dan tidak menggambarkan Anda
            </Text>
          </li>
        </ul>
        <Text style={{ marginLeft: "20px" }}>
          ✨ <span style={{ fontSize: "1rem", fontWeight: "bold" }}>Tips:</span>
          Pastikan Anda menjawab dengan jujur sesuai dengan keadaan diri Anda!
        </Text>
        <Text
          style={{
            marginTop: "1rem",
            fontSize: "1rem",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          Semoga sukses! 💡
        </Text>
      </Flex>
    </Modal>
  );
};

export default ModalDisc;
