"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Contoh request ke API login (ganti dengan API-mu sendiri)
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/"); // redirect ke halaman utama
    } else {
      setError("Email atau password salah");
    }
  };

  const handleGoogleLogin = () => {
    alert("Login dengan Google (belum terhubung ke backend)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 cursor-pointer"
          >
            Login
          </button>
        </form>
        <div className="text-center my-4">atau</div>
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
          >
            <path
              fill="#4285F4"
              d="M24 9.5c3.5 0 6.6 1.3 9 3.5l6.7-6.7C35.2 2.4 29.9 0 24 0 14.6 0 6.7 5.9 2.7 14.3l7.9 6.2C12.2 13.6 17.6 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.5c-.5 2.7-1.9 5-4 6.6l6.2 4.8c3.6-3.3 5.7-8.2 5.7-15z"
            />
            <path
              fill="#FBBC05"
              d="M10.6 28.5c-1.3-3.7-1.3-7.7 0-11.4l-7.9-6.2c-3.6 7.2-3.6 15.7 0 22.9l7.9-6.2z"
            />
            <path
              fill="#EA4335"
              d="M24 48c6.5 0 12-2.1 16-5.7l-6.2-4.8c-2.5 1.7-5.6 2.7-9.8 2.7-6.4 0-11.8-4.1-13.8-9.6l-7.9 6.2C6.7 42.1 14.6 48 24 48z"
            />
            <path fill="none" d="M0 0h48v48H0z" />
          </svg>
          <span>Login dengan Google</span>
        </button>
        <div className="text-center my-4">Baru mulai disini? <Link href="/registrasi" className="hover:underline text-blue-700">Daftar</Link></div>
      </div>
    </div>
  );
}
