// projects.ts

export type Project = {
  title: string;
  tech: string[];
  repo?: string;
  link?: string;
  description: string[];
};

const projects: Project[] = [
  {
    title: "Real-Time CPU Rendering Engine",
    tech: ["C++", "SDL", "GCC"],
    repo: "https://github.com/MeetSable/3D-Graphics",
    description: [
      "Developed 3D rendering engine from scratch, implementing multiple pipeline levels: OBJ file reading, lighting computation, 2D projection, hidden surface elimination, clipping, and shading (Polygonal & Phong).",
      "Implemented camera and movement system to explore the rendered world in real-time.",
      "Used SDL for window creation, user input, text rendering (debugging), and pixel drawing.",
      "Applied OOP concepts to ensure modular and clean design.",
    ],
  },
  {
    title: "Resume Refiner Powered By Large Language Model",
    tech: ["Python", "Ollama", "LangChain", "UnslothAI"],
    repo: "https://github.com/Resume-Refiner", // adjust if real repo exists
    description: [
      "Designed and developed an LLM-powered resume refiner with a team of 3, leveraging a smaller open-source LLM model to align resumes with job descriptions.",
      "Benchmarked local LLM’s ability to parse and generate structured JSON for resumes and job descriptions.",
      "Utilized Gemini-1.5-Flash model via Google’s API to generate a custom dataset of structured resumes, job descriptions, and prompts.",
      "Fine-tuned a local Gemma 9B parameter LLM using UnslothAI in Python.",
      "Developed a simple UI for uploading resumes and job descriptions, which are processed by the locally fine-tuned Gemma 9B model.",
      "Implemented evaluation with cosine similarity, ROUGE score, and LLM-As-A-Judge to measure content preservation and alignment.",
    ],
  },
  {
    title: "Speech Dereverberation via Generative Adversarial Training",
    tech: ["Python", "PyTorch", "Librosa", "NumPy", "SciPy"],
    repo: "https://github.com/MeetSable/speech_dereverberation_using_gan",
    description: [
      "Developed a conditional GAN with Convolutional and Bi-LSTM layers for speech dereverberation.",
      "Implemented data generation pipeline by convolving LibriSpeech ASR corpus with RIR dataset.",
    ],
  },
  {
    title: "Conway’s Game of Life Simulator",
    tech: ["C++", "SFML", "MSVC"],
    repo: "https://github.com/MeetSable/Game-of-Life-with-SFML",
    description: [
      "Developed Conway’s Game of Life cellular automata in C++ using the SFML library.",
      "Created a UI to show performance information and a shape selector window.",
    ],
  },
  {
    title: "Parallelization of Huffman & Adaptive Huffman Encoding",
    tech: ["C++", "OpenMP", "GCC"],
    repo: "https://github.com/MeetSable/Huffman_and_Adaptive_Huffman_Parallel_Implementation",
    description: [
      "Implemented Huffman and Adaptive Huffman encoding modules in C++.",
      "Designed and parallelized algorithms using OpenMP, testing across multiple thread counts to study trade-offs between time savings and compression ratio.",
    ],
  },
  {
    title: "Diffie-Hellman Key Exchange and AES",
    tech: ["C++", "Makefile", "OpenSSL"],
    repo: "https://github.com/MeetSable/diffie-hellman-keyexchange-and-AES",
    description: [
      "Implemented Diffie-Hellman key exchange and AES encryption workflow in C++ using OpenSSL.",
      "Explored best practices and industry standards for secure system implementation.",
    ],
  },
  {
    title: "Stock Price Prediction with Machine Learning",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    link: "https://colab.research.google.com/github/MeetSable/Stock-Price-Prediction", // if hosted in Colab
    description: [
      "Explored stock price prediction with statistical models (Prophet, ARIMA) and ML models (Neural Networks, RNNs, LSTMs).",
      "Compared performance using MSE, MAE, R² score, and residual plots.",
    ],
  },
];

export default projects;