import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <div className="bg-dark bg-opacity-75 " style={{ color: "#AF7AC5" }}>
      <MainLayout>
        <div
          className="d-flex justify-content-center"
          style={{ color: "black" }}
        >
          <div className="card mb-3 col-8">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/mapic.jpg" className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Nuttadon Punyapan</h5>
                  <p className="card-text">
                    Hi, my name is Nuttadon. In highschool I study at Yupparaj
                    Wittayalai School and now am studied at Chiangmai Universy
                    in facalty of Computer Engineering. I have an interest in
                    programing and network system ,so am looking forward to
                    being a better programer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center  rounded-5 ms-5 me-5">
          <span className="h1">Skills</span>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ color: "black" }}
        >
          <div className="card m-3" style={{ width: "16rem" }}>
            <img src="/skill1.png" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Programing</h5>
              <p className="card-text">
                I am capable of using programing language such as c and c++ to
                writing simple program.
              </p>
            </div>
          </div>
          <div className="card m-3" style={{ width: "16rem" }}>
            <img src="/skill2.jpg" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Photo and Video Editing</h5>
              <p className="card-text">
                I can do some photo and video editing using program such a
                Photoshop ,Premire Pro and Vegas Pro.
              </p>
            </div>
          </div>

          <div className="card m-3" style={{ width: "16rem" }}>
            <img src="/skill3.jpg" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Robotic Skill</h5>
              <p className="card-text">
                I used to programing and wiring a robot for highschool project
                ,so I have some basic knowledge in using board and
                microcontroller.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center rounded-5 ms-5 me-5">
          <span className="h1">Hobbies</span>
        </div>

        <div
          className="d-flex justify-content-center"
          style={{ color: "black" }}
        >
          <div className="card m-3" style={{ width: "16rem" }}>
            <img src="/hobbie1.jpg" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Playing Game</h5>
              <p className="card-text">
                In my freetimes I love playing video games for fun. I don't like
                playing games in competitive mode because it make me stress. You
                can invite me to play game via discrod.
              </p>
            </div>
          </div>

          <div className="card m-3" style={{ width: "16rem" }}>
            <img src="/hobbie2.jpg" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Listen to Music</h5>
              <p className="card-text">
                Sometimes when I am tried I love listen to music because it's
                make me feel relax. My favorite style of music is pop music
                because it's fun to listen.
              </p>
            </div>
          </div>

          <div class="card m-3" style={{ width: "16rem" }}>
            <img src="/hobbie3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Cooking</h5>
              <p class="card-text">
                Cooking is'nt my best skill because am not that good at it but I
                still love to cook for myself because I can do whatever I want.
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
