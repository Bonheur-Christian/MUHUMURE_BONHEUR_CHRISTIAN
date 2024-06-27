import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function updateContact() {
  const { id } = useParams();
  const [contact, setContact] = useState({
    streetNumber: "",
    additionalInfo: "",
    zipCode: "",
    place: "",
    country: "",
    code: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setContact((Prev) => {
      return { ...Prev, [name]: value };
    });
  };
  useEffect(() => {
    fetch("http://localhost:5500/getContact/" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No response");
        }
        return response.json();
      })
      .then((data) => {
        setContact(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5500/updateContact/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((response) => {
        console.log("successfully sent data", response);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        class="space-y-6 px-16 py-6 bg-[#ba03fc] text-white w-1/3 mx-auto my-32 rounded-xl"
      >
        <legend class="text-2xl ">Contacts Details</legend>
        <div>
          <label for="" class="block px-2 font-bold">
            Street * Nr
          </label>
          <input
            value={contact.streetNumber}
            onChange={handleChange2}
            type="text"
            name="streetNumber"
            class=" border-b border-white outline-none focus:outline-none ps-4 w-[100%] rounded bg-[#ba03fc]"
          />
        </div>
        <div>
          <label for="" class="block px-2 font-bold">
            Additional Information
          </label>
          <input
            value={contact.additionalInfo}
            onChange={handleChange2}
            type="text"
            name="additionalInfo"
            class=" border-b border-white outline-none focus:outline-none ps-4 w-[100%] rounded bg-[#ba03fc]"
          />
        </div>
        <div class="flex gap-3">
          <div>
            <label for="" class="block px-2 font-bold">
              Zip Code
            </label>
            <input
              value={contact.zipCode}
              onChange={handleChange2}
              type="text"
              name="zipCode"
              class="  border-b w-[50%] border-white outline-none focus:outline-none ps-4 rounded bg-[#ba03fc]"
            />
          </div>
          <div>
            <label for="" class="block font-bold">
              Place
            </label>
            <select
              value={contact.place}
              onChange={handleChange2}
              name="place"
              id=""
              class="  outline-none border-b border-white w-[100%] px-12 rounded bg-[#ba03fc]"
            >
              <option value=""></option>
              <option value="Mukmira">Mukamira</option>
              <option value="Musanze">Musanze</option>
            </select>
          </div>
        </div>
        <div>
          <label for="" class="block px-2 font-bold">
            Country
          </label>
          <select
            value={contact.country}
            onChange={handleChange2}
            name="country"
            id=""
            class="  outline-none border-b border-white w-[100%] rounded bg-[#ba03fc]"
          >
            <option value=""></option>
            <option value="Rwanda">Rwanda</option>
            <option value="Uganda">Uganda</option>
          </select>
        </div>
        <div class="flex gap-3">
          <div>
            <label for="" class="block px-2 font-bold">
              Code+
            </label>
            <input
              value={contact.code}
              onChange={handleChange2}
              type="text"
              name="code"
              class="  border-b w-[50%] border-white outline-none focus:outline-none ps-4 rounded bg-[#ba03fc]"
            />
          </div>
          <div>
            <label for="" class="block font-bold">
              Phone Number
            </label>
            <input
              value={contact.phoneNumber}
              onChange={handleChange2}
              type="tel"
              name="phoneNumber"
              class="  border-b w-[100%] border-white outline-none focus:outline-none ps-4 rounded bg-[#ba03fc]"
            />
          </div>
        </div>
        <div>
          <label for="" class="block font-bold">
            Email
          </label>
          <input
            value={contact.email}
            onChange={handleChange2}
            type="email"
            name="email"
            class="  border-b w-[100%] border-white outline-none focus:outline-none ps-4 rounded bg-[#ba03fc]"
          />
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <label for="" class="">
            I do accept <a href="#">The terms and conditions</a> of your site
          </label>
        </div>
        <button class="bg-white mx-auto rounded-xl text-black px-4 py-2 shadow hover:bg-purple-400 hover:text-white">
          Register Badge
        </button>
      </form>
    </div>  
  );
}

export default updateContact;
