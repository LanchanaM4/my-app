import { useRef, useState } from "react";

export default function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [captured, setCaptured] = useState(null);

  // Start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch {
      alert("Camera permission denied ❌");
    }
  };

  // Capture Photo
  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    setCaptured(canvas.toDataURL("image/png"));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-[#dfe9f3] to-white p-6">
      <h1 className="text-3xl font-semibold">Camera Capture 📷</h1>

      <video ref={videoRef} className="rounded-xl shadow-lg w-[400px]"></video>
      <canvas ref={canvasRef} className="hidden"></canvas>

      <div className="flex gap-4">
        <button onClick={startCamera} className="px-4 py-2 bg-green-600 text-white rounded-lg">
          Start Camera
        </button>
        <button onClick={capturePhoto} className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
          Capture
        </button>
      </div>

      {captured && (
        <div className="mt-4 text-center">
          <h2 className="text-xl font-medium">Captured Image ✅</h2>
          <img src={captured} alt="Captured" className="rounded-xl shadow-xl mt-2 w-[300px]" />
        </div>
      )}
    </div>
  );
}
