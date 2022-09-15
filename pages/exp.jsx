import React from "react";
import MainLayout from "../layouts/MainLayout";
export default function exp() {
  return (
    <div
      className="d-flex justify-content-center bg-dark bg-opacity-75 "
      style={{ color: "#AF7AC5" }}
    >
      <MainLayout>
        <div className="d-flex justify-content-center text-yellow rounded-5 ms-5 me-5">
          <span className="h1" style={{ color: "white" }}>
            Experience
          </span>
        </div>
        <div style={{ color: "black", width: "600px" }}>
          <div className="d-flex justify-content-center">
            <div className="card mt-3 mb-3 col-8">
              <img src="/lh.png" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">C++ Game</h5>
                <p className="card-text">
                  I have an experience of making game using C++ for my final
                  project in first year.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="card mb-3 col-8">
              <img src="/hh.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Scratch Game</h5>
                <p className="card-text">
                  I have an experience of learing and using Scratch for my group
                  project of making a tileset game.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="card mb-3 col-8">
              <img src="/rb.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Robotic Competition</h5>
                <p className="card-text">
                  Back in highschool i used to participate alot in robotic
                  competition for my school.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="card mb-3 col-8">
              <img src="/egat.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">EGAT Project</h5>
                <p className="card-text">
                  I have once sent my project to EGAT and get a certificate to
                  participate in an EGAT camp.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="card mb-3 col-8">
              <img src="/ta.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">TA Experience</h5>
                <p className="card-text">
                  At highschool I am once be a teacher assistant for a 4th grade
                  students. I job is to prepare a microcontroller and teach
                  students how to basicly use it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
