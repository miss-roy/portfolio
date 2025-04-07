import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Background = () => {
// State to manage the modal visibility, content, and header
const [showModal, setShowModal] = useState(false);
const [modalContent, setModalContent] = useState("");
const [modalHeader, setModalHeader] = useState("");

// Function to open the modal with specific content and header
const openModal = (content, header) => {
  setModalContent(content);
  setModalHeader(header);
  setShowModal(true);
};

// Function to close the modal
const closeModal = () => {
  setShowModal(false);
  setModalContent("");
  setModalHeader("");
};

return (
    <section id="background" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Background
          </h2>

          {/* Education and Work Experience Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education Section with Vertical Grid (2 items) */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-blue-500">🏫 Education</h3>
              <div className="grid grid-cols-1 gap-6">
                {/* First Education Entry - M.Sc */}
                <div
                  className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all cursor-pointer"
                  onClick={() =>
                    openModal(
                      <ul className="list-disc pl-6">
                        <li>Database Organization</li>
                        <li>Machine Learning</li>
                        <li>Computer Networks</li>
                        <li>Mobile Application Development</li>
                        <li>Science of Programming</li>
                        <li>Data Intensive</li>
                      </ul>,
                      "Foundational Courses"
                    )
                  }
                >
                  <h4 className="text-lg font-semibold text-blue-500">M.Sc in Computer Science</h4>
                  <p>Illinois Institute of Technology Chicago (2024-2026)</p>
                </div>

                {/* Second Education Entry - B.Tech */}
                <div
                  className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all cursor-pointer"
                  onClick={() =>
                    openModal(
                      <ul className="list-disc pl-6">
                        <li>Data Structures</li>
                        <li>Computer Architecture</li>
                        <li>Cloud Computing</li>
                        <li>Computer Networks</li>
                        <li>Machine Learning</li>
                        <li>Web Development in PHP</li>
                        <li>Database Managements</li>
                      </ul>,
                      "Foundational Courses"
                    )
                  }
                >
                  <h4 className="text-lg font-semibold text-blue-500">B.Tech in Computer Science</h4>
                  <p>Maulana Abul Kalam Azad University of Technology Kolkata (2015-2019)</p>
                </div>
              </div>
            </div>

            {/* Work Experience Section with Vertical Grid */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-blue-500">💼 Work Experience</h3>
              <div className="grid grid-cols-1 gap-6">
                {/* First Work Experience Entry - Associate II */}
                <div
                  className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all cursor-pointer"
                  onClick={() =>
                    openModal(
                      <ul className="list-disc pl-6">
                        <li>Built and maintained React components</li>
                        <li>Implemented interactive front-end UI designs</li>
                        <li>Wrote test cases using Jest</li>
                        <li>Mentored juniors for code reviews</li>
                        <li>Assisted in project SDLC in Scrum sprints</li>
                      </ul>,
                      "Job Responsibilities"
                    )
                  }
                >
                  <h4 className="text-lg font-semibold text-blue-500">Associate II (Software Engineer) at PwC</h4>
                  <p>2022 - 2024</p>
                </div>

                {/* Second Work Experience Entry - Application Development */}
                <div
                  className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all cursor-pointer"
                  onClick={() =>
                    openModal(
                      <ul className="list-disc pl-6">
                        <li>Created microservice architecture</li>
                        <li>Integrated Restful APIs</li>
                        <li>Wrote unit test cases with Junit</li>
                      </ul>,
                      "Job Responsibilities"
                    )
                  }
                >
                  <h4 className="text-lg font-semibold text-blue-500">Application Development Analyst (Software Engineer) at Accenture</h4>
                  <p>2019 - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Modal - Popup Card with Dynamic Header */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black p-8 rounded-lg shadow-lg max-w-lg w-full opacity-100">
            <h2 className="text-2xl mb-4 text-white font-semibold">{modalHeader}</h2>
            <div className="text-white">
              {modalContent} {/* This will only show the list content */}
            </div>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
