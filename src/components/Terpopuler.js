import { Card, Container, Row, Col, Image } from "react-bootstrap";
import borobudurimage from "../assets/Image/Terpopuler/borobudur.png";
import gunungbaturimage from "../assets/Image/Terpopuler/gunungbatur.png";
import monasimage from "../assets/Image/Terpopuler/monas.png";
import pulauseribuimage from "../assets/Image/Terpopuler/pulauseribu.png";
import jayawijayaimage from "../assets/Image/Terpopuler/jayawijaya.png";
import pantaimerahimage from "../assets/Image/Terpopuler/pantaimerah.png";

const Terpopuler = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="Judulpopuler" id="terpopuler">
          DESTINASI TERPOPULER
        </h1>
        <br />
        <Row>
          <Col md={4} className="Listwrapper">
            <Card className="Listdestinasi">
              <Image src={borobudurimage} alt="Borobudur" className="image" />
              <div className="Listbackground">
                <div className="p-2 m-1 text-black">
                  <Card.Title className="text-center">Borobudur</Card.Title>
                  <Card.Text className="text-center">
                    Perjalanan ke Yogyakarta pasti tidak akan lengkap tanpa
                    mengunjungi Candi Borobudur yang menakjubkan. Candi Budha
                    terbesar di dunia, Borobudur berasal dari masa pemerintahan
                    Dinasti Syailendra Kerajaan Medang pada abad ke-9.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="Listwrapper">
            <Card className="Listdestinasi">
              <Image
                src={gunungbaturimage}
                alt="Gunung Batur"
                className="image"
              />
              <div className="Listbackground">
                <div className="p-2 m-1 text-black">
                  <Card.Title className="text-center">Gunung Batur</Card.Title>
                  <Card.Text className="text-center p-2 m-1">
                    Menikmati sunrise di puncak gunung Batur adalah salah satu
                    pengalaman yang sangat mengesankan dan tidak boleh
                    dilewatkan begitu saja saat berkunjung ke pulau Bali.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="Listwrapper">
            <Card className="Listdestinasi">
              <Image src={monasimage} alt="MONAS" className="image" />
              <div className="Listbackground">
                <div className="p-2 m-1 text-black">
                  <Card.Title className="text-center">
                    Monumen Nasional
                  </Card.Title>
                  <Card.Text className="text-center p-2 m-1">
                    Monumen Nasional atau yang disingkat dengan Monas atau Tugu
                    Monas adalah monumen peringatan setinggi 132 meter yang
                    terletak tepat di tengah Lapangan Medan Merdeka, Jakarta.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="Listwrapper">
            <Card className="Listdestinasi">
              <Image
                src={pulauseribuimage}
                alt="pulauseribu"
                className="image"
              />
              <div className="Listbackground">
                <div className="p-2 m-1 text-black">
                  <Card.Title className="text-center">Pulau seribu</Card.Title>
                  <Card.Text className="text-center p-2 m-1">
                    Pulau-pulau kecil nan indah di Kepulauan Seribu siap menanti
                    anda dengan sederet pesonanya. Karena ada begitu banyak
                    pilihan perjalanan ke tempat-tempat terbaik di wilayah ini.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="Listwrapper">
            <Card className="Listdestinasi">
              <Image src={jayawijayaimage} alt="Jayawijaya" className="image" />
              <div className="Listbackground">
                <div className="p-2 m-1 text-black">
                  <Card.Title className="text-center">
                    Gunung Jaya Wijaya
                  </Card.Title>
                  <Card.Text className="text-center p-0 m-1">
                    Gunung Jayawijaya merupakan gunung tertinggi di Indonesia
                    yang pada puncaknya terselimuti salju. Mungkin tempat ini
                    merupakan satu-satunya tempat di negara tropis yang
                    mempunyai salju. populer bagi pengila pendaki.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="Listwrapper">
            <Card className="Listdestinasi">
              <Image
                src={pantaimerahimage}
                alt="Pantaimerah"
                className="image"
              />
              <div className="Listbackground">
                <div className="p-2 m-1 text-black">
                  <Card.Title className="text-center">Pantai Merah</Card.Title>
                  <Card.Text className="text-left">
                    Keindahan yang tersimpan di pantai yang jarang terjamah
                    manusia ini sangat menakjubkan. Sahabat bisa menikmati
                    keindahannya dengan cara diving maupun snorkeling. Sahabat
                    akan melihat keindahan laut yang sebenarnya.
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

export default Terpopuler;
