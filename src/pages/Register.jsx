import React, { useState } from "react";
import Gallery from "../img/image.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen">
      <div className="bg-white pb-5 pt-5 pr-10 pl-10 rounded-lg flex flex-col gap-2 items-center">
        <span className=" text-[#e4317b] font-bold text-2xl">Vibe On</span>
        <span className="text-[#b32c64] text-sm">Register</span>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-72">
          <input
            type="text"
            placeholder="display name"
            className="p-3 border-b text-sm border-[#afafaf] placeholder:text-[#afafaf] focus:border-[#e4317b] focus:outline-[#e4317b] focus:ring-[#e4317b]"
          />
          <input
            type="email"
            placeholder="email"
            className="p-3 border-b text-sm border-[#afafaf] placeholder:text-[#afafaf] focus:border-[#e4317b] focus:outline-[#e4317b] focus:ring-[#e4317b]"
          />
          <input
            type="password"
            placeholder="password"
            className="p-3 border-b text-sm border-[#afafaf] placeholder:text-[#afafaf] focus:border-[#e4317b] focus:outline-[#e4317b] focus:ring-[#e4317b]"
          />
          <input type="file" id="file" className=" hidden" />
          <label
            htmlFor="file"
            className=" items-center flex gap-2 text-[#e4317b] text-sm cursor-pointer"
          >
            <img src={Gallery} className="h-6 w-6" alt="gallery" />
            <span className="text-[#b32c64] text-sm">Add an avatar</span>
          </label>
          <button className="bg-[#e4317b] rounded-md  text-white p-2 font-bold cursor-pointer">
            Sign Up
          </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p className="text-[#b32c64] text-sm mt-2">
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
