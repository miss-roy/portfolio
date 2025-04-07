import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
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
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            CourseWork Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Project Card - Dating Profile Page */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              onClick={() =>
                openModal(
                  <p className="text-gray-400">
                    A Dart/Flutter-based project of a single-page profile with different widget cards and vertical scroll functionality, along with some play around with icons, grid assignments, and scrollable photo dumps.
                    It features an adjustable screen size to enhance user experience.
                  </p>,
                  "Dating Profile Page"
                )
              }
            >
              <h3 className="text-xl font-bold mb-2">Dating Profile Page</h3>
              <p className="text-gray-400 mb-4">
                A Flutter-based project with profile widgets, scroll functionality, and interactive design elements.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Dart", "Flutter"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            {/* Second Project Card - FlashCards */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
              onClick={() =>
                openModal(
                  <p className="text-gray-400">
                    This project, built with Dart and Flutter, showcases a FlashCard quiz app. Features include animations, sorting techniques, and quiz sessions that track cards visited, answers peeked, and more.
                    It also includes navigation between app pages and hover effects on buttons.
                  </p>,
                  "FlashCards"
                )
              }
            >
              <h3 className="text-xl font-bold mb-2">FlashCards</h3>
              <p className="text-gray-400 mb-4">
                A flashcard quiz app built with Dart and Flutter featuring animations, sorting techniques, and quizzes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Dart", "Flutter"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
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
            <div className="text-white">{modalContent}</div>
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
