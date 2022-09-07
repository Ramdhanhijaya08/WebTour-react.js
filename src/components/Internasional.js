import { Card, Container, Row, Col, Image } from "react-bootstrap";
import singapuraimage from "../assets/Image/Internasional/singapura.jpg";
import malaysiaimage from "../assets/Image/Internasional/malaysia.jpg";
import jepangimage from "../assets/Image/Internasional/jepang.jpg";
import koreaimage from "../assets/Image/Internasional/korea.jpg";
import usaimage from "../assets/Image/Internasional/usa.jpg";
import rusiaimage from "../assets/Image/Internasional/rusia.jpg";

const Internasional = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="JudulInternasional" id="internasional">
          DESTINASI INTERNASIONAL
        </h1>
        <br />
        <Row>
          <Col md={4} className="Listwrapper">
            <Card className="Listdestinasi">
              <Image src={singapuraimage} alt="singapura" className="image" />
              <div className="Listbackground">
                <div className="p-2 m-2 text-black">
                  <Card.Title className="text-center">
                    Gardens by the Bay
                  </Card.Title>
                  <Card.Text className="text-center p-1 m-1">
                    Gardens by the Bay merupakan salah satu objek wisata ikonik
                    Singapura dan menjadi rumah bagi 700.000 dari 2000 spesies.
                    Keindahan ini banyak menyita perhatian wisatawan dunia.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="Listwrapper">
            <Card className="Listdestinasi">
              <Image src={malaysiaimage} alt="malaysia" className="image" />
              <div className="Listbackground">
                <div className="p-2 m-1 text-black">
                  <Card.Title className="text-center">
                    Petronas Twin Tower
                  </Card.Title>
                  <Card.Text className="text-center p-2 m-1">
                    Petronas Twin Tower yang merupakan ikon terkenal dari
                    Malaysia ini adalah bangunan tertinggi di Asia Tenggara.
                    Selain menjadi tempat wisata untuk turis domestik dan
                    mancanegara.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="Listwrapper">
            <Card className="Listdestinasi">
              <Image src={jepangimage} alt="jepang" className="image" />
              <div className="Listbackground">
                <div className="p-2 m-1 text-black">
                  <Card.Title className="text-center">Kuil Daigoji</Card.Title>
                  <Card.Text className="text-center p-2 m-1">
                    Kuil Daigoji merupakan bangunan tertua di Kyoto bentang alam
                    yang mengelilingi kuil ini sangat indah terlebih saat musim
                    semi. kalian bisa menikmatinya secara langsung.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="Listwrapper">
            <Card className="Listdestinasi">
              <Image src={koreaimage} alt="Korea" className="image" />
              <div className="Listbackground">
                <div className="p-2 m-1 text-black">
                  <Card.Title className="text-center">Namsan Tower</Card.Title>
                  <Card.Text className="text-center p-2 m-1">
                    N Seoul Tower atau yang lebih dikenal dengan Namsan Tower
                    merupakan salah satu destinasi wisata populer di kota Seoul.
                    terletak di atas gunung Namsan dengan ketinggian 479 meter
                    di atas permukaan laut.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="Listwrapper">
            <Card className="Listdestinasi">
              <Image src={usaimage} alt="USA" className="image" />
              <div className="Listbackground">
                <div className="p-2 m-1 text-black">
                  <Card.Title className="text-center">
                    Jembatan Golden Gate
                  </Card.Title>
                  <Card.Text className="text-center p-2 m-1">
                    Jembatan Golden Gate merupakan jembatan gantung yang
                    mengubungkan San Fransisco dengan Marin County. Jembatan ini
                    menjadi ikonik di San Fransisco, jadi jika Anda liburan ke
                    kota ini harus mampir ke tempat wisata ini.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="Listwrapper">
            <Card className="Listdestinasi">
              <Image src={rusiaimage} alt="rusia" className="image" />
              <div className="Listbackground">
                <div className="p-2 m-1 text-black">
                  <Card.Title className="text-center">
                    Katedral St Basil
                  </Card.Title>
                  <Card.Text className="text-center p-2 m-1">
                    Katedral St Basil terletak di jantung Kota Moskow, katedral
                    ini menjadi salah satu tempat wisata di Rusia. Katedral ini
                    terkenal lantaran arsitekturnya yang unik. Bentuk bangunan
                    serta warnanya yang colourful, menjadi ikon dari Rusia.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Internasional;
