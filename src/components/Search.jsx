import React, { useContext, useState } from "react";
import { collection, query, where, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.ui
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDocs(db, "chats", combinedId);
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chat
        userChats: {
          janesId: {
          }
        }
      }
    } catch (err) {}

    //create user chats
  };
  return (
    <div className=" border-b border-gray-400">
      <div className="p-3">
        <input
          className=" placeholder:text-[#cbcbcb] border-0 bg-transparent outline-none text-white"
          type="text"
          placeholder="Find a user"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div
          className="p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-[#e4317b]"
          onClick={handleSelect}
        >
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={user.photoURL}
            alt=""
          />
          <div>
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
