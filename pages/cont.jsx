import React from "react";
import MainLayout from "../layouts/MainLayout";
export default function cont() {
  return (
    <div className="bg-dark bg-opacity-75" style={{ color: "#AF7AC5" }}>
      <MainLayout>
        <div className="d-flex justify-content-center gap-3">
          <img
            width="300px"
            height="350px"
            src="/mapic.jpg"
            className="rounded-circle border border-5 mt-3"
          />
        </div>
        <div className="mt-3 text-white ms-5 me-5 ">
          <div className="text-center mb-2 mt-2">
            <span> Name : Nuttadon Punyapan</span>
          </div>
          <div className="text-center mb-2 mt-2">
            <span>Nickname : Mai</span>
          </div>
          <div className="text-center mb-2 mt-2">
            <a
              className="delink"
              href="https://www.google.co.th/maps/place/%E0%B8%8B%E0%B8%AD%E0%B8%A2+%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B9%82%E0%B8%8A%E0%B8%84+15+%E0%B8%81+%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%9C%E0%B8%B7%E0%B8%AD%E0%B8%81+%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88+%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88+50300/@18.8275364,98.987627,17z/data=!3m1!4b1!4m5!3m4!1s0x30da3ae01bc2fe41:0x671e13d8dde2e196!8m2!3d18.8275313!4d98.9898157?hl=th"
              target="_blank"
            >
              <span>🏠</span>
              <span>
                19/1 15A Alley(Mahachok Street) Patan District Chiangmai
                Thailand 50300
              </span>
            </a>
          </div>
          <div className="text-center mb-2 mt-2">
            <a
              className="delink"
              href="https://www.facebook.com/Mukei.Asashin/"
              target="_blank"
            >
              <span>
                <img width="20" src="/fb.png" className="me-1" />
                https://www.facebook.com/Nuttadon.Pyp/
              </span>
            </a>
          </div>
          <div className="text-center mb-2 mt-2">
            <a href="mailto:nuttadon_p@cmu.ac.th" className="delink">
              <span>
                <img width="20" src="/outlook.png" className="me-1" />
                nuttadon_p@cmu.ac.th
              </span>
            </a>
          </div>
          <div className="text-center mb-2 mt-2">
            <a
              href="https://line.me/ti/p/GQHR8FoSzh"
              target="_blank"
              className="delink"
            >
              <span>
                <img width="20" src="/line.png" className="me-1" />
                nuttadon123
              </span>
            </a>
          </div>
          <div className="text-center mb-2 mt-2">
            <a
              href="https://www.instagram.com/lost_memoriesz/"
              target="_blank"
              rel="noreferrer"
              className="delink"
            >
              <span>
                <img width="20" src="/ig.png" className="me-1" />
                lost_memoriesz
              </span>
            </a>
          </div>
          <div className="text-center mb-2 mt-2">
            <img width="20" src="/discord.png" />
            <span>MrChaoz#8814</span>
          </div>
          <div className="text-center mb-2 mt-2">
            <span>📞</span>
            <span>+6696-814-4609</span>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
